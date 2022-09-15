axios.defaults.baseURL = "https://swapi.dev/api";

const btn = document.querySelector(".btn");
const enterEpisot = document.querySelector(".input");
const btnNext = document.querySelector(".btnNext");
const btnPrev = document.querySelector(".btnPrev");
const container = document.querySelector(".container");
const wookiee = document.querySelector(".checkbox");
const pageNum = document.querySelector(".pageForPlanet");

enterEpisot.addEventListener("input", (e) => {
  episod = e.target.value;
});

btn.addEventListener("click", getPersonage);
btnNext.addEventListener("click", next);
btnPrev.addEventListener("click", prev);

let wookieeLang = wookiee.checked;
// console.log('wookieeLang: ', wookieeLang)

wookiee.addEventListener("change", (e)=>{
  wookieeLang = e.target.checked  
});


async function getPersonage() {
  const result = await axios.get(`/films/${episod}/`);
  const characters = result.data.characters;  
  container.innerHTML=""  
  for(i=0; i<=characters.length; i++){
      renderPersonages(characters[i])
  }   
}

async function renderPersonages (personage){
    const characterData = await axios.get(`${personage}${!wookieeLang? '':'?format=wookiee'}`);
    const pesronData = characterData.data
    container.innerHTML += `
      <div class="person">
          <h3>${!wookieeLang? pesronData.name:pesronData.whrascwo}</h3>
          <p>DOB: ${!wookieeLang? pesronData.birth_year:pesronData.rhahrcaoac_roworarc}</p>
          <p>Gender: ${!wookieeLang? pesronData.gender:pesronData.rrwowhwaworc}</p>
      </div>
    `;     
}

let page = 1
pageNum.innerHTML+=`page: ${page} `

function next(){
  pageNum.innerHTML=''
  page===6? page : page+=1
  pageNum.innerHTML+=`page: ${page} `
  getPlanets(page)
}

function prev(){
  pageNum.innerHTML=''
  page===1? page : page-=1
  pageNum.innerHTML+=`page: ${page} `
  getPlanets(page)
}


async function getPlanets(page) {  
  const resultPlanets = await axios.get(`/planets/?page=${page}`);
  const planets = resultPlanets.data.results;
  container.innerHTML="" 
  for(i=0; i<=9; i++){
    container.innerHTML += `
      <div class="person">
          <h3>${planets[i].name}</h3>
          <p>diameter: ${planets[i].diameter}</p>
          <p>gravity: ${planets[i].gravity}</p>
      </div>
    `;     
  }


  console.log("planets: ", resultPlanets);
}
