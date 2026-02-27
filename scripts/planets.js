// all scripts separated by page for clarity/ease
//used ChatGPT to generate fun facts about each planet, but reworded in my own words
// also used to clarify how to display images correctly with JS
const planets = [
    {
        name: "Mercury",
        image: "../images/mercury.jpg",
        fact: "MERCURY has the shortest year of all the planets in our solar system (closest to the sun!)"
    },
    {
        name: "Venus",
        image: "../images/venus.jpg",
        fact: "Compared to most other planets, VENUS spins backwards."
    },
    {
        name: "Earth",
        image: "../images/earth.jpg",
        fact: "It may change in the future, but EARTH is the only planet known to support life."
    },
    {
        name: "Mars",
        image: "../images/mars.jpg",
        fact: "MARS contains volcanoes, one being the tallest in the solar system!"
    },
    {
        name: "Jupiter",
        image: "../images/jupiter.jpg",
        fact: "Like Alaska, most people don't know just how big JUPITER is. For starters, it can fit all the other planets inside of it with room to spare!"
    },
    {
        name: "Saturn",
        image: "../images/saturn.jpg",
        fact: "Someone liked SATURN, and put some rings on it (made of ice and rock!)"
    },
    {
        name: "Uranus",
        image: "../images/uranus.jpg",
        fact: "URANUS is like a rolling ball in that it actually rotates on its side."
    },
    {
        name: "Neptune",
        image: "../images/neptune.jpg",
        fact: "Cold, cold NEPTUNE. It would be hard to live here as it contains the strongest winds known in our solar system."
    },
];

const btn = document.getElementById("planetBtn");
const planetImg = document.getElementById("planetImg");
const planetFact = document.getElementById("planetFact");

function randPlanet() {
    const randList = Math.floor(Math.random() * planets.length); //randomize
    const planet = planets[randList];

    planetImg.src = `../images/${planet.image}`;
    planetFact.innerHTML = `${planet.fact}`;

}

btn.addEventListener("click", randPlanet);



const terrPlanets = ["Mercury", "Venus", "Earth", "Mars"]; //answer arrays/constants
const gasGiants = ["Jupiter", "Saturn"];
const iceGiants = ["Uranus", "Neptune"];

const terrBtn = document.getElementById("terrBtn"); //get buttons
const gasBtn = document.getElementById("gasBtn");
const iceBtn = document.getElementById("iceBtn");

terrBtn.addEventListener("click", () => {
    alert("Terrestrial Planets: " + terrPlanets.join(", ")); //click event, converts array to string
});
gasBtn.addEventListener("click", () => {
    alert("Gas Giants: " + gasGiants.join(", ")); // add space after comma for alert
});
iceBtn.addEventListener("click", () => {
    alert("Ice Giants: " + iceGiants.join(", "));
});
