import logo from '../src/cb2251db-559f-4336-96fc-237928bd6bc0.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span className="attribution">Designed by Freepik</span>
        <p>
          Who and What are the targets? Why?
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next Page
        </a>
      </header>
    </div>
  );
}

export default App;
