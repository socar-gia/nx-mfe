//@ts-expect-error
import RemoteButton from 'products/RemoteButton';

export function App() {
  return (
    <div>
      <p>Hi I'm the host.</p>
      <RemoteButton />
    </div>
  );
}

export default App;
