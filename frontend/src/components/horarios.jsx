import React, { useState, useEffect } from 'react';
import axios from "axios";


export default function Horarios(props) {
    const [horario, setHorario] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get('http://localhost:3010/horarios/' + props.idc);
                setHorario(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    // Função para agrupar as aulas pelo horário
    const agruparAulasPorHorario = () => {
        const aulasAgrupadas = {};

        horario.forEach((aula) => {
            const key = `${aula.horario_inicio}-${aula.horario_fim}`;

            if (!aulasAgrupadas[key]) {
                aulasAgrupadas[key] = [];
            }

            aulasAgrupadas[key].push(aula);
        });

        return aulasAgrupadas;
    };

    const aulasAgrupadas = agruparAulasPorHorario();

    return (
        <>
            {props.hora !== "mobile" ?
                <>
                    <div className="bloco especifico col">
                        {Object.values(aulasAgrupadas).map((aulas, index) => (
                            <p key={index}>{aulas[0].horario_inicio.slice(0,-3)}-{aulas[0].horario_fim.slice(0,-3)}</p>
                        ))}
                    </div>
                    <div className="bloco col">
                        {Object.values(aulasAgrupadas).map((aulas, index) => (
                            <p key={index}>
                                {aulas.map((aula, i) => (
                                    <span key={i}>{aula.dia === 1 ? aula.materia : "⠀"}</span>
                                ))}
                            </p>
                        ))}
                    </div>
                    <div className="bloco col">
                        {Object.values(aulasAgrupadas).map((aulas, index) => (
                            <p key={index}>
                                {aulas.map((aula, i) => (
                                    <span key={i}>{aula.dia === 2 ? aula.materia : "⠀"}</span>
                                ))}
                            </p>
                        ))}
                    </div>
                    <div className="bloco col">
                        {Object.values(aulasAgrupadas).map((aulas, index) => (
                            <p key={index}>
                                {aulas.map((aula, i) => (
                                    <span key={i}>{aula.dia === 3 ? aula.materia : "⠀"}</span>
                                ))}
                            </p>
                        ))}
                    </div>
                    <div className="bloco col">
                        {Object.values(aulasAgrupadas).map((aulas, index) => (
                            <p key={index}>
                                {aulas.map((aula, i) => (
                                    <span key={i}>{aula.dia === 4 ? aula.materia : "⠀"}</span>
                                ))}
                            </p>
                        ))}
                    </div>
                    <div className="bloco col">
                        {Object.values(aulasAgrupadas).map((aulas, index) => (
                            <p key={index}>
                                {aulas.map((aula, i) => (
                                    <span key={i}>{aula.dia === 5 ? aula.materia : "⠀"}</span>
                                ))}
                            </p>
                        ))}
                    </div>
                </>
                :
                <>
                <div className="dia col">Segunda</div>
                <div className="bloco col mob">
                    {horario.map((aula, index) => (
                    <p key={index}>
                        {aula.dia === 1
                        ?
                        <div className='pad'>
                        <div className="ajeitar">{aula.horario_inicio.slice(0,-3) + " : " + aula.horario_fim.slice(0,-3)}</div>
                        <span>{aula.materia}</span>
                        </div>
                        :
                        ""
                        }
                    </p>
                    ))}
                </div>
                <div className="dia col">Terça</div>
                <div className="bloco col mob">
                    {horario.map((aula, index) => (
                    <p key={index}>
                        {aula.dia === 2
                        ?
                        <div className='pad'>
                        <div className="ajeitar">{aula.horario_inicio.slice(0,-3) + " : " + aula.horario_fim.slice(0,-3)}</div>
                        <span>{aula.materia}</span>
                        </div>
                        :
                        ""
                        }
                    </p>
                    ))}
                </div>
                <div class="dia col">Quarta</div>

                <div className="bloco col mob">
                    {horario.map((aula, index) => (
                    <p key={index}>
                        {aula.dia === 3 
                        ?
                        <div className='pad'>
                        <div className="ajeitar">{aula.horario_inicio.slice(0,-3) + " : " + aula.horario_fim.slice(0,-3)}</div>
                        <span>{aula.materia}</span>
                        </div>
                        :
                        ""
                        }

                    </p>
                    ))}
                </div>
                    <div class="dia col">Quinta</div>

                <div className="bloco col mob">
                    {horario.map((aula, index) => (
                    <p key={index}>
                    {aula.dia === 4
                        ?
                        <div className='pad'>
                        <div className="ajeitar">{aula.horario_inicio.slice(0,-3) + " : " + aula.horario_fim.slice(0,-3)}</div>
                        <span>{aula.materia}</span>
                        </div>
                        :
                        ""
                        }
                    </p>
                    ))}
                </div>
                    <div class="dia col">Sexta</div>

                <div className="bloco col mob">
                    {horario.map((aula, index) => (
                    <p key={index}>
                        {aula.dia === 5
                        ?
                        <div className='pad'>
                        <div className="ajeitar">{aula.horario_inicio.slice(0,-3) + " : " + aula.horario_fim.slice(0,-3)}</div>
                        <span>{aula.materia}</span>
                        </div>
                        :
                        ""
                        }
                    </p>
                    ))}
                </div>
                    
                </>
            }
        </>
    );
}
