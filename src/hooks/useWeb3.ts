import { usePrivy } from '@privy-io/react-auth';
import { useCallback } from 'react';
import { type Address } from 'viem';

/**
 * Web3 交互 Hook
 * 封装了签名、发送交易等常用链上操作
 */
export function useWeb3() {
  const { signMessage, signTypedData, sendTransaction, user } = usePrivy();

  /**
   * 签名消息
   */
  const handleSignMessage = useCallback(
    async (message: string) => {
      try {
        const signature = await signMessage({ message });
        return signature;
      } catch (error) {
        console.error('签名消息失败:', error);
        throw error;
      }
    },
    [signMessage]
  );

  /**
   * 发送交易
   */
  const handleSendTransaction = useCallback(
    async (to: Address, value: bigint, data?: `0x${string}`) => {
      try {
        const tx = await sendTransaction({
          to,
          value,
          data,
        });
        return tx;
      } catch (error) {
        console.error('发送交易失败:', error);
        throw error;
      }
    },
    [sendTransaction]
  );

  return {
    /** 签名消息 */
    signMessage: handleSignMessage,
    /** 签名结构化数据 (EIP-712) */
    signTypedData,
    /** 发送交易 */
    sendTransaction: handleSendTransaction,
    /** 当前用户 */
    user,
  };
}
