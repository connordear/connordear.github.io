$('a[href^="#"]').on('click', function(event) {
    console.log("Clicked!");
    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});

$(document).ready(function() {
    $('.title').addClass('show-highlight')
})

$(window).scroll(function() {
    $('.yellow-highlight').each(function (i, el) {
        var heightFromTop = $(el).offset().top,
        heightOfTarget = $(el).outerHeight(),
        windowHeight = $(window).height(),
        currentDistanceScrolled = $(document).scrollTop();
        if (currentDistanceScrolled > (heightFromTop+heightOfTarget-windowHeight + 200)){
            $(el).addClass('show-highlight')
        }
    })
 });