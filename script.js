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


