$(function() {
    var num = 0;
    var imgLeng = $('#screenshots .screenshots-phone img').length;

    $('.screenshots-word span:nth-child(2)').on('click', function() {
        num--;
        Pre()

    })
    $('.screenshots-word span:nth-child(3)').on('click', function() {
        num++;
        Pre()

    })

    function Pre() {
        if (num > imgLeng - 1) {
            num = 0;
        }
        if (num < 0) {
            num = imgLeng - 1;
        }
        $('#screenshots .screenshots-phone img').not('.active').css({ 'top': 200, 'opacity': 0 })
        $('#screenshots .screenshots-phone img').eq(num).addClass('active').siblings().removeClass('active');
        $('#screenshots .screenshots-phone img').eq(num).animate({ 'top': 0, 'opacity': 1 }, 500)
        $('#screenshots .screenshots-phone img').not('.active').css({ 'top': 200, 'opacity': 0 })

        var html = $('#screenshots .screenshots-phone span').eq(num).html();
        $('.screenshots-word .ac-title').html(html);
    }

})