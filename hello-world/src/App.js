import './App.css';
import { Greet } from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import ReactCreateMethod from './components/ReactCreateMethod';
import Message from './components/Message';
import Counter from './components/Counter';
import BasicTable from './components/T';
import Destructuring from './components/Destructuring';
import DestClass from './components/DestClass';
import Functionclick from './components/Functionclick';

function App() {
  return (
    <div className="App"> 
      
        <Functionclick />
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
        {/* <Counter />
        <Destructuring name="Manav" heroName="superMan" nickName="HeroLamba" />
        <DestClass name="Manav" heroName="superMan" nickName="Hero" /> */}


    </div>
  );
}

export default App;
