window.onload = function(){
    var anim = "fadeInDown";
    var removeanim = "fadeOutUp"
    document.getElementById("notice_card").style.opacity = 1;
    init()
    function init() {
        var date = new Date();
        var nowtime = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay() + " " + date.toLocaleTimeString('chinese',{hour12:false});
        document.getElementById("notice_time").innerText = nowtime;
        testAnim(anim)
        animTimer();
    }
    function testAnim(x) {
        $('#notice_card').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
    };

    function animTimer(){
        setTimeout(function () {
            testAnim(removeanim);
        },4500)
    }
};




