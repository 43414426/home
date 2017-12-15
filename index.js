$(function(){
    $('.nav-1').addClass('zhuan');
    $('.nav-1-1').addClass('zhuan-1');
    $(window).scroll(function(){
        if(document.body.scrollTop==600){
            $('.aa11').animate({width:'100%'},1000);
        }
    })

})
