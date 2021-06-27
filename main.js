//alert('Eu existo')
/*function liquidificador(frutas){
  alert(frutas); // o alert também é uma funcão porque é um nome seguide de ()
}
liquidificador('maca banna')*/
//DOM Docment Objcet MODEL

//Abre e fecha o menu quando clicar no icone: hamburger e X
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}
//quando clicar em um item do menu, esconder o memu
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}
//mudar o header da página quando der scroll*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    //scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    //menor que a altura do header
    header.classList.remove('scroll')
  }
}

//testimonials corusel slider swiper

const swiper = new Swiper('.swiper-container', {
  slidsPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true, //setas do teclado
  breakpoints: {
    //domenor par o maior
    767: {
      slidesPerView: 2,
      setWrapperSize: true //encobrir
    }
  }
})

//scrollreveal: mostra elementos quando der scroll na página
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
  #home .text,#home .image,
  #about .image, #about .text, 
  #services header,  #services .card, 
  #testimonials header, #testimonials.testimonials
  #contact .text, #contact.links,
  footer .brand, footer .social

  `,
  { interval: 100 }
)

//botão voltar par o topo
// pegar o botão da tela, pegar esse elemento par que posssa aplicar um classe nele depois que houver uma rolagem na tela de um  certo  número
// camel case primeira letra menor e as próximas maiores para vriáveis
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

//menu ativo conforme a seção visivel  na página marcar as seções deixar colorido
// ativar o menu na seção do momento

//PEGAR TODAS AS SEÇÕES Q TEM ID
const sections = document.querySelectorAll('main sections[id]')
function activeMenuAtCurrentSection() {
  const checkpoints = window.pageYOffset + (window.innerHeight / 8) * 4 // eixo Y mais todo o tamamho da janela dividido por 8
  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.gatAtribute('id')

    const checkpointStar = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight
    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a [href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a [href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/**When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activeMenuAtCurrentSection()
})
