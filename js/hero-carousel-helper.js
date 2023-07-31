//  Section-1 CSS-Slider
videoElement = document.getElementById("main-banner-video") ;
videoElement.pause();

// Auto Switching Images for CSS-Slider
function bannerSwitcher() {
    // Define the base interval time for non-video slides (in milliseconds)
    const baseIntervalTime = 5000;

    // Get the currently visible slide
    const currentSlide = $('.sec-1-input').filter(':checked');

    // Set the interval time based on whether it's a video slide or not
    let intervalTime = 0

    // Switch to the next slide
    const next = currentSlide.next('.sec-1-input');
    if (next.length) {
        if (next.hasClass('video-slide')) {
            // document.getElementById("main-banner-video").load() ;
            videoElement.play() ;
            intervalTime = 25000;
        }
        else intervalTime = 2500
        next.prop('checked', true);
    } else {
        intervalTime = 2500
        $('.sec-1-input').first().prop('checked', true);
    }

    // Restart the timer with the updated interval time
    clearInterval(bannerTimer);
    bannerTimer = setInterval(bannerSwitcher, intervalTime);
}

var bannerTimer = setInterval(bannerSwitcher, 5000);

$('nav .controls label').click(function () {
    clearInterval(bannerTimer);
    let ele = $(this).attr('for');
    if(ele == 'banner4') { 
      if(videoElement.paused) {
        videoElement.play();
      }
    }
    
    bannerTimer = setInterval(bannerSwitcher, 5000);
});
