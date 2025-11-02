window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const logo = document.querySelector("header img");

  if (window.scrollY > 50) {
    header.classList.add("rolagem");
    logo.src = "imagens/Logotipos portifólio sem fundo/Logotipo-2.png"; // nova logo
  } else {
    header.classList.remove("rolagem");
    logo.src = "imagens/Logotipos portifólio sem fundo/Logotipo-1.png"; // logo normal
  }
});

const btnAbrirMenuMobile =document.querySelector('#btn-menu-mobile')
const menuMobile =document.querySelector("#menu-mobile")

btnAbrirMenuMobile.addEventListener("click",()=>{
  menuMobile.classList.add("abrir-menu")
})

menuMobile.addEventListener("click",()=>{
  menuMobile.classList.remove('abrir-menu');
})


const portfolioContainer = document.querySelector(".portfolio-container");
const portfolioTituloMobile = document.querySelector(".portfolio-titulo-mobile");
const portfolioBoxes = document.querySelectorAll(".portfolio-box");

function updatePortfolio() {
    const containerCenter = portfolioContainer.scrollLeft + portfolioContainer.offsetWidth / 2;

    let closestBox = null;
    let closestDistance = Infinity;

    portfolioBoxes.forEach(box => {
        const boxCenter = box.offsetLeft + box.offsetWidth / 2;
        const distance = Math.abs(containerCenter - boxCenter);

        // remove classe de foco de todos
        box.classList.remove("in-focus");

        if(distance < closestDistance) {
            closestDistance = distance;
            closestBox = box;
        }
    });

    if(closestBox) {
        closestBox.classList.add("in-focus");

        // Atualiza título com transição suave
        portfolioTituloMobile.style.opacity = 0;
        setTimeout(() => {
            portfolioTituloMobile.textContent = closestBox.dataset.titulo;
            portfolioTituloMobile.style.opacity = 1;
        }, 200); // 0.2s de transição
    }
}

// Atualiza quando rolar o carrossel
portfolioContainer.addEventListener("scroll", updatePortfolio);

// Inicializa ao carregar
updatePortfolio();


