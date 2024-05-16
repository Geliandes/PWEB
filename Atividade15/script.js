function formValidation() {
  event.preventDefault();
  let textAlert = "";
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const comment = document.pweb.elements[2];
  const answerYes = document.querySelector("#sim");

  if (name.value.length < 10) {
    textAlert += "Nome não pode ter menos que 10 caracteres\n";
  }

  if (!email.value.includes("@")) {
    textAlert += "E-mail deve ter os caracteres @\n";
  }

  if (comment.value.length < 20) {
    textAlert += "Comentário deve ter no mínimo20 caracteres\n";
  }

  if (answerYes.checked) {
    textAlert += "Que bom que você voltou a visitar esta página!\n";
  } else {
    textAlert += "Volte sempre à esta página!\n";
  }

  alert(textAlert);
}
