function Features() {
    // console.log("这是11111" + getPos($('#features').get(0)).top);
    if ($('.features').get(0).isLoaded) {
        return;
    }

    if (GetStep($('#features').get(0), 250)) {
        $('.bounce').animate({ top: -20, opacity: 1 }, 400).animate({ top: 10 }, 100).animate({ top: -10 }, 200).animate({ top: 0 }, 100);
        $('#features').find('.bounceIn').animate({ height: '390px', opacity: 1, width: '340px' }, 1000, 'easeOutBounce')
        $('#features').find('.list').animate({ opacity: 1, top: 0 }, 3000);
        $('.features').get(0).isLoaded = true;
    }

}