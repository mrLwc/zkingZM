function Counter() {
    var timer = null;
    // console.log("这是11111" + getPos($('#features').get(0)).top);
    if ($('#counter').get(0).isLoaded) {
        return;
    }

    var arr = [13121, 12057, 26038, 283];
    var count1 = 0;
    var count2 = 0;
    var count3 = 0;
    var count4 = 0;



    if (GetStep($('#counter').get(0), 100)) {
        timer = setInterval(function() {
            count1 += Math.ceil(arr[0] / 33);
            count2 += Math.ceil(arr[1] / 33);
            count3 += Math.ceil(arr[2] / 33);
            count4 += Math.ceil(arr[3] / 33);
            $('#counter .count').eq(0).html(count1);
            $('#counter .count').eq(1).html(count2);
            $('#counter .count').eq(2).html(count3);
            $('#counter .count').eq(3).html(count4);
            if (count1 + Math.ceil(arr[0] / 33) >= arr[1]) {
                $('#counter .count').eq(0).html(arr[0]);
                $('#counter .count').eq(1).html(arr[1]);
                $('#counter .count').eq(2).html(arr[2]);
                $('#counter .count').eq(3).html(arr[3]);
                clearInterval(timer)
                $('#counter').get(0).isLoaded = true;
            }
        }, 50)
    }

}