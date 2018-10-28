let slides = document.querySelectorAll('.people_slide');
let nextSlides = document.getElementById('slide_right_people');
let prevSlides = document.getElementById('slide_left_people');
let currentSlides = 0;
function clearActives (){
	for(i = 0; i < slides.length; i++){
		slides[i].classList.remove('active');
	}
}
nextSlides.addEventListener('click', function (){
	clearActives();
	currentSlides = (currentSlides + 1) % slides.length;
	slides[currentSlides].classList.add('active');
})
prevSlides.addEventListener('click', function (){
	clearActives();
	currentSlides == 0 ? currentSlides = 4 : currentSlides = (currentSlides - 1) % slides.length;
	slides[currentSlides].classList.add('active');
})
