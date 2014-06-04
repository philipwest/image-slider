var initSlide = 1;
var nextSlide = initSlide + 1;
var count;
var slides;
var loop;

$(document).ready(function(){
	$('.slide:nth-of-type('+initSlide+')').fadeIn(300);
	startSlider();

});

function startSlider(){
	count = $('.slider > .slide').size();
	slides = $('.slide');

	loop = setInterval(function(){
		if(nextSlide > count){
			nextSlide = 1;
		}else if(nextSlide < 0){
			nextSlide = count;
		}
		
		showSlide(nextSlide);

	}, 1200);

}

function showSlide(slide){

	slides.eq(initSlide - 1).toggle();
	slides.eq(slide - 1).fadeIn(500);

	initSlide = slide;
	nextSlide = slide + 1;

}

function stopSlider(){
	window.clearInterval(loop);

}

function prev(){
	stopSlider();
	nextSlide = initSlide - 1;
//	console.log(nextSlide);
	showSlide(nextSlide);
	startSlider();
}

function next(){
	stopSlider();
	nextSlide = initSlide + 1;
//	console.log(nextSlide);
	showSlide(nextSlide);
	startSlider();

}