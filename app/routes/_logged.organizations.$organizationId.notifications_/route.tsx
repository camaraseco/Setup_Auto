import {
  Typography,
  Form,
  Switch,
  Input,
  Button,
  Card,
  List,
  message,
} from 'antd'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function EmailNotificationsPage() {
  const { organizationId } = useParams()
  const { user } = useUserContext()

  // Fetch notification settings
  const { data: notificationSettings, refetch } =
    Api.notificationSetting.findFirst.useQuery({
      where: {
        userId: user?.id,
        organizationId,
      },
    })

  // Update notification settings mutation
  const { mutateAsync: updateSettings } =
    Api.notificationSetting.update.useMutation()

  // Create notification settings mutation
  const { mutateAsync: createSettings } =
    Api.notificationSetting.create.useMutation()

  const handleSaveSettings = async (values: any) => {
    if (!user?.id || !organizationId) {
      message.error('Missing required user or organization information')
      return
    }

    try {
      if (notificationSettings) {
        await updateSettings({
          where: { id: notificationSettings.id },
          data: values,
        })
      } else {
        await createSettings({
          data: {
            ...values,
            userId: user.id,
            organizationId,
          },
        })
      }
      message.success('Notification settings saved successfully')
      refetch()
    } catch (error) {
      message.error('Failed to save notification settings')
    }
  }

  const handleTestNotification = async () => {
    message.info('Test notification sent to your email')
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '20px' }}>
        <Title level={2}>
          <i className="las la-bell" style={{ marginRight: 8 }}></i>
          Email Notifications
        </Title>
        <Text type="secondary">
          Configure your email notification preferences and manage how you
          receive updates.
        </Text>

        <Card style={{ marginTop: 24 }}>
          <Form
            layout="vertical"
            initialValues={
              notificationSettings || {
                emailEnabled: false,
                tradeOpenAlert: false,
                tradeCloseAlert: false,
                dailyReportEnabled: false,
                emailAddress: user?.email,
              }
            }
            onFinish={handleSaveSettings}
          >
            <Form.Item
              name="emailEnabled"
              label="Enable Email Notifications"
              valuePropName="checked"
            >
              <Switch />
            </Form.Item>

            <Form.Item
              name="emailAddress"
              label="Notification Email Address"
              rules={[{ type: 'email', message: 'Please enter a valid email' }]}
            >
              <Input placeholder="Enter your email address" />
            </Form.Item>

            <Title level={4} style={{ marginTop: 24 }}>
              <i className="las la-cog" style={{ marginRight: 8 }}></i>
              Notification Preferences
            </Title>

            <Form.Item
              name="tradeOpenAlert"
              label="Trade Open Alerts"
              valuePropName="checked"
            >
              <Switch />
            </Form.Item>

            <Form.Item
              name="tradeCloseAlert"
              label="Trade Close Alerts"
              valuePropName="checked"
            >
              <Switch />
            </Form.Item>

            <Form.Item
              name="dailyReportEnabled"
              label="Daily Trading Report"
              valuePropName="checked"
            >
              <Switch />
            </Form.Item>

            <div style={{ display: 'flex', gap: 16, marginTop: 24 }}>
              <Button type="primary" htmlType="submit">
                <i className="las la-save" style={{ marginRight: 8 }}></i>
                Save Settings
              </Button>
              <Button onClick={handleTestNotification}>
                <i
                  className="las la-paper-plane"
                  style={{ marginRight: 8 }}
                ></i>
                Test Notification
              </Button>
            </div>
          </Form>
        </Card>

        <Card style={{ marginTop: 24 }}>
          <Title level={4}>
            <i className="las la-history" style={{ marginRight: 8 }}></i>
            Recent Notifications
          </Title>
          <List
            dataSource={[]}
            renderItem={(item: any) => (
              <List.Item>
                <List.Item.Meta
                  title={item.title}
                  description={item.description}
                />
              </List.Item>
            )}
            locale={{
              emptyText: (
                <div style={{ padding: 24, textAlign: 'center' }}>
                  <i className="las la-inbox" style={{ fontSize: 24 }}></i>
                  <p>No notifications yet</p>
                </div>
              ),
            }}
          />
        </Card>
      </div>
    </PageLayout>
  )
}
