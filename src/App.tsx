import Desktop from './components/desktop/Desktop';
import Monitor from './components/monitor/Monitor';
import { WindowContextProvider } from './providers/windowContextProvider';

function App() {
  return (
    <div className="App">
      <WindowContextProvider>
        <Monitor>
          <Desktop />
        </Monitor>
      </WindowContextProvider>
    </div>
  );
}

export default App;
