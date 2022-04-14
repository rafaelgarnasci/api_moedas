const express = require("express");
const cors = require("cors");
const coinList = require("./moedas.json");

const app = express(); //http.createServer

app.use(cors()); // liberando cors

app.get("/", (req, res) => {
  res.send("Olá tudo bom?");
});

app.get("/moedas", (req, res) => {
  res.send(JSON.stringify(coinList));
});

app.listen(4000, () => console.log("Servidor Rodando na porta 4000"));



// _____________________________________________________________________________________________________________________________
// const http = require('http')

// const listaDeMoedas = require ('./moedas.json');

// const app = http.createServer((req, res)=>{
//     console.log(listaDeMoedas);
// res.setHeader("Access-Control-Allow-Origin", "*")
//     res.setHeader("Content-Type", "application/json");
//     const respostaEmJson = JSON.stringify(listaDeMoedas);
//     res.write(respostaEmJson);
  

//     res.end();
// })

// app.listen(3000, () => console.log ('Servidor iniciado na porta 3000'));

// _____________________________________________________________________________________________________________________________
// const fs = require("fs");
// const url = require("url");
// const http = require("http");

// const listCoins = require("./moedas.json");

// const server = http.createServer((req, res) => {
//   const route = url.parse(req.url);

//   switch (route.pathname) {
//     case "/contato":
//       res.end("Pagina contato");
//       break;
//     case "/moedas":
//       res.setHeader("Content-Type", "text/html");
//       res.write(JSON.stringify(listCoins));
//       break;
//     default:
//       const page = fs.readFileSync("pagina.html");
//       res.write(page);
//       break;
//   }

//   return res.end();
// });

// server.listen(4000);
