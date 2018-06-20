const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")
const planetList = document.createElement("ul")
planets.forEach((planet) => {
    const planetWhat = document.createElement("li")
    planetWhat.innerHTML = planet
    planetList.appendChild(planetWhat)
})
planetEl.appendChild(planetList)
/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const capitalPlanets =  planets.map( (planet) => {
    return planet.charAt(0).toUpperCase() + planet.slice(1)
})
console.log(capitalPlanets);


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const plusE = planets.filter(planet => {
    const plusEto = planet.toLowerCase().includes("e")
    return plusEto
})
console.log(plusE)

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

const combineSentence = words.reduce( (wholeSentence, currentVal) => {
    return `${wholeSentence} ${currentVal}`
})
console.log(combineSentence)