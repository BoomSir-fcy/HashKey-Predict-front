import { usePrivyAuth } from '../../../hooks/usePrivyAuth';
import { useModalManager } from '../ModalProvider';
import { MenuItem, ActionButton } from '../../common/ModalUI';

/**
 * 账户菜单抽屉内容
 */
export function AccountMenuContent() {
  const { authenticated, user, logout } = usePrivyAuth();
  const { closeModal } = useModalManager();

  const handleLogout = () => {
    logout();
    closeModal();
  };

  if (!authenticated) {
    return (
      <div style={{ textAlign: 'center', padding: '1rem 0' }}>
        <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '1rem' }}>
          请先登录以查看账户信息
        </p>
        <ActionButton variant="primary" onClick={closeModal}>
          登录 / 注册
        </ActionButton>
      </div>
    );
  }

  return (
    <div>
      {/* 用户信息头 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '0.5rem 0 1rem',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          marginBottom: '0.5rem',
        }}
      >
        <div
          style={{
            width: '2.75rem',
            height: '2.75rem',
            borderRadius: '9999px',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 700,
            fontSize: '1.125rem',
          }}
        >
          {user?.id?.charAt(0).toUpperCase() || 'U'}
        </div>
        <div>
          <p style={{ margin: 0, fontSize: '0.9375rem', fontWeight: 600, color: '#f3f4f6' }}>
            {user?.id?.slice(0, 10)}...
          </p>
          <p style={{ margin: '0.125rem 0 0', fontSize: '0.75rem', color: '#6b7280' }}>
            Privy 账户
          </p>
        </div>
      </div>

      <MenuItem label="👤  个人资料" suffix=">" />
      <MenuItem label="⚙️  设置" suffix=">" />
      <MenuItem label="🔔  消息通知" suffix=">" />

      <div style={{ marginTop: '0.75rem' }}>
        <ActionButton variant="danger" onClick={handleLogout}>
          退出登录
        </ActionButton>
      </div>
    </div>
  );
}
