import { Providers } from './providers/PrivyProvider';
import { ModalProvider, ModalRenderer } from './components/modals';
import { HomePage } from './pages/Home/Home';
import styles from './App.module.css';

function App() {
  return (
    <Providers>
      <ModalProvider>
        <div className={styles.app}>
          <HomePage />
        </div>
        {/* 全局弹层渲染器 — 放在最后，确保 z-index 层级最高 */}
        <ModalRenderer />
      </ModalProvider>
    </Providers>
  );
}

export default App;
