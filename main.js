$("#imprimir").click(function () {
  let name = $("#name").val();
  function Persona(nombre) {
    this.nombre = nombre;
  }
  NuevaPersona = new Persona(name);
  agregar();
})

let baseDatos = [];
function agregar() {
  baseDatos.push(NuevaPersona);
  $("#user").prepend(`<p>${NuevaPersona.nombre}</p> <br>`);
  borrar();
}
function borrar() {
  let name = $("#name");
  name.val("");
}