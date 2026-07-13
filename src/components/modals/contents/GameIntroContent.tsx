/**
 * 玩法介绍弹层内容
 */
export function GameIntroContent() {
  const sections = [
    {
      title: '🎯 如何开始',
      content: '连接你的钱包或使用邮箱注册账户，即可开始体验去中心化应用的所有功能。',
    },
    {
      title: '💼 资产管理',
      content: '通过 Privy 嵌入式钱包安全地管理你的数字资产。支持充值和提现操作。',
    },
    {
      title: '🔒 安全保障',
      content: '所有交易均在区块链上执行，数据不可篡改。Privy 提供企业级安全防护。',
    },
    {
      title: '🌍 多链支持',
      content: '支持 Ethereum 主网和 Sepolia 测试网，未来将扩展更多公链。',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <p style={{ margin: 0, fontSize: '0.875rem', color: '#9ca3af', lineHeight: 1.6 }}>
        欢迎使用 Web3 DApp！以下是平台的基本玩法说明：
      </p>
      {sections.map((s, i) => (
        <div key={i}>
          <h4 style={{ margin: '0 0 0.375rem', fontSize: '0.9375rem', fontWeight: 600, color: '#f3f4f6' }}>
            {s.title}
          </h4>
          <p style={{ margin: 0, fontSize: '0.8125rem', color: '#9ca3af', lineHeight: 1.6 }}>
            {s.content}
          </p>
        </div>
      ))}
    </div>
  );
}
