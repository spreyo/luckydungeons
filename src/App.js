import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      {/* <div className="hero min-h-screen" style={{ backgroundImage: 'url(/images/screenshot.png)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-5 text-7xl font-bold">Lucky Dungeons</h1>
            <p className="mb-5 text-3xl">Where fortune favors the brave!</p>
            <button className="btn btn-primary">more</button>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
