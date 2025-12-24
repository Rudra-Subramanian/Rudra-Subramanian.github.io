


class VideoGallery {
    constructor() {
        this.videos = [];
        this.currentVideo = null;
        this.videoListElement = document.getElementById('video-list');
        this.videoContainerElement = document.querySelector('.video-grid');
        this.videoDescriptionElement = document.getElementById('video-description');
        this.videobackgroundElement = document.getElementById('backgroundVideo');
        this.dataError = false;

        
        this.init();
    }


    init() {
        // Video data from the videos folder
        this.readJson()
        .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
        })
        .then(json => {
            this.videos = json;
            console.log(this.videos);
            this.renderVideoList();
            this.renderVideoGrid();
            this.selectVideo(0);
        })
        .catch(function (error) {
            console.log("Error loading or parsing JSON. :", error);
        })
         

 // Select first video by default
    }

    renderVideoList() {
        this.videoListElement.innerHTML = '';
        this.videos.forEach((video, index) => {
            //console.log(video);
            const videoItem = document.createElement('a');
            videoItem.className = 'video-item panel-block is-active';
            videoItem.textContent = video.name;
            videoItem.addEventListener('click', () => this.selectVideo(index));
            this.videoListElement.appendChild(videoItem);

        });
    }

    renderVideoGrid() {
        this.videoContainerElement.innerHTML = '';
        this.videoElement = null;
        
        this.videos.forEach((video, index) => {
            const videoWrapper = document.createElement('div');
            videoWrapper.className = 'video-wrapper';
            
            console.log(video.src);
            console.log(video.src.indexOf("https"));
            if(video.src.indexOf("https") == -1){
                console.log("if")
                let videoElement = document.createElement('video');
                console.log(videoElement);
                videoElement.src = video.src;
                videoElement.muted = true;
                videoElement.loop = true;
                videoElement.preload = 'metadata';
                const playVideo = () => {
                if (videoElement.paused) {
                    // Pause all other videos
                    document.querySelectorAll('.video-wrapper video').forEach(v => {
                        if (v !== videoElement && v.src.indexOf("https") === -1) v.pause();
                    });
                    videoElement.play();
                    //playOverlay.style.display = 'none';
                } else {
                    videoElement.pause();
                    //playOverlay.style.display = 'flex';
                }
                this.selectVideo(index);
            };
            console.log(videoElement);
            this.videoElement = videoElement;
            videoElement.addEventListener('click', playVideo);


            } else {
                let videoElement = document.createElement('iframe');
                videoElement.src = video.src;
                videoElement.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
                videoElement.referrerPolicy = "strict-origin-when-cross-origin";
                console.log("else")
                this.videoElement = videoElement;

            }
            videoWrapper.appendChild(this.videoElement);

            videoWrapper.addEventListener('mouseenter', () => {
                this.selectVideo(index);
                
                // Update background video source
                if (this.videobackgroundElement) {
                    //frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                    //
                    //
                    //
                    //
                    this.videobackgroundElement.src = video.src;
                    this.videobackgroundElement.classList.remove('is-hidden');
                }
            });
            
            
            //videoWrapper.appendChild(playOverlay);
            this.videoContainerElement.appendChild(videoWrapper);
        });
    }

    selectVideo(index) {
        if (index < 0 || index >= this.videos.length) return;
        
        this.currentVideo = this.videos[index];
        console.log(index);
                    this.videoContainerElement.children[index].scrollIntoView({behavior: "smooth"} );
        
        
        // Update active state in video list
        document.querySelectorAll('.video-item').forEach((item, i) => {
            if (i === index) {
                item.classList.add('is-active');
            } else {
                item.classList.remove('is-active');
            }
        });
        
        // Set selected video as background
        //this.setVideoBackground(this.currentVideo.src);
        
        // Update description
        this.updateDescription();
    }

    updateDescription() {
        if (!this.currentVideo) return;
        
        this.videoDescriptionElement.innerHTML = `
            <div class="description-content">
                <p class="title">${this.currentVideo.name}</p>
                <p class="subtitle is-6 has-text-grey">${this.currentVideo.filename}</p>
                <p>${this.currentVideo.description}</p>
            </div>
        `;
    }

    // Method to add new videos dynamically
    addVideo(videoData) {
        this.videos.push(videoData);
        this.renderVideoList();
        this.renderVideoGrid();
    }

    // Method to load videos from a directory (for future implementation)
    async loadVideosFromDirectory(directoryPath) {
        // This would be implemented to scan a directory for video files
        // For now, it's a placeholder for future functionality
        console.log('Loading videos from:', directoryPath);
    }


    // Source - https://stackoverflow.com/a
// Posted by T.J. Crowder, modified by community. See post 'Timeline' for change history
// Retrieved 2025-11-12, License - CC BY-SA 4.0

    readJson () {
    return fetch('../videos/video_list.json')
    }
    



    



}

// Initialize the video gallery when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const gallery = new VideoGallery();
    
    // Make gallery available globally for debugging/external access
    window.videoGallery = gallery;
});

// Utility functions
function formatVideoName(filename) {
    // Remove extension and format filename for display
    return filename.replace(/\.[^/.]+$/, "").replace(/[_-]/g, ' ');
}

function isVideoFile(filename) {
    const videoExtensions = ['.mp4', '.avi', '.mov', '.wmv', '.flv', '.webm'];
    return videoExtensions.some(ext => filename.toLowerCase().endsWith(ext));
}


const scrollContainer = document.getElementsByClassName('video-grid');
console.log(scrollContainer[0]);

scrollContainer[0].addEventListener('scrollsnapchange', (event) => {
    
    console.log('Snap target inline:', event.snapTargetInline);
    console.log('Snap target block:', event.snapTargetBlock);
    const horizontal_scroll = event.snapTargetInline;
    const vertical_scroll = event.snapTargetBlock;
    if (horizontal_scroll != null) {
        return horizontal_scroll;
    }

  // You can then use the returned element to perform actions
});