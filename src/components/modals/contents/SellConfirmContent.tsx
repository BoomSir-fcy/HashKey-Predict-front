import { ActionButton } from '../../common/ModalUI';

interface SellConfirmContentProps {
  amount?: string;
  symbol?: string;
  price?: string;
  total?: string;
  onConfirm?: () => void;
}

/**
 * 卖出确认弹层内容
 */
export function SellConfirmContent({
  amount = '0.00',
  symbol = 'ETH',
  price = '0.00',
  total = '0.00',
  onConfirm,
}: SellConfirmContentProps) {
  const details = [
    { label: '卖出数量', value: `${amount} ${symbol}` },
    { label: '单价', value: `${price} USDT` },
    { label: '预计获得', value: `${total} USDT` },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* 金额突出展示 */}
      <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
        <p style={{ margin: '0 0 0.25rem', fontSize: '0.75rem', color: '#6b7280' }}>
          你确认卖出
        </p>
        <p style={{ margin: 0, fontSize: '1.75rem', fontWeight: 700, color: '#f3f4f6' }}>
          {amount} <span style={{ fontSize: '1rem', color: '#9ca3af' }}>{symbol}</span>
        </p>
      </div>

      {/* 详情列表 */}
      <div
        style={{
          background: 'rgba(255,255,255,0.03)',
          borderRadius: '0.75rem',
          padding: '0.75rem 1rem',
        }}
      >
        {details.map((d, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0.5rem 0',
              borderBottom: i < details.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
            }}
          >
            <span style={{ fontSize: '0.8125rem', color: '#9ca3af' }}>{d.label}</span>
            <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#e5e7eb' }}>{d.value}</span>
          </div>
        ))}
      </div>

      <ActionButton variant="danger" onClick={onConfirm}>
        确认卖出
      </ActionButton>
    </div>
  );
}
