var sql = require("mssql");

var pass = process.env.DB_PASS;
var connSQLServer = function () {
  const config = {
    user: "sa",
    password: "1234",
    database: "paulo",
    server: "PAULO",
    options: {
      encrypt: false,
      trustServerCertificate: true,
    },
  };
  return sql.connect(config);
};

module.exports = function () {
  console.log("Oautoload carregou o módulo de conexão com o bd");
  return connSQLServer;
};
