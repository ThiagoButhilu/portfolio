
import Main from './components/Main/main'
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import { Intro } from './components/Intro/Intro';
import { Project } from './components/Project/project'


import './style/core.scss';

function App() {
  return (
    <>
      <Header></Header>
      <Intro></Intro>
      <Main></Main>
      <Project></Project>
      <Footer></Footer>
    </>
  );
}

export default App;
