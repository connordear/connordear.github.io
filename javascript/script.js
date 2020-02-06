// Scrollto stuff
$('a[href^="#"]').on('click', function (event) {
    // console.log("Clicked!");
    var target = $(this.getAttribute('href'));

    if (target.length) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});

// Show the title highlight when page loads
$(document).ready(function () {
    $('.title').addClass('show-highlight')
})

// Highlight Scrolls
// Show heading highlights whenever the user scrolls to the specific heading
// Seems heavy on resources... is there a better way to do this?
$(window).scroll(function () {
    $('.yellow-highlight').each(function (i, el) {
        var heightFromTop = $(el).offset().top,
            heightOfTarget = $(el).outerHeight(),
            windowHeight = $(window).height(),
            currentDistanceScrolled = $(document).scrollTop();
        if (currentDistanceScrolled > (heightFromTop + heightOfTarget - windowHeight + 200)) {
            $(el).addClass('show-highlight')
        } else {
            $(el).removeClass('show-highlight')
        }
    })
});

// Display Modal on clicks
$('.grid-item').each(function (i, el) {
    $(el).on('click', function (event) {
        displayModal(this.id);
    })
})

// Hide Modals when clicking outside
$('.modal-bg').on('click', function (event) {
    hideModal();
})

// Hide Modal when clicking close button
$('.modal-close-btn').on('click', function(event) {
    hideModal();
});

function displayModal(data) {
    $('.modal-bg').css("display", "block");
    $('.modal-data').css("display", "block");
    $('.modal-data')[0].classList.add('fadeIn');
    $('.modal-data').append(projects[data]);
}

function hideModal() {
    $('.modal-bg').css("display", "none");
    $('.modal-data').css("display", "none")
    $('.modal-data')[0].classList.remove('fadeIn');
    $(".modal-data > *:not('.modal-close-btn')").remove();
}

$(document).keyup(function (e) {
    if (e.which == 27) {
        hideModal();
    }
})


var currImgs = ['curr-img-1', 'curr-img-2', 'curr-img-3'];

var currImgIdx = 0;
var lastImgIdx = 0;
showImg(currImgs[currImgIdx]);
// Fade in
setInterval(function() {
    lastImgIdx = currImgIdx;
    currImgIdx = (currImgIdx + 1) % 3;
    showImg(currImgs[currImgIdx]);
    hideImg(currImgs[lastImgIdx]);
}, 4000);


function hideImg(imgSelector) {
    $('#' + imgSelector).css('opacity','0');
}

function showImg(imgSelector) {
    $('#' + imgSelector).css('opacity', '1');
}


var researchText = `
                <h3>
                    Computer Vision Research &nbsp; // &nbsp;
                    <a href="./assets/conference-poster.pdf" target="_blank">Conference Poster</a>
                </h3>
                <p class="text">
                    In the Summer of 2018 I performed research in the area of Computer Vision, investigating new ways to calibrate highway monitoring cameras. I developed a calibration algorithm that could accurately estimate camera focal length and tilt angle using known lane-width dimensions and then iteratively estimating parameters. My research was awared 1st honourable mention at the LURA Research conference at the end of the Summer.
                </p>
                <img src="./assets/images/research-pic.jpg" alt="">
                `;

var uinvestText = `
                <h3>
                    uInvest - Wealth Management App &nbsp; // &nbsp;
                    <a href="https://morning-beach-13736.herokuapp.com/" target="_blank">Live Demo</a>
                </h3>
                 <p class="text">
                    At the beginning of the Summer 2018, I was asked to join the winning team of QCBT. In the span of 2 weeks, we had to create a working prototype of the "Future of Wealth Management" application that the team had created while at the conference. We interviewed branch managers and current users of their platform to gather information on possible improvements, and created a live demo of the application to present to a panel of senior executives at BMO's headquarters in downtown Toronto. For this project I tried out the Ionic framework to get some more experience with the Angular system, using an Express server and MongoDB database in the backend.
                </p>
                <img src="./assets/images/uinvest-pic.jpg" alt="">
                `;

var ellehacksText = `
                <h3>
                    ElleHacks &nbsp; // &nbsp; <a href="https://ellehacks.com/2018/index.html" >ellehacks.com</a>
                </h3>
                <p class="text">
                    ElleHacks is a women-only hackathon that takes place in the Lassonde School of Engineering. My friend Ramona Sar is the president of the WISE (Women in Science and Engineering) club at Lassonde and asked if I would be able to build the site
                    out for her! I think events like these are crucial to helping grow the diversity within the tech world, and worked with a designer (Leena Chanthyvong) to build out the site. This time around I decided to build my own grid system using pure HTML/CSS (using flexbox),
                    and was thrilled at how easy it was! This project taught me a lot about the impact that loading JS files can have on the load time for a site, and I was inspired to re-do my webpage with a similar custom grid system.
                </p>
                <img src="./assets/images/elle-hacks-pic.jpg" alt="">
                `;

var pillflowerText = `
                <h3>
                    Pillflower World &nbsp; // &nbsp;
                    <a href="https://appetize.io/app/k1p3azx2hb09waacwe843mgctw?device=ipadair&scale=50&orientation=portrait&osVersion=11.1">The App</a>
                </h3>
                <p class="text">
                    The first freelance gig that I worked on, Pillflower World, is the next stage of Artist
                    <a href="http://www.lynneheller.com/">Lynne Heller's</a> continued work with exploring her
                    Pillflowers. I met Lynne while working in the prototyping lab at school as she was
                    3D printing one of her Pillflowers, and with her designs & art, my friend Ken Faria and I
                    developed her app using React-Native. It was developed specifically for iPad, and as a result
                    of the very tight timeline, it is not cross-compatible across devices. Still, it was a great
                    project to work on, and I had a learned a tonne along the way.
                </p>
                <img src="./assets/images/pillflower-pic.jpg" alt="">
                `;

var magText = `
            <h3>
                Magnetorquer Winding Station &nbsp; // &nbsp;
                <a href="https://cad.onshape.com/documents/632dfd44de458030aa2f17de/w/ac9f1e79fea28aa8dafa7ac3/e/e65fb08ea6260297d465aa07" >The Model</a>
            </h3>
            <p class="text">
                Having spent a lot of time in the rapid-prototyping lab at Lassonde, I've had the chance
                to work on several mechanical engineering projects as well. The Canadian Satellite Design
                Club at York was looking for a way to build custom Magnetorquers, essentially finely wrapped wire
                around a metal core. The station uses a Raspberry Pi to drive two different stepper motors to guide
                the wire along the core. It was constructed using 3D printed ABS and has an acryllic base.
            </p>
            <img src="./assets/images/mag-pic.jpg" alt="">
            `;

var pidaqText = `
            <h3>
                PiDAQ &nbsp; // &nbsp; <a href="./assets/pidaq-designs.pdf" >Mockups</a>
            </h3>
            <p class="text">
                PiDAQ was a design & development project that I did with my friend Ken again. We designed a user
                interface where users can input settings that they wish to send to certain pins, or configure other
                pins to read certain types of data. We are in the development process currently using React with a
                Node.js server to read/write to the actual hardware.
            </p>
            <img src="./assets/images/pidaq-pic.jpg" alt="">
            `;



var projects = {
    research: researchText,
    uinvest: uinvestText,
    ellehacks: ellehacksText,
    pillflower: pillflowerText,
    mag: magText,
    pidaq: pidaqText
};