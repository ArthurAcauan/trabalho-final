//Trabalho final
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
    reservas.forEach((element, index) => {
      console.log("index: " + index);
      console.log('Solicitante: ' + element.solicitante);
      console.log('Data: ' + element.data);
      console.log('Horário: ' + element.horario);
      console.log('Finalidade: ' + element.finalidade);
    });
  }
}

function editarReserva() {
  visualizarReservas();
  let indiceEditar = Number(prompt("Qual o índice da reserva que você quer editar?"));
  if (indiceEditar >= 0 && indiceEditar < reservas.length) {
    const novoSolicitante = prompt("Digite o nome do novo solicitante:");
    const novaData = prompt("Altere a data da reserva:");
    const novoHorario = prompt("Altere o horário da sua reserva:");
    const novaSala = prompt("Digite o número da nova sala:");
    const novaFinalidade = prompt("Digite uma nova finalidade:");

    const editar = {
      solicitante: novoSolicitante,
      data: novaData,
      horario: novoHorario,
      sala: novaSala,
      finalidade: novaFinalidade,
    }

    console.log("Sua reserva foi editada com sucesso!");
    reservas[indiceEditar] = editar;
  } else {
    console.log("Índice de reserva inválido.");
  }
}

function deletarReserva() {
  visualizarReservas();
  let indiceDeletar = Number(prompt("Você digitou 4. Iremos cancelar sua reserva! Digite o índice da reserva para confirmar: "));
  if (indiceDeletar >= 0 && indiceDeletar < reservas.length) {
    reservas.splice(indiceDeletar, 1);
    console.log(`Tudo certo! Sua reserva de índice ${indiceDeletar} foi cancelada.`);
  } else {
    console.log("Índice de reserva inválido.");
  }
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
