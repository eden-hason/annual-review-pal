import logo from './logo.svg';
import './App.css';
import Wizard from './components/Wizard';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          {/* <p>🚀 Annual Review Pal</p> */}
          <Wizard />
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
