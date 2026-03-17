const mediaQuery = window.matchMedia('(max-aspect-ratio: 1/1)')
const herosection = document.getElementsByClassName("hero")[0];

// Check if the media query is true
if (mediaQuery.matches) {
  // Then trigger an alert

  herosection.style.maxHeight = window.innerHeight + "px";
  
}