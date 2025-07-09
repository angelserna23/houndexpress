/*Informacion de nuestro form*/
//Aqui le asignamos las variables de nuestro form a nuestro array
const guideNumber = document.querySelector(".guide");
const destinatary = document.querySelector(".destinatary");
const origin = document.querySelector(".origin");
const destiny = document.querySelector(".destiny");
const date = document.querySelector(".date");
const statusGuide = document.querySelector(".form__select-status");
const registerBtn = document.querySelector(".form__send")
const form = document.querySelector(".form");

/*Esta funcion nos permite agregar nuestros arrays declarados dentro de nuestro data*/
const storeGuides = JSON.parse(localStorage.getItem("guides")) || [];
const data = [...storeGuides]; //Aqui vamos agregando toda la informacion de la guia

/*Esta funcion nos permite darnos un peview de lo que acabamos de generar en nuestro register.html*/
function registerGuide() {

    const infoGuide = {
        number: guideNumber.value.trim(),
        destinatary: destinatary.value.trim(),
        origin: origin.value.trim(),
        destiny: destiny.value.trim(),
        date: date.value,
        status: statusGuide.value,
        history: [
            {
                date: new Date().toLocaleString(),
                status: statusGuide.value
            }
        ]
    };
    
    if(!infoGuide.number || !infoGuide.destinatary || !infoGuide.origin || !infoGuide.destiny || !infoGuide.date  || !infoGuide.status) {
        alert("Favor de ingresar todos los datos el formulario");
        return;
    };

    data.push(infoGuide);

    /*-----------Muy Importante-----------*/
    localStorage.setItem("guides", JSON.stringify(data)); // Aqui guardamos la informacion en nuestro localStorage

    /*Aqui creamos el section que va a ser para la tarjeta*/
    const createSection = document.createElement("section");
    createSection.classList.add("guides__info");

    /*-----------------Creacion del numero de guia----------------------*/
    //Vamos a agregar los div's
    const containerDivNumber = document.createElement("div");
    containerDivNumber.classList.add("guides__container");

    const titleAddNumber = document.createElement("h2");
    titleAddNumber.classList.add("guides__info-title");
    titleAddNumber.textContent = "Numero de guia:"; //Aqui le agregamos el nombre de nuestro titulo

    const textAddNumber = document.createElement("p");
    textAddNumber.classList.add("guides__info-text");
    textAddNumber.textContent = infoGuide.number; //Aqui agregamos la key que guardamos dentro de nuestro objeto "infoGuide"

    containerDivNumber.appendChild(titleAddNumber);
    containerDivNumber.appendChild(textAddNumber);

    createSection.appendChild(containerDivNumber);

    /*-----------------Creacion del destinatario----------------------*/
    //Vamos a agregar los div's
    const containerDivDestinatary = document.createElement("div");
    containerDivDestinatary.classList.add("guides__container");

    const titleAddDestinatary = document.createElement("h2");
    titleAddDestinatary.classList.add("guides__info-title");
    titleAddDestinatary.textContent = "Destinatario:"; //Aqui le agregamos el nombre de nuestro titulo

    const textAddDestinatary = document.createElement("p");
    textAddDestinatary.classList.add("guides__info-text");
    textAddDestinatary.textContent = infoGuide.destinatary; //Aqui agregamos la key que guardamos dentro de nuestro objeto "infoGuide"

    containerDivDestinatary.appendChild(titleAddDestinatary);
    containerDivDestinatary.appendChild(textAddDestinatary);

    createSection.appendChild(containerDivDestinatary);

    /*-----------------Creacion del Origen----------------------*/
    //Vamos a agregar los div's
    const containerDivOrigin = document.createElement("div");
    containerDivOrigin.classList.add("guides__container");

    const titleAddOrigin = document.createElement("h2");
    titleAddOrigin.classList.add("guides__info-title");
    titleAddOrigin.textContent = "Origen:"; //Aqui le agregamos el nombre de nuestro titulo

    const textAddOrigin = document.createElement("p");
    textAddOrigin.classList.add("guides__info-text");
    textAddOrigin.textContent = infoGuide.origin; //Aqui agregamos la key que guardamos dentro de nuestro objeto "infoGuide"

    containerDivOrigin.appendChild(titleAddOrigin);
    containerDivOrigin.appendChild(textAddOrigin);

    createSection.appendChild(containerDivOrigin);

    /*-----------------Creacion del Destino----------------------*/
    //Vamos a agregar los div's
    const containerDivDestiny = document.createElement("div");
    containerDivDestiny.classList.add("guides__container");

    const titleAddDestiny = document.createElement("h2");
    titleAddDestiny.classList.add("guides__info-title");
    titleAddDestiny.textContent = "Destino:"; //Aqui le agregamos el nombre de nuestro titulo

    const textAddDestiny = document.createElement("p");
    textAddDestiny.classList.add("guides__info-text");
    textAddDestiny.textContent = infoGuide.destiny; //Aqui agregamos la key que guardamos dentro de nuestro objeto "infoGuide"

    containerDivDestiny.appendChild(titleAddDestiny);
    containerDivDestiny.appendChild(textAddDestiny);

    createSection.appendChild(containerDivDestiny);

    /*-----------------Creacion de la fecha----------------------*/
    //Vamos a agregar los div's
    const containerDivDate = document.createElement("div");
    containerDivDate.classList.add("guides__container");

    const titleAddDate = document.createElement("h2");
    titleAddDate.classList.add("guides__info-title");
    titleAddDate.textContent = "Destino:"; //Aqui le agregamos el nombre de nuestro titulo

    const textAddDate = document.createElement("p");
    textAddDate.classList.add("guides__info-text");
    textAddDate.textContent = infoGuide.date; //Aqui agregamos la key que guardamos dentro de nuestro objeto "infoGuide"

    containerDivDate.appendChild(titleAddDate);
    containerDivDate.appendChild(textAddDate);

    createSection.appendChild(containerDivDate);

    /*-----------------Creacion de la status----------------------*/
    //Vamos a agregar los div's
    const containerDivStatus = document.createElement("div");
    containerDivStatus.classList.add("guides__container");

    const titleAddStatus = document.createElement("h2");
    titleAddStatus.classList.add("guides__info-title");
    titleAddStatus.textContent = "Estado:"; //Aqui le agregamos el nombre de nuestro titulo

    const textAddStatus = document.createElement("p");
    textAddStatus.classList.add("guides__info-text");
    textAddStatus.textContent = infoGuide.status; //Aqui agregamos la key que guardamos dentro de nuestro objeto "infoGuide"

    containerDivStatus.appendChild(titleAddStatus);
    containerDivStatus.appendChild(textAddStatus);

    createSection.appendChild(containerDivStatus);

    /*Agregamos toda esta informacion al article de "guides" para que se registre la tarjeta*/
    document.querySelector(".guides").appendChild(createSection);

    void createSection.offsetWidth;

    createSection.classList.add("showGuides"); // Aqui mandamos a llamar al diseño que se vea fluido

    form.reset();
}

//Aqui le decimos que en el evento "submit" se agreguen los datos a nuestro array "data"
if(registerBtn){
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        registerGuide();
    });
};








/*-----------------Registro de datos-------------------*/
/*
Aqui vamos a mover los datos de:
    register.html --> list.html
*/

function insertGuides() {
    const storeGuides = JSON.parse(localStorage.getItem("guides")) || [];

    storeGuides.forEach(guide => {
        /*-----Aqui comenzamos creando la fila para la tabla-----*/
        const row = document.createElement("tr");
        row.classList.add("list__table-body-row")

        //Agregar el numero de serie
        const rowGuide = document.createElement("td");
        rowGuide.classList.add("list__table-body-row-info");
        rowGuide.textContent = guide.number;

        row.appendChild(rowGuide);

        //Agregar el destinatario
        const rowDestinatary = document.createElement("td");
        rowDestinatary.classList.add("list__table-body-row-info");
        rowDestinatary.textContent = guide.destinatary

        row.appendChild(rowDestinatary);

        //Agregar el origen
        const rowOrigin = document.createElement("td");
        rowOrigin.classList.add("list__table-body-row-info");
        rowOrigin.textContent = guide.origin;

        row.appendChild(rowOrigin);

        //Agregar la fecha de creacion
        const rowDateCreation = document.createElement("td");
        rowDateCreation.classList.add("list__table-body-row-info");
        rowDateCreation.textContent = guide.date;

        row.appendChild(rowDateCreation);

        //Agregar la fecha de ultima modificacion
        const rowDateModification = document.createElement("td");
        rowDateModification.classList.add("list__table-body-row-info");

        const updateDate = guide.history[guide.history.length - 1].date;
        rowDateModification.textContent = updateDate;

        row.appendChild(rowDateModification);

        //Agregar el estatus
        const rowStatusModification = document.createElement("td");
        rowStatusModification.classList.add("list__table-body-row-info")

        const updateStatus = guide.history[guide.history.length - 1].status;
        rowStatusModification.textContent = updateStatus;

        row.appendChild(rowStatusModification);

        //Agregar el boton de actualizar
        const rowButton = document.createElement("td");
        rowButton.classList.add("list__table-body-row-info");

        const addButton = document.createElement("button");
        addButton.classList.add("list__table-body-row-info--button");
        addButton.textContent = "Actualizar";

        rowButton.appendChild(addButton);

        row.appendChild(rowButton);

        //Agregar la opcion de desplegar las ultimas modifaciones
        const rowHistory = document.createElement("td");
        rowHistory.classList.add("list__table-body-row-info");

        const spanHistory = document.createElement("span");
        spanHistory.classList.add("historial");
        spanHistory.textContent = "Desplegar";

        const imgHistory = document.createElement("img");
        imgHistory.classList.add("historial__img");
        imgHistory.src = "img/arrow_down_black.svg";
        imgHistory.alt = "";

        spanHistory.appendChild(imgHistory);
        rowHistory.appendChild(spanHistory);

        row.appendChild(rowHistory);

        /*Agregamos toda esta informacion al body de la fila de la tabla*/
        document.querySelector("list__table-body").appendChild(row);

    });
}

document.addEventListener('DOMContentLoaded', () => {
    insertGuides();
});

