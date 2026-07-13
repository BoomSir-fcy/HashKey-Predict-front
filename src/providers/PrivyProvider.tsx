import { type ReactNode } from "react";
import { PrivyProvider as PrivyProviderLib } from "@privy-io/react-auth";
import { WagmiProvider, createConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { http } from "viem";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// 创建 Wagmi 配置
const wagmiConfig = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

const queryClient = new QueryClient();

interface PrivyConfigProviderProps {
  children: ReactNode;
}

export function Providers({ children }: PrivyConfigProviderProps) {
  const privyAppId = import.meta.env.VITE_PRIVY_APP_ID;

  if (!privyAppId) {
    throw new Error(
      "缺少 VITE_PRIVY_APP_ID 环境变量。请复制 .env.example 为 .env 并填入你的 Privy App ID。",
    );
  }

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <PrivyProviderLib
          appId={privyAppId}
          config={{
            // 支持的登录方式
            loginMethods: ["email", "wallet", "google", "apple"],
            // 默认链为以太坊主网
            defaultChain: mainnet,
            // 支持嵌入钱包创建
            embeddedWallets: {
              ethereum: {
                createOnLogin: "users-without-wallets",
              },
            },
          }}>
          {children}
        </PrivyProviderLib>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
