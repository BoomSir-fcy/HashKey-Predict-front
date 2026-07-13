import { useModalManager } from '../ModalProvider';
import { MenuItem } from '../../common/ModalUI';

/**
 * 更多抽屉内容
 */
export function MoreDrawerContent() {
  const { openModal } = useModalManager();

  return (
    <div>
      <MenuItem
        label="🎮  玩法介绍"
        suffix=">"
        onClick={() => openModal('gameIntro')}
      />
      <MenuItem
        label="🌐  语言选择"
        suffix="简体中文 >"
        onClick={() => openModal('languageSelect')}
      />
      <MenuItem label="📖  帮助中心" suffix=">" />
      <MenuItem label="ℹ️  关于我们" suffix="v1.0.0" />
    </div>
  );
}
