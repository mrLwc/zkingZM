function Contact() {
    // console.log("这是11111" + getPos($('#features').get(0)).top);
    if ($('#contact').get(0).isLoaded) {
        return;
    }

    if (GetStep($('#contact').get(0), 250)) {
        $('#contact .contact').animate({ top: -20, opacity: 1 }, 400).animate({ top: 10 }, 100).animate({ top: -10 }, 200).animate({ top: 0 }, 100);
        $('#contact .contact-news').fadeIn(2000, 'easeInOutBounce');
        $('#contact').get(0).isLoaded = true;
    }

}