const eventos = require("events");

const EmissorEventos = eventos.EventEmitter;

let ee = new EmissorEventos();

ee.on("dados", (fecha) => {
  console.log(fecha);
});

setInterval(() => {
  ee.emit("dados", Date.now());
}, 500);
