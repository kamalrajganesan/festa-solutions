//  Section-1 CSS-Slider
document.getElementById("main-banner-video").pause() ;

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
    console.log("Next.length :", next.length)
    console.log("Next.hasClass :", next.hasClass)
    if (next.length) {
        if (next.hasClass('video-slide')) {
            document.getElementById("main-banner-video").load() ;
            document.getElementById("main-banner-video").play() ;
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
    console.log("Interval: ", intervalTime);
    bannerTimer = setInterval(bannerSwitcher, intervalTime);
}

var bannerTimer = setInterval(bannerSwitcher, 5000);

$('nav .controls label').click(function () {
    clearInterval(bannerTimer);
    bannerTimer = setInterval(bannerSwitcher, 5000);
});

