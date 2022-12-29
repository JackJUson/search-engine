import './App.css';
import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './components/Search';

function App() {
  return (
    // BEM
    <Router>

      <Routes>
        <Route path='/search' element={<Search />}></Route>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
