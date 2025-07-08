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

const data = []; //Aqui vamos agregando toda la informacion de la guia

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

    data.push(infoGuide);

    if(!infoGuide.number || !infoGuide.destinatary || !infoGuide.origin || !infoGuide.destiny || !infoGuide.date  || !infoGuide.status) {
        alert("Favor de ingresar todos los datos el formulario");
        return;
    };


    /*Aqui creamos el section que va a ser para la tarjeta*/
    const createSection = document.createElement("section");
    createSection.setAttribute("class","guides__info");
    createSection.classList.add("guides__info");

    /*-----------------Creacion del numero de guia----------------------*/
    //Vamos a agregar los div's
    const containerDivNumber = document.createElement("div");
    containerDivNumber.setAttribute("class", "guides__container");
    containerDivNumber.classList.add("guides__container");

    const titleAddNumber = document.createElement("h2");
    titleAddNumber.setAttribute("class","guides__info-title");
    titleAddNumber.classList.add("guides__info-title");
    titleAddNumber.textContent = "Numero de guia:"; //Aqui le agregamos el nombre de nuestro titulo

    const textAddNumber = document.createElement("p");
    textAddNumber.setAttribute("class","guides__info-text");
    textAddNumber.classList.add("guides__info-text");
    textAddNumber.textContent = infoGuide.number; //Aqui agregamos la key que guardamos dentro de nuestro objeto "infoGuide"

    containerDivNumber.appendChild(titleAddNumber);
    containerDivNumber.appendChild(textAddNumber);

    createSection.appendChild(containerDivNumber);

    /*-----------------Creacion del destinatario----------------------*/
    //Vamos a agregar los div's
    const containerDivDestinatary = document.createElement("div");
    containerDivDestinatary.setAttribute("class", "guides__container");
    containerDivDestinatary.classList.add("guides__container");

    const titleAddDestinatary = document.createElement("h2");
    titleAddDestinatary.setAttribute("class","guides__info-title");
    titleAddDestinatary.classList.add("guides__info-title");
    titleAddDestinatary.textContent = "Destinatario:"; //Aqui le agregamos el nombre de nuestro titulo

    const textAddDestinatary = document.createElement("p");
    textAddDestinatary.setAttribute("class","guides__info-text");
    textAddDestinatary.classList.add("guides__info-text");
    textAddDestinatary.textContent = infoGuide.destinatary; //Aqui agregamos la key que guardamos dentro de nuestro objeto "infoGuide"

    containerDivDestinatary.appendChild(titleAddDestinatary);
    containerDivDestinatary.appendChild(textAddDestinatary);

    createSection.appendChild(containerDivDestinatary);

    /*-----------------Creacion del Origen----------------------*/
    //Vamos a agregar los div's
    const containerDivOrigin = document.createElement("div");
    containerDivOrigin.setAttribute("class", "guides__container");
    containerDivOrigin.classList.add("guides__container");

    const titleAddOrigin = document.createElement("h2");
    titleAddOrigin.setAttribute("class","guides__info-title");
    titleAddOrigin.classList.add("guides__info-title");
    titleAddOrigin.textContent = "Origen:"; //Aqui le agregamos el nombre de nuestro titulo

    const textAddOrigin = document.createElement("p");
    textAddOrigin.setAttribute("class","guides__info-text");
    textAddOrigin.classList.add("guides__info-text");
    textAddOrigin.textContent = infoGuide.origin; //Aqui agregamos la key que guardamos dentro de nuestro objeto "infoGuide"

    containerDivOrigin.appendChild(titleAddOrigin);
    containerDivOrigin.appendChild(textAddOrigin);

    createSection.appendChild(containerDivOrigin);

    /*-----------------Creacion del Destino----------------------*/
    //Vamos a agregar los div's
    const containerDivDestiny = document.createElement("div");
    containerDivDestiny.setAttribute("class", "guides__container");
    containerDivDestiny.classList.add("guides__container");

    const titleAddDestiny = document.createElement("h2");
    titleAddDestiny.setAttribute("class","guides__info-title");
    titleAddDestiny.classList.add("guides__info-title");
    titleAddDestiny.textContent = "Destino:"; //Aqui le agregamos el nombre de nuestro titulo

    const textAddDestiny = document.createElement("p");
    textAddDestiny.setAttribute("class","guides__info-text");
    textAddDestiny.classList.add("guides__info-text");
    textAddDestiny.textContent = infoGuide.destiny; //Aqui agregamos la key que guardamos dentro de nuestro objeto "infoGuide"

    containerDivDestiny.appendChild(titleAddDestiny);
    containerDivDestiny.appendChild(textAddDestiny);

    createSection.appendChild(containerDivDestiny);

    /*-----------------Creacion de la fecha----------------------*/
    //Vamos a agregar los div's
    const containerDivDate = document.createElement("div");
    containerDivDate.setAttribute("class", "guides__container");
    containerDivDate.classList.add("guides__container");

    const titleAddDate = document.createElement("h2");
    titleAddDate.setAttribute("class","guides__info-title");
    titleAddDate.classList.add("guides__info-title");
    titleAddDate.textContent = "Destino:"; //Aqui le agregamos el nombre de nuestro titulo

    const textAddDate = document.createElement("p");
    textAddDate.setAttribute("class","guides__info-text");
    textAddDate.classList.add("guides__info-text");
    textAddDate.textContent = infoGuide.date; //Aqui agregamos la key que guardamos dentro de nuestro objeto "infoGuide"

    containerDivDate.appendChild(titleAddDate);
    containerDivDate.appendChild(textAddDate);

    createSection.appendChild(containerDivDate);

    /*-----------------Creacion de la status----------------------*/
    //Vamos a agregar los div's
    const containerDivStatus = document.createElement("div");
    containerDivStatus.setAttribute("class", "guides__container");
    containerDivStatus.classList.add("guides__container");

    const titleAddStatus = document.createElement("h2");
    titleAddStatus.setAttribute("class","guides__info-title");
    titleAddStatus.classList.add("guides__info-title");
    titleAddStatus.textContent = "Estado:"; //Aqui le agregamos el nombre de nuestro titulo

    const textAddStatus = document.createElement("p");
    textAddStatus.setAttribute("class","guides__info-text");
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
