// Select header-container

let headerContainer = document.querySelector(".header-container");

// Array
let imgsArray = ["011.jpg", "012.jpg", "013.jpg", "014.jpg"];

setInterval(() => {
    let randomNamber = Math.floor(Math.random() * imgsArray.length);

// Cahnge The Imag
    headerContainer.style.backgroundImage = 'url("image/' + imgsArray[randomNamber]+ '")';
},4000);

