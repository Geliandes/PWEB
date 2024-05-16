const courses = [
  {
    name: "ads",
    url: "https://www.fatecsorocaba.edu.br/curso_ads.asp",
  },
  {
    name: "fabricacao-mecanica",
    url: "https://www.fatecsorocaba.edu.br/curso_fm.asp",
  },
  {
    name: "logistica",
    url: "https://www.fatecsorocaba.edu.br/curso_log.asp",
  },
  {
    name: "polimeros",
    url: "https://www.fatecsorocaba.edu.br/curso_pol.asp",
  },
  {
    name: "sistemas-biomedicos",
    url: "https://www.fatecsorocaba.edu.br/curso_sb.asp",
  },
];
function handleClick(event) {
  const select = document.querySelector("select");

  console.log(select.value);

  if (confirm("Abrir em nova aba?")) {
    courses.forEach((course) =>
      course.name === select.value
        ? window.open(course.url, "_blank", "popup, width=600, height=600")
        : null
    );
  }
}
