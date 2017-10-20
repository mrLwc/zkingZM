function Action() {
    // console.log("这是11111" + getPos($('#features').get(0)).top);
    if ($('#action').get(0).isLoaded) {
        return;
    }

    if (GetStep($('#action').get(0), 150)) {
        $('.btn-learn').animate({ left: 50, opacity: 1 }, 300).animate({ left: -30 }, 400).animate({ left: 0 }, 500);
        $('.btn-download').animate({ right: 50, opacity: 1 }, 300).animate({ right: -30 }, 400).animate({ right: 0 }, 500);
        $('#action').get(0).isLoaded = true;
    }

}