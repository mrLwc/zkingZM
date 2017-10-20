function Role() {
    // console.log(getPos($('#role').get(0)).top);
    if ($('.about').get(0).isLoaded) {
        return;
    }

    if (GetStep($('#role').get(0), 250)) {
        $('.about').animate({ top: -20, opacity: 1 }, 400).animate({ top: 10 }, 100).animate({ top: -10 }, 200).animate({ top: 0 }, 100);
        $('#role').find('.bounceIn').animate({ height: '446px', opacity: 1, width: '340px' }, 1000, 'easeOutBounce')
        $('#role').find('.list').animate({ opacity: 1, top: 0 }, 3000);
        $('.about').get(0).isLoaded = true;
    }

}