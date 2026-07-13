import { ActionButton } from '../../common/ModalUI';

/**
 * 现金菜单抽屉内容
 */
export function CashMenuContent() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* 余额展示 */}
      <div
        style={{
          background: 'rgba(99, 102, 241, 0.1)',
          border: '1px solid rgba(99, 102, 241, 0.2)',
          borderRadius: '1rem',
          padding: '1.25rem',
          textAlign: 'center',
        }}
      >
        <p style={{ margin: '0 0 0.25rem', fontSize: '0.75rem', color: '#6b7280' }}>
          可用余额
        </p>
        <p style={{ margin: 0, fontSize: '2rem', fontWeight: 700, color: '#f3f4f6' }}>
          0.00 <span style={{ fontSize: '1rem', color: '#9ca3af' }}>USDT</span>
        </p>
      </div>

      {/* 操作按钮 */}
      <div style={{ display: 'flex', gap: '0.75rem' }}>
        <ActionButton variant="primary">
          <span style={{ fontSize: '1rem' }}>⬇</span> 充值
        </ActionButton>
        <ActionButton variant="secondary">
          <span style={{ fontSize: '1rem' }}>⬆</span> 提现
        </ActionButton>
      </div>

      <ActionButton variant="ghost" style={{ fontSize: '0.8125rem' }}>
        交易记录
      </ActionButton>
    </div>
  );
}
