const au = "https://dog.ceo/api/breeds/image/random";
let img = document.querySelector("#dog");
let btn = document.querySelector("#new");
var bd = document.querySelector("#breed")
var result;
var breed;
btn.addEventListener("click", async function(){
    result = await fetch(au);
    let data = await result.json();
    img.src = data.message;
    breed = data.message;
    breed = breed.split("/");
    breed = breed[4];
    breed = breed.replace("-", " ");  
    breed = breed.charAt(0).toUpperCase() + breed.slice(1);
    breed = "Breed: " + breed;
    bd.innerText = breed;
    }
)
