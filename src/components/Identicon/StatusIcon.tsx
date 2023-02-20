import { useWeb3React } from '@web3-react/core'
import useENSAvatar from 'hooks/useENSAvatar'
import styled from 'styled-components/macro'
import { flexColumnNoWrap } from 'theme/styles'
import { Connector } from 'wagmi'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

import CoinbaseWalletIcon from '../../assets/images/coinbaseWalletIcon.svg'
import WalletConnectIcon from '../../assets/images/walletConnectIcon.svg'
import sockImg from '../../assets/svg/socks.svg'
import { useHasSocks } from '../../hooks/useSocksBalance'
import Identicon from '../Identicon'

export const IconWrapper = styled.div<{ size?: number }>`
  position: relative;
  ${flexColumnNoWrap};
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  & > img,
  span {
    height: ${({ size }) => (size ? size + 'px' : '32px')};
    width: ${({ size }) => (size ? size + 'px' : '32px')};
  }
  ${({ theme }) => theme.deprecated_mediaWidth.deprecated_upToMedium`
    align-items: flex-end;
  `};
`

const SockContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  bottom: -4px;
  right: -4px;
`

const SockImg = styled.img`
  width: 16px;
  height: 16px;
`

const Socks = () => {
  return (
    <SockContainer>
      <SockImg src={sockImg} />
    </SockContainer>
  )
}

const useIcon = (connector?: Connector) => {
  const { account } = useWeb3React()
  const { avatar } = useENSAvatar(account ?? undefined)

  if (avatar || connector instanceof InjectedConnector) {
    return <Identicon />
  } else if (connector instanceof WalletConnectConnector) {
    return <img src={WalletConnectIcon} alt="WalletConnect" />
  } else if (connector instanceof CoinbaseWalletConnector) {
    return <img src={CoinbaseWalletIcon} alt="Coinbase Wallet" />
  }

  return undefined
}

export default function StatusIcon({ connector, size }: { connector?: Connector; size?: number }) {
  const hasSocks = useHasSocks()
  const icon = useIcon(connector)

  return (
    <IconWrapper size={size ?? 16}>
      {hasSocks && <Socks />}
      {icon}
    </IconWrapper>
  )
}
