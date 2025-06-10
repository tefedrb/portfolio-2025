// import Home from './components/home/Home';
import Desktop from './components/desktop/Desktop';
import Monitor from './components/monitor/Monitor';
import { WindowContextProvider } from './providers/windowContextProvider';
// import "98.css";

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

// hot(module)(App)
export default App;