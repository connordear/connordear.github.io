$('a[href^="#"]').on('click', function(event) {
    // console.log("Clicked!");
    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});

// Show the title highlight when page loads
$(document).ready(function() {
    $('.title').addClass('show-highlight')
})

// Show heading highlights whenever the user scrolls to the specific heading
// Seems heavy on resources... is there a better way to do this?
$(window).scroll(function() {
    $('.yellow-highlight').each(function (i, el) {
        var heightFromTop = $(el).offset().top,
        heightOfTarget = $(el).outerHeight(),
        windowHeight = $(window).height(),
        currentDistanceScrolled = $(document).scrollTop();
        if (currentDistanceScrolled > (heightFromTop+heightOfTarget-windowHeight + 200)){
            $(el).addClass('show-highlight')
        } else {
            $(el).removeClass('show-highlight')
        }
    })
    // $('.about-img').each(function (i, el) {
    //     var heightFromTop = $(el).offset().top,
    //     heightOfTarget = $(el).outerHeight(),
    //     windowHeight = $(window).height(),
    //     currentDistanceScrolled = $(document).scrollTop();
    //     if (currentDistanceScrolled > (heightFromTop+heightOfTarget-windowHeight + 200)){
    //         $(el).addClass('square-corners')
    //     } else {
    //         $(el).removeClass('square-corners')
    //     }
    // })
 });