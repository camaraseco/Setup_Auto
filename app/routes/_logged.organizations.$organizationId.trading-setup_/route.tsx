import {
  Typography,
  Form,
  InputNumber,
  Switch,
  Button,
  message,
  Card,
  Row,
  Col,
} from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function TradingSetupPage() {
  const { organizationId } = useParams()
  const { user } = useUserContext()
  const [form] = Form.useForm()
  const [isLoading, setIsLoading] = useState(false)

  // Fetch existing trading setup
  const { data: tradingSetup, refetch } = Api.tradingSetup.findFirst.useQuery({
    where: {
      userId: user?.id,
      organizationId: organizationId as string,
    },
  })

  // Create/Update mutation
  const { mutateAsync: upsertTradingSetup } =
    Api.tradingSetup.create.useMutation()

  const handleSubmit = async (values: any) => {
    try {
      setIsLoading(true)
      await upsertTradingSetup({
        data: {
          ...values,
          userId: user?.id as string,
          organizationId: organizationId as string,
          volumeThreshold: values.volumeThreshold.toString(),
          stopLoss: values.stopLoss.toString(),
          takeProfit: values.takeProfit.toString(),
          riskPercentage: values.riskPercentage.toString(),
        },
      })
      message.success('Trading setup saved successfully!')
      refetch()
    } catch (error) {
      message.error('Failed to save trading setup')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '20px' }}>
        <Title level={2}>
          <i className="las la-cog" style={{ marginRight: 8 }}></i>
          Trading Setup Configuration
        </Title>
        <Text type="secondary">
          Configure your automated trading parameters, risk management rules,
          and position sizing.
        </Text>

        <Card style={{ marginTop: 24 }}>
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            initialValues={{
              emaShort: tradingSetup?.emaShort || 9,
              emaLong: tradingSetup?.emaLong || 21,
              rsiPeriod: tradingSetup?.rsiPeriod || 14,
              volumeThreshold: tradingSetup?.volumeThreshold || '1000',
              stopLoss: tradingSetup?.stopLoss || '2',
              takeProfit: tradingSetup?.takeProfit || '6',
              riskPercentage: tradingSetup?.riskPercentage || '2',
              isActive: tradingSetup?.isActive || false,
            }}
          >
            <Row gutter={24}>
              <Col xs={24} md={8}>
                <Title level={4}>
                  <i
                    className="las la-chart-line"
                    style={{ marginRight: 8 }}
                  ></i>
                  Technical Indicators
                </Title>
                <Form.Item
                  label="EMA Short Period"
                  name="emaShort"
                  rules={[{ required: true }]}
                >
                  <InputNumber min={1} max={100} style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item
                  label="EMA Long Period"
                  name="emaLong"
                  rules={[{ required: true }]}
                >
                  <InputNumber min={1} max={200} style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item
                  label="RSI Period"
                  name="rsiPeriod"
                  rules={[{ required: true }]}
                >
                  <InputNumber min={1} max={50} style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item
                  label="Volume Threshold"
                  name="volumeThreshold"
                  rules={[{ required: true }]}
                >
                  <InputNumber min={0} style={{ width: '100%' }} />
                </Form.Item>
              </Col>

              <Col xs={24} md={8}>
                <Title level={4}>
                  <i
                    className="las la-shield-alt"
                    style={{ marginRight: 8 }}
                  ></i>
                  Risk Management
                </Title>
                <Form.Item
                  label="Stop Loss (%)"
                  name="stopLoss"
                  rules={[{ required: true }]}
                >
                  <InputNumber
                    min={0.1}
                    max={20}
                    step={0.1}
                    style={{ width: '100%' }}
                  />
                </Form.Item>
                <Form.Item
                  label="Take Profit (%)"
                  name="takeProfit"
                  rules={[{ required: true }]}
                >
                  <InputNumber
                    min={0.1}
                    max={50}
                    step={0.1}
                    style={{ width: '100%' }}
                  />
                </Form.Item>
                <Form.Item
                  label="Risk Per Trade (%)"
                  name="riskPercentage"
                  rules={[{ required: true }]}
                >
                  <InputNumber
                    min={0.1}
                    max={5}
                    step={0.1}
                    style={{ width: '100%' }}
                  />
                </Form.Item>
              </Col>

              <Col xs={24} md={8}>
                <Title level={4}>
                  <i
                    className="las la-power-off"
                    style={{ marginRight: 8 }}
                  ></i>
                  System Control
                </Title>
                <Form.Item
                  label="Activate Trading System"
                  name="isActive"
                  valuePropName="checked"
                >
                  <Switch />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item style={{ marginTop: 24 }}>
              <Button
                type="primary"
                htmlType="submit"
                loading={isLoading}
                icon={<i className="las la-save" />}
              >
                Save Configuration
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </PageLayout>
  )
}
