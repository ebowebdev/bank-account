import './App.css';
import Activities from './components/Activities';
import AddSpend from './components/AddSpend';
import Header from './components/Header';
import Inputs from './components/Inputs';
import {ContextProvider} from './Context';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Header />
        <Activities />
        <AddSpend />
        <Inputs />
      </ContextProvider>
    </div>
  );
}

export default App;
