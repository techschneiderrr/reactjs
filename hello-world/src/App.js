import './App.css';
import { Greet } from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import ReactCreateMethod from './components/ReactCreateMethod';
import Message from './components/Message';
import Counter from './components/Counter';
import BasicTable from './components/T';

function App() {
  return (
    <div className="App">
      
        {/* <Greet name="Manav" >
          <h4>
            This is a child prop for manav
          </h4>
        </Greet>
        <Greet name="Veer" >
          <button>
            Click me
          </button>
        </Greet>
        <Greet name="Divya" ></Greet>
        <Welcome name="Manav">
          <h4>
            This is a child prop for manav
          </h4>
        </Welcome>
        <Welcome name="Veer">
          <button>
            Click me
          </button>
        </Welcome>
        <Welcome name="Divya"/>
        <Hello />
        <ReactCreateMethod /> */}
        {/* <Message /> */}
        <Counter />
        <BasicTable />
    </div>
  );
}

export default App;
