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
  
  

  //////////////