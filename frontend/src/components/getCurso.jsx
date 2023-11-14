import Curso from "./curso";
import ArrowTooltips from './delete';
import Horarios from './horarios';
import Dias from './dias';
import useData from "./getData";


function removerCaracteresEspeciais(str) {
  return str.replace(/[^\w\s]/gi, '').replace(/\s/g, '');
}

const GetCursos = () => {
    const cursos = useData('http://localhost:3010/cursos');



return (
    <>
      {cursos.map((curso, index) => (
        <div id={removerCaracteresEspeciais(curso.nome)+(curso.semestre)} className="container row alinhar">

        <div key={index} className="curso">
          <h2><Curso curso={curso.nome}></Curso></h2>
          <h2>Semestre {curso.semestre}</h2>
        </div>
        <ArrowTooltips></ArrowTooltips>
        <div class="table">

        <Dias></Dias>
            <div class="corpo row">
                <Horarios idc={curso.id}></Horarios>

            </div>
            <div class="horarios-mobile">
                    <Horarios idc={curso.id} hora="mobile"></Horarios>

            </div>


        </div>
    </div>


      ))}
    </>
  );
  
    
};


export default GetCursos;