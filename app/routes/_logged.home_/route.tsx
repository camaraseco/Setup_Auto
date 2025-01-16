import { Typography, Card, Row, Col, Progress, Button, Statistic } from 'antd'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const navigate = useNavigate()
  const { organization } = useUserContext()
  const { organizationId } = useParams()

  // Fetch trades data
  const { data: trades } = Api.trade.findMany.useQuery({
    where: {
      organizationId: organizationId,
      status: 'OPEN',
    },
  })

  // Calculate trading metrics
  const totalBalance =
    trades?.reduce(
      (acc, trade) => acc + (trade.profit ? parseFloat(trade.profit) : 0),
      0,
    ) || 0

  const openPositions = trades?.length || 0

  const dailyProfits =
    trades?.reduce(
      (acc, trade) =>
        acc +
        (trade.profit &&
        new Date(trade.createdAt).toDateString() === new Date().toDateString()
          ? parseFloat(trade.profit)
          : 0),
      0,
    ) || 0

  const dailyTargetProgress = Math.min((dailyProfits / 200) * 100, 100)

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>
          <i className="las la-chart-line" style={{ marginRight: 8 }}></i>
          Trading Dashboard
        </Title>
        <Text type="secondary">
          Monitor your trading performance and activities in real-time
        </Text>

        <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
          <Col xs={24} sm={12} lg={8}>
            <Card>
              <Statistic
                title={
                  <>
                    <i className="las la-wallet"></i> Account Balance
                  </>
                }
                value={totalBalance}
                precision={2}
                prefix="$"
                valueStyle={{
                  color: totalBalance >= 0 ? '#3f8600' : '#cf1322',
                }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Card>
              <Statistic
                title={
                  <>
                    <i className="las la-exchange-alt"></i> Open Positions
                  </>
                }
                value={openPositions}
                valueStyle={{ color: '#1890ff' }}
              />
            </Card>
          </Col>
          <Col xs={24} lg={8}>
            <Card>
              <Title level={5}>
                <i className="las la-bullseye"></i> Daily Profit Target ($200)
              </Title>
              <Progress
                percent={dailyTargetProgress}
                status={dailyTargetProgress >= 100 ? 'success' : 'active'}
                format={() => `$${dailyProfits.toFixed(2)}`}
              />
            </Card>
          </Col>
        </Row>

        <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
          <Col xs={24} sm={12}>
            <Button
              type="primary"
              size="large"
              block
              icon={<i className="las la-plus"></i>}
              onClick={() =>
                navigate(`/organizations/${organizationId}/trading-setup`)
              }
            >
              Start Trading
            </Button>
          </Col>
          <Col xs={24} sm={12}>
            <Button
              size="large"
              block
              icon={<i className="las la-history"></i>}
              onClick={() =>
                navigate(`/organizations/${organizationId}/history`)
              }
            >
              View History
            </Button>
          </Col>
        </Row>

        {trades && trades.length > 0 && (
          <Card style={{ marginTop: 24 }}>
            <Title level={4}>
              <i className="las la-list"></i> Active Trades
            </Title>
            {trades.map(trade => (
              <Card.Grid
                key={trade.id}
                style={{ width: '100%', padding: '12px' }}
              >
                <Row justify="space-between" align="middle">
                  <Col>
                    <Text strong>{trade.symbol}</Text>
                    <br />
                    <Text type="secondary">Entry: ${trade.entryPrice}</Text>
                  </Col>
                  <Col>
                    <Text type={trade.type === 'BUY' ? 'success' : 'danger'}>
                      {trade.type}
                    </Text>
                    <br />
                    <Text>Size: {trade.positionSize}</Text>
                  </Col>
                  <Col>
                    <Text>SL: ${trade.stopLoss}</Text>
                    <br />
                    <Text>TP: ${trade.takeProfit}</Text>
                  </Col>
                </Row>
              </Card.Grid>
            ))}
          </Card>
        )}
      </div>
    </PageLayout>
  )
}
