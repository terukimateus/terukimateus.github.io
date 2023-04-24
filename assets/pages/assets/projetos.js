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

  function abrirItem(pagina) {
    switch(pagina) {
        case 'weather':
            window.location.href = 'weather.html';
            break;
        case 'login':
            window.location.href = 'login.html';
            break;
        case 'netflix':
            window.location.href = 'netflix.html';
            break;
            case 'music':
            window.location.href = 'music.html';
            break;
            case 'siroti':
              window.location.href = 'siroti.html';
              break;
              case 'portfolio':
                window.location.href = 'portfolio.html';
                break;
                case 'age':
                window.location.href = 'age.html';
                break;
        default:
            break;
    }
}