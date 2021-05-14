const fs = require('fs');
const http = require('http');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get("/vendehumos", (req, res, next) => {
  fs.readFile('./vendehumos.json', 'utf-8', (err, datosBDstr) => {
    const datosVendehumos = JSON.parse(datosBDstr);
    res.json({ data: datosVendehumos });
  })
});

app.post("/vendehumos", (req, res, next) => {
  const body = req.body;
  console.log({body});

  fs.readFile('./vendehumos.json', 'utf-8', (err, datosBDstr) => {
    const datosBD = JSON.parse(datosBDstr);
    console.log({datosBD})
    const id = (Math.random()+'').slice(2);
    // datosVendehumos[id] = body;
    datosBD[id] = body;

    fs.writeFile('./vendehumos.json', JSON.stringify(datosBD, null, 2), (err) => {
      res.json({ data: id });
    });
  });
});

app.patch("/vendehumos/:id", (req, res, next) => {
  const id = req.params.id;
  const body = req.body;
  const votos = Number(body.numVotos);

  fs.readFile('./vendehumos.json', 'utf-8', (err, datosBDstr) => {
    const datosBD = JSON.parse(datosBDstr);

    datosBD[id].numVotos += votos;

    fs.writeFile('./vendehumos.json', JSON.stringify(datosBD, null, 2), (err) => {
      res.json({ data: datosBD[id] });
    });
  });
});

app.delete("/vendehumos/:id", (req, res, next) => {
  const id = req.params.id;

  fs.readFile('./vendehumos.json', 'utf-8', (err, datosBDstr) => {
    const datosBD = JSON.parse(datosBDstr);
    delete datosBD[id];

    fs.writeFile('./vendehumos.json', JSON.stringify(datosBD, null, 2), (err) => {
      res.json({ data: id });
    });
  });
});

http.createServer(app).listen(3000);
