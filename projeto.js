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

function deletarReserva() {
  // Implementar exclusão de reserva
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
