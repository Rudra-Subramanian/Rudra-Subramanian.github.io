const WIPVideoControl = document.getElementById("WIPVideoControl");

const video_load = new URLSearchParams(document.location.search).get('video');

console.log(video_load);

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

}

function ShowVideo(event, VideoName){

    WIPVideoControl.src = VideoName
    WIPVideoControl.classList.remove("is-hidden");
    if (VideoName  === "../videos/water_droplet_animation_portugal.mp4"){
        WIPVideoControl.removeAttribute("controls");
        WIPVideoControl.setAttribute("autoplay", "");
        WIPVideoControl.setAttribute("loop", "");
    }




    else{
        WIPVideoControl.setAttribute("controls", "");
        WIPVideoControl.removeAttribute("autoplay");
        WIPVideoControl.removeAttribute("loop");


    }
}