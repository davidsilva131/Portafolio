// ELEMENTOS HTML
//ELEMENTOS DEL MENU HAMBURGUESA
const menuHamburguer = document.getElementById('menuHamburguer');
const openMenu = document.getElementById('open-menu');
//ELEMENTO DEL LOADER
const loaderContainer = document.getElementById('loaderContainer');
//ELEMENTOS DE LA SECCION ABOUT
const btnKnowMore = document.getElementById('btnKnowMore');
const aboutMoreTextContainer = document.getElementById('aboutMoreTextContainer');
const btnShowLess = document.getElementById('btnShowLess');
//ELEMENTO DE LA SECCION PROJECTS
const projectsContainer = document.getElementById('projectsContainer');
//ARREGLO DE DATOS, PARA USO DEL ARCHIVO JSON
let data = [];
//FUNCIONES
//FUNCION PARA TRAER LA INFORMACIÓN DEL ARCHIVO JSON
const getData = async () => {
    const URL_API = 'http://localhost:3000/projects';
    const response = await fetch(URL_API);
    data = await response.json();
    renderData();
}
getData();
//FUNCION PARA IMPRIMIR LOS PROJECTOS EN EL HTML USANDO LA INFORMACIÓN DEL JSON
const renderData = () => {
    projectsContainer.innerHTML = "";
    data.forEach(project => {
        projectsContainer.innerHTML += `
        <article class="projectCard flex flex-direction-column">
                        <div class="flex imgProjectCard">
                            <span><i class="folderImg fa-regular fa-folder"></i></span>
                        </div>
                        <div class="projectName">
                            <span>${project.name}</span>
                        </div>
                        <div class="projectDescription">
                            <span>${project.description}</span>
                        </div>
                        <div>
                        <a href="${project.link}" rel="noopener noreferrer" target="_blank"><button>Ver Repositorio</button></a>
                        </div>
                    </article>
`
    })
}
//FUNCION PARA CALCULAR LA POSICIÓN DE LA PAGINA EN LA QUE SE ENCUENTRA EL USUARIO Y DEPENDIENDO DE ESTO SE MUESTRA EL BOTON TOP 
let calcScrollValue = () => {
    let btnTop = document.getElementById('btnTop');
    let pos = document.documentElement.scrollTop;
    if (pos > 100) {
        btnTop.style.display = "grid";
    } else {
        btnTop.style.display = "none";
    }
    btnTop.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    })
}


// EVENT LISTENERS
//EVENT LISTENER DE LOS BOTONES DE LA SECCION ABOUT
btnKnowMore.addEventListener('click', () => {
    aboutMoreTextContainer.classList.remove('hidden');
})
btnShowLess.addEventListener('click', () => {
    aboutMoreTextContainer.classList.add('hidden');
})
//EVENT LISTENER PARA EL MENU HAMBURGUESA
openMenu.addEventListener('click', () => {
    if (menuHamburguer.classList.contains('hidden')) {
        menuHamburguer.classList.remove('hidden');
    } else {
        menuHamburguer.classList.add('hidden')
    }

});
//EVENT LISTENER PARA EL LOADER
window.addEventListener('load', () => {
    loaderContainer.style.display = 'none';
})
//LLAMA LA FUNCION CUANDO LA VENTANA SE SCROLEA
window.onscroll = calcScrollValue;
//LLAMAMOS LA FUNCION CUANDO SE CARGUE LA PAGINA
window.onload = calcScrollValue;