// all scripts separated by page for clarity/ease
// all information from NASA (in my own words): https://science.nasa.gov/solar-system/moons/facts/
const moons = [
    {
        name: "Europa", type: "icy", info: "Europa is a Jupiter moon that contains a frozen ocean, which will be explored in the future by NASA's Europa Clipper."
    },
    {
        name: "Miranda", type: "icy", info: "Miranda is Uranus' most unusual moon, as its rough appearance shows past impacts with other rocky structures."
    },
    {
        name: "Triton", type: "icy", info: "Not to be confused with Saturn's Titan, Triton orbits backwards (like Io) around Neptune and is as large as Pluto."
    },
    {
        name: "Io", type: "volcanic", info: "Io is another one of Jupiter's massive moons and orbits backwards (opposite to Jupiter's)."
    },
    {
        name: "Titan", type: "volcanic", info: "Titan is one of Saturn's moons that contains an ocean beneath the surface, and lakes of ethane and methane on the surface."
    },
    {
        name: "Callisto", type: "rocky", info: "Callisto is another one of Jupiter's gigantic moons and though it contains around 50% ice and 50% rock, it is classified as rocky."
    }
];

const btn = document.getElementById("moonBtn");
const moonName = document.getElementById("moonName");
const moonDesc = document.getElementById("moonDesc");
const moonType = document.getElementById("moonType");

btn.addEventListener("click", showMoon);

function showMoon() {
    const randList = Math.floor(Math.random() * moons.length);

    for (let i = 0; i < moons.length; i++) { /* for loop - lsn 7, i++ = i+1 */
        if (i === randList) {
            moonName.textContent = moons[i].name;
            moonDesc.textContent = moons[i].info;

            if (moons[i].type === "icy") {
                moonType.textContent = "Icy"; /* displays type as text in bottom element */
            }
            else if (moons[i].type === "volcanic") {
                moonType.textContent = "Volcanic";
            }
            else if (moons[i].type === "rocky") {
                moonType.textContent = "Rocky";
            }

        }
    }
}