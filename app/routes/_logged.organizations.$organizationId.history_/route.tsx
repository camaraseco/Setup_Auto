import {
  Typography,
  Card,
  Select,
  Row,
  Col,
  Statistic,
  Table,
  DatePicker,
} from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
const { RangePicker } = DatePicker
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function TradingHistoryPage() {
  const { organization } = useUserContext()
  const { organizationId } = useParams()
  const [dateRange, setDateRange] = useState<[dayjs.Dayjs, dayjs.Dayjs] | null>(
    null,
  )
  const [timeframe, setTimeframe] = useState<string>('all')

  // Fetch trades with organization relation
  const { data: trades } = Api.trade.findMany.useQuery({
    where: {
      organizationId,
      ...(dateRange && {
        createdAt: {
          gte: dateRange[0].toDate(),
          lte: dateRange[1].toDate(),
        },
      }),
    },
    orderBy: { createdAt: 'desc' },
  })

  // Calculate statistics
  const totalTrades = trades?.length || 0
  const winningTrades =
    trades?.filter(t => parseFloat(t.profit || '0') > 0).length || 0
  const losingTrades =
    trades?.filter(t => parseFloat(t.profit || '0') < 0).length || 0
  const totalProfit =
    trades?.reduce((acc, trade) => acc + parseFloat(trade.profit || '0'), 0) ||
    0
  const winRate = totalTrades
    ? ((winningTrades / totalTrades) * 100).toFixed(2)
    : '0'

  const columns = [
    {
      title: 'Symbol',
      dataIndex: 'symbol',
      key: 'symbol',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (type: string) => (
        <Text style={{ color: type === 'BUY' ? '#52c41a' : '#f5222d' }}>
          {type === 'BUY' ? (
            <i className="las la-arrow-up" />
          ) : (
            <i className="las la-arrow-down" />
          )}{' '}
          {type}
        </Text>
      ),
    },
    {
      title: 'Entry Price',
      dataIndex: 'entryPrice',
      key: 'entryPrice',
    },
    {
      title: 'Exit Price',
      dataIndex: 'exitPrice',
      key: 'exitPrice',
    },
    {
      title: 'Profit/Loss',
      dataIndex: 'profit',
      key: 'profit',
      render: (profit: string) => (
        <Text
          style={{
            color: parseFloat(profit || '0') >= 0 ? '#52c41a' : '#f5222d',
          }}
        >
          {parseFloat(profit || '0').toFixed(2)}
        </Text>
      ),
    },
    {
      title: 'Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: Date) => dayjs(date).format('YYYY-MM-DD HH:mm'),
    },
  ]

  const handleTimeframeChange = (value: string) => {
    setTimeframe(value)
    const now = dayjs()
    switch (value) {
      case 'day':
        setDateRange([now.subtract(1, 'day'), now])
        break
      case 'week':
        setDateRange([now.subtract(1, 'week'), now])
        break
      case 'month':
        setDateRange([now.subtract(1, 'month'), now])
        break
      case 'year':
        setDateRange([now.subtract(1, 'year'), now])
        break
      default:
        setDateRange(null)
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ padding: '24px' }}>
        <Title level={2}>
          <i className="las la-chart-line" /> Trading History
        </Title>
        <Text type="secondary">
          View and analyze your complete trading history and performance metrics
        </Text>

        <Card style={{ marginTop: '24px' }}>
          <Row gutter={[16, 16]} align="middle">
            <Col xs={24} sm={12}>
              <Select
                style={{ width: 200 }}
                value={timeframe}
                onChange={handleTimeframeChange}
                options={[
                  { value: 'all', label: 'All Time' },
                  { value: 'day', label: 'Last 24 Hours' },
                  { value: 'week', label: 'Last Week' },
                  { value: 'month', label: 'Last Month' },
                  { value: 'year', label: 'Last Year' },
                ]}
              />
            </Col>
            <Col xs={24} sm={12}>
              <RangePicker
                value={dateRange}
                onChange={dates =>
                  setDateRange(dates as [dayjs.Dayjs, dayjs.Dayjs])
                }
                style={{ width: '100%' }}
              />
            </Col>
          </Row>
        </Card>

        <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic
                title="Total Trades"
                value={totalTrades}
                prefix={<i className="las la-exchange-alt" />}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic
                title="Win Rate"
                value={winRate}
                suffix="%"
                prefix={<i className="las la-percentage" />}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic
                title="Total Profit/Loss"
                value={totalProfit.toFixed(2)}
                prefix={<i className="las la-dollar-sign" />}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic
                title="Win/Loss Ratio"
                value={`${winningTrades}/${losingTrades}`}
                prefix={<i className="las la-balance-scale" />}
              />
            </Card>
          </Col>
        </Row>

        <Card style={{ marginTop: '24px' }}>
          <Table
            columns={columns}
            dataSource={trades}
            rowKey="id"
            pagination={{ pageSize: 10 }}
            scroll={{ x: true }}
          />
        </Card>
      </div>
    </PageLayout>
  )
}
