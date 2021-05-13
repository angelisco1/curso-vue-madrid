const http = require("http");
const express = require("express");

const datosVendehumos = {
  '432423': {
    nombre: 'Vendehumos',
    apellidos: 'Numero 1',
    tema: 'criptomonedas',
    rrss: ['youtube', 'instagram'],
    numVotos: 28
  }
}

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
})

app.get("/vendehumos", (req, res, next) => {
  res.json({ data: datosVendehumos });
});

app.post("/vendehumos", (req, res, next) => {
  const datos = req.body;
  console.log(datos);
  const id = (Math.random()+'').slice(2);
  datosVendehumos[id] = datos;
  res.json({ data: id });
});

app.delete("/vendehumos/:id", (req, res, next) => {
  const id = req.params.id;
  delete datosVendehumos[id];
  res.json({ data: id });
});

http.createServer(app).listen(3000);
