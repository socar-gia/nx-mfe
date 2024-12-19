import useRemote from "../hooks/useRemote";
//@ts-expect-error
import type ProductsListType from 'products/ProductsList';

export function App() {
  const RemoteProductsList = useRemote<typeof ProductsListType>({ scope: 'products', module: 'ProductsList' });

  return (
    <div>
      <p>Hi I'm the host.</p>
      <RemoteProductsList />
    </div>
  );
}

export default App;
