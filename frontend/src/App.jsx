
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CadastrarCurso from './components/cadastrarCurso';
import Home from './components/home';
import CadastrarHorario from './components/cadastrarHorario';


function App() {

  return (

        <Router>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/CadastrarCurso' element={<CadastrarCurso />} />
                <Route path='/CadastrarHorario' element={<CadastrarHorario />} />
            </Routes>
      </Router>

  );
}

export default App;
