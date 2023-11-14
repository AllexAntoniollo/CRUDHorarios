import Header from './header';
import {useState } from 'react';
import axios from 'axios';
import Nav from './nav';


function CadastrarCurso() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [semestre, setSemestre] = useState("");
  const [messageText, setMessageText] = useState("");

  function clearForm() {
    setNome("");
    setDescricao("");
    setSemestre("");
}


  async function handleSubmit(e) {
    e.preventDefault();

    if (nome !== "" && descricao !== "" && semestre > 0) {
        try {
            await axios.post("http://localhost:3010/cursos", {
                nome: nome,
                descricao: descricao,
                semestre: Number(semestre)
            });
            setMessageText("Curso cadastrado com sucesso!");
            clearForm();

        } catch (error) {
            console.log(error);
            setMessageText("Falha no cadastro do curso!");
        } 
    } else {
        setMessageText("Dados do curso inválidos!");
    }
}
    return (
      <>
          <Header></Header>
          <Nav></Nav>
          <div className="container row alinhar">
          <div className="curso">
          <h2>Cadastrar Curso</h2>
        </div>

          {messageText !== "" ? <div className='message'>{messageText}</div> : <></>}
          
          <form onSubmit={handleSubmit}>
            <div className="container">
            <p>
              Nome

              </p>
              <input
              placeholder='Nome do curso...'
                required
                type="text"
                name="name"
                onChange={(e) => {
                    setNome(e.target.value);
                }}
                value={nome}
              />

              <p>
              Descrição

              </p>
              <input
                required
                placeholder='Descrição do curso...'
                type="text"
                name="descricao"
                onChange={(e) => {
                    setDescricao(e.target.value);
                }}
                value={descricao}
              />
              <p>
              Semestre
              </p>
              <input
                required
                placeholder='Semestre...'
                type="number"
                name="semestre"
                onChange={(e) => {
                    setSemestre(e.target.value);
                }}
                value={semestre}
              />
              <br></br>
              <input className='submit'
              type="submit" value="Cadastrar" />
              </div>
          </form>
          </div>
      </>


  
    );
  }
  
  export default CadastrarCurso;
  