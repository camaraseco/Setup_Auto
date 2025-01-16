import { useUserContext } from '@/core/context'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { useParams } from '@remix-run/react'
import {
  Button,
  Space,
  Table,
  Tag,
  Typography,
  message,
} from 'antd'
import { useState } from 'react'
import { ConnectionForm } from './components/ConnectionForm'
const { Title, Text } = Typography
export default function BrokerConnectionPage() {
  const { organizationId } = useParams()
  const { user } = useUserContext()
  const [editingId, setEditingId] = useState<string | null>(null)

  // Fetch broker connections
  const { data: connections, refetch } = Api.brokerConnection.findMany.useQuery(
    {
      where: {
        organizationId: organizationId as string,
        userId: user?.id,
      },
    },
  )

  const { mutateAsync: deleteConnection } = Api.brokerConnection.delete.useMutation()

  const handleDelete = async (id: string) => {
    try {
      await deleteConnection({ where: { id } })
      message.success('Broker connection deleted successfully')
      refetch()
    } catch (error) {
      message.error('An error occurred')
    }
  }

  const handleEdit = (record: any) => {
    setEditingId(record.id)
  }

  const columns = [
    {
      title: 'Login',
      dataIndex: 'login',
      key: 'login',
    },
    {
      title: 'Server',
      dataIndex: 'server',
      key: 'server',
    },
    {
      title: 'Default Lot Size',
      dataIndex: 'defaultLotSize',
      key: 'defaultLotSize',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={status === 'ACTIVE' ? 'success' : 'warning'}>{status}</Tag>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: any) => (
        <Space>
          <Button type="link" onClick={() => handleEdit(record)}>
            <i className="las la-edit"></i> {'Edit'}
          </Button>
          <Button type="link" danger onClick={() => handleDelete(record.id)}>
            <i className="las la-trash"></i> Delete
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>
          <i className="las la-link"></i> MetaTrader Connection Settings
        </Title>
        <Text>
          Connect your MetaTrader account to enable automated trading. You can
          find your login credentials in your MetaTrader platform under File{' '}
          {'>'} Open Account.
        </Text>

        <div style={{ marginTop: 32 }}>
          <ConnectionForm
            editingId={editingId}
            onSuccess={() => {
              setEditingId(null)
              refetch()
            }}
            onCancel={() => setEditingId(null)}
            initialValues={editingId ? connections?.find(c => c.id === editingId) : undefined}
          />
        </div>

        <div style={{ marginTop: 32 }}>
          <Title level={3}>Active Connections</Title>
          <Table
            columns={columns}
            dataSource={connections}
            rowKey="id"
            pagination={false}
          />
        </div>
      </div>
    </PageLayout>
  )
}
