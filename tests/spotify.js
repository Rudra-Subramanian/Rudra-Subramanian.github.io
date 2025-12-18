let Util;

if(!Util) {
    Util = function () {};
};

Util.hasClass = function(el, className) {
  return el.classList.contains(className);
};

Util.addClass = function(el, className) {
  var classList = className.split(' ');
  el.classList.add(classList[0]);
  if (classList.length > 1) Util.addClass(el, classList.slice(1).join(' '));
};

Util.removeClass = function(el, className) {
  var classList = className.split(' ');
  el.classList.remove(classList[0]);
  if (classList.length > 1) Util.removeClass(el, classList.slice(1).join(' '));
};

Util.toggleClass = function(el, className, bool) {
  if(bool) Util.addClass(el, className);
  else Util.removeClass(el, className);
};






document.addEventListener('DOMContentLoaded', () => {


    $.getJSON("spotify_data.json", function(json) {
    console.log(json);
    //access your JSON file through the variable "json"
});


// Make HTML BASED ON DATA



//Create section
var OuterMostSection = document.createElement('section');
OuterMostSection.className = 'sticky-hero js-sticky-hero';

//create 2 inner sections
/* ------------------Background Image and date---------------------- */
//Background image section
var backgroundPictureSection = document.createElement('div');


backgroundPictureSection.className = 'sticky-hero__media';
backgroundPictureSection.ariaHidden = 'true';
backgroundPictureSection.style.backgroundImage =// "url(-----set Image URL HERE -----)"

//background date adding
var bgDate = document.createElement('h1');
bgDate.className = 'title is-4';
bgDate.innerText =// -----------SET DATE HERE -----------;

backgroundPictureSection.append(bgDate);

OuterMostSection.append(backgroundPictureSection);

/* ------------------- Content of sticky ------------------- */

// Content section
var contentSection = document.createElement('div');
contentSection.className = 'sticky-hero__content';

// Add content to content section
var contentContainer = document.createElement('div');
contentContainer.className = 'container is-widescreen';

// create columns
var contentColumns = document.createElement('div');
contentColumns.className = 'columns';
// create Song column
var contentColumn1 = document.createElement('div');
contentColumn1.className = 'column is-half has-text-centered';
var songTitle = document.createElement('h2');
songTitle.className = 'title is-3';
songTitle.innerText = "Top Songs";

contentColumn1.append(songTitle);

//card container
var cardoutside = document.createElement('div');
cardoutside.className = 'card';
var cardcontent = document.createElement('div');
cardcontent.className = 'card-content';
cardoutside.append(cardcontent);

//for each song in data

var mediaoutside = document.createElement('div');
mediaoutside.className = 'media';
var medialeft = document.createElement('div');
medialeft.className = 'media-left';
var figure = document.createElement('figure');
//STOPPED AT FIGURE



// append card to song column
contentColumn1.append(cardoutside);



//create artist column
var contentColumn2 = document.createElement('div');
contentColumn2.className = 'column is-half has-text-centered';

contentColumns.append(contentColumn1);
contentColumns.append(contentColumn2);

contentContainer.append(contentColumns);

contentSection.append(contentContainer);

OuterMostSection.append(contentSection);




// append final section to body
document.body.append(OuterMostSection);




  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });



// // utility functions
// if(!Util) function Util () {};

// Util.hasClass = function(el, className) {
//   return el.classList.contains(className);
// };

// Util.addClass = function(el, className) {
//   var classList = className.split(' ');
//   el.classList.add(classList[0]);
//   if (classList.length > 1) Util.addClass(el, classList.slice(1).join(' '));
// };

// Util.removeClass = function(el, className) {
//   var classList = className.split(' ');
//   el.classList.remove(classList[0]);
//   if (classList.length > 1) Util.removeClass(el, classList.slice(1).join(' '));
// };

// Util.toggleClass = function(el, className, bool) {
//   if(bool) Util.addClass(el, className);
//   else Util.removeClass(el, className);
// };

// File#: _1_sticky-hero
// Usage: codyhouse.co/license
/*
(function() {
    console.log('loaded sticky-hero');
	var StickyBackground = function(element) {
		this.element = element;
		this.scrollingElement = this.element.getElementsByClassName('sticky-hero__content')[0];
		this.nextElement = this.element.nextElementSibling;
		this.scrollingTreshold = 0;
		this.nextTreshold = 0;
		initStickyEffect(this);
	};

	function initStickyEffect(element) {
		var observer = new IntersectionObserver(stickyCallback.bind(element), { threshold: [0, 0.1, 1] });
		observer.observe(element.scrollingElement);
		if(element.nextElement) observer.observe(element.nextElement);
	};

	function stickyCallback(entries) {
  var bool = entries[0].intersectionRatio > 0;
  Util.toggleClass(this.element, 'sticky-hero--media-is-fixed', bool);
  console.log(this.element);
    };


	var stickyBackground = document.getElementsByClassName('js-sticky-hero'),
		intersectionObserverSupported = ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype);
	if(stickyBackground.length > 0 && intersectionObserverSupported) { // if IntersectionObserver is not supported, animations won't be triggeres
		for(var i = 0; i < stickyBackground.length; i++) {
			(function(i){ // if animations are enabled -> init the StickyBackground object
        if( Util.hasClass(stickyBackground[i], 'sticky-hero--overlay-layer') || Util.hasClass(stickyBackground[i], 'sticky-hero--scale')) new StickyBackground(stickyBackground[i]);
      })(i);
		}
	}
}());
*/

//var mydata = JSON.parse(data);
//console.log(mydata["weeks"][0]);


var StickyHero = function(element){
        this.element = element;
        this.content = this.element.getElementsByClassName('sticky-hero__content')[0];
        console.log(this.content);
        initStickyHero(this);
    };



    function initStickyHero(hero) {
        var observer = new IntersectionObserver(stickyCallback.bind(hero), {threshold: [0, 0.1, 1]});
        observer.observe(hero.content);
    };

    function stickyCallback(entries) {
        var bool = entries[0].intersectionRatio > 0;
        console.log(this.element);
        Util.toggleClass(this.element, 'sticky-hero--media-is-fixed', bool);
    };

    var stickyHeroes = document.getElementsByClassName('js-sticky-hero');
    if (stickyHeroes.length > 0) {
        for (var i = 0; i < stickyHeroes.length; i++) {
            new StickyHero(stickyHeroes[i]);
        }
    }


});






