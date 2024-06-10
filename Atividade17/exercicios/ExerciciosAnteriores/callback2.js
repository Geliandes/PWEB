function exibeMensagensNaOrdem(mensagem, callback) {
  console.log(mensagem);
  callback();
}

exibeMensagensNaOrdem("Essa é a 1ª mensagem exibida na ordem", function () {
  console.log("Essa é a 2ª mensagem exibida na ordem");
});
