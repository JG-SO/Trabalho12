const limit = 10;
const offset = 0;
const url = `https://swapi.dev/api/people/`;

function convertPersonagemToLi(personagem){
    return `
    <li class="personagem">
        <div class="number"></div>
        <h4 class="name">${personagem.name}</h4>
        <div class="detail">
            <div class="type">Data de nascimento:${personagem.birth_year}</div>
            <div class="type">Genero:${personagem.gender}</div>
        </div>
        <img src=>
            </div>
        </li>
    `
}

const personagemList = document.getElementById("personagemList");

fetch(url)
    .then((response) => response.json())
    .then((listaPersonagem)=> listaPersonagem.results)
    .then((list)=> personagemList.innerHTML = list.map(convertPersonagemToLi)).join("")
    .catch((error) => console.log(error));