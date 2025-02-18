chrome.windows.onFocusChanged.addListener((windowId) => {
    if (windowId === chrome.windows.WINDOW_ID_NONE) {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length > 0) {
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    function: pauseVideo
                });
            }
        });
    } else {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length > 0) {
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    function: resumeVideo
                });
            }
        });
    }
});


function pauseVideo() {
    document.querySelectorAll("video").forEach(video => video.pause());
}

function resumeVideo() {
    document.querySelectorAll("video").forEach(video => video.play());
}
