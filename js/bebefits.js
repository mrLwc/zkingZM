function Benefits() {
    var obenefits = document.getElementById("benefits");
    var aDiv = obenefits.getElementsByClassName("list");
    for (var i = 0; i < aDiv.length; i++) {
        var eveDiv = aDiv[i];

        if (eveDiv.isLoaded) {
            // 不能用return，不然已经加载的都会直接return
            continue;
        }

        if (GetStep(eveDiv, 200)) {
            if (!benefits.isLoaded) {
                $('.benefits').animate({ top: -20, opacity: 1 }, 400).animate({ top: 10 }, 100).animate({ top: -10 }, 200).animate({ top: 0 }, 100);
            }

            // console.log('this is：' + i);
            switch (i) {
                case 0:
                case 1:
                case 2:
                    $('#benefits').find('.list').eq(i).animate({ 'left': 0, 'opacity': 1 }, 1500, 'easeInSine')
                    $('#benefits').find('.benefits-liimg-cov').animate({ 'width': 320, 'height': 520, 'opacity': 1 }, 800, 'easeInOutElastic')
                    break;
                case 3:
                case 4:
                case 5:
                    $('#benefits').find('.list').eq(i).animate({ 'right': 0, 'opacity': 1 }, 1500, 'easeInSine')
                    break;

                default:
                    break;
            }
            eveDiv.isLoaded = true;
            benefits.isLoaded = true;
        }
    }
}