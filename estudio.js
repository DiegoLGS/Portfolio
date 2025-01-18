const estudiosActuales = [
    {
        nombre: "Angular",
        imagen: "images/svgs/angular.svg",
        alt: "Logo Angular"
    },
    {
        nombre: "Express",
        imagen: "images/svgs/express.svg",
        alt: "Logo Express"
    },
    {
        nombre: "MongoDB",
        imagen: "images/svgs/mongodb.svg",
        alt: "Logo MongoDB"
    },
    {
        nombre: "Inglés",
        imagen: "images/svgs/united-kingdom-flag.svg",
        alt: "Bandera de Reino Unido"
    }
];

const desplegarEstudiosActuales = () => {
    const container = document.getElementById("estudios-container");

    estudiosActuales.forEach(estudio => {
        const tecnologiaDiv = document.createElement("div");
        tecnologiaDiv.classList.add("tecnologias");
        tecnologiaDiv.classList.add("logo-estudios");
        tecnologiaDiv.innerHTML = `
            <img class="svg-tecnologias" src="${estudio.imagen}" alt="${estudio.alt}">
            <span>${estudio.nombre}</span>
        `;
        container.appendChild(tecnologiaDiv);
    });
}