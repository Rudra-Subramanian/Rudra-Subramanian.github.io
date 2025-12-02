  const infoboxes = document.getElementsByClassName('video-info-box');

function hide_video_boxes(){
  for(let i = 0; i < infoboxes.length; i++){
    infoboxes[i].style.opacity = "0";
    //infoboxes[i].classList.add('is-hidden');
  }
}


function show_video_boxes(){
  for(let i = 0; i < infoboxes.length; i++){
    infoboxes[i].style.opacity = "1";
    //infoboxes[i].classList.remove('is-hidden');
  }
}



(function(){
  const target = document.getElementById('flickity');
  const videos = target.getElementsByTagName('video');

  const videosLength = videos.length;

  const flickity = new Flickity(target,{
    wrapAround:true,
    autoPlay:false,
    on: {
      ready: function() {
        console.log('Flickity ready');
        
      }
    }
  });

  for(let i = 0;i < videosLength; i++){

    videos[i].addEventListener('loadedmetadata',function(){
      console.log("Video Duration_" + i + " : "+ videos[i].duration);
    },false);

    videos[i].addEventListener('play', hide_video_boxes);
    videos[i].addEventListener('pause', show_video_boxes);
    videos[i].addEventListener('ended', show_video_boxes);

  }
  flickity.on('change',changeSlide);
  function changeSlide(){
    for (let i = 0;i < videosLength; i++){
        videos[i].pause();
        videos[i].currentTime = 0;
    }
  }



}());

