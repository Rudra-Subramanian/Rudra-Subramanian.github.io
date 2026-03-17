const VideosVideoControl = document.getElementById("VideosVideoControl");

// To load specific video use ?video=tag in URL
const video_load = new URLSearchParams(document.location.search).get('video');

console.log(video_load);

if (video_load){
    //To add a ?video=tag add another if statement
    if (video_load.toLowerCase() === "newdavidbowie"){
        VideosVideoControl.src = '../videos/new_david_bowie_visualiser.mp4';
        VideosVideoControl.classList.remove("is-hidden");
    }
    if (video_load.toLowerCase() === "sack"){
        VideosVideoControl.src = '../videos/howiimagineasack.mp4';
        VideosVideoControl.classList.remove("is-hidden");
    }
    

}

function ShowVideo(event, VideoName){

    VideosVideoControl.src = VideoName;
    VideosVideoControl.classList.remove("is-hidden");





    VideosVideoControl.setAttribute("controls", "");
    VideosVideoControl.removeAttribute("autoplay");
    VideosVideoControl.removeAttribute("loop");
     if (VideoName  === "../videos/new_david_bowie_visualiser.mp4"){
        videolabel.style.display = "block";
        videolabel.innerHTML = "Visualisation for New David Bowie by Jim Legxacy. Made in Blender";
    }
    if (VideoName  === "../videos/howiimagineasack.mp4"){
        videolabel.style.display = "block";
        videolabel.innerHTML = "What getting sacked probably feels like. <br /> Made in Blender.";
    }


}