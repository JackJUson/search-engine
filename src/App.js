import './App.css';
import Home from './pages/Home';

function App() {
  return (
    // BEM
    <div className="App">
      <h1>Search Engine 🔎</h1>

      {/* Home page (Search bar) */}
      <Home></Home>

      {/* Results page */}
    </div>
  );
}

export default App;
