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