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

// выравнивнаие элементов по высоте
$(document).ready(function () {
    let maxHeight = 0;
    $(".itemWrapperFace__subtitle").each(function () {
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    });
    $(".itemWrapperFace__subtitle").height(maxHeight);
});

// выравнивнаие элементов по высоте
$(document).ready(function () {
    let maxHeight = 0;
    $(".itemWrapperFace__title").each(function () {
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    });
    $(".itemWrapperFace__title").height(maxHeight);
});

$('.btnMore').click(function () {
    $(this).siblings('.show-content').toggleClass('show');
});

// добавление линии под строкой блоков
$(window).resize(function () {
    var breakpoints = ["1366", "768", "320"];
    var currentWidth = $(document).width();
    $('.itemLine').remove();
    if (breakpoints[0] <= currentWidth) {
        $('.itemWrapperFace__item:nth-child(3n)').after($('<li class="itemLine"></li>'));
        console.log('Больше 1366');
    } else if (currentWidth <= breakpoints[1] && currentWidth > breakpoints[2]) {
        $('.itemWrapperFace__item').removeClass('current');
        $('.itemWrapperFace__item:nth-child(3n)').addClass('current');
        console.log('768');
    } else console.log('1');
}).trigger('resize');

// добавление линии под строкой блоков
$(window).resize(function () {
    var breakpoints = ["1366", "768", "320"];
    var currentWidth = $(document).width();
    $('.itemLine--mode').remove();
    if (breakpoints[0] <= currentWidth) {
        $('.itemWrapperFace__item--mode:nth-child(2n)').after($('<li class="itemLine--mode"></li>'));
        console.log('Больше 1366');
    } else if (currentWidth <= breakpoints[1] && currentWidth > breakpoints[2]) {
        $('.itemWrapperFace__item--mode').removeClass('current');
        $('.itemWrapperFace__item--mode:nth-child(2n)').addClass('current');
        console.log('768');
    } else console.log('1');
}).trigger('resize');


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