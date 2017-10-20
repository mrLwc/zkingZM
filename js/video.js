function Video() {
    // console.log("这是11111" + getPos($('#features').get(0)).top);
    if ($('.video-row').get(0).isLoaded) {
        return;
    }

    if (GetStep($('.video-row').get(0), 200)) {
        $('#video .video-bg').fadeIn(3000);
        $('#video .video-row').get(0).isLoaded = true;
    }

}