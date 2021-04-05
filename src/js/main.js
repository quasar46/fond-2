$(document).ready(function () {
    $(".tabs").tabs();
});

$('.sliderAdvantages').slick({
    infinite: true,
    // autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 2,
});

$('.toggle').click(function (event) {
    event.preventDefault();
    $('.burgerMenu').slideToggle();
    $('.burgerMenu__panel').toggleClass('active');
    // $('body').toggleClass('hid');
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
    $(".tabs__text").each(function () {
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    });
    $(".tabs__text").height(maxHeight);
});

$(document).ready(function () {
    let maxHeight = 0;
    $(".tabs__title").each(function () {
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    });
    $(".tabs__title").height(maxHeight);
});

$(document).ready(function () {
    let maxHeight = 0;
    $(".tabs__subtitle").each(function () {
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    });
    $(".tabs__subtitle").height(maxHeight);
});

$('.btnMore').click(function () {
    $(this).toggleClass('active').siblings('.show-content').toggleClass('show');
});

// добавление линии под строкой блоков
$(window).resize(function () {
    var breakpoints = ["1366", "768", "320"];
    var currentWidth = $(document).width();
    $('.tabs__line').remove();
    if (breakpoints[0] <= currentWidth) {
        $('.item__first:nth-child(3n)').after($('<li class="tabs__line"></li>'));
    } else if (currentWidth <= breakpoints[1] && currentWidth > breakpoints[2]) {
        $('.item__first').removeClass('current');
        $('.item__first:nth-child(3n)').addClass('current');
    } else console.log('1');
}).trigger('resize');

//добавление линии под строкой блоков
//projects
$(window).resize(function () {
    var breakpoints = ["1366", "768", "320"];
    var currentWidth = $(document).width();
    $('.tabs__line--mode').remove();
    if (breakpoints[0] <= currentWidth) {
        $('.item__second:nth-child(even)').after($('<li class="tabs__line--mode"></li>'));
        console.log('Больше 1366');
    } else if (currentWidth <= breakpoints[1] && currentWidth > breakpoints[2]) {
        $('.item__second').removeClass('current');
        $('.item__second:nth-child(even)').addClass('current');
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

$(document).ready(function () {
    $('#search').click(function (event) {
        event.preventDefault();
        $('.search').toggleClass('active');
        $('.burgerMenu__panel').removeClass('active');
        $('.burgerMenu').css("display", "none");
    })
    $('.search__cross').click(function () {
        $('.search').removeClass('active');
    })
})