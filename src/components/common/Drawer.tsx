import { type ReactNode, useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import styles from './Drawer.module.css';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

/**
 * 通用 Drawer 组件 — 底部抽屉
 *
 * 特性：
 * - React Portal 渲染到 body
 * - 从底部滑入（slide up）
 * - 点击遮罩 / Escape 关闭
 * - 顶部拖拽手柄指示器
 */
export function Drawer({
  isOpen,
  onClose,
  title,
  children,
}: DrawerProps) {
  const [closing, setClosing] = useState(false);

  const handleClose = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      onClose();
    }, 200);
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, handleClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen && !closing) return null;

  return createPortal(
    <div
      className={`${styles.overlay} ${closing ? styles.overlayClosing : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        className={`${styles.drawer} ${closing ? styles.drawerClosing : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        {/* 拖拽手柄 */}
        <div className={styles.handle}>
          <div className={styles.handleBar} />
        </div>

        {/* Header */}
        {title && (
          <div className={styles.header}>
            <h2 className={styles.title}>{title}</h2>
            <button className={styles.closeBtn} onClick={handleClose} aria-label="关闭">
              ✕
            </button>
          </div>
        )}

        {/* Body */}
        <div className={styles.body}>{children}</div>
      </div>
    </div>,
    document.body
  );
}
