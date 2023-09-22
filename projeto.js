/****************************
*ESTRUTURA BASE PARA UM MENU*
*****************************/
const reservas = [];

function criarReserva() {
  // Implementar criação de reserva
}

 function visualizarReservas(reservas) {
    console.log("Você digitou 2. Iremos mostrar todas as reservas");
    console.log(reservas);
  }

function deletarReserva(reservas) {
    const deletar = Number(prompt(`Você digitou 4. Iremos cancelar sua reserva! Digite o indice da sua reserva para confirmar.`))
    reservas.splice(deletar, 1);
    console.log(`Tudo certo! Sua reserva de índice ${deletar} $foi cancelada`)
}

function exibirMenu() {
  console.log("Menu:");
  console.log("1. Criar Reserva");
  console.log("2. Visualizar Reservas");
  console.log("3. Editar Reserva");
  console.log("4. Deletar Reserva");
  console.log("5. Sair");
  const opcao = prompt("Digite o número da opção desejada:");

  switch (opcao) {
    case "1":
      // Chamar função de criar reserva
      break;
    case "2":
      // Chamar função de visualizar reservas
      break;
    case "3":
      // Chamar função de editar reserva
      break;
    case "4":
      // Chamar função de deletar reserva
      break;
    case "5":
      console.log("Saindo do programa. Até logo!");
      return;
    default:
      console.log("Opção inválida. Tente novamente.");
  }

  // Chamar função de exibir menu novamente
}

exibirMenu();













function criarReserva() {
  const solicitante = prompt("Nome do solicitante:");
  const data = prompt("Data da reserva (no formato dia-mes-ano):");
  const horario = prompt("Horário da reserva:");
  const sala = prompt("Sala desejada:");
  const finalidade = prompt("Finalidade da reunião:");

  const reserva = {
    solicitante: solicitante,
    data: data,
    horario: horario,
    sala: sala,
    finalidade: finalidade,
  };







  /****************************
*ESTRUTURA BASE PARA UM MENU*
*****************************/
const reservas = [];

function criarReserva() {
  const nomeSolicitante = reservas.prompt('Nome do solicitante: ');
  const data = reservas.prompt('Data da reserva (DD/MM/AAAA): ');
  const horario = reservas.prompt('Horário da reserva (HH:MM): ');
  const salaDesejada = reservas.prompt('Sala desejada: ');
  const finalidade = reservas.prompt('Finalidade da reunião: ');

  const reserva = {
    nomeSolicitante,
    data,
    horario,
    salaDesejada,
    finalidade,
  };
  reservas.push(reserva);
  console.log('Reserva criada com sucesso!');
}


function visualizarReservas() {
  console.log("Você digitou 2. Iremos mostrar todas as reservas");
    console.log(reservas);
}

function editarReserva() {
  console.log('Editar uma reserva existente');
  if (reservas.length === 0) {
    console.log('Não há reservas para editar!')
    return;
  }
  visualizarReservas();
  const numeroReserva = parseInt(reservas.prompt("Digite o numero da reserva que você deseja editar:"));

  if (isNaN(numeroReserva) || numeroReserva < 1 || numeroReserva > reservas.length) {
    console.log("Número de reserva inválido.");
    return;
  }
  const reserva = reservas[numeroReserva - 1];

  const novoNomeSolicitante = reservas.prompt(`Novo nome do solicitante (${reserva.nomeSolicitante}): `) || reserva.nomeSolicitante;
  const novaData = reservas.prompt(`Nova data da reserva (${reserva.data}): `) || reserva.data;
  const novoHorario = reservas.prompt(`Novo horário da reserva (${reserva.horario}): `) || reserva.horario;
  const novaSalaDesejada = reservas.prompt(`Nova sala desejada (${reserva.salaDesejada}): `) || reserva.salaDesejada;
  const novaFinalidade = reservas.prompt(`Nova finalidade da reunião (${reserva.finalidade}): `) || reserva.finalidade;

  reservas[numeroReserva - 1] = {
    nomeSolicitante: novoNomeSolicitante,
    data: novaData,
    horario: novoHorario,
    salaDesejada: novaSalaDesejada,
    finalidade: novaFinalidade,
  };
  console.log("Reserva editada com sucesso!");
}

function deletarReserva() {
  const deletar = Number(prompt(`Você digitou 4. Iremos cancelar sua reserva! Digite o indice da sua reserva para confirmar.`))
  reservas.splice(deletar, 1);
  console.log(`Tudo certo! Sua reserva de índice ${deletar} $foi cancelada`)
}

function exibirMenu() {
  console.log("Menu:");
  console.log("1. Criar Reserva");
  console.log("2. Visualizar Reservas");
  console.log("3. Editar Reserva");
  console.log("4. Deletar Reserva");
  console.log("5. Sair");
  const opcao = prompt("Digite o número da opção desejada:");

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
