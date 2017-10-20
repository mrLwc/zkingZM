$(function() {
    $('.quote').hover(function() {
        $('.btn-info:nth-of-type(1)').stop().animate({ 'left': 200, 'opacity': 1 }, 500)
        $('.btn-info:nth-of-type(2)').stop().animate({ 'right': 200, 'opacity': 1 }, 500)
    }, function() {
        $('.btn-info:nth-of-type(1)').stop().animate({ 'left': 0, 'opacity': 0 }, 500)
        $('.btn-info:nth-of-type(2)').stop().animate({ 'right': 0, 'opacity': 0 }, 500)
    })
    var wid = $('.testimonials-main').outerWidth();
    var step = 0;
    var autoTimer = window.setInterval(autoPlay, 3000);
    var oLis = $('.slides').find('li').length;
    var Left = 0;

    function autoPlay() {
        step++;
        changePic();
    }


    function changePic() {
        if (step === oLis - 1) {
            $('.flexslider').css({ 'left': 1110 })
            step = 0;
        }
        Left = -1110 * step;
        $('.flexslider').animate({ 'left': Left }, 300)

    }

    $('.btn-info').eq(1).click(function() {
        autoPlay()
    })
    $('.btn-info').eq(0).click(function() {
        if (step === 0) {
            step = oLis - 1;
        }

        step--;
        changePic()

    })

    // 登录框悬浮暂停
    $('.btn-info').eq(0).hover(ClearAuto, StartAuto);
    $('.btn-info').eq(1).hover(ClearAuto, StartAuto);
    $('.quote').hover(ClearAuto, StartAuto);

    function ClearAuto() {
        clearInterval(autoTimer);
    }

    function StartAuto() {
        clearInterval(autoTimer);
        autoTimer = window.setInterval(autoPlay, 3000);
    }
})