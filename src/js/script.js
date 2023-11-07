feather.replace()

// Message 

const toast = document.querySelector(".alerts");
const closeAlert = document.querySelector(".close-alert");
const progress = document.querySelector(".progress");

//  tabela com paginação

$(document).ready(function () {
  // Inicialização da tabela com DataTables
  const table = $('#customerTable').DataTable({
    dom: 'Bfrtip',
    buttons: [
      'copy', 'csv', 'excel', 'pdf', 'print'
    ],
    language: {
      paginate: {
        next: '>', // or '→'
        previous: '<' // or '←' 
      }
    },
    "drawCallback": function( settings ) {
      feather.replace();
    }
  });

  // Adicione ação ao botão de exportação
  // $('#exportBtn').on('click', function () {
  //   table.button('.buttons-excel').trigger();
  // });

  // Configuração do Datepicker para filtro de datas personalizado
  $('.datepicker').datepicker({
    format: 'yyyy-mm-dd',
    autoclose: true
  });

  // Simulação de dados de clientes (exemplo)
  const customers = [{
      nome: 'Rafaella Coelho',
      email: 'rafa@gmail.com',
      telefone: '31999999999',
      dataCadastro: '2023-10-10',
      tag: 'Premium',
      status: 'online'
    },
    {
      nome: 'Rafaella Coelho',
      email: 'rafa@gmail.com',
      telefone: '31999999999',
      dataCadastro: '2023-10-10',
      tag: 'vip',
      status: 'offline'
    },
    {
      nome: 'Rafaella Coelho',
      email: 'rafa@gmail.com',
      telefone: '31999999999',
      dataCadastro: '2023-10-10',
      tag: 'comum',
      status: 'banido'
    },
    {
      nome: 'Rafaella Coelho',
      email: 'rafa@gmail.com',
      telefone: '31999999999',
      dataCadastro: '2023-10-10',
      tag: 'atipico',
      status: 'offline'
    },{
      nome: 'Rafaella Coelho',
      email: 'rafa@gmail.com',
      telefone: '31999999999',
      dataCadastro: '2023-10-10',
      tag: 'premium',
      status: 'Online'
    },
    {
      nome: 'Rafaella Coelho',
      email: 'rafa@gmail.com',
      telefone: '31999999999',
      dataCadastro: '2023-10-10',
      tag: 'vip',
      status: 'offline'
    },
    {
      nome: 'Rafaella Coelho',
      email: 'rafa@gmail.com',
      telefone: '31999999999',
      dataCadastro: '2023-10-10',
      tag: 'comum',
      status: 'banido'
    },
    {
      nome: 'Rafaella Coelho',
      email: 'rafa@gmail.com',
      telefone: '31999999999',
      dataCadastro: '2023-10-10',
      tag: 'atipico',
      status: 'offline'
    },{
      nome: 'Rafaella Coelho',
      email: 'rafa@gmail.com',
      telefone: '31999999999',
      dataCadastro: '2023-10-10',
      tag: 'premium',
      status: 'Online'
    },
    {
      nome: 'Rafaella Coelho',
      email: 'rafa@gmail.com',
      telefone: '31999999999',
      dataCadastro: '2023-10-10',
      tag: 'vip',
      status: 'offline'
    },
    {
      nome: 'Rafaella Coelho',
      email: 'rafa@gmail.com',
      telefone: '31999999999',
      dataCadastro: '2023-10-10',
      tag: 'comum',
      status: 'banido'
    },
    {
      nome: 'Rafaella Coelho',
      email: 'rafa@gmail.com',
      telefone: '31999999999',
      dataCadastro: '2023-10-10',
      tag: 'atipico',
      status: 'offline'
    }
    // Adicione mais clientes aqui
  ];

  // Função para preencher a tabela com dados dos clientes
  function populateTable() {
    table.clear().draw();
    const searchType = $('#searchType').val();
    const searchValue = $('#searchInput').val().toLowerCase();
    const statusFilter = $('#statusFilter').val();
    const dateFilter = $('#dateFilter').val();
    const customDate = $('#customDate').val();
    const tagFilter = $('#tagFilter').val();

    customers.forEach(customer => {
      if (searchType === 'nome' && !customer.nome.toLowerCase().includes(searchValue)) {
        return;
      }
      if (searchType === 'cpf' && !customer.cpf.includes(searchValue)) {
        return;
      }
      if (statusFilter && customer.status !== statusFilter) {
        return;
      }
      if (dateFilter) {
        const date = new Date(customer.dataCadastro);
        const today = new Date();
        let dateRange = false;
        if (dateFilter === '7') {
          dateRange = (today - date) / (1000 * 60 * 60 * 24) <= 7;
        } else if (dateFilter === '15') {
          dateRange = (today - date) / (1000 * 60 * 60 * 24) <= 15;
        } else if (dateFilter === '30') {
          dateRange = (today - date) / (1000 * 60 * 60 * 24) <= 30;
        } else if (dateFilter === 'personalizado') {
          const customDateObj = new Date(customDate);
          dateRange = customDateObj <= date && date <= today;
        }
        if (!dateRange) {
          return;
        }
      }
      if (tagFilter && customer.tag !== tagFilter) {
        return;
      }

      table.row.add([
        `<span>${customer.nome}</span>`,
        `<span>${customer.email}</span>`,
        `<span>${customer.telefone}</span>`,
        `<span>${customer.dataCadastro}</span>`,
        `<span class="tags">${customer.tag}</span>`,
        `<span class="tags">${customer.status}</span>`,
        `
        <button type="button" class="border-0 btn" data-bs-toggle="modal"
        data-bs-target="#exampleModal3">
          <i data-feather="more-horizontal"></i>
        </button>
        `
      ]).draw();

    });
  }

  $(document).ready(function() {
    $('.tags').each(function() {
      var status = $(this).text().toLowerCase();
      if (status === 'premium') {
        $(this).addClass('premium');
      } else if (status === 'comum') {
        $(this).addClass('common');
      } else if (status === 'vip') {
        $(this).addClass('vip');
      } else if (status === 'atipico') {
        $(this).addClass('atypcal');
      }

    });
  });

  $(document).ready(function() {
    $('.tags').each(function() {
      var status = $(this).text().toLowerCase();
      if (status === 'online') {
        $(this).addClass('online');
      } else if (status === 'offline') {
        $(this).addClass('offline');
      } else if (status === 'banido') {
        $(this).addClass('banned');
      }
    });
  });

  // Adicione ação ao botão de pesquisa
  $('#searchInput').on('keyup', function () {
    populateTable();
  });

  // Adicione ação aos filtros
  $('#searchType, #statusFilter, #dateFilter, #tagFilter').on('change', function () {
    populateTable();
    if ($(this).val() === 'personalizado') {
      $('#customDate').show();
    } else {
      $('#customDate').hide();
    }
  });

  // Preencha a tabela com dados ao carregar a página
  populateTable();
});

// Função para alternar para o modo de edição
function editarCliente() {
  document.getElementById("dadosCliente").style.display = "none";
  document.getElementById("formularioEdicao").style.display = "block";
}

// Função para salvar as edições e voltar ao modo de visualização
function salvarEdicao() {
  const nomeCliente = document.getElementById("nome").value;
  const dataNascimento = document.getElementById("dataNascimento").value;
  const idade = document.getElementById("idade").value;

  // Atualizar os dados do cliente no modo de visualização
  document.getElementById("nomeCliente").textContent = nomeCliente;
  document.getElementById("dataNascimento").textContent = dataNascimento;
  document.getElementById("idade").textContent = idade;

  // Alternar de volta para o modo de visualização
  document.getElementById("dadosCliente").style.display = "block";
  document.getElementById("formularioEdicao").style.display = "none";
}