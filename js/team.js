$(function() {
    $('#team').find('.team-more').mouseover(function() {
        console.log($(this).find('.team-image'))
        $(this).find('.team-image').animate({ 'top': '-50px' }, {
            duration: 500,
            queue: false,
        });
        $(this).find('.team-fig').stop(true).animate({ 'top': '-150px' }, 500)
    })
    $('#team').find('.team-more').mouseout(function() {
        $(this).find('.team-image').animate({ 'top': '0px' }, {
            duration: 500,
            queue: false,
        });
        $(this).find('.team-fig').stop(true).animate({ 'top': '0px' }, 500)
    })

})

function Team() {
    var oTeam = document.getElementById("team");
    var aDiv = oTeam.getElementsByClassName("team-more");
    var index = 0;
    for (var i = 0; i < aDiv.length; i++) {
        var eveDiv = aDiv[i];

        if (eveDiv.isLoaded) {
            // 不能用return，不然已经加载的都会直接return
            continue;
        }
        // 计算定位元素距离顶部距离

        if (GetStep(eveDiv, 300)) {
            // console.log(teamT)
            index = i;
            console.log(index);

            switch (index) {
                case 0:
                    $('.teamshow').find('.team-image').eq(index).animate({ 'right': 0 }, 500, 'swing')
                    break;
                case 1:
                    $('.teamshow').find('.team-image').eq(index).animate({ 'top': 0 }, 800, 'easeInOutBounce')
                    break;
                case 2:
                    $('.teamshow').find('.team-image').eq(index).animate({ 'left': 0 }, 500, 'swing')
                    break;
                case 3:
                    $('.teamshow').find('.team-image').eq(index).animate({ 'top': 0 }, 800, 'easeInOutBounce')
                    break;

                default:
                    break;
            }
            eveDiv.isLoaded = true;
        }
    }
}