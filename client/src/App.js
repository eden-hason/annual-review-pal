import logo from './logo.svg';
import './App.css';
import Wizard from './components/Wizard';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './themes/stepper';

function App() {
  return (
    <ChakraProvider theme={theme}>
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
