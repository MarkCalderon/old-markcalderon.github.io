/* ---------------------------------------
VIEWPORT
----------------------------------------*/
function viewport(){
    var _ua = (function(u){
      return {
        Tablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1) 
          || u.indexOf("ipad") != -1
          || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1)
          || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1)
          || u.indexOf("kindle") != -1
          || u.indexOf("silk") != -1
          || u.indexOf("playbook") != -1,
        Mobile:(u.indexOf("windows") != -1 && u.indexOf("phone") != -1)
          || u.indexOf("iphone") != -1
          || u.indexOf("ipod") != -1
          || (u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
          || (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1)
          || u.indexOf("blackberry") != -1
      }
    })(window.navigator.userAgent.toLowerCase());

    if(_ua.Mobile){
        // for this code only apply mobile
        $("meta[name='viewport']").attr('content', 'width=768, initial-scale=0.4');
    }
}

/* ---------------------------------------
SWIPER FUNCTION
----------------------------------------*/
function loadSwiper() {
  	var swiper = new Swiper('.section02__inner__gallery', {
	  	autoplay: {
	  		delay: 2000,
	  		disableOnInteraction: false,
	  	},
      loop: true,
      autoHeight: true,
      slidesPerGroup: 1,
      slidesPerView: 5,
      spaceBetween: 0,
	});
}

/* ---------------------------------------
EVENT HANDLER: ON READY
----------------------------------------*/
$(function() {
	loadSwiper();
	// viewport();
});

/* ---------------------------------------
EVENT HANDLER: ON LOAD
----------------------------------------*/
$(window).on('load', function(){
}); 

/* ---------------------------------------
EVENT HANDLER: ON SCROLL 
----------------------------------------*/
$(window).scroll(function(){
}); 

/* ---------------------------------------
EVENT HANDLER: ON RESIZE 
----------------------------------------*/
$(window).on('resize', function(){ 
}); 

/* ---------------------------------------
EVENT HANDLER: ON LOAD RESIZE
----------------------------------------*/
$(window).on('load resize', function(){
}); 

