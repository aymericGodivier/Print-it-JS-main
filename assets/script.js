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
let currentIndex = 0;
let sliderText = document.getElementById("slider-text");
let sliderImage = document.querySelector(".banner-img");
let dotsContainer = document.querySelector(".dots");

function createDots(){
	for (let i = 0; i < slides.length; i++) {
		let radioButton = document.createElement("input");
		radioButton.type = "radio";
		radioButton.name = "options";
		radioButton.id = i;
		radioButton.setAttribute("aria-label", slides[i].image);
		radioButton.classList.add("dot");
		radioButton.addEventListener("click", function() {
			changeSlide(radioButton.id);
		});
		dotsContainer.appendChild(radioButton);
	}
}

createDots();

function changeSlide(index){
	let message = slides[index].tagLine;
	let imageSrc = slides[index].image;
	let imagePath = "./assets/images/slideshow/" + imageSrc;
	let buttonToCheck = document.getElementById(index);
	buttonToCheck.checked = true;
	sliderText.innerHTML = message;
	sliderImage.src = imagePath;
}

leftArrow.addEventListener("click", function() {
	currentIndex--;
	currentIndex = (currentIndex + slides.length) % slides.length;
	changeSlide(currentIndex);
});

rightArrow.addEventListener("click", function() {
	currentIndex++;
	currentIndex = (currentIndex + slides.length) % slides.length;
	changeSlide(currentIndex);
});


