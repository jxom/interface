import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import { coinbaseWallet, metaMaskWallet, walletConnectWallet } from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createClient } from 'wagmi';
import {
  mainnet,
  goerli,
  polygon,
  arbitrum,
  arbitrumGoerli,
  optimism,
  optimismGoerli,
  polygonMumbai,
  celo,
  celoAlfajores,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

export const { chains, provider } = configureChains(
  [mainnet, goerli, polygon, polygonMumbai, arbitrum, arbitrumGoerli, optimism, optimismGoerli, celo, celoAlfajores],
  [publicProvider()]
);

export const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet({ chains }),
      coinbaseWallet({ appName: 'Uniswap', chains }),
      walletConnectWallet({ chains }),
    ],
  },
]);

export const client = createClient({
  autoConnect: true,
  connectors,
  provider,
});
