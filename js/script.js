"use strict";

/*

x-Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

x-MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

x-MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto

x-MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

xx-BONUS 1:
Trasformare la stringa foto in una immagine effettiva

x-BONUS 2:
Organizzare i singoli membri in card/schede e stilarli a vostro gusto 

x-BONUS 3:
Aggiungere attraverso un form un membro al team


<div class="row justify-content-center gx-3 mt-2">
        <div class="my-card">
          <div class="w-25 py-2">
            <img class="w-100" src="img/angela-caroll-chief-editor.jpg" alt="">
          </div>
          <div class="my-text-card text-start p-2 w-75">
            <h3>Name: Rocco Marino</h3>
            <h4>Role: Meccanico</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam </p>
          </div>
        </div>
        
*/



// i create the uorTeam array
const ourTeam = [
    {
        id: 1,
        nome: "Wayne",
        surname: "Barnet",
        role: "Chief EditorFounder & Ceo",
        image: "wayne-barnett-founder-ceo.jpg"
    },
    {
        id: 2,
        nome: "Angela",
        surname: "Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        id: 3,
        nome: "Walter",
        surname: "Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },
    {
        id: 4,
        nome: "Angela",
        surname: "Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },
    {
        id: 5,
        nome: "Scott",
        surname: "Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },
    {
        id: 6,
        nome: "Barbara",
        surname: "Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    }
]

const contForm = document.getElementById('cont-form');
// i associate a constant with my div
const myContainerHTML = document.getElementById('my-container');
//i associate a costant with my button
const btnJoinHTML = document.getElementById('join-btn');


//i print the information of the members team in the console
for (let i = 0; i < ourTeam.length; i++) {
    console.log(
        `
        id : ${ourTeam[i].id}
        nome : ${ourTeam[i].nome}
        surname : ${ourTeam[i].surname}
        role : ${ourTeam[i].role}
        image : ${ourTeam[i].image}
        `
    )
}

//function that creates the card
const generatorCard = function (i) {
    const cards = document.createElement('div');
    cards.classList.toggle('my-card');
    cards.innerHTML = `
    <div class="w-25 py-2">
        <img class="w-100" src="img/${ourTeam[i].image}" alt="${ourTeam[i].nome} ${ourTeam[i].surname}">
    </div>
    <div class="my-text-card text-start p-2 w-75">
        <h3>Name: ${ourTeam[i].nome} ${ourTeam[i].surname}</h3>
        <h4>Role: ${ourTeam[i].role} </h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam </p>
    </div>
    `
    return cards;
}

// function that creates the row
const generatorRow = function() {
    const wrapper = document.createElement('div');
    wrapper.classList.add("row", "justify-content-center", "gx-3", "mt-2");
    for( let i = 0; i < ourTeam.length; i++){
        const cards = generatorCard(i);
        wrapper.appendChild(cards);
    }
    myContainerHTML.appendChild(wrapper);
}

generatorRow();

//function that creates the div my-form
const generetaForm = function() {
    const myDivForm = document.createElement('div');
    myDivForm.setAttribute("id","my-form");
    myDivForm.innerHTML =`
        <label for="nome">Insert your name</label>
        <input type="text" name="nome" id="nome">
        <span id="nome-span"></span>
        <label for="surname">Insert your surname</label>
        <input type="text" name="surname" id="surname">
        <span id="surname-span"></span>
        <label for="nome">Insert your role</label>
        <input type="text" name="role" id="role">
        <span id="role-span"></span>
        <button id="send-btn" class="my-btn mt-4">Send</button>
        `
    contForm.appendChild(myDivForm);
}

// function that operate on the button send
const eventSend = function (){

    //i take the user data
    let nomeUtenteInput = document.getElementById('nome');
    let nomeUtente = nomeUtenteInput.value;
    const nomeUtenteCap =  capitalizeFirstLetter(nomeUtente);
    const spanNome =document.getElementById('nome-span');
    //I warn the user if he has not entered the name
    if(nomeUtente == ''){
        spanNome.innerText ='Insert a name!';
    } else {
        spanNome.innerText ='';
    }

    const surnameUtente = document.getElementById('surname').value;
    const surnameUtenteCap =  capitalizeFirstLetter(surnameUtente);
    const spanSurname =document.getElementById('surname-span');
    if(surnameUtente == ''){
        spanSurname.innerText ='Insert a surname!';
    } else {
        spanSurname.innerText ='';
    }

    const roleUtente = document.getElementById('role').value;
    const roleUtenteCap =  capitalizeFirstLetter(roleUtente);
    const spanRole =document.getElementById('role-span');
    if(roleUtente == ''){
        spanRole.innerText ='Insert a role!';
    } else {
        spanRole.innerText ='';
    }

    //if the user has filled in all the inputs i push a new object in the array with the user data
    if(!(nomeUtente == '') && !(surnameUtente == '') && !(role == '')){
    ourTeam.unshift({id: (parseInt(ourTeam.length) + 1) ,nome: nomeUtenteCap, surname: surnameUtenteCap, role: roleUtenteCap})
    console.log(ourTeam);
    
    //I make the div form disappear
    const myDivForm = document.getElementById('my-form');
    myDivForm.classList.add("d-none");
    }
}

//function that operate on the button join
const eventJoin = function () {
    clearDiv(contForm);
    generetaForm();
    const btnSend = document.getElementById('send-btn');

    //i associe an event on the button located in the div form that i just created
    btnSend.addEventListener('click', eventSend)
}

// i add an event on join button
btnJoinHTML.addEventListener('click', eventJoin)






