import Header from './header';
import ListaCursos from './listaCursos';
import VerticalToggleButtons from './toggleButton';
import Nav from './nav';
import GetCursos from './getCurso';

function Home() {

    return (
      <div className="CadastrarCurso">
            <Header></Header>
            <ListaCursos></ListaCursos>
            <Nav></Nav>

            <center><VerticalToggleButtons></VerticalToggleButtons></center>

            <GetCursos/>       
  
      </div>
  
    );
  }
  
  export default Home;
  

