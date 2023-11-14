import useData from "./getData";


function removerCaracteresEspeciais(str) {
    return str.replace(/[^\w\s]/gi, '').replace(/\s/g, '');
}

const ListaCursos = () => {

    const cursos = useData("http://localhost:3010/cursos");

        return(

            <div className="listaCursos">
                {cursos.map((curso) => (

                    <a href={"#"+removerCaracteresEspeciais(curso.nome)+(curso.semestre)}>{curso.nome+" Semestre "+curso.semestre}</a>
                ))}

            </div>
        )


}

export default ListaCursos