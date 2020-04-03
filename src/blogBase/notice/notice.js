$(document).ready(function(){
    var anim = "fadeInDown";
    var removeanim = "fadeOutUp"
    init()
    function init() {
        var date = new Date();
        var nowtime = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay() + " " + date.toLocaleTimeString('chinese',{hour12:false});
        document.getElementById("time").innerText = nowtime;
        console.log(nowtime)
        testAnim(anim)
        animTimer();
    }
    function testAnim(x) {
        $('#card').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
    };

    function animTimer(){
        setTimeout(function () {
            testAnim(removeanim);
        },3000)
    }
});