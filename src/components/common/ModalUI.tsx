/**
 * UI 工具组件 — 各弹层内容中复用
 */
import { type ReactNode, type ButtonHTMLAttributes } from 'react';

/* ---------- MenuItem：用于抽屉列表菜单 ---------- */
interface MenuItemProps {
  label: string;
  suffix?: ReactNode;
  onClick?: () => void;
}

export function MenuItem({ label, suffix, onClick }: MenuItemProps) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.875rem 0',
        border: 'none',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        background: 'transparent',
        color: '#e5e7eb',
        fontSize: '0.9375rem',
        cursor: onClick ? 'pointer' : 'default',
        textAlign: 'left',
        transition: 'color 0.15s ease',
      }}
      onMouseEnter={(e) => { if (onClick) e.currentTarget.style.color = '#f3f4f6'; }}
      onMouseLeave={(e) => { e.currentTarget.style.color = '#e5e7eb'; }}
    >
      <span>{label}</span>
      {suffix && (
        <span style={{ color: '#6b7280', fontSize: '0.8125rem', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
          {suffix}
        </span>
      )}
    </button>
  );
}

/* ---------- ActionButton：主要 / 次要操作按钮 ---------- */
interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  fullWidth?: boolean;
  children: ReactNode;
}

export function ActionButton({
  variant = 'primary',
  fullWidth = true,
  children,
  style,
  ...rest
}: ActionButtonProps) {
  const variantStyle: Record<string, React.CSSProperties> = {
    primary: {
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      color: 'white',
      border: '1px solid rgba(99, 102, 241, 0.3)',
    },
    secondary: {
      background: 'rgba(255,255,255,0.06)',
      color: '#e5e7eb',
      border: '1px solid rgba(255,255,255,0.1)',
    },
    danger: {
      background: 'rgba(239, 68, 68, 0.15)',
      color: '#ef4444',
      border: '1px solid rgba(239, 68, 68, 0.3)',
    },
    ghost: {
      background: 'transparent',
      color: '#9ca3af',
      border: 'none',
    },
  };

  return (
    <button
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        padding: '0.75rem 1.25rem',
        borderRadius: '0.75rem',
        fontSize: '0.875rem',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all 0.15s ease',
        whiteSpace: 'nowrap',
        ...(fullWidth ? { width: '100%' } : {}),
        ...variantStyle[variant],
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

/* ---------- InputField ---------- */
interface InputFieldProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (val: string) => void;
  type?: string;
}

export function InputField({ label, placeholder, value, onChange, type = 'text' }: InputFieldProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
      <label style={{ fontSize: '0.75rem', fontWeight: 500, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '0.75rem 1rem',
          borderRadius: '0.75rem',
          border: '1px solid rgba(255,255,255,0.1)',
          background: 'rgba(255,255,255,0.04)',
          color: '#f3f4f6',
          fontSize: '0.875rem',
          outline: 'none',
          boxSizing: 'border-box',
          transition: 'border-color 0.15s ease',
        }}
        onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.5)'; }}
        onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
      />
    </div>
  );
}
