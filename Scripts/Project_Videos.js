const VideosVideoControl = document.getElementById("VideosVideoControl");

const video_load = new URLSearchParams(document.location.search).get('video');

console.log(video_load);

if (video_load){
    if (video_load.toLowerCase() === "newdavidbowie"){
        VideosVideoControl.src = '../videos/new_david_bowie_visualiser.mp4';
        VideosVideoControl.classList.remove("is-hidden");
    }
    

}

function ShowVideo(event, VideoName){

    VideosVideoControl.src = VideoName;
    VideosVideoControl.classList.remove("is-hidden");





    VideosVideoControl.setAttribute("controls", "");
    VideosVideoControl.removeAttribute("autoplay");
    VideosVideoControl.removeAttribute("loop");


}