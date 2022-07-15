axios.defaults.baseURL = "https://swapi.dev/api"

const ENTER_KEY_KODE = "Enter";

const wrapperPersonages = document.createElement("div");
wrapperPersonages.cla 

const btn = document.createElement("button");
btn.innerHTML = "отримати інформацію";
document.body.appendChild(btn);

const enterEpisot = document.createElement("input");
enterEpisot.setAttribute('type', 'text');
enterEpisot.setAttribute('value', 'Enter episod');
document.body.appendChild(enterEpisot);

const btnNext = document.createElement("button");
btnNext.innerHTML = "Next";
document.body.appendChild(btnNext);

enterEpisot.addEventListener("click", () => enterEpisot.value = "")
enterEpisot.addEventListener('input', (e) => {
    e.pre
    episod = e.target.value;
})

btn.addEventListener("click", getPersonage);

async function getPersonage () {
    const result = await axios.get("/people/");
    const personages = result.data.results;
    const filteredPersonages = personages.filter(item => item.films.find(item => item === `https://swapi.dev/api/films/${episod}/`));

    console.log(filteredPersonages);
}

async function getPlanets () {
    const resultPlanets = await axios.get("/planets/");
    const planets = resultPlanets.data.results;

    console.log('planets: ', planets);    
}

getPlanets ();

