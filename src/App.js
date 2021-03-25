import logo from './logo.svg';
import './App.css';
import routes from './Routes'
import Header from './Components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

export default App;
