const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["cat.jpg","flowers.jpg","brush.jpg","branches.jpg"];

myButton.addEventListener('click', changeImage);

function changeImage() {
    
    let randomIndex = Math.floor(Math.random() * images.length);
    image.src = "img/" + images[randomIndex]

   
}

