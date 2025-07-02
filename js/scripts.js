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
        status: statusGuide.value
    };

    data.push(infoGuide);

    alert("Se agrego correctamente la guia");
    console.log(data)
}

//Aqui le decimos que en el evento "submit" se agreguen los datos a nuestro array "data"
form.addEventListener('submit', (e) => {
    e.preventDefault;
    registerGuide();
});
