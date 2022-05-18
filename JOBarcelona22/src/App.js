import './App.css';
import Card from './components/Card/Card';
import { infoCards } from './utils/InfoCards'

function App() {
  return (
    <div className="App">
      <Card infoCards={infoCards} />
    </div>
  );
}

export default App;
