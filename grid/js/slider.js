let sections = document.querySelectorAll('.news_section');
let nextSlide = document.getElementById('slide_right');
let prevSlide = document.getElementById('slide_left');
let buttons = document.querySelectorAll('.btn_slider');
let currentSlide = 0;
function btnStart(n){
	clearActive();
	currentSlide = n;
	sections[n].classList.add('active');
	buttons[n].classList.add('active');
}
function clearActive (){
	for(i = 0; i < sections.length; i++){
		sections[i].classList.remove('active');
		buttons[i].classList.remove('active');
	}
}
nextSlide.addEventListener('click', function (){
	clearActive();
	currentSlide = (currentSlide + 1) % sections.length;
	sections[currentSlide].classList.add('active');
	buttons[currentSlide].classList.add('active');
})
prevSlide.addEventListener('click', function (){
	clearActive();
	currentSlide == 0 ? currentSlide = 2 : currentSlide = (currentSlide - 1) % sections.length;
	sections[currentSlide].classList.add('active');
	buttons[currentSlide].classList.add('active');
})
