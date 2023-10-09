import Navbar from './components/navbar';
import Game from './components/game';
import LandingPageMobile from './components/mobile';

function App() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    return (
      <div>
        <LandingPageMobile />
      </div>
    );
  }

  return(
    <div style={{backgroundColor: 'black', width:'100vw', height:'100vh'}}>
      <Navbar />
      <Game />
    </div>

  );
}

export default App;
