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

    CreateCards(json);

    var StickyHero = function(element){
        this.element = element;
        this.content = this.element.getElementsByClassName('sticky-hero__content')[0];
        //console.log(this.content);
        initStickyHero(this);
    };



    function initStickyHero(hero) {
        var observer = new IntersectionObserver(stickyCallback.bind(hero), {threshold: [0, 0.1, 1]});
        observer.observe(hero.content);
    };

    function stickyCallback(entries) {
        var bool = entries[0].intersectionRatio > 0;
        //console.log(this.element);
        Util.toggleClass(this.element, 'sticky-hero--media-is-fixed', bool);
    };

    var stickyHeroes = document.getElementsByClassName('js-sticky-hero');
    if (stickyHeroes.length > 0) {
        for (var i = 0; i < stickyHeroes.length; i++) {
            new StickyHero(stickyHeroes[i]);
        }
    }


});
    //access your JSON file through the variable "json"
});


// Make HTML BASED ON DATA

function CreateCards(data){

  console.log(data);
  for (var i=0; i< data["weeks"].length; i++){

    CreateSection(data["weeks"][i], data);
  }
  

}

//Create section

function CreateSection(weekdata, json){
  console.log(weekdata);
  var OuterMostSection = document.createElement('section');
  OuterMostSection.classList.add('sticky-hero', 'js-sticky-hero');

  //create 2 inner sections
  /* ------------------Background Image and date---------------------- */
  //Background image section
  var backgroundPictureSection = document.createElement('div');


  backgroundPictureSection.classList.add('sticky-hero__media');
  backgroundPictureSection.ariaHidden = 'true';
  
  var main_artist = json[weekdata['songs'][0]['artist']]
  for (var j=0; j< main_artist.length; j++){
    if (main_artist[j]['Song'] == weekdata['songs'][0]['title']){
      console.log(main_artist[j]['Image']);
      backgroundPictureSection.style.backgroundImage = "url(" + main_artist[j]['Image'] + ")"
    }
  }

  //background date adding
  var bgDate = document.createElement('h1');
  bgDate.classList.add('title','is-4');
  var date_string = weekdata["date_start"] + " - " + weekdata["date_end"];
  console.log(date_string);
  bgDate.innerText = date_string;

  backgroundPictureSection.append(bgDate);

  OuterMostSection.append(backgroundPictureSection);

  /* ------------------- Content of sticky ------------------- */

  // Content section
  var contentSection = document.createElement('div');
  contentSection.classList.add('sticky-hero__content');

  // Add content to content section
  var contentContainer = document.createElement('div');
  contentContainer.classList.add('container',   'is-widescreen');

  // create columns
  var contentColumns = document.createElement('div');
  contentColumns.classList.add('columns');
  /* ----------------------------- create Song column ----------------------------------*/
  var contentColumn1 = document.createElement('div');
  contentColumn1.classList.add('column', 'is-half', 'has-text-centered');
  var songTitle = document.createElement('h2');
  songTitle.classList.add('title', 'is-3');
  songTitle.innerText = "Top Songs";

  contentColumn1.append(songTitle);

  //card container
  var cardoutside = document.createElement('div');
  cardoutside.classList.add('card');
  var cardcontent = document.createElement('div');
  cardcontent.classList.add('card-content');

  for (var k=0; k< weekdata['songs'].length; k++){
    var mediaoutside = document.createElement('div');
    mediaoutside.classList.add('media');

    // media left
    var medialeft = document.createElement('div');
    medialeft.classList.add('media-left');
    var figure = document.createElement('figure');
    figure.classList.add('image', 'is-48x48');

    var main_artist = json[weekdata['songs'][k]['artist']]
    var img = document.createElement('img');
    for (var j=0; j< main_artist.length; j++){
    if (main_artist[j]['Song'] == weekdata['songs'][k]['title']){
      console.log(main_artist[j]['Image']);
      img.src = main_artist[j]['Image'];
    }
  }
    img.alt = "Album Art";

    figure.append(img);
    medialeft.append(figure);
    mediaoutside.append(medialeft);

    //media right
    var mediacontent= document.createElement('div');
    mediacontent.classList.add('media-content');

    var songname = document.createElement('p');
    songname.classList.add('title', 'is-4');
    songname.innerText = weekdata['songs'][k]['title'];

    var artistname = document.createElement('p');
    artistname.classList.add('subtitle', 'is-6');
    artistname.innerText = weekdata['songs'][k]['artist'];

    mediacontent.append(songname);
    mediacontent.append(artistname);

    mediaoutside.append(mediacontent);
    cardcontent.append(mediaoutside);



}
  cardoutside.append(cardcontent);
  contentColumn1.append(cardoutside);

  // Create Artists Column -----------------------------
  var contentColumn2 = document.createElement('div');
  contentColumn2.classList.add('column', 'is-half', 'has-text-centered');
  var artistTitle = document.createElement('h2');
  artistTitle.classList.add('title', 'is-2');
  artistTitle.innerText = "Top Artists";

  contentColumn2.append(artistTitle);

  //card container
  var cardoutside2 = document.createElement('div');
  cardoutside2.classList.add('card');
  var cardcontent2 = document.createElement('div');
  cardcontent2.classList.add('card-content');
  for (var k=0; k< weekdata['artists'].length; k++){
    var mediaoutside2 = document.createElement('div');
    mediaoutside2.classList.add('media');

    // media left
    var medialeft2 = document.createElement('div');
    medialeft2.classList.add('media-left');
    var figure2 = document.createElement('figure');
    figure2.classList.add('image', 'is-48x48');

    var img2 = document.createElement('img');
    var main_artist = json[weekdata['artists'][k]]
    console.log(weekdata['artists'][k]);
    img2.src = main_artist[0]['Image'];
    img2.alt = "Artist Image";

    figure2.append(img2);
    medialeft2.append(figure2);
    mediaoutside2.append(medialeft2);

    //media right
    var mediacontent2 = document.createElement('div');
    mediacontent2.classList.add('media-content');

    var artistname2 = document.createElement('p');
    artistname2.classList.add('title', 'is-4');
    artistname2.innerText = weekdata['artists'][k];

    var artistnote = document.createElement('p');
    artistnote.classList.add('subtitle', 'is-6');
    //artistnote.innerText = -----------SET ARTIST NOTE HERE -----------

    mediacontent2.append(artistname2);
    //mediacontent2.append(artistnote);

    mediaoutside2.append(mediacontent2);
    cardcontent2.append(mediaoutside2);
  }
    cardoutside2.append(cardcontent2);



  // append card to artist column
  contentColumn2.append(cardoutside2);
  // create Artist column END ----------------------------------






  contentColumns.append(contentColumn1);
  contentColumns.append(contentColumn2);

  contentContainer.append(contentColumns);

  contentSection.append(contentContainer);

  OuterMostSection.append(contentSection);


  document.body.append(OuterMostSection);

}


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









