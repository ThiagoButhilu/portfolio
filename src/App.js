
import Main from './components/Main/main'
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import { Intro } from './components/Intro/Intro';
import { Project } from './components/Project/project';

import Particles from './components/Particles';


import './style/core.scss';

function App() {
  return (
    <>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1
      }}>
        <Particles //Particles component
          particleColors={['#ffffff', '#ffffff']}
          particleCount={250}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <Header></Header>
      <div style={{ backdropFilter: 'blur(6px)' }}>
        <Intro></Intro>
        <Main></Main>
        <Project></Project>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
