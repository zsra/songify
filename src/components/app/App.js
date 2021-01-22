import Menu from '../menu/Menu';
import Nav from '../nav/Nav';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="container">
        <Nav />
      </div>
    </div>
  );
}

export default App;
