//Trabalho Final
const reservas = [];

function criarReserva() {
  const solicitante = prompt("Qual seu nome?");
  const data = prompt("Data do dia de hoje?");
  const horario = prompt("Qual horario da criação?");
  const sala = prompt("Qual sala de reunião você deseja?");
  const finalidade = prompt("Qual a finalidade da reunião?");

  const reserva = {
    solicitante: solicitante,
    data: data,
    horario: horario,
    sala: sala,
    finalidade: finalidade,
  }
  console.log("Reserva criada com sucesso!");
  reservas.push(reserva);
}

function visualizarReservas() {
  console.log("Você digitou 2. Iremos mostrar todas as reservas");
  if (reservas.length === 0) {
    console.log('Não há reservas para mostrar');
  } else {
    let j = 0;
    reservas.forEach(element => {
      console.log("index: "+ j);
      console.log('Solicitante: ' + element.solicitante);
      console.log('Data: ' + element.data);
      console.log('Horário: ' + element.horario);
      console.log('Finalidade: ' + element.finalidade);
      j++;
    });
  }
}

function editarReserva() {
  visualizarReservas();
  let indiceEditar = prompt("Qual o indice da reserva que você quer editar?")
  const novoSolicitante = prompt("Digite o nome do novo solicitante:");
  const novaData = prompt("Altere a data da reserva:");
  const novoHorario = prompt("Altere o horario da sua reserva:");
  const novaSala = prompt("Digite o numero da nova sala:");
  const novaFinalidade = prompt("Digite uma nova finalidade:");

  const editar = {
    solicitante: novoSolicitante,
    data: novaData,
    horario: novoHorario,
    sala: novaSala,
    finalidade: novaFinalidade,
  }
  console.log("Sua reserva foi editada com sucesso!")
  reservas[indiceEditar] = editar;
}

function deletarReserva() {
  let deletar= Number(prompt("Você digitou 4. Iremos cancelar sua reserva! Digite o indice da sua reserva para confirmar: "));
  if deletar >= 0 && deletar < reservas.length) {
    reservas.splice(indice, 1);
    console.log("Tudo certo! Sua reserva de índice ${deletar} foi cancelada.")
  } else {
    console.log("Índice de reserva inválido.");
  }
  exibirMenu()
}
function exibirMenu() {
  console.log("Menu:");
  console.log("1. Criar Reserva");
  console.log("2. Visualizar Reservas");
  console.log("3. Editar Reserva");
  console.log("4. Deletar Reserva");
  console.log("5. Sair");
  const opcao = prompt("Digite o número da opção desejada de 1 a 5:");

  switch (opcao) {
    case "1":
      criarReserva();
      break;
    case "2":
      visualizarReservas();
      break;
    case "3":
      editarReserva();
      break;
    case "4":
      deletarReserva();
      break;
    case "5":
      console.log("Saindo do programa. Até logo!");
      return;
    default:
      console.log("Opção inválida. Tente novamente.");
  }

  exibirMenu();
}
exibirMenu();
