// ANIMAÇÃO HREF //

reveal();

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

  // MODAL //

  function abrirModal() {
    const modal = document.getElementById('janela-modal')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
      if(e.target.id == 'fechar' || e.target.id == 'janela-modal') {
        modal.classList.remove('abrir')
      }
      window.addEventListener('keydown', function (event) {
        const modal = document.getElementById('janela-modal')
      if (event.key === 'Escape') {
        modal.classList.remove('abrir')
      }
    })
    
    })
  }

  function abrirCronometro() {
    const modal = document.getElementById('cronometro-modal')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
      if(e.target.id == 'fechar' || e.target.id == 'cronometro-modal') {
        modal.classList.remove('abrir')
      }
      window.addEventListener('keydown', function (event) {
        const modal = document.getElementById('cronometro-modal')
      if (event.key === 'Escape') {
        modal.classList.remove('abrir')
      }
    })
    
    })
  }

  function abrirPortfolio() {
    const modal = document.getElementById('portfolio-modal')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
      if(e.target.id == 'fechar' || e.target.id == 'portfolio-modal') {
        modal.classList.remove('abrir')
      }
      window.addEventListener('keydown', function (event) {
        const modal = document.getElementById('portfolio-modal')
      if (event.key === 'Escape') {
        modal.classList.remove('abrir')
      }
    })    
    })
  }
  
  ///EXPERIENCIAS///
  function saura() {
    const saura = document.querySelector('#saura')
    const estudos = document.querySelector('#estudos')
    const texto = document.querySelector('#descricao')
    const titulo = document.querySelector('#titulo')
    const tempo = document.querySelector('#tempo')

    saura.classList.add("ativo")
    estudos.classList.remove("ativo")

    titulo.innerHTML = "Intern in Graphic Design"
    texto.innerHTML = "I created arts for the Social Media area, helped with daily posts for social networks."
    tempo.innerHTML = "03/2023 - Recent"
  }

  function estudos() {
    const saura = document.querySelector('#saura')
    const estudos = document.querySelector('#estudos')
    const texto = document.querySelector('#descricao')
    const titulo = document.querySelector('#titulo')
    const tempo = document.querySelector('#tempo')

    saura.classList.remove("ativo")
    estudos.classList.add("ativo")
    titulo.innerHTML = "Software Engineering - Graduation"
    texto.innerHTML = "The Software Engineer helps solve a company's problems in a personalized way, creating tools for that."
    tempo.innerHTML = "First semester"
  }

  //////////////

  function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu')
    
    if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open')
      document.querySelector('.icon').src = "assets/images/menu_white_36dp.svg";
    } else {
      menuMobile.classList.add('open')
      document.querySelector('.icon').src = "assets/images/close_white_36dp.svg";
    }
  }

  function menuHide() {
    let menuMobile = document.querySelector('.mobile-menu')

    menuMobile.classList.remove('open')
    document.querySelector('.icon').src = "assets/images/menu_white_36dp.svg";
  }


  function pcShow() {
    let menu = document.querySelector('.nav-list')
    
    if (menu.classList.contains('open')) {
      menu.classList.remove('open')
      document.querySelector('.icon').src = "assets/images/menu_white_36dp.svg";
    } else {
      menu.classList.add('open')
      document.querySelector('.icon').src = "assets/images/close_white_36dp.svg";
    }
  }