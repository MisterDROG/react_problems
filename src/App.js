import './App.css';
import ForceComp from './components/forceUpdateComp';
import HookBoleanComp from './components/hookBolean';
import Incrementer from './components/incrementer';
import Timer from './components/timer';

function App() {
  return (
    <div className="App">
      <p style={{fontWeight: 'bold', color: 'black', fontSize: '30px'}}>REACT TASKS</p>
      <Timer />
      <ForceComp/>
      <Incrementer/>
      <HookBoleanComp/>
    </div>
  );
}

export default App;
