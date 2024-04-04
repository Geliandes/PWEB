document.addEventListener;

const choice = parseInt(
  prompt("Escolha entre\n1 - Pedra\n2 - Papel \n3 - Tesoura")
);

function getRandomInt() {
  return Math.floor(Math.random() * 3 + 1);
}

const computerChoice = getRandomInt();

if (choice === 1 && computerChoice === 3) {
  alert(
    `O você venceu! Sua escolha foi: ${choice} e a escolha do PC foi ${computerChoice}`
  );
} else if (choice === 2 && computerChoice === 1) {
  alert(
    `O você venceu! Sua escolha foi: ${choice} e a escolha do PC foi ${computerChoice}`
  );
} else if (choice === 3 && computerChoice === 2) {
  alert(
    `O você venceu! Sua escolha foi: ${choice} e a escolha do PC foi ${computerChoice}`
  );
} else if (choice === computerChoice) {
  alert(
    `Empate! Sua escolha foi: ${choice} e a escolha do PC foi ${computerChoice}`
  );
} else {
  alert(
    `O PC ganhou! Sua escolha foi: ${choice} e a escolha do PC foi ${computerChoice}`
  );
}
