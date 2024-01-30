document.addEventListener('DOMContentLoaded', function() {
    const services = [
      {
        id: 01,
        name: 'PicPay',
        icon: '/src/assets/img/botao_redondo_picpay.png',
        title: 'Com o PicPay seu dinheiro tem mais pique e seu dia a dia fica mais fácil',
        description: 'Somos o parceiro financeiro que tá no mesmo pique que você pra fazer acontecer',
        logo: '/src/assets/img/picpay.png',
        url: 'https://www.picpay.com'
      },
      {
        id: 02,
        name: 'Nubank',
        icon: '/src/assets/img/nubank.png',
        title: 'Tenha N Possibilidades de produtos para N Possibilidades na vida',
        description: 'O que você precisa pra ficar no controle da sua vida financeira tem no app do Nubank.',
        logo: '/src/assets/img/nubank-logo.png',
        url: 'https://nubank.com.br/'
      },
      {
        id: 03,
        name: 'Ifood',
        icon: '/src/assets/img/ifood.png',
        title: 'Faça mercado no iFood',
        description: 'Entregamos tudo o que precisa na porta da sua casa, de hortifruti a itens de limpeza',
        logo: '/src/assets/img/ifood.png',
        url: 'https://ifood.com.br/'
      },
      {
        id:04,
        name: 'Uber',
        icon: '/src/assets/img/uber.png',
        title: 'Vá a qualquer lugar com o app da Uber',
        description: 'Solicite uma viagem, entre no carro e relaxe.',
        logo: '/src/assets/img/uber-logo.png',
        url: 'https://uber.com/'
      },
    ]
  
    function renderizarCards() {
      const container = document.querySelector('.section-cards .bottom')
  
      container.innerHTML = '';
  
      services.forEach(service => {
        const cardHtml = `
          <div class="card" data='${service.id}'>
          <div class="image">
            <img src=${service.logo} alt="">
          </div>
          <div class="content">
            <div class="icon">
              <img src=${service.icon} alt="">
              <span class="name">${service.name}</span>
            </div>
            <div class="texts">
              <h3 class="title">${service.title}</h3>
              <p class="description">${service.description}</p>
            </div>
          </div>
        </div>
        `;
        container.innerHTML += cardHtml;
      });
  
      idsCards();
  
    }
  
    function idsCards() {
      const cards = document.querySelectorAll('.section-cards .bottom .card');
  
      cards.forEach(card => {
        card.addEventListener('click', function() {
          const serviceId = this.getAttribute('data');
          const service = services.find(service => service.id == serviceId)
          abrirModal(service)
        })
      })
    }
  
  
    function abrirModal(service) {
      
        const modal = document.querySelector('.modal');
        const modalContent = document.querySelector('.modal-content');
        const button = document.querySelector('.button a');
      
        const titleElement = modalContent.querySelector('.texts .tittle'); // corrigido para .tittle
        const descriptionElement = modalContent.querySelector('.texts .description');

      
        titleElement.textContent = service.title;
        descriptionElement.textContent = service.description;
        button.setAttribute('href', service.url);
      
        modal.style.display = 'block';
      }
  
  
    function fecharModal() {
      const modal = document.querySelector('.modal')
      modal.style.display = 'none';
    }
  
    //Evento para fechar
    const closeButton = document.querySelector('.modal .close')
  
    closeButton.addEventListener('click', fecharModal);
  
    renderizarCards()

  
  });