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
        addButton.dataset.number = guide.number; // Aqui le creamos el identificador al boton

        rowButton.appendChild(addButton);

        row.appendChild(rowButton);

        //Agregar la opcion de desplegar las ultimas modifaciones
        const rowHistory = document.createElement("td");
        rowHistory.classList.add("list__table-body-row-info");

        const spanHistory = document.createElement("span");
        spanHistory.classList.add("historial");

        //Aqui agregamos el evento para mostrar el historial de modificaciones de guia
        spanHistory.addEventListener('click', () => { // Evento de mostrar el historial de actualizaciones
            //mostrarHistorial(guide, row);
        });

        spanHistory.textContent = "Desplegar";

        const imgHistory = document.createElement("img");
        imgHistory.classList.add("historial__img");
        imgHistory.src = "img/arrow_down_black.svg";
        imgHistory.alt = "";

        imgHistory.addEventListener('click', () => {
            mostrarHistorial(guide, row);
            imgHistory.classList.toggle("rotate");
        });

        spanHistory.appendChild(imgHistory);
        rowHistory.appendChild(spanHistory);

        row.appendChild(rowHistory);

        /*Agregamos toda esta informacion al body de la fila de la tabla*/
        const tbody = document.querySelector(".list__table-body");
        tbody.appendChild(row);

        /*Modificar el estatus de las guias*/
        document.querySelectorAll(".list__table-body-row-info--button").forEach(button => {
            button.addEventListener('click', () => {
                const number = button.dataset.number;
                actualizarGuia(number, button);
            });
        });

    });
}


/*
Esta funcion nos permite actualizar las guias:
    Lo que hacemos es que cambiamos con cada click el status
    pendiente -> transito -> entregado
    Para con esto poder ir cambiando entre cada uno
*/
function actualizarGuia(number, button) {
    const storeGuides = JSON.parse(localStorage.getItem("guides")) || []; //Aqui mandamos a llamar a nuestro array que creamos en nuestro register.html
    const guideIndex = storeGuides.findIndex(guide => guide.number === number);
    const guide = storeGuides[guideIndex];

    const estados = ["pendiente", "transito", "entregado"];
    const currentEstadoIndex = estados.indexOf(guide.history[guide.history.length - 1].status);
    const nuevoEstado = estados[currentEstadoIndex + 1];

    guide.status = nuevoEstado;

    guide.history.push({ //Aqui cargamos la modificacion previa en el objeto que esta dentro de nuestro objeto guides
        date: new Date().toLocaleString(),
        status: nuevoEstado
    });

    storeGuides[guideIndex] = guide;
    localStorage.setItem("guides", JSON.stringify(storeGuides));

    const row = button.closest("tr");

    //Aqui agregamos el nuevo estado a la tabla en la fila que deseamos
    row.querySelectorAll(".list__table-body-row-info")[5].textContent = nuevoEstado;
    //Aqui agregamos la fecha de modificacion en automatico con el metodo de "date"
    row.querySelectorAll(".list__table-body-row-info")[4].textContent = guide.history[guide.history.length -1].date;
}


function mostrarHistorial(guide, row) {
    const nextRow = row.nextElementSibling;

    if(nextRow && nextRow.classList.contains("historial-row")) {
        nextRow.remove();
        return;
    }

    const historialRow = document.createElement("tr");
    historialRow.classList.add("historial-row");

    const historialContent = document.createElement("td");
    historialContent.colSpan = 8;
    historialContent.classList.add("list__table-body-row-info");

    const ul = document.createElement("ul");
    ul.classList.add("list__table-body-row-info-historial");
    ul.style.listStyle = "none";
    ul.style.padding = "0";

    guide.history.forEach(entry => {
        const li = document.createElement("li");
        li.classList.add("list__table-body-row-info-content");
        li.textContent = `${entry.date} - ${entry.status}`;
        ul.appendChild(li);
    });

    historialContent.appendChild(ul);
    historialRow.appendChild(historialContent);

    row.parentNode.insertBefore(historialRow, row.nextSibling);

}

document.addEventListener('DOMContentLoaded', () => {
    insertGuides();
});

