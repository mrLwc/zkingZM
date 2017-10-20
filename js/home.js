$(function() {
    var interval = 4000
    var step = 0; //记录显示的图片的序号
    var autoTimer = window.setInterval(autoPlay, interval);
    var olis = $('.bannerBg').children('li'); // 寻找所有的liDOM

    autoPlay();

    function autoPlay() {
        if (step === olis.length) {
            step = 0;
        }

        changePic();
        step++;

    }

    function changePic() {
        var $curli = olis.eq(step); // 寻找当前li
        $curli.css("zIndex", 1).siblings().css("zIndex", 0); //当前显示，兄弟影藏
        $curli.animate({ opacity: 1 }, 500, function() {
            //动画结束后，其他的图片的透明度要设置为0
            $(this).siblings().css("opacity", 0);
        });


        $('#home .bounceInUp').css('top', '40px'); // 底部动画
        $('#home .item').eq(step).addClass('active').siblings().removeClass('active');
        $('#home .bounceInUp').animate({ 'top': "-50px" }, 500, function() {
                $('#home .bounceInUp').animate({ 'top': "-30px" }, 200)

            })
            // 输入框初始化与移动
        $('#home .bounceInRight').css({ 'right': '-500px', 'opacity': 0 })
        $('#home .bounceInRight').animate({
                right: 50,
                opacity: 1,
            }, 500).animate({
                right: -10,
            }, 200).animate({
                right: 0,
            }, {
                duration: 500,
            })
            // 登录按钮初始化与移动
        $('#home .bounceInLeft').css({ left: -500, 'opacity': 0 })
        $('#home .bounceInLeft').animate({
            left: 50,
            opacity: 1,
        }, 500).animate({
            left: -10,
        }, 200).animate({
            left: 0,
        }, {
            duration: 500,
            // 不加入队列
            // queue: false,
        })
    }
    // 登录框悬浮暂停
    $('#divLogin').hover(ClearAuto, StartAuto);
    $('.bannerCon-left').hover(ClearAuto, StartAuto);
    $('.bannerCon-right').hover(ClearAuto, StartAuto);

    function ClearAuto() {
        clearInterval(autoTimer);
    }

    function StartAuto() {
        clearInterval(autoTimer);
        autoTimer = window.setInterval(autoPlay, interval);
    }


    // 左右按钮事件
    $('#home .span2').on('click', function() {
        autoPlay()
    })
    $('#home .span1').on('click', function() {
        if (step === 0) {
            step = olis.length
        }
        step--;
        changePic()
    })

})