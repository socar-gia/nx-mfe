import useRemote from "../hooks/useRemote";
import styles from './app.module.css';
import type ProductsListType from 'products/ProductsList';

export function App() {
  const RemoteProductsRouter = useRemote<typeof ProductsListType>({ scope: 'products', module: ' ' });

  // Potential race condition with registerRemote call in "useRemote"
  // You must register the remote reliabily before this can be used without error.
  // useEffect(() => {
  //   async function doStuff() {
  //     const testHookModule = await loadRemote('products/useTest');
  //     console.log(testHookModule);
  //     //@ts-expect-error
  //     const testHook = testHookModule.default as typeof useTest;
  //     console.log('Test hook', testHook());
  //   }

  //   doStuff();
  // }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>마이크로 프론트엔드 데모 스토어</h1>
        <p className={styles.description}>
          마이크로 프론트엔드로 구동되는 데모 스토어에 오신 것을 환영합니다. 
          원격 애플리케이션에서 동적으로 로드되는 상품 목록을 둘러보세요.
        </p>
      </header>
      <main className={styles.content}>
        <div>
          <RemoteProductsRouter />
        </div>
      </main>
    </div>
  );
}

export default App;