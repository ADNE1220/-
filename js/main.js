$(function(){

    //팝업 영역
    $(".pop").slideDown();
    $(".pop_inner button").click(function(){
        $(".pop").slideUp();
    })

    //메뉴 영역
    $(".sub").hide();

    $(".gnb").mouseenter(function(){
        $(".sub").stop().slideDown();
        $(".header_bar").stop().animate({height: "400px"},500)
    })//mouseenter

    $(".gnb").mouseleave(function(){
        $(".sub").stop().slideUp();
        $(".header_bar").stop().animate({height: "103px"},500)
    })//mouseleave

    //이미지 슬라이드 영역
    $(".move").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true,
    })//

    //section4 이미지 슬라이드
    $(".left_move").slick({
        autoplay:true,
        autoplaySpeed: 2000,
        arrows: false
    })//

    //section5
    $(".section5_inner li").click(function(e){
        e.preventDefault()
        $(".section5_inner li").toggleClass("on");
    })//

})//js