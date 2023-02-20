import { darkTheme, RainbowKitProvider, Theme } from '@rainbow-me/rainbowkit'
import { useTheme } from 'styled-components/macro'
import { Chain } from 'wagmi'

import Disclaimer from './Disclaimer'

export default function Provider({ chains, children }: { chains: Chain[]; children: React.ReactNode }) {
  const theme = useTheme()
  const uniswapTheme: Theme = {
    ...darkTheme(),
    colors: {
      ...darkTheme().colors,
      modalBackground: theme.backgroundSurface,
    },
  }
  return (
    <RainbowKitProvider
      appInfo={{
        disclaimer: Disclaimer,
      }}
      modalSize="compact"
      chains={chains}
      theme={uniswapTheme}
    >
      {children}
    </RainbowKitProvider>
  )
}
