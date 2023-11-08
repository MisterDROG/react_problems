import './App.css';
import ForceComp from './components/forceUpdateComp';
import HookBoleanComp from './components/hookBolean';
import Incrementer from './components/incrementer';
import Timer from './components/timer';
import Form from './components/formCorrect'
import {Person} from './components/formCorrect'
import DelayInput from './components/delayCall2'

function App() {
  console.log('app', Form)
  return (
    <div className="App">
      <p style={{fontWeight: 'bold', color: 'black', fontSize: '30px'}}>REACT TASKS</p>
      <Timer />
      <ForceComp/>
      <Incrementer/>
      <HookBoleanComp/>
      <Form Component = {Person}/>
      <DelayInput />
    </div>
  );
}

export default App; 
