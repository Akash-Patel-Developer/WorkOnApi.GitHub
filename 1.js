const url = 'https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';

let joke = document.querySelector(".Joke");
let btn = document.querySelector("button");

let mkjoke = () => {
    fetch(url)
    .then(e => e.json())
    .then(i => {
        // joke.textContent = `${i.joke}`;
        console.log(i);
        if(i.joke){
            // console.log("hllo joke");
            joke.textContent = `${i.joke}`
        }else{
            // console.log("hllo setup");
            // console.log(i.joke);
            joke.textContent = `${i.setup}`
        }
    });
}
// mkjoke();
btn.addEventListener('click',()=>{
    
    mkjoke();
})