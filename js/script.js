$(function(){
    // 메뉴 영역

    $(".sub").hide();

    $(".gnb").mouseenter(function(){
        $(".sub").stop().slideDown();
        $(".header_b").stop().animate({height: "400px"}, 500)

    })//mouseenter

    $(".gnb").mouseleave(function(){
        $(".sub").stop().slideUp();
        $(".header_b").stop().animate({height: "103px"}, 500)
    })//mouseleave

    // 이미지슬라이드 영역

    $(".move").slick({
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
        arrows:true
    })





})//jquery