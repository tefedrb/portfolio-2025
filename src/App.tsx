// import Home from './components/home/Home';
import { ProviderValue } from './provider';
import Monitor from './components/monitor/Monitor';
import { Context, ContextState } from './context';
import Desktop from './components/desktop/Desktop';
// import "98.css";

const App = () => {
  const value = ProviderValue();
  
  return (
    <div onClick={() => console.log('App clicked')} style={{ pointerEvents: 'auto' }}>
      <Context.Provider value={value as ContextState}>
        <Monitor>
          <Desktop />
        </Monitor>
      </Context.Provider>
    </div>
  );
};

// hot(module)(App)
export default App;