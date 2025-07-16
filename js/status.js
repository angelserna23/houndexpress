const pendientesElemento = document.querySelector(".status__pendiente-number");
const transitoElemento = document.querySelector(".status__transito-number");
const entregadasElemento = document.querySelector(".status__entregadas-number");


//Aqui mandamos a llamar al evento cada vez que la pagina se inicialize
document.addEventListener('DOMContentLoaded', () => {
    statusGuias();
});

function statusGuias() {
    //Esta linea me permite acceder a mi localstorage y pasar toda la informacion en un array de objetos
    const guides = JSON.parse(localStorage.getItem("guides")) || [];
    //console.log(guides) //--> Nos permite ver como se muestra en la consola para mayor entendimiento

    //Creamos estas variables que nos sirven para contar la cantidad de veces que tenemos de status
    let pendientes = 0;
    let transito = 0;
    let entregadas = 0;

    guides.forEach(guide => {
        //Esta linea me permite ingresar al status de mi arreglo de objetos
        const lastStatus = guide.history[guide.history.length - 1].status;

        if (lastStatus === "pendiente") {
            //pendientes = pendientes + 1;
            pendientes++; //Aqui lo sumamos a si mismo en caso de que sea el correcto
        } else if (lastStatus === "transito") {
            //transito = transito + 1;
            transito++; //Aqui lo sumamos a si mismo en caso de que sea el correcto
        }else if (lastStatus === "entregado") {
            //entregadas = entregadas + 1;
            entregadas++; //Aqui lo sumamos a si mismo en caso de que sea el correcto
        }
    });

    //Aqui simplemente las agregamos a nuestra etiqueta de HTML despues de agregarlas en el if
    pendientesElemento.textContent = pendientes;
    transitoElemento.textContent = transito;
    entregadasElemento.textContent = entregadas;
}

