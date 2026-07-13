import { useState } from 'react';
import { ActionButton, InputField } from '../../common/ModalUI';

/**
 * 报告支付弹层内容
 */
export function ReportPaymentContent() {
  const [txHash, setTxHash] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <p style={{ margin: 0, fontSize: '0.8125rem', color: '#9ca3af', lineHeight: 1.5 }}>
        请填写以下信息以完成支付报告。我们将验证链上交易状态。
      </p>

      <InputField
        label="交易哈希 (Tx Hash)"
        placeholder="0x..."
        value={txHash}
        onChange={setTxHash}
      />

      <InputField
        label="金额"
        placeholder="0.00"
        value={amount}
        onChange={setAmount}
        type="number"
      />

      <InputField
        label="备注（可选）"
        placeholder="添加备注..."
        value={note}
        onChange={setNote}
      />

      <div style={{ marginTop: '0.5rem' }}>
        <ActionButton variant="primary" disabled={!txHash || !amount}>
          提交报告
        </ActionButton>
      </div>
    </div>
  );
}
