/** 所有弹层类型 */
export type ModalType =
  | 'login'
  | 'moreDrawer'
  | 'cashMenu'
  | 'accountMenu'
  | 'gameIntro'
  | 'insufficientBalance'
  | 'reportPayment'
  | 'sellConfirm'
  | 'languageSelect';

/** 弹层展示方式 */
export type ModalDisplay = 'modal' | 'drawer';

/** 弹层大小 */
export type ModalSize = 'sm' | 'md' | 'lg';

/** 弹层配置 */
export interface ModalConfig {
  type: ModalType;
  display: ModalDisplay;
  title: string;
  size?: ModalSize;
}

/** 弹层注册表：每种弹层的配置 */
export const MODAL_REGISTRY: Record<ModalType, ModalConfig> = {
  login: { type: 'login', display: 'modal', title: '登录 / 注册', size: 'sm' },
  moreDrawer: { type: 'moreDrawer', display: 'drawer', title: '更多' },
  cashMenu: { type: 'cashMenu', display: 'drawer', title: '现金管理' },
  accountMenu: { type: 'accountMenu', display: 'drawer', title: '账户' },
  gameIntro: { type: 'gameIntro', display: 'modal', title: '玩法介绍', size: 'md' },
  insufficientBalance: { type: 'insufficientBalance', display: 'modal', title: '余额不足', size: 'sm' },
  reportPayment: { type: 'reportPayment', display: 'modal', title: '报告支付', size: 'md' },
  sellConfirm: { type: 'sellConfirm', display: 'modal', title: '确认卖出', size: 'sm' },
  languageSelect: { type: 'languageSelect', display: 'drawer', title: '选择语言' },
};

/** 弹层上下文类型 */
export interface ModalContextType {
  activeModal: ModalType | null;
  modalProps: Record<string, unknown>;
  openModal: (type: ModalType, props?: Record<string, unknown>) => void;
  closeModal: () => void;
}
