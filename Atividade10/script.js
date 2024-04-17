const peso = parseFloat(prompt("Insira o peso kg, ex: 80").replace(",", "."));
const altura = parseFloat(prompt("Insira a altura em m, ex: 1,84 ").replace(",", "."));

const calcImc = (peso, altura) => {
  return peso / Math.pow(altura, 2);
};

const imc = calcImc(peso, altura);

switch (true) {
  case imc < 18.5:
    alert("Magreza");
    break;

  case imc < 25:
    alert("Normal");
    break;

  case imc < 30:
    alert("Sobrepeso");
    break;

  case imc < 40:
    alert("Obesidade");
    break;

  default:
    alert("Obesidade Grave");
    break;
}
