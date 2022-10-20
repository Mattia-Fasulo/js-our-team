"use strict";

/*

Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede e stilarli a vostro gusto :faccia_leggermente_sorridente:
BONUS 3:
Aggiungere attraverso un form un membro al team

*/

// i create the uorTeam array
const ourTeam = [
    {
        "nome" : "Wayne",
        "surname" : "Barnet",
        "role" : "Chief EditorFounder & Ceo",
        "image" : "wayne-barnett-founder-ceo.jpg"
    },
    {
        "nome" : "Angela",
        "surname" : "Caroll",
        "role" : "Chief Editor",
        "image" : "angela-caroll-chief-editor.jpg"
    }, 
    {
        "nome" : "Walter",
        "surname" : "Gordon",
        "role" : "Office Manager",
        "image" : "walter-gordon-office-manager.jpg"
    },
    {
        "nome" : "Angela",
        "surname" : "Lopez",
        "role" : "Social Media Manager",
        "image" : "angela-lopez-social-media-manager.jpg"
    },
    {
        "nome" : "Scott",
        "surname" : "Estrada",
        "role" : "Developer",
        "image" : "scott-estrada-developer.jpg"
    },
    {
        "nome" : "Barbara",
        "surname" : "Ramos",
        "role" : "Graphic Designer",
        "image" : "barbara-ramos-graphic-designer.jpg"
    },
]
console.log(ourTeam);