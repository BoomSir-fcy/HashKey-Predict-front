import { ActionButton } from '../../common/ModalUI';

interface LoginContentProps {
  onClose?: () => void;
}

/**
 * 登录 / 注册弹层内容
 */
export function LoginContent({ onClose }: LoginContentProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <p style={{ margin: 0, fontSize: '0.875rem', color: '#9ca3af', lineHeight: 1.5 }}>
        连接你的钱包或使用邮箱登录，开始使用 DApp
      </p>

      <ActionButton variant="primary" onClick={onClose}>
        <span>连接钱包</span>
      </ActionButton>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
        <span style={{ fontSize: '0.75rem', color: '#6b7280', whiteSpace: 'nowrap' }}>或者</span>
        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
      </div>

      <ActionButton variant="secondary">
        <span style={{ fontSize: '1rem' }}>📧</span> 使用邮箱登录
      </ActionButton>

      <div style={{ display: 'flex', gap: '0.75rem' }}>
        <ActionButton variant="secondary" fullWidth={false} style={{ flex: 1 }}>
          <span style={{ fontSize: '1rem' }}>G</span> Google
        </ActionButton>
        <ActionButton variant="secondary" fullWidth={false} style={{ flex: 1 }}>
          <span style={{ fontSize: '1rem' }}>🍎</span> Apple
        </ActionButton>
      </div>
    </div>
  );
}
