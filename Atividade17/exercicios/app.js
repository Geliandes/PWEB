const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home/index");
});

app.get("/historia", (req, res) => {
  res.render("informacao/historia");
});

app.get("/cursos", (req, res) => {
  res.render("informacao/cursos");
});

app.get("/professores", (req, res) => {
  res.render("informacao/professores");
});

app.get("/adicionar-usuario", (req, res) => {
  res.render("admin/adicionar_usuario");
});

app.listen(8080, () => {
  console.log("Servidor com express foi carregado");
});
