var pacientes = [];       // declara vetor global
var urgencias = [];

function atualizarLista() {
  var outLista = document.getElementById("outLista");
  var lista = "";

  if (urgencias.length > 0) {
    lista += "Urgências:\n";

    for (var i = 0; i < urgencias.length; i++) {
      lista += (i + 1) + ". " + urgencias[i] + " - URGÊNCIA\n";
    }

    lista += "\n";
  }

  if (pacientes.length > 0) {
    lista += "Fila Normal:\n";

    for (var i = 0; i < pacientes.length; i++) {
      lista += (i + 1) + ". " + pacientes[i] + "\n";
    }
  }

  outLista.textContent = lista;
}

function adicionarPaciente() {
  var inPaciente = document.getElementById("inPaciente");
  var nome = inPaciente.value;

  if (nome == "") {
    alert("Informe o nome do paciente");
    inPaciente.focus();
    return;
  }

  pacientes.push(nome);

  atualizarLista();

  inPaciente.value = "";
  inPaciente.focus();
}

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarPaciente);


function adicionarUrgencia() {
  var inPaciente = document.getElementById("inPaciente");
  var nome = inPaciente.value;

  if (nome == "") {
    alert("Informe o nome do paciente");
    inPaciente.focus();
    return;
  }

  urgencias.push(nome);

  atualizarLista();

  inPaciente.value = "";
  inPaciente.focus();
}

var btUrgencia = document.getElementById("btUrgencia");
btUrgencia.addEventListener("click", adicionarUrgencia);


function atenderPaciente() {
  var inPaciente = document.getElementById("inPaciente");

  if (urgencias.length == 0 && pacientes.length == 0) {
    alert("Não há pacientes na lista de espera");
    inPaciente.focus();
    return;
  }

  var outAtendimento = document.getElementById("outAtendimento");
  var atender;

  if (urgencias.length > 0) {
    atender = urgencias.shift();
  } else {
    atender = pacientes.shift();
  }

  outAtendimento.textContent = atender;

  atualizarLista();
}

var btAtender = document.getElementById("btAtender");
btAtender.addEventListener("click", atenderPaciente);