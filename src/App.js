import './App.css';
import ForceComp from './components/forceUpdateComp';
import Incrementer from './components/incrementer';
import Timer from './components/timer';

function App() {
  return (
    <div className="App">
      <Timer />
      <ForceComp/>
      <Incrementer/>
    </div>
  );
}

export default App;
