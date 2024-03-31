const n1 = parseFloat(prompt("Digite o primeiro numero"));
const n2 = parseFloat(prompt("Digite o segundo numero"));

alert(
  "Soma: " +
    (n1 + n2).toFixed(2) +
    "\nSubtração: " +
    (n1 - n2).toFixed(2) +
    "\nProduto: " +
    (n1 * n2).toFixed(2) +
    "\nDivisão: " +
    (n1 / n2).toFixed(2) +
    "\nResto da divisão: " +
    (n1 % n2).toFixed(2)
);
