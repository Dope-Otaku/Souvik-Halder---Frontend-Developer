import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {
  return (
    <div>
      
      <main>
        <div className='navbar'>
          <Navbar />
        </div>
        <div id='home'>
          <Home />
        </div>

        <div id='search'>
          <Search />
        </div>
      </main>
    </div>
  );
}

export default App;
