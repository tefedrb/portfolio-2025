import Home from './components/home/Home';
import { Provider } from './context';
import Monitor from './components/monitor/Monitor';
// import "98.css";

const App = () => {
  return (
    <Provider>
      <Monitor>
        <Home />
      </Monitor>
    </Provider>
  );
};

// hot(module)(App)
export default App;