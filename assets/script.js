const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let leftArrow = document.getElementById("arrow-left");
let rightArrow = document.getElementById("arrow-right");
let currentIndex = 1;
let sliderText = document.getElementById("slider-text");
let sliderImage = document.getElementsByClassName("banner-img")[0];

function changeText(index){
	let message = slides[index].tagLine;
	sliderText.innerHTML = message;
}

function changeImage(index){
	let imageSrc = slides[index].image;
	let imagePath = "./assets/images/slideshow/" + imageSrc;
	sliderImage.src = imagePath;
}

leftArrow.addEventListener("click", function() {
	currentIndex--;
	if(currentIndex<0){
		currentIndex = slides.length-1;
	}
	changeImage(currentIndex);
    changeText(currentIndex);
});

rightArrow.addEventListener("click", function() {
	currentIndex++;
	if(currentIndex>slides.length-1){
		currentIndex = 0;
	}
	changeImage(currentIndex);
    changeText(currentIndex);
});


