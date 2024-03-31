const name = prompt("Digite seu nome");
const n1 = parseFloat(prompt("Digite a 1ª nota: "));
const n2 = parseFloat(prompt("Digite a 2ª nota: "));
const n3 = parseFloat(prompt("Digite a 3ª nota: "));

alert(`média do aluno(a) ${name}: ${((n1 + n2 + n3) / 3).toFixed(2)}`);
