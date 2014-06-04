var sliderId = '#slider';
var slideClass = '.slide';
var transitionSpeed = 500;
var intervalLength = 1500;
var initSlide = 1;
var nextSlide;
var count;
var slides;
var loop;

$(document).ready(function(){
	$('#slider .slide:nth-of-type(1)').show();	//show initial slide
	startSlider();												//start slider and begin to loop
	setHoverPause('#slider, .controls > a');					//set a pause on hover for slider on given selectors
});

function startSlider(){

	stopSlider();	//prevents multiple instances of the 'startSlider' loop from running if called multiple times
	
	slides = $(sliderId + ' ' + slideClass);	//get all slides in slider
	count = slides.size();						//get number of slides present

	loop = setInterval(function(){
		setNext(initSlide + 1);
		showSlide(nextSlide);
		
	}, intervalLength);

}

function stopSlider(){

	window.clearInterval(loop);

}

function setNext(val){
	
	if(val > count){
		nextSlide = 1;
	}else if(val <= 0){
		nextSlide = count;
	}else{
		nextSlide = val;
	}
	
}

function showSlide(slide){

	slides.eq(initSlide - 1).toggle();
	slides.eq(slide - 1).fadeIn(transitionSpeed);

	initSlide = slide;
	setNext(slide + 1);
}



function prev(){

	stopSlider();
	
	setNext(initSlide - 1);
	showSlide(nextSlide);
	
//	startSlider(); 	//commented out to prevent slide from changing when selecting through
}

function next(){

	stopSlider();

	setNext(initSlide + 1);
	showSlide(nextSlide);
	
//	startSlider();	//commented out to prevent slide from changing when selecting through

}

function setHoverPause(selector){
	$(selector).hover(function(){
		stopSlider();
	},function(){
		startSlider();
	});
}