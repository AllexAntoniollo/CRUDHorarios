
const express = require("express");
const cors = require("cors");
require('dotenv').config()

const pgp = require("pg-promise")({});

const usuario = process.env.DATABASE_USER
const senha = process.env.DATABASE_PASSWORD
const database = process.env.DATABASE

const db = pgp(`postgres://${usuario}:${senha}@localhost:5432/${database}`);

const app = express();
app.use(cors());
app.use(express.json());

app.get("/cursos/:semestre?", async (req, res) => {
    try {
        let cursos;

        if (req.params.semestre == null || req.params.semestre == 0) {
            cursos = await db.any("SELECT * FROM cursos order by nome, semestre;");
        } else {
            cursos = await db.any("SELECT * FROM cursos WHERE semestre = $1;", [req.params.semestre]);
        }

        res.json(cursos).status(200);
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
});


app.get("/horarios/:idc", async (req,res) => {
    try {
        let cursos;

            cursos = await db.any("SELECT * FROM horarios where idc = $1 order by horario_inicio;", req.params.idc);
        

        res.json(cursos).status(200);
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
})

app.get("/verificarHorario", async (req,res) => {
    try {
        const dia = req.query.dia
        const cursoId = req.query.cursoId
        const horarioInicio = req.query.horarioInicio
        const horarioFim = req.query.horarioFim

        let horario;

            horario = await db.any("Select * from horarios where dia = $1 and idc = $2 and horario_inicio = $3 and horario_fim = $4;",[dia,cursoId,horarioInicio,horarioFim])

            if (horario.length === 0) {
                res.status(200).send('disponivel'); 
              } else {
                res.status(200).send('existente');
              }

    } catch (error) {
        res.sendStatus(400)
    }
})

app.post("/cursos", async (req, res) => {
    try {
        const cursoNome = req.body.nome;
        const cursoDescricao = req.body.descricao;
        const cursoSemestre = req.body.semestre;

        db.none(
            "INSERT INTO cursos (nome, descricao,semestre) VALUES ($1, $2, $3);",
            [cursoNome, cursoDescricao, cursoSemestre]
        );
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});

app.post("/horarios", async (req, res) => {
    try {
        const dia = req.body.dia;
        const materia = req.body.materia;
        const cursoId = req.body.cursoId;
        const horario_inicio = req.body.horarioInicio;
        const horario_fim = req.body.horarioFim;

        let verifica = await db.any("Select * from horarios where dia = $1 and idc = $2 and horario_inicio = $3 and horario_fim = $4;",[dia,cursoId,horario_inicio,horario_fim])
        if (verifica.length === 0){
            db.none(
                "INSERT INTO horarios (dia, materia, idc, horario_inicio, horario_fim) VALUES ($1, $2, $3, $4, $5);",
                [dia, materia, cursoId, horario_inicio,horario_fim]
            );
        }


        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
});


app.listen(process.env.PORT, () => console.log(`Servidor rodando na porta ${process.env.PORT}.`));
