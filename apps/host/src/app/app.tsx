import useRemote from "../hooks/useRemote";
import styles from './app.module.css';
import type ProductsListType from 'products/ProductsList';

export function App() {
  const RemoteProductsList = useRemote<typeof ProductsListType>({ scope: 'products', module: 'ProductsList' });

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>MFE Demo Store</h1>
        <p className={styles.description}>
          Welcome to our demo store powered by Micro Frontends. Browse through our selection of products
          loaded dynamically from a remote application.
        </p>
      </header>
      <main className={styles.content}>
        <div>
          <RemoteProductsList />
        </div>
      </main>
    </div>
  );
}

export default App;