import Navbar from './components/Nav';
import LandingPage from './components/LandingPage';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'



function App() {
  return (
    <Router>
      <Navbar />
      <LandingPage />
    </Router>
  );
}

export default App;
