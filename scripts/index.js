

$(function() {
    //------定义自变量-----------
    var deckArray = ['blueDino', 'blueDino','brownDino', 'brownDino','redDino', 'redDino','greenDino', 'greenDino','purpDino', 'purpDino','burgDino', 'burgDino',
    'orangeDino', 'orangeDino','purp2Dino', 'purp2Dino','pinkDino', 'pinkDino'];
    var back = $(".back");

    //--------洗牌------------
    function shuffle(){
        return 0.5 - Math.random();
    }

    function start(){
        deckArray.sort(shuffle);
        for(var i = 0;i < 18;i++)
            $(back[i]).addClass(deckArray[i]);
    }

    //-------------显示图形-----------
    $(".front").click(function(e) {
        if($(".fliped").length < 2) {
            $(e.target).addClass("fliped");
            $(e.target).css('visibility', 'hidden');
            setTimeout(check, 1000);
        }
    });

    //------------显示的图片数为2时，翻转------------
    function check(){
        var fliped = $(".fliped");
        if(fliped.length == 2) {
            var photo = fliped.next();
            var first = photo[0].className;
            var second = photo[1].className;
            if(first == second) {
                fliped.removeClass("fliped");
                fliped.parent().css('visibility','hidden');
            } else {
                fliped.css('visibility','visible');
                fliped.removeClass("fliped");
            }
        }
    }
    start();
});