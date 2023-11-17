import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { KitProvider } from '@0xsequence/kit'
import { getDefaultConnectors } from '@0xsequence/kit-connectors'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { mainnet, polygon, base } from 'wagmi/chains'

function Dapp() {
  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [base],
    [publicProvider()],
  )

  const connectors = getDefaultConnectors({
    chains,
    walletConnectProjectId: '74e3aee8f9fd804cd5acbb0d276952ef',
    defaultChainId: 8453
  })

  
  const config = createConfig({
    autoConnect: true,
    publicClient,
    webSocketPublicClient,
    connectors
  })

  return (
    <WagmiConfig config={config}>
      <KitProvider>
        <App />
      </KitProvider>
    </WagmiConfig>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Dapp />
  </React.StrictMode>,
)
