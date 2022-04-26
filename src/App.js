import Navbar from './components/Nav';
import LandingPage from './components/LandingPage';
import styled from 'styled-components'
import OurWork from './components/OurWork';



const Container = styled.div`
    height: 100vh;
    overflow: hidden;
    position: relative;
`

const IntoShape = styled.div`
  clip-path: polygon(60% 0, 100% 0, 100% 100%, 60% 100%, 47% 50%);
  background-color: #0094C6;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left:0;
  z-index: -1;
`

const OurWorkShape = styled.div`
  clip-path: polygon(0 0, 11% 0, 48% 100%, 0% 100%);;
  background-color: #0094C6;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left:0;
  z-index: -1;
`

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <LandingPage />
        <IntoShape />
      </Container>
      <Container>
        <OurWork />
        <OurWorkShape />
      </Container>
    </>
  );
}

export default App;
