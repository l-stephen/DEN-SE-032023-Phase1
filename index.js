const pokemons = [
  {
    id: 1,
    name: "bulbasaur",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    likes: 4,
  },
  {
    id: 2,
    name: "ivysaur",
    img: "https://images.cults3d.com/6VgkTLM1j-CTAMhEJTtsRV1z6N8=/516x516/https://files.cults3d.com/uploaders/14845535/illustration-file/5d09c257-51ed-4d65-aa36-3f9201af34c4/ivysaur.png",
    likes: 21,
  },
  {
    id: 3,
    name: "venusaur",
    img: "https://images.saymedia-content.com/.image/t_share/MTc2MjYwODQ5NTk2NTcyODYy/pokemon-venusaur-nicknames.png",
    likes: 7,
  },
  {
    id: 4,
    name: "charmander",
    img: "https://pixy.org/download/1207107/",
    likes: 20,
  },
  {
    id: 5,
    name: "charmeleon",
    img: "https://static.pokemonpets.com/images/monsters-images-800-800/5-Charmeleon.webp",
    likes: 11,
  },
];


// to get something by id we use #
// to get something by class we use .
const test2 = document.querySelector('div')
// // const test = document.querySelectorAll('div')

// // console.log(test)
// // console.log(test2)

const welcomeP = document.createElement('p')
welcomeP.innerHTML = '<span class="hello"> hello world </span>'

test2.appendChild(welcomeP)

// test2.remove(welcomeP)

// 1. Select the form element with id `poke-form` 
// using the .getElementById() method and store in the variable `pokeForm`. 

// must use .getElementById
// for is called poke-form
// assign to variable 'pokeForm'

const pokeForm = document.getElementById('poke-form')
console.log(pokeForm)

// 2. Select the div element with id `poke-container` using the .querySelector() 
// method and store in the variable `pokeContainer`.

const pokeContainer = document.querySelector('#poke-container')
console.log(pokeContainer)

// 3. Select the label elements with class name `form-label` 
// using the .getElementsByClassName() and store in the variable `labels`.
const labels = document.getElementsByClassName('form-label')
console.log(labels)

// 4. Select all the div elements 
// using the .querySelectorAll() method and store in the variable `allDivs`.
const allDivs = document.querySelectorAll('div')
console.log(allDivs)

// 5. Select the div element with id `lecture-goals` and 
// use the .remove() method to remove the element from the DOM.

const goals = document.getElementById('lecture-goals')
goals.remove()

// 6. Define a function `renderPokemon()` that will 
// generate the HTML for each character card as seen in the image below:

// <p align="center">
//     <img src="./assets/wireframe.png" width="550" height="400">
// </p>

// const welcomeP = document.createElement('p')
// welcomeP.innerHTML = '<span class="hello"> hello world </span>'

// test2.appendChild(welcomeP)

const renderPokemon = () => {
  const pokeDiv = document.querySelector('#poke-container')
  pokemons.forEach((poke) => {
    const pokeP = document.createElement('p')
    pokeP.setAttribute('align', 'center')
    pokeP.innerHTML = `<img src=${poke.img} width="550" height="400">`
    pokeDiv.appendChild(pokeP)
  })
}

renderPokemon()


// const text= '<p>hello again</p>'

// test2.appendChild(text)