import { usePrivyAuth } from '../../hooks/usePrivyAuth';
import styles from './LoginButton.module.css';

/**
 * 登录/登出按钮组件
 */
export function LoginButton() {
  const { ready, authenticated, login, logout } = usePrivyAuth();

  if (!ready) {
    return (
      <button className={`${styles.button} ${styles.loading}`} disabled>
        <span className="animate-spin inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
        加载中...
      </button>
    );
  }

  if (authenticated) {
    return (
      <button
        className={`${styles.button} ${styles.logout}`}
        onClick={logout}
      >
        登出
      </button>
    );
  }

  return (
    <button
      className={`${styles.button} ${styles.login}`}
      onClick={login}
    >
      连接钱包 / 登录
    </button>
  );
}
