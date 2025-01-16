import { useUserContext } from '@/core/context'
import { Api } from '@/core/trpc'
import { InfoCircleOutlined } from '@ant-design/icons'
import { Prisma } from '@prisma/client'
import { useParams } from '@remix-run/react'
import {
  Alert,
  Button,
  Form,
  Input,
  InputNumber,
  message,
  Select,
  Tooltip,
} from 'antd'
import { useEffect, useState } from 'react'
const { Option } = Select

const BROKERS = [
  {
    name: 'ActivTrades',
    servers: { demo: 'activtrades-demo', real: 'activtrades-live' },
  },
  {
    name: 'Admiral Markets',
    servers: { demo: 'admiralmarkets-demo', real: 'admiralmarkets-live' },
  },
  {
    name: 'AvaTrade',
    servers: { demo: 'avatrade-demo', real: 'avatrade-live' },
  },
  {
    name: 'CMC Markets',
    servers: { demo: 'cmcmarkets-demo', real: 'cmcmarkets-live' },
  },
  {
    name: 'Eightcap',
    servers: { demo: 'eightcap-demo', real: 'eightcap-live' },
  },
  {
    name: 'FotMarkets',
    servers: { demo: 'fotmarkets-demo', real: 'fotmarkets-live' },
  },
  { name: 'IG', servers: { demo: 'ig-demo', real: 'ig-live' } },
  {
    name: 'OnEquity',
    servers: { demo: 'onequity-demo', real: 'onequity-live' },
  },
  {
    name: 'RoboForex',
    servers: { demo: 'roboforex-demo', real: 'roboforex-live' },
  },
  { name: 'XTB', servers: { demo: 'xtb-demo', real: 'xtb-live' } },
  { name: 'Other (Enter Manually)', servers: { demo: '', real: '' } },
].sort((a, b) => a.name.localeCompare(b.name))

interface FormValues {
  broker: string
  serverType: string
  login: string
  password: string
  server: string
  defaultLotSize: string
}
interface ConnectionFormProps {
  editingId: string | null
  onSuccess: () => void
  onCancel: () => void
  initialValues?: Partial<FormValues>
}

export const ConnectionForm = ({
  editingId,
  onSuccess,
  onCancel,
  initialValues,
}: ConnectionFormProps) => {
  const { user } = useUserContext()
  const [form] = Form.useForm()
  const [isTestingConnection, setIsTestingConnection] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    const broker = BROKERS.find(b => b.name === form.getFieldValue('broker'))
    const serverType = form.getFieldValue('serverType')
    if (broker?.servers && serverType && broker.servers[serverType]) {
      form.setFieldValue('server', broker.servers[serverType])
    }
  }, [form.getFieldValue('broker'), form.getFieldValue('serverType')])

  const { mutateAsync: createConnection } =
    Api.brokerConnection.create.useMutation()
  const { mutateAsync: updateConnection } =
    Api.brokerConnection.update.useMutation()
  const { mutateAsync: nangoProxy } = Api.nango.proxy.useMutation()

  const handleSubmit = async (values: FormValues) => {
    const { organizationId } = useParams()
    try {
      setIsSaving(true)
      const config = {
        method: 'POST',
        endpoint: 'https://seumiddleware.com/connect',
        providerConfigKey: 'metatrader',
        connectionId: user?.id,
        data: values,
      }

      const response = await nangoProxy(config)

      if (!response.ok) {
        const errorData = await response.json()
        console.error('Connection failed:', errorData)

        switch (errorData.code) {
          case 'AUTHENTICATION_FAILED':
            throw new Error('Invalid login credentials')
          case 'PROVIDER_ERROR':
            throw new Error('Server is unreachable. Please check server address')
          case 'INVALID_CONFIGURATION':
            throw new Error('Invalid server configuration')
          default:
            throw new Error(errorData.message || 'Connection failed')
        }
      }

      if (editingId) {
        await updateConnection({
          where: { id: editingId },
          data: {
            defaultLotSize: String(values.defaultLotSize),
            status: 'ACTIVE',
            exchangeName: 'MT5',
          } as Prisma.BrokerConnectionUpdateInput,
        })
        message.success('Broker connection updated successfully')
      } else {
        await createConnection({
          data: {
            defaultLotSize: String(values.defaultLotSize),
            status: 'ACTIVE',
            exchangeName: 'MT5',
            login: String(values.login),
            password: String(values.password),
            server: String(values.server),
            organizationId: organizationId,
          } as Prisma.BrokerConnectionCreateInput,
        })
        message.success('Broker connection created successfully')
      }
      form.resetFields()
      onSuccess()
    } catch (error: any) {
      console.error('Full error details:', error)
      message.error(error.message || 'Failed to save connection')
    } finally {
      setIsSaving(false)
    }
  }

  const testConnection = async () => {
    try {
      setIsTestingConnection(true)
      const values = await form.validateFields([
        'login',
        'password',
        'server',
        'broker',
        'serverType',
      ])

      const config = {
        method: 'POST',
        endpoint: 'https://seumiddleware.com/connect/test',
        providerConfigKey: 'metatrader',
        connectionId: user?.id,
        data: values,
      }

      const response = await nangoProxy(config)

      if (!response.ok) {
        const errorData = await response.json()
        console.error('Connection test failed:', errorData)

        switch (errorData.code) {
          case 'AUTHENTICATION_FAILED':
            throw new Error('Invalid login credentials')
          case 'PROVIDER_ERROR':
            throw new Error(
              'Server is unreachable. Please check server address',
            )
          case 'INVALID_CONFIGURATION':
            throw new Error('Invalid server configuration')
          default:
            throw new Error(errorData.message || 'Connection test failed')
        }
      }

      message.success(
        `Successfully connected to ${values.broker} ${values.serverType} server`,
      )
    } catch (error: any) {
      console.error('Full error details:', error)
      message.error(error.message || 'Connection test failed')
    } finally {
      setIsTestingConnection(false)
    }
  }

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      initialValues={initialValues}
      style={{ maxWidth: 600 }}
    >
      <Alert
        message="How to find your credentials"
        description={
          <ul>
            <li>Open your MetaTrader platform</li>
            <li>Go to File {'>'} Open an Account</li>
            <li>Your login and server details will be displayed</li>
            <li>For demo accounts, use the demo server</li>
            <li>For real accounts, use the live server</li>
          </ul>
        }
        type="info"
        showIcon
        style={{ marginBottom: 24 }}
      />

      <Form.Item
        label={
          <span>
            Broker{' '}
            <Tooltip title="Select your broker from the list. If your broker is not listed, select 'Other (Enter Manually)' and provide your broker's server details.">
              <InfoCircleOutlined />
            </Tooltip>
          </span>
        }
        name="broker"
        rules={[{ required: true, message: 'Please select your broker' }]}
      >
        <Select placeholder="Select your broker">
          {BROKERS.map(broker => (
            <Option key={broker.name} value={broker.name}>
              {broker.name}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Server Type"
        name="serverType"
        rules={[{ required: true, message: 'Please select server type' }]}
      >
        <Select placeholder="Select server type">
          <Option value="demo">Demo Server</Option>
          <Option value="real">Real Server</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Login"
        name="login"
        rules={[{ required: true, message: 'Please enter your MT4/MT5 login' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          { required: true, message: 'Please enter your MT4/MT5 password' },
        ]}
      >
        <Input.Password />
      </Form.Item>

      {form.getFieldValue('broker') === 'Other (Enter Manually)' && (
        <>
          <Form.Item
            label="Manual Demo Server"
            name={['servers', 'demo']}
            rules={[
              {
                required: true,
                message: 'Please enter your demo server address',
              },
            ]}
          >
            <Input placeholder="Enter your demo server address" />
          </Form.Item>
          <Form.Item
            label="Manual Live Server"
            name={['servers', 'real']}
            rules={[
              {
                required: true,
                message: 'Please enter your live server address',
              },
            ]}
          >
            <Input placeholder="Enter your live server address" />
          </Form.Item>
        </>
      )}

      <Form.Item
        label="Server"
        name="server"
        rules={[
          {
            required: true,
            message: 'Please enter your broker server address',
          },
          () => ({
            validator(_, value) {
              const broker = BROKERS.find(
                b => b.name === form.getFieldValue('broker'),
              )
              const serverType = form.getFieldValue('serverType')
              if (broker?.name === 'Other (Enter Manually)') {
                return Promise.resolve()
              }
              if (
                broker?.servers &&
                serverType &&
                broker.servers[serverType] &&
                value !== broker.servers[serverType]
              ) {
                return Promise.reject(
                  new Error(`Server should be ${broker.servers[serverType]}`),
                )
              }
              return Promise.resolve()
            },
          }),
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Default Lot Size"
        name="defaultLotSize"
        rules={[{ required: true, message: 'Please enter default lot size' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button
          onClick={testConnection}
          loading={isTestingConnection}
          style={{ marginBottom: 16 }}
        >
          Test Connection
        </Button>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isSaving}>
          {editingId ? 'Update Connection' : 'Add Connection'}
        </Button>
        {editingId && (
          <Button style={{ marginLeft: 8 }} onClick={onCancel}>
            Cancel
          </Button>
        )}
      </Form.Item>
    </Form>
  )
}
