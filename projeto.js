// inicio
const reservas = [];

// Função para criar uma nova reserva
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

 //array para armazenar todas as reservas
 const reservas = [];

  // Armazena o índice da reserva
  const indice = reservas.length;

  // ADICIONA RESERVA NO ARRAY
  reservas.push(reserva);
  console.log(`Reserva criada com sucesso! Índice da reserva: ${indice}`);
  console.log("--------------------");
}

// ... (resto do código)

// Função principal para executar o programa
function main() {
  while (true) {
    const opcao = prompt(
        "Escolha uma opção: DIGITE; (1) Para criar Reserva, (2) Visualizar Reservas, (3) Editar Reserva, (4) Cancelar Reserva, (5) Sair."
      );

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
        cancelarReserva();
        break;
      case "5":
        console.log("Saindo do programa.");
        return;
      default:
        console.log("Opção inválida. Tente novamente.");
    }
  }
}

// Iniciar o programa
main();
