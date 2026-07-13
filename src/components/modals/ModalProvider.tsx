import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from 'react';
import type { ModalType, ModalContextType } from './types';

const ModalContext = createContext<ModalContextType | null>(null);

/**
 * 全局弹层管理器 Provider
 *
 * 用法：
 * ```tsx
 * <ModalProvider>
 *   <App />
 * </ModalProvider>
 * ```
 *
 * 在任意组件中：
 * ```ts
 * const { openModal, closeModal } = useModalManager();
 * openModal('login');
 * openModal('sellConfirm', { amount: '0.5', symbol: 'ETH' });
 * closeModal();
 * ```
 */
export function ModalProvider({ children }: { children: ReactNode }) {
  const [activeModal, setActiveModal] = useState<ModalType | null>(null);
  const [modalProps, setModalProps] = useState<Record<string, unknown>>({});

  const openModal = useCallback(
    (type: ModalType, props: Record<string, unknown> = {}) => {
      setModalProps(props);
      setActiveModal(type);
    },
    []
  );

  const closeModal = useCallback(() => {
    setActiveModal(null);
    setModalProps({});
  }, []);

  return (
    <ModalContext.Provider value={{ activeModal, modalProps, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

/**
 * Hook：获取全局弹层管理器
 */
export function useModalManager(): ModalContextType {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error('useModalManager must be used within a ModalProvider');
  }
  return ctx;
}
