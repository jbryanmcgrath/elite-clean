import Navbar from './components/Nav';
import LandingPage from './components/LandingPage';
import './App.css';
import styled from 'styled-components'



const Container = styled.div`
    height: 100vh;
    overflow: hidden;
`



function App() {
  return (
    <Container>
      <Navbar />
      <LandingPage />
    </Container>
  );
}

export default App;
