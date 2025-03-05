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
