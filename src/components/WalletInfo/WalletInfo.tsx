import { useWallets } from '@privy-io/react-auth';
import styles from './WalletInfo.module.css';

/**
 * 钱包信息展示组件
 */
export function WalletInfo() {
  const { wallets, ready } = useWallets();

  if (!ready) {
    return (
      <div className={styles.card}>
        <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>加载钱包信息...</p>
      </div>
    );
  }

  if (wallets.length === 0) {
    return null;
  }

  const ethWallet = wallets.find((w) => w.type === 'ethereum');
  if (!ethWallet) return null;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.icon}>⛓️</div>
        <div>
          <h3 className={styles.title}>钱包信息</h3>
          <p className={styles.subtitle}>
            {wallets.length > 1
              ? `${wallets.length} 个钱包已连接`
              : '1 个钱包已连接'}
          </p>
        </div>
      </div>

      <div className={styles.networkBadge}>
        <span className={styles.dot} />
        {ethWallet.type === 'ethereum' ? 'Ethereum' : ethWallet.type}
      </div>

      <div className={styles.addressField}>
        <span className={styles.label}>地址</span>
        <span className={styles.address}>{ethWallet.address}</span>
      </div>

      {wallets.length > 1 && (
        <div className={styles.addressField}>
          <span className={styles.label}>其他钱包</span>
          <span className={styles.address}>
            {wallets
              .filter((w) => w.type !== 'ethereum')
              .map((w) => w.address)
              .join(', ')}
          </span>
        </div>
      )}
    </div>
  );
}
