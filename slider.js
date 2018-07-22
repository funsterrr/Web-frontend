$(document).ready(function(){
	$('.next').click(function (){
		var currentImage = $('.img.curry');
		var currentImageIndex = $('.img.curry').index();
		var nextImageIndex = currentImageIndex + 1;
		var nextImage = $('.img').eq(nextImageIndex);
		currentImage.removeClass('curry');
		
		if(nextImageIndex == ($('.img:last').index()+1)){
			$('.img').eq(0).addClass('curry');
		}
		else{
			nextImage.addClass('curry');
		}
	})
	$('.prev').click(function(){
		var currentImage = $('.img.curry');
		var currentImageIndex = $('.img.curry').index();
		var prevImageIndex = currentImageIndex - 1;
		var prevImage = $('.img').eq(prevImageIndex);
		currentImage.removeClass('curry');
		prevImage.addClass('curry');
	})
	})
