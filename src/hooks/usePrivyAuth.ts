import { usePrivy, useLogin, useLogout, useWallets } from '@privy-io/react-auth';
import { useCallback } from 'react';

/**
 * Privy 认证 Hook
 * 封装了登录/登出/用户状态等常用认证操作
 */
export function usePrivyAuth() {
  const { ready, authenticated, user } = usePrivy();
  const { login } = useLogin();
  const { logout } = useLogout();

  const handleLogin = useCallback(() => {
    login();
  }, [login]);

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  return {
    /** Privy SDK 是否准备就绪 */
    ready,
    /** 用户是否已认证 */
    authenticated,
    /** 当前用户信息 */
    user,
    /** 登录操作 */
    login: handleLogin,
    /** 登出操作 */
    logout: handleLogout,
  };
}

/**
 * 获取用户钱包地址列表
 */
export function useUserWallets() {
  const { wallets, ready } = useWallets();

  return {
    ready,
    wallets,
    /** 获取第一个以太坊钱包地址 */
    primaryWalletAddress: wallets?.find((w) => w.type === 'ethereum')?.address,
  };
}
