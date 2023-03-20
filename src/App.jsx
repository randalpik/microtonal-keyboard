import './App.css';
import Keyboard from './Keyboard/Keyboard.jsx';

const App = () => (
  <div className="app">
    <header className="header">
      <p>
        Microtonal Keyboard
      </p>
      <Keyboard />
    </header>
  </div>
);

export default App;
