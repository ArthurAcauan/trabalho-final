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
      reservas.forEach(element => {
        console.log('Solicitante: ' + element.solicitante);
        console.log('Data: ' + element.data);
        console.log('Horário: ' + element.horario);
        console.log('Finalidade: ' + element.finalidade);
      });
    }
  }
  

function editarReserva() {
}

function deletarReserva() {
  const deletar = parseInt(prompt(`Você digitou 4. Iremos cancelar sua reserva! Digite o indice da sua reserva para confirmar.`));
  if (!isNaN(deletar) && deletar >= 1 && deletar <= reservas.length) {
    reservas.splice(deletar - 1, 1);
    console.log(`Tudo certo! Sua reserva de índice ${deletar} foi cancelada.`);
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
