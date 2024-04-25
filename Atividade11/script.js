let Funcionario01 = {};

Funcionario01.matricula = "01";
Funcionario01.nome = "Paulo";
Funcionario01.funcao = "Desenvolvedor Front-End";

// --------------------------------------//

let Funcionario02 = new Object();
Funcionario02.matricula = "02";
Funcionario02.nome = "Paulo";
Funcionario02.funcao = "Desenvolvedor Front-End";

// -------------------------------------- //

let Funcionario03 = {};
Funcionario03["matricula"] = "03";
Funcionario03["nome"] = "Paulo";
Funcionario03["funcao"] = "Desenvolvedor Front-End";

alert("Objeto 1: " + JSON.stringify(Funcionario01));
alert("Objeto 2: " + JSON.stringify(Funcionario02));
alert("Objeto 3: " + JSON.stringify(Funcionario03));
