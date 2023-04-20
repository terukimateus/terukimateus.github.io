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

  function abrirModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('abrir');
  
    modal.addEventListener('click', (e) => {
      if (e.target.classList.contains('fechar') || e.target.classList.contains(modalId)) {
        modal.classList.remove('abrir');
      }
    });
  
    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        modal.classList.remove('abrir');
      }
    });
  }


  //////nav-bar////////

  function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu')
    
    if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open')
      document.querySelector('.icon1').src = "../images/menu_white_36dp.svg";
    } else {
      menuMobile.classList.add('open')
      document.querySelector('.icon1').src = "../images/close_white_36dp.svg";
    }
  }

  function menuHide() {
    let menuMobile = document.querySelector('.mobile-menu')

    menuMobile.classList.remove('open')
    document.querySelector('.icon1').src = "../images/menu_white_36dp.svg";
  }


  function pcShow() {
    let menu = document.querySelector('.nav-list')
    
    if (menu.classList.contains('open')) {
      menu.classList.remove('open')
      document.querySelector('.icon').src = "../images/menu_white_36dp.svg";
    } else {
      menu.classList.add('open')
      document.querySelector('.icon').src = "../images/close_white_36dp.svg";
    }
  }

  const linguagens = {
    javascript: "JavaScript é uma linguagem de programação usada para desenvolver aplicativos web e executada no lado do cliente.",
    css: "CSS é uma linguagem de marcação usada para definir a aparência visual de uma página web separando sua estrutura e conteúdo.",
    html: "HTML é uma linguagem de marcação usada para criar e estruturar conteúdo na internet.",
    sass: "SASS é uma linguagem de folhas de estilo (CSS) pré-processada que ajuda a simplificar e agilizar o processo de estilização de páginas web.",
    // adicione outras linguagens e seus textos aqui
  };
  
  function mudarTexto(linguagem) {
    var texto = document.getElementById("alterado")
    texto.innerHTML = linguagens[linguagem];

    
  }

