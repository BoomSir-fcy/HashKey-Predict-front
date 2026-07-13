import { usePrivyAuth } from '../../hooks/usePrivyAuth';
import styles from './UserProfile.module.css';

/**
 * 用户信息展示组件
 */
export function UserProfile() {
  const { authenticated, user } = usePrivyAuth();

  if (!authenticated || !user) {
    return null;
  }

  const email = user.linkedAccounts?.find((a) => a.type === 'email');
  const wallet = user.linkedAccounts?.find(
    (a) => a.type === 'wallet'
  );

  const displayName =
    email?.address?.split('@')[0] ??
    wallet?.address?.slice(0, 6) ??
    'User';

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          {displayName.charAt(0).toUpperCase()}
        </div>
        <div>
          <h3 className={styles.title}>个人资料</h3>
          <p className={styles.subtitle}>已通过 Privy 认证</p>
        </div>
      </div>

      {email && (
        <div className={styles.field}>
          <span className={styles.label}>邮箱</span>
          <span className={styles.value}>{email.address}</span>
        </div>
      )}

      {wallet && (
        <div className={styles.field}>
          <span className={styles.label}>钱包地址</span>
          <span className={styles.value}>
            {wallet.address?.slice(0, 6)}...{wallet.address?.slice(-4)}
          </span>
        </div>
      )}

      <div className={styles.field}>
        <span className={styles.label}>用户 ID</span>
        <span className={styles.value}>
          {user.id?.slice(0, 12)}...
        </span>
      </div>
    </div>
  );
}
