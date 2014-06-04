var transitionSpeed = 500;
var intervalLength = 1500;
var initSlide = 1;
var nextSlide;
var count;
var slides;
var loop;

$(document).ready(function(){
	$('.slide:nth-of-type('+initSlide+')').show();
	startSlider();

});

function startSlider(){
//console.log("startSlider");
	count = $('.slider > .slide').size();
	slides = $('.slide');

	loop = setInterval(function(){
		setNext(initSlide + 1);
		showSlide(nextSlide);
		
	}, intervalLength);

}

function setNext(val){
	if(val > count){
		nextSlide = 1;
	}else if(val <= 0){
		nextSlide = count;
	}else{
		nextSlide = val;
	}
//console.log("setNext: " + nextSlide);
}

function showSlide(slide){
//console.log("showSlide: " + slide);

	slides.eq(initSlide - 1).toggle();
	slides.eq(slide - 1).fadeIn(transitionSpeed);

	initSlide = slide;
	setNext(slide + 1);
}

function stopSlider(){
//console.log("stopSlider");
	window.clearInterval(loop);

}

function prev(){
//console.log("prev");
	stopSlider();
	setNext(initSlide - 1);
//console.log(nextSlide);
	showSlide(nextSlide);
	startSlider();
}

function next(){
//console.log("next");
	stopSlider();
	setNext(initSlide + 1);
//console.log(nextSlide);
	showSlide(nextSlide);
	startSlider();

}