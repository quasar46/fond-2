$(document).ready(function () {
    $(".tabs").tabs();
});

$('.sliderAdvantages').slick({
    infinite: true,
    // autoplay: true,
    speed: 100,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.toggle').click(function (event) {
    event.preventDefault();
    $('.burgerMenu').slideToggle();
    $('.burgerMenu__panel').toggleClass('active');
});

$(document).ready(function () {
    let maxHeight = 0;
    $(".maxHeight").each(function () {
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    });
    $(".maxHeight").height(maxHeight);
});


function checkHeight() {
    let maxHeight = 0;
    $(".maxHeight2").each(function () {
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    });
    $(".maxHeight2").height(maxHeight);
}

$(function () {
    $('.tabs__head--projects a[href="#news"]').on('click', checkHeight);
})


$('.btnMore').click(function () {
    $(this).toggleClass('active').siblings('.show-content').toggleClass('show');
});

// добавление линии под строкой блоков
$(window).resize(function () {
    var breakpoints = [768, 360];
    var currentWidth = $(window).width();
    $('.tabs__line').remove();
    if (breakpoints[0] < currentWidth) {
        $('.item__first:nth-child(3n)').after($('<li class="tabs__line"></li>'));
        console.log('сработало больше или равно 768');
    } else if (currentWidth <= breakpoints[0] && currentWidth > breakpoints[1]) {
        $('.item__first:nth-child(2n)').after($('<li class="tabs__line"></li>'));
        console.log('сработало меньше или равно 768');
    } else {
        $('.tabs__line').remove();
    };
}).trigger('resize');

//добавление линии под строкой блоков
//projects
$(window).resize(function () {
    var breakpoints = [1366, 768, 320];
    var currentWidth = $(document).width();
    $('.tabs__line--mode').remove();
    if (breakpoints[0] <= currentWidth) {
        $('.item__second:nth-child(even)').after($('<li class="tabs__line--mode"></li>'));
    } else if (currentWidth <= breakpoints[1] && currentWidth > breakpoints[2]) {
        $('.item__second').removeClass('current');
        $('.item__second:nth-child(even)').addClass('current');
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

$(window).on('load resize', function () {
    if ($(window).width() < 768) {
        $('.wrapperMissionFond__slider:not(.slick-initialized)').slick({
            infinite: true,
            speed: 100,
            slidesToShow: 1
        });
    } else {
        $(".wrapperMissionFond__slider.slick-initialized").slick("unslick");
    }
});


$(window).on('load resize', function () {
    if ($(window).width() < 768) {
        $('.tabs__slider:not(.slick-initialized)').slick({
            infinite: true,
            speed: 100,
            slidesToShow: 1,
        });
    } else {
        $(".tabs__slider.slick-initialized").slick("unslick");
    }
});