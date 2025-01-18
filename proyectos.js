const proyectos = [
    {
        titulo: "Fake Store",
        imagen: "images/fake_store.png",
        alt: "Página principal del proyecto Fake Store",
        descripcion: "Simulación de un e-commerce que utiliza el local storage para almacenar los productos agregados al carro de compras.",
        enlaceProyecto: "https://diegolgs.github.io/Fake_Store/",
        enlaceCodigo: "https://github.com/DiegoLGS/Fake_Store",
        tecnologias: [
            { nombre: "HTML", logo: "images/svgs/html.svg" },
            { nombre: "CSS", logo: "images/svgs/css.svg" },
            { nombre: "JavaScript", logo: "images/svgs/javascript.svg" }
        ]
    },
    {
        titulo: "VetProManager",
        imagen: "images/vet_pro_manager.png",
        alt: "Formulario principal con el CRUD de la aplicación",
        descripcion: "Aplicación de escritorio con la finalidad de administrar pacientes de una veterinaria utilizando base de datos.",
        enlaceProyecto: "https://github.com/DiegoLGS/VetProManager",
        enlaceCodigo: "https://github.com/DiegoLGS/VetProManager",
        tecnologias: [
            { nombre: "C#", logo: "images/svgs/c-sharp.svg" },
            { nombre: ".NET", logo: "images/svgs/dotnet.svg" },
            { nombre: "SQL Server", logo: "images/svgs/microsoft-sql-server.svg" }
        ]
    },
    {
        titulo: "Tienda Web",
        imagen: "images/tienda_web.png",
        alt: "Página principal del proyecto Tienda Web",
        descripcion: "Proyecto de tienda virtual dividido en capas con creación de usuario, perfil y página de favoritos persistida en base de datos.",
        enlaceProyecto: "http://tienda-web.somee.com/",
        enlaceCodigo: "https://github.com/DiegoLGS/tp-final-nivel3-GloriaSalas-DiegoLeonardo",
        tecnologias: [
            { nombre: "C#", logo: "images/svgs/c-sharp.svg" },
            { nombre: "ASP .NET", logo: "images/svgs/asp-dotnet.svg" },
            { nombre: "Bootstrap", logo: "images/svgs/bootstrap.svg" },
            { nombre: "SQL Server", logo: "images/svgs/microsoft-sql-server.svg" }
        ]
    },
    {
        titulo: "Ipa Land",
        imagen: "images/ipa_land.png",
        alt: "Página principal del proyecto Ipa Land",
        descripcion: "Página desarrollada con Angular y un backend con Node - Express desplegado en Render. Realiza consultas a MongoDB.",
        enlaceProyecto: "https://ipa-land.netlify.app/",
        enlaceCodigo: "https://github.com/DiegoLGS/ipa-land",
        tecnologias: [
            { nombre: "Angular", logo: "images/svgs/angular.svg" },
            { nombre: "Express", logo: "images/svgs/express.svg" },
            { nombre: "Tailwind", logo: "images/svgs/tailwind.svg" },
            { nombre: "MongoDB", logo: "images/svgs/mongodb.svg" }
        ]
    },
    {
        titulo: "Próximamente",
        imagen: "images/work_in_progress.gif",
        alt: "Imagen animada de proyecto en progreso",
        descripcion: "En proceso... ⏳",
        enlaceProyecto: "#",
        enlaceCodigo: "#",
        tecnologias: [
            { nombre: "❓", logo: "" }
        ]
    }
];

const desplegarProyectos = () => {    
    const contenedor = document.getElementById("proyectos-container");
    
    proyectos.forEach(proyecto => {
        const tecnologiasHTML = proyecto.tecnologias
            .map(tec => `
                <div class="tecnologias">
                    ${tec.logo ? `<img class="svg-tecnologias" src="${tec.logo}" alt="Logo ${tec.nombre}">` : ""}
                    <span>${tec.nombre}</span>
                </div>
            `).join("");

        contenedor.innerHTML += `
            <article class="card">
                <a target="_blank" href="${proyecto.enlaceProyecto}">
                    <img class="imagen-proyecto" src="${proyecto.imagen}" alt="${proyecto.alt}">
                </a>
                <a target="_blank" href="${proyecto.enlaceCodigo}">
                    <h4>${proyecto.titulo}</h4>
                </a>
                <div class="descripcion">
                    <p>${proyecto.descripcion}</p>
                </div>
                <div class="container-tecnologias">
                    ${tecnologiasHTML}
                </div>
            </article>
        `;
    });
};
