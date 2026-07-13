import { Providers } from './providers/PrivyProvider';
import { HomePage } from './pages/Home/Home';
import styles from './App.module.css';

function App() {
  return (
    <Providers>
      <div className={styles.app}>
        <HomePage />
      </div>
    </Providers>
  );
}

export default App;
