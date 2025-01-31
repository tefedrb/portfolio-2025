import Home from './components/home/Home';
import { ProviderValue } from './provider';
import Monitor from './components/monitor/Monitor';
import { Context, ContextState } from './context';
// import "98.css";

const App = () => {
  const value = ProviderValue();
  console.log('value', value);
  return (
    <Context.Provider value={value as ContextState}>
      <Monitor>
        <Home />
      </Monitor>
    </Context.Provider>
  );
};

// hot(module)(App)
export default App;