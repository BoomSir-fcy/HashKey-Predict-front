import { usePrivyAuth } from '../../hooks/usePrivyAuth';
import { LoginButton } from '../../components/LoginButton/LoginButton';
import { UserProfile } from '../../components/UserProfile/UserProfile';
import { WalletInfo } from '../../components/WalletInfo/WalletInfo';
import styles from './Home.module.css';

/**
 * 首页组件
 */
export function HomePage() {
  const { authenticated } = usePrivyAuth();

  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <LoginButton />
      </nav>

      <section className={styles.hero}>
        <h1 className={styles.title}>Web3 DApp</h1>
        <p className={styles.description}>
          基于 React + Privy + Vite 构建的 Web3 去中心化应用。
          使用 Privy 实现无缝的 Web3 钱包连接和身份认证。
        </p>
      </section>

      <section className={styles.content}>
        {!authenticated ? (
          <>
            <p style={{ color: '#6b7280', textAlign: 'center', fontSize: '0.875rem' }}>
              点击右上角按钮连接你的钱包或登录账号
            </p>
            <div className={styles.cta}>
              <LoginButton />
            </div>
          </>
        ) : (
          <>
            <UserProfile />
            <WalletInfo />
          </>
        )}
      </section>

      <footer className={styles.footer}>
        Powered by React · Privy · Tailwind CSS
      </footer>
    </div>
  );
}
