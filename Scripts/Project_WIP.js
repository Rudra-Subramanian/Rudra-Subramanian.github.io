const WIPVideoControl = document.getElementById("WIPVideoControl");

const video_load = new URLSearchParams(document.location.search).get('video');

const videolabel = document.getElementById("videolabel");

console.log(video_load);

const mediaQuery = window.matchMedia('(max-aspect-ratio: 1/1)')
const herosection = document.getElementsByClassName("hero")[0];

// Check if the media query is true
if (mediaQuery.matches) {
  // Then trigger an alert

  herosection.style.maxHeight = window.innerHeight + "px";
  
}

if (video_load){
    if (video_load.toLowerCase() === "monday"){
        WIPVideoControl.src = '../videos/beach_monday_v2_compressed.mp4';
        WIPVideoControl.classList.remove("is-hidden");
    }
    if (video_load.toLowerCase() === "noquestionsasked"){
        WIPVideoControl.src = '../videos/finaloutputv1 with background_low bitrate.mp4';
        WIPVideoControl.classList.remove("is-hidden");
    }
    if (video_load.toLowerCase()  === "morningdew"){
        WIPVideoControl.src = '../videos/water_droplet_animation_portugal.mp4';
        WIPVideoControl.classList.remove("is-hidden");
    }
    if (video_load.toLowerCase()  === "visualiser"){
        WIPVideoControl.src = '../videos/keep_a_smile_visualiser.mp4';
        WIPVideoControl.classList.remove("is-hidden");
    }
    if (video_load.toLowerCase()  === "caravan"){
        WIPVideoControl.src = '../videos/thelonius_monk_piano.mp4';
        WIPVideoControl.classList.remove("is-hidden");
    }

}

function ShowVideo(event, VideoName){

    WIPVideoControl.src = VideoName
    WIPVideoControl.classList.remove("is-hidden");
    if (VideoName  === "../videos/water_droplet_animation_portugal.mp4"){
        WIPVideoControl.removeAttribute("controls");
        WIPVideoControl.setAttribute("autoplay", "");
        WIPVideoControl.setAttribute("loop", "");
        videolabel.style.display = "block";
        videolabel.innerHTML = "A small animation of a water dropping into a puddle in a palace in Portugal";
    }
    if (VideoName  === "../videos/keep_a_smile_visualiser.mp4"){
        WIPVideoControl.setAttribute("controls", "");
        WIPVideoControl.removeAttribute("autoplay");
        WIPVideoControl.removeAttribute("loop");
        videolabel.style.display = "block";
        videolabel.innerHTML = "Visualisation for Keep a Smile by 454 made using blender";
    }
    if (VideoName  === "../videos/thelonius_monk_piano.mp4"){
        WIPVideoControl.setAttribute("controls", "");
        WIPVideoControl.removeAttribute("autoplay");
        WIPVideoControl.removeAttribute("loop");
        videolabel.style.display = "block";
        videolabel.innerHTML = "An animation trying to isolate the notes played in an audio file and visualising the keys pressed on the piano.";
    }
    if (VideoName  === "../videos/beach_monday_v2_compressed.mp4"){
        WIPVideoControl.setAttribute("controls", "");
        WIPVideoControl.removeAttribute("autoplay");
        WIPVideoControl.removeAttribute("loop");
        videolabel.style.display = "block";
        videolabel.innerHTML = "Testing an idea to animate the entire vanisher horizon scraper album, this was an initial proof of concept";
    }
    if (VideoName  === "../videos/finaloutputv1 with background_low bitrate.mp4"){
        WIPVideoControl.setAttribute("controls", "");
        WIPVideoControl.removeAttribute("autoplay");
        WIPVideoControl.removeAttribute("loop");
        videolabel.style.display = "block";
        videolabel.innerHTML = "The blender output for another Quadeca song on the album. This was a test for lighting and sky.";
    }

    




    else{
        WIPVideoControl.setAttribute("controls", "");
        WIPVideoControl.removeAttribute("autoplay");
        WIPVideoControl.removeAttribute("loop");


    }
}