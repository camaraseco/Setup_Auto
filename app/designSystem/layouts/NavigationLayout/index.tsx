import { Link, useLocation, useNavigate, useParams } from '@remix-run/react'
import { Flex } from 'antd'
import { ReactNode } from 'react'
import { Leftbar } from './components/Leftbar'
import { Mobilebar } from './components/Mobilebar'
import { Topbar } from './components/Topbar'
import { NavigationItem } from './types'

import { useUserContext } from '~/core/context'

interface Props {
  children: ReactNode
}

export const NavigationLayout: React.FC<Props> = ({ children }) => {
  const router = useNavigate()
  const pathname = useLocation().pathname
  const params: Record<string, string> = useParams()

  const { organization } = useUserContext()

  const goTo = (url: string) => {
    router(url)
  }

  const items: NavigationItem[] = [
    {
      key: '/home',
      label: 'Home Page',
      position: 'leftbar',

      onClick: () => goTo('/home'),
    },

    {
      key: '/organizations/:organizationId/trading-setup',
      label: 'Trading Setup',
      position: 'leftbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/trading-setup'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/history',
      label: 'Trading History',
      position: 'leftbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/history'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/broker-setup',
      label: 'Broker Connection',
      position: 'leftbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/broker-setup'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },

    {
      key: '/organizations/:organizationId/notifications',
      label: 'Email Notifications',
      position: 'leftbar',

      isVisible: !!organization,
      onClick: () =>
        goTo(
          '/organizations/:organizationId/notifications'.replace(
            ':organizationId',
            organization.id,
          ),
        ),
    },
  ]

  const itemsVisible = items
    .filter(item => item.isVisible !== false)
    .map(item => ({
      key: item.key,
      label: item.label,
      icon: item.icon,
      position: item.position,
      onClick: item.onClick,
    }))

  const itemsTopbar = itemsVisible.filter(item => item.position === 'topbar')

  const itemsLeftbar = itemsVisible.filter(item => item.position === 'leftbar')

  const itemsLeftbottom = itemsVisible.filter(
    item => item.position === 'leftbar-bottom',
  )

  const itemsMobile = itemsVisible

  let keySelected = pathname

  Object.entries(params).forEach(([key, value]) => {
    keySelected = keySelected.replace(`/${value}`, `/:${key}`)
  })

  return (
    <>
      <Topbar keySelected={keySelected} items={itemsTopbar} />

      <Mobilebar keySelected={keySelected} items={itemsMobile} />

      <Flex flex={1} style={{ overflowY: 'hidden' }}>
        <Leftbar
          keySelected={keySelected}
          items={itemsLeftbar}
          itemsBottom={itemsLeftbottom}
        />

        <Flex flex={1} vertical style={{ overflowY: 'hidden' }}>
          {children}
        </Flex>
      </Flex>
    </>
  )
}
