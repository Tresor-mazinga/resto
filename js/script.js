

// RIPPLES EFFECT
$('.effect').ripples({
    resolution:200,
    perturbance:0.04,
});

// Magnific Popup Gallery

$('.parent-container .test-popup-link').magnificPopup({
    type: 'image',
    gallery: { enabled: true }
    // End of Magnific Popup Gallery
});

// NAVBAR TOGGLE BUTTON
$('.navbar-toggler').click(function(){
    $('.navbar-toggler').toggleClass('change')
})

//STICKY NAVBAR LESS PADDING
$(window).scroll(function(){
    let position = $(this).scrollTop();
if(position>=690){
    $('.navbar').addClass('navbar-background');
    $('.navbar').addClass('fixed-top');
}
else{
    $('.navbar').removeClass('navbar-background');
    $('.navbar').removeClass('fixed-top');
}
})
//SMOOTH SCROLL
$('.nav-item a, .header-link, #back-to-top').click(function (link) {
    link.preventDefault();
    let target = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(target).offset().top -25
    },3000);
});