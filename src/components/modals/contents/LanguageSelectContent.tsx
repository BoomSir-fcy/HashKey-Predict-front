import { useState } from 'react';

const LANGUAGES = [
  { code: 'zh-CN', label: '简体中文', nativeName: '简体中文' },
  { code: 'zh-TW', label: '繁体中文', nativeName: '繁體中文' },
  { code: 'en', label: 'English', nativeName: 'English' },
  { code: 'ja', label: '日语', nativeName: '日本語' },
  { code: 'ko', label: '韩语', nativeName: '한국어' },
  { code: 'es', label: '西班牙语', nativeName: 'Español' },
  { code: 'fr', label: '法语', nativeName: 'Français' },
  { code: 'de', label: '德语', nativeName: 'Deutsch' },
];

/**
 * 语言选择抽屉内容
 */
export function LanguageSelectContent() {
  const [selected, setSelected] = useState('zh-CN');

  return (
    <div>
      {LANGUAGES.map((lang) => {
        const isActive = selected === lang.code;
        return (
          <button
            key={lang.code}
            onClick={() => setSelected(lang.code)}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.875rem 0',
              border: 'none',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              background: 'transparent',
              color: isActive ? '#f3f4f6' : '#9ca3af',
              fontSize: '0.9375rem',
              cursor: 'pointer',
              textAlign: 'left',
              fontWeight: isActive ? 600 : 400,
              transition: 'all 0.15s ease',
            }}
          >
            <span>
              <span style={{ marginRight: '0.5rem' }}>{lang.nativeName}</span>
              <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>{lang.label}</span>
            </span>
            {isActive && (
              <span style={{ color: '#6366f1', fontSize: '1rem' }}>✓</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
