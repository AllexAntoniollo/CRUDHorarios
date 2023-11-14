import Header from './header';
import {useState } from 'react';
import axios from 'axios';
import Nav from './nav';
import useData from './getData';



function adicionarUmaHora(horaString) {
  const [hora, minuto] = horaString.split(':').map(Number);

  const data = new Date();
  data.setHours(hora);
  data.setMinutes(minuto);

  data.setHours(data.getHours() + 1);

  const novaHora = `${data.getHours()}:${String(data.getMinutes()).padStart(2, '0')}`;

  return novaHora;
}

function isValidHorario(horario) {
  const regex = /^(0?[1-9]|1[0-2]):[0-5][0-9]$/;
  return regex.test(horario);
}

async function verificarHorarioExistente(dia, cursoId, horarioInicio, horarioFim) {
  try {
    const response = await axios.get(process.env.REACT_APP_BACKEND+"verificarHorario", {
      params: {
        dia: dia,
        cursoId: cursoId,
        horarioInicio: horarioInicio,
        horarioFim: horarioFim
      }
    });
    
      if (response.data === "disponivel") {
        console.log(response.data+"Response");
        return true
      }
  } catch (error) {
      console.log(error);
      return false;
  }
}


function CadastrarHorario() {

  const cursos = useData('http://localhost:3010/cursos');
  const [dia, setDia] = useState("");
  const [materia, setMateria] = useState("");
  const [cursoId, setCursoId] = useState("");
  const [horarioInicio, setHorarioInicio] = useState("");


  const [messageText, setMessageText] = useState("");

  function clearForm() {
    setDia("");
    setMateria("");
    setCursoId("");
    setHorarioInicio("");
}

  async function handleSubmit(e) {
    e.preventDefault();

    if (horarioInicio !== ""  && materia !== "" && cursoId > 0 && dia > 0 && dia < 6) {
        try {
          await axios.post("http://localhost:3010/horarios", {
              dia: dia,
              materia: materia,
              cursoId: Number(cursoId),
              horarioInicio: horarioInicio,
              horarioFim: adicionarUmaHora(horarioInicio)
          });
          setMessageText("Horario cadastrado com sucesso!");
          clearForm();

      } catch (error) {
          console.log(error);
          setMessageText("Falha no cadastro do horario!");
      }
 
    } else {
      console.log(horarioInicio,adicionarUmaHora(horarioInicio),materia,cursoId,dia,isValidHorario(horarioInicio));
      setMessageText("Dados dos horarios inválidos!");
    }
}
    return (
      <>
          <Header></Header>
          <Nav></Nav>
          <div className="container row alinhar">
          <div className="curso">
          <h2>Cadastrar Horario</h2>
        </div>

          {messageText !== "" ? <div className='message'>{messageText}</div> : <></>}
          
          <form onSubmit={handleSubmit}>
            <div className="container">
            <p>
              Horário Inicio

              </p>
              <input
                placeholder='7:30'
                required
                type="text"
                onChange={(e) => {
                    setHorarioInicio(e.target.value);
                }}
                value={horarioInicio}
              />
                          <p>
              Horário Fim

              </p>
              <input
                readOnly
                value={adicionarUmaHora(horarioInicio)} 
              />


              <p>
              Matéria
              </p>
              <input
              placeholder='Matéria a Adicionar...'
                required
                type="text"
                onChange={(e) => {
                    setMateria(e.target.value);
                }}
                value={materia}
              />
              <p>
              Curso
              </p>
              <select onChange={(e) => {
                    setCursoId(e.target.value);
                }}>
                <option value="" disabled selected>Selecione um curso</option>
                {cursos.map((curso) => (
              <option key={curso.id} value={curso.id}>
                {curso.nome+" Semestre: "+curso.semestre}
              </option>
            ))}              
            </select>

              <p>
              Dia
              </p>
              <select required onChange={(e) => {
                    setDia(e.target.value);
                }}>
                <option value="" disabled selected>Selecione um dia</option>

                <option value={1}>Segunda</option>
                <option value={2}>Terça</option>
                <option value={3}>Quarta</option>
                <option value={4}>Quinta</option>
                <option value={5}>Sexta</option>
              </select>
              <br></br>
              <input className='submit'
              type="submit" value="Cadastrar" />
              </div>
          </form>
          </div>
      </>


  
    );
  }
  
  export default CadastrarHorario;
  