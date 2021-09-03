import './App.css';
import { Greet } from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import ReactCreateMethod from './components/ReactCreateMethod';

function App() {
  return (
    <div className="App">
      
        <Greet/>
        <Welcome />
        <Hello />
        <ReactCreateMethod />
    </div>
  );
}

export default App;
