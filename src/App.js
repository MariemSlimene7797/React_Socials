import logo from './logo.svg';
import './App.css';
import Facebook from './components/Facebook';
import * as ReactDOM from 'react-dom/client';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          You need to authenticate with Facebook to connect.
        </p>
       
       <Facebook/>
      </header>
    </div>
  );
}

export default App;
