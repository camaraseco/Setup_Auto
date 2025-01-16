import { Api } from '@/core/trpc'
import { User } from '@prisma/client'
import { FormInstance, message } from 'antd'
import { useState } from 'react'

interface UseTestConnectionProps {
  form: FormInstance
  user: User | null
}

export const useTestConnection = ({ form, user }: UseTestConnectionProps) => {
  const [isTestingConnection, setIsTestingConnection] = useState(false)
  const { mutateAsync: nangoProxy } = Api.nango.proxy.useMutation()

  const testConnection = async () => {
    try {
      setIsTestingConnection(true)
      const values = await form.validateFields([
        'login',
        'password',
        'server',
        'broker',
        'serverType',
        'manualServer',
      ])

      const config = {
        method: 'POST',
        endpoint: '/api/metatrader/test-connection',
        providerConfigKey: 'metatrader',
        connectionId: user?.id,
        data: {
          ...values,
          server:
            values.broker === 'Other (Enter Manually)'
              ? values.manualServer
              : values.server,
        },
      }

      await nangoProxy(config)
      message.success(
        `Successfully connected to ${values.broker} ${values.serverType} server`,
      )
    } catch (error) {
      console.error('Connection test failed:', error)

      const errorCode = error?.code || error?.response?.data?.code
      switch (errorCode) {
        case 'AUTHENTICATION_FAILED':
          message.error('Invalid login credentials')
          break
        case 'PROVIDER_ERROR':
          message.error('Server is unreachable. Please check server address')
          break
        case 'INVALID_CONFIGURATION':
          message.error('Invalid server for selected broker')
          break
        default:
          message.error(error?.message || 'Connection test failed')
      }
    } finally {
      setIsTestingConnection(false)
    }
  }

  return {
    testConnection,
    isTestingConnection,
  }
}
