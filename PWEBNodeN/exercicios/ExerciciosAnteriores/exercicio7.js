const http = require("http");

const server = http.createServer((req, res) => {
  const opcao = req.url;
  if (opcao == "/historia") {
    res.end("<html><body>História da Fatec Sorocaba</body></html>");
  } else if (opcao == "/cursos") {
    res.end("<html><body>Cursos</body></html>");
  } else if (opcao == "/professores") {
    res.end("<html><body>Professores</body></html>");
  } else {
    res.end("<html><body>Site da Fatec Sorocaba</body></html>");
  }
});

server.listen(8080);
