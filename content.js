function pauseVideo() {
    document.querySelectorAll("video").forEach(video => {
        if (!video.paused) {
            video.pause();
        }
    });
}

function resumeVideo() {
    document.querySelectorAll("video").forEach(video => {
        if (video.paused) {
            video.play();
        }
    });
}

window.addEventListener("blur", pauseVideo);
window.addEventListener("focus", resumeVideo);
