$(function() {
    const videoElement = $('#video').get(0);
    const videoContainer = $('#videoContainer');
    const endingSection = $('#endingSection');

    if (!videoElement) {
        console.error("Video element not found");
        return;
    }

    const videoStart = videoContainer.offset().top; // 影片開始位置
    const videoEnd = videoStart + videoContainer.height(); // 影片結束位置

    $(window).scroll(function() {
        const currentScrollPosition = $(document).scrollTop();

        if (currentScrollPosition >= videoStart && currentScrollPosition <= videoEnd) {
            videoElement.play();
            videoElement.currentTime = videoElement.duration * (currentScrollPosition - videoStart) / (videoEnd - videoStart);
        } else {
            videoElement.pause();
        }

        if (currentScrollPosition >= videoEnd) {
            // 影片division滑完後，顯示"Ending Section"
            endingSection.css('display', 'block');
        }
    });

    videoElement.addEventListener('ended', function() {
        // 影片播放結束時，顯示"Ending Section"
        endingSection.css('display', 'block');
    });
});




