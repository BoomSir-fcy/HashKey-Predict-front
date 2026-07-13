import { type ReactNode } from 'react';
import { useModalManager } from './ModalProvider';
import { MODAL_REGISTRY, type ModalType } from './types';
import { Modal } from '../common/Modal';
import { Drawer } from '../common/Drawer';

// 导入所有内容组件
import { LoginContent } from './contents/LoginContent';
import { MoreDrawerContent } from './contents/MoreDrawerContent';
import { CashMenuContent } from './contents/CashMenuContent';
import { AccountMenuContent } from './contents/AccountMenuContent';
import { GameIntroContent } from './contents/GameIntroContent';
import { InsufficientBalanceContent } from './contents/InsufficientBalanceContent';
import { ReportPaymentContent } from './contents/ReportPaymentContent';
import { SellConfirmContent } from './contents/SellConfirmContent';
import { LanguageSelectContent } from './contents/LanguageSelectContent';

/** 内容组件映射表 */
const CONTENT_MAP: Record<ModalType, (props: Record<string, unknown>) => ReactNode> = {
  login: () => <LoginContent />,
  moreDrawer: () => <MoreDrawerContent />,
  cashMenu: () => <CashMenuContent />,
  accountMenu: () => <AccountMenuContent />,
  gameIntro: () => <GameIntroContent />,
  insufficientBalance: () => <InsufficientBalanceContent />,
  reportPayment: () => <ReportPaymentContent />,
  sellConfirm: (props) => (
    <SellConfirmContent
      amount={(props.amount as string) ?? '0.00'}
      symbol={(props.symbol as string) ?? 'ETH'}
      price={(props.price as string) ?? '0.00'}
      total={(props.total as string) ?? '0.00'}
    />
  ),
  languageSelect: () => <LanguageSelectContent />,
};

/**
 * ModalRenderer — 根据当前激活的弹层类型渲染对应的内容
 *
 * 自动根据 MODAL_REGISTRY 中的 display 配置选择 Modal 或 Drawer 包裹
 */
export function ModalRenderer() {
  const { activeModal, modalProps, closeModal } = useModalManager();

  if (!activeModal) return null;

  const config = MODAL_REGISTRY[activeModal];
  const ContentComponent = CONTENT_MAP[activeModal];

  const commonProps = {
    isOpen: true,
    onClose: closeModal,
    title: config.title,
    children: ContentComponent(modalProps),
  };

  if (config.display === 'drawer') {
    return <Drawer {...commonProps} />;
  }

  return <Modal {...commonProps} size={config.size ?? 'md'} />;
}
