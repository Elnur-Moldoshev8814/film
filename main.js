const API_KEY = "8c8e1a50-6322-4135-8875-5d40a5420d86"; 
const API_URL_POPULAR = 
  "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1"; 
const API_URL_SEARCH = 
  "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword="; 
 
getMovies(API_URL_POPULAR); 
 
async function getMovies(url) { 
  const resp = await fetch(url, { 
    headers: { 
      "Content-Type": "application/json", 
      "X-API-KEY": API_KEY, 
    }, 
  }); 
  const respData = await resp.json(); 
  console.log(respData) 
  showMovies(respData); 
} 
 
 
 
function showMovies(data) { 
  const moviesEl = document.querySelector(".movies"); 
 
  document.querySelector('.movies').innerHTML = '' 
   
 
  data.films.forEach((el) => { 
    const movieEl = document.createElement("div"); 
    movieEl.classList.add('movie'); 
    movieEl.innerHTML = ` 
        <div class="movie__cover-inner"> 
         <img 
          src="${el.posterUrlPreview}" 
          class="movie__cover" 
          alt="" 
         /> 
          <div class="movie__cover--darkened"></div> 
        </div> 
      
        <div class="movie__info"> 
        <div class="movie__title">${el.nameRu}</div> 
        <div class="movie__category">${el.genres.map( 
          (genre) =>  `${genre.genre} `
        )}</div> 
       </div> 
        `; 
    moviesEl.appendChild(movieEl); 
  }); 
} 
 
const form = document.querySelector('form'); 
const search = document.querySelector('.header__search'); 
 
form.addEventListener('submit',(e) => { 
        e.preventDefault(); 
       const apiSearch = `${API_URL_SEARCH}${search.value}`; 
  
 
        if(search.value){ 
           getMovies(apiSearch); 
 
          search.value = "" 
        } 
 
})


function abc() {
    let a = [1, 2, 3, 4, 5];
    console.log(a);
    let b = a.reverse()
    console.log(b);
    let c =a.concat(b)
    return console.log(c);
}
abc()