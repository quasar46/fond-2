$(document).ready(function () {
    $(".tabs").tabs();
});


$('.sliderAdvantages').slick({
    infinite: true,
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

$('.fotodateSlick').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    customPaging: function (slick, index) {
        return '<a>' + (index + 1) + '</a>';
    }
});

$('.btnMore').click(function () {
    $('.wrapperInfoByFond__text').toggleClass('show');
})