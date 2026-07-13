import { ActionButton } from '../../common/ModalUI';

/**
 * 余额不足引导弹层内容
 */
export function InsufficientBalanceContent() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', textAlign: 'center' }}>
      <div style={{ fontSize: '3rem', lineHeight: 1 }}>⚠️</div>

      <div>
        <p style={{ margin: '0 0 0.5rem', fontSize: '1rem', fontWeight: 600, color: '#f3f4f6' }}>
          余额不足
        </p>
        <p style={{ margin: 0, fontSize: '0.8125rem', color: '#9ca3af', lineHeight: 1.5 }}>
          当前账户余额不足以完成此操作。<br />
          请充值后再试。
        </p>
      </div>

      <div
        style={{
          background: 'rgba(99, 102, 241, 0.08)',
          borderRadius: '0.75rem',
          padding: '0.75rem 1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '0.8125rem', color: '#9ca3af' }}>当前余额</span>
        <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#f3f4f6' }}>0.00 USDT</span>
      </div>

      <div style={{ display: 'flex', gap: '0.75rem' }}>
        <ActionButton variant="primary">
          <span>去充值</span>
        </ActionButton>
        <ActionButton variant="secondary">
          稍后再说
        </ActionButton>
      </div>
    </div>
  );
}
