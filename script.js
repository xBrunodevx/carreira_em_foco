window.addEventListener("scroll", function () {
  let header = document.querySelector("#header");
  header.classList.toggle("rolagem", window.scrollY > 0);
});

var radio = document.querySelector(".manual-btn");
var cont = 1;
document.getElementById("radio1").checked = true;
setInterval(() => {
  proximaImg();
}, 2000);
function proximaImg() {
  cont++;
  if (cont > 3) {
    cont = 1;
  }

  document.getElementById("radio" + cont).checked = true;
}

var onda1 = document.getElementById("onda1");
var onda2 = document.getElementById("onda2");
var onda3 = document.getElementById("onda3");
var onda4 = document.getElementById("onda4");

window.addEventListener("scroll", function () {
  var rolagemPos = window.scrollY;
  onda1.style.backgroundPositionX = 400 + rolagemPos * 4 + "px";
  onda2.style.backgroundPositionX = 300 + rolagemPos * -3 + "px";
  onda3.style.backgroundPositionX = 200 + rolagemPos * 2 + "px";
  onda4.style.backgroundPositionX = 100 + rolagemPos * -1 + "px";
});

type =
  "application/ld+json" >
  {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Carreira em Foco",
    url: "https://seusite.com",
    sameAs: [
      "https://www.instagram.com/carreiraemfoco.com.br/",
      "https://www.facebook.com/seu_perfil",
    ],
    offers: {
      "@type": "EducationalOccupationalProgram",
      name: "Cursos Profissionalizantes",
      provider: {
        "@type": "Organization",
        name: "Carreira em Foco",
      },
    },
  };
