$(document).ready(function () {
    $(".tabs").tabs();
});


$('.sliderAdvantages').slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 2,
});

$('.toggle').click(function (event) {
    event.preventDefault();
    $('.burgerMenu').slideToggle();
});


$(document).ready(function () {
    $.fn.equivalent = function () {
        var $blocks = $('.itemWrapperFace__subtitle'),
            maxH = $blocks.height();
        $blocks.each(function () {
            maxH = ($('.itemWrapperFace__subtitle').height() > maxH) ? $('.itemWrapperFace__subtitle').height() : maxH;
        });
        $blocks.height(maxH);
    };
    $('.itemWrapperFace--book').equivalent();
});

$('.btnMore').click(function () {
    $(this).siblings('.show-content').toggleClass('show');
});

$(document).ready(function () {
    $('.itemWrapperFace__item').after($('<li class="itemLine"></li>'));
});

$(window).resize(function () {
    let breakpoints = ["1366", "768", "320"];
    let currentWidth = $(document).width();

    if (breakpoints[0] <= currentWidth) {
        $('.itemWrapperFace__item').removeClass('current');
        $('.itemWrapperFace__item:nth-child(3n)').addClass('current');
    } else if (currentWidth <= breakpoints[1] && currentWidth > breakpoints[2]) {
        $('.itemWrapperFace__item').removeClass('current');
        $('.itemWrapperFace__item:nth-child(3n)').addClass('current');
    } else console.log('1');
});

$(document).ready(function () {
    $('.ukWrapperTabs__button .btn').click(function () {
        $(this).toggleClass('active').next().slideToggle();
    });
});

changeOption = function () {
    $('#select').change(function () {
        let selectOption = $('#select').val();

        if (selectOption == 'other') {
            $('.select').next('p').addClass('active');
        } else {
            $('.select').next('p').removeClass('active');
        }
    });
};
changeOption();