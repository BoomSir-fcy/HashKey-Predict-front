import { usePrivyAuth } from '../../hooks/usePrivyAuth';
import { LoginButton } from '../../components/LoginButton/LoginButton';
import { UserProfile } from '../../components/UserProfile/UserProfile';
import { WalletInfo } from '../../components/WalletInfo/WalletInfo';
import { useModalManager } from '../../components/modals';
import type { ModalType } from '../../components/modals';
import styles from './Home.module.css';

/** 弹层演示按钮配置 */
const MODAL_BUTTONS: { type: ModalType; label: string; icon: string }[] = [
  { type: 'login', label: '登录 / 注册', icon: '🔑' },
  { type: 'moreDrawer', label: '更多抽屉', icon: '☰' },
  { type: 'cashMenu', label: '现金菜单', icon: '💰' },
  { type: 'accountMenu', label: '账户菜单', icon: '👤' },
  { type: 'gameIntro', label: '玩法介绍', icon: '🎮' },
  { type: 'insufficientBalance', label: '余额不足', icon: '⚠️' },
  { type: 'reportPayment', label: '报告支付', icon: '📋' },
  { type: 'sellConfirm', label: '卖出确认', icon: '📊' },
  { type: 'languageSelect', label: '语言选择', icon: '🌐' },
];

/**
 * 首页组件
 */
export function HomePage() {
  const { authenticated } = usePrivyAuth();
  const { openModal } = useModalManager();

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

        {/* 弹层演示区 */}
        <div className={styles.modalDemo}>
          <h3 className={styles.demoTitle}>全局弹层演示</h3>
          <div className={styles.buttonGrid}>
            {MODAL_BUTTONS.map((btn) => (
              <button
                key={btn.type}
                className={styles.demoBtn}
                onClick={() => openModal(btn.type)}
              >
                <span className={styles.demoBtnIcon}>{btn.icon}</span>
                <span className={styles.demoBtnLabel}>{btn.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        Powered by React · Privy · Tailwind CSS
      </footer>
    </div>
  );
}
