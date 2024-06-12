var sql = require("mssql");

module.exports = function () {
  const sqlConfig = {
    user: "BD2123038",
    password: "2123038",
    database: "BD",
    server: "Apolo",
    options: {
      encrypt: false,
      trustServerCertificate: true,
    },
  };
  return sql.connect(sqlConfig);
};
