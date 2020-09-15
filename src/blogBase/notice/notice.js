$(function(){
    loadingcomment()
});

/*--------------------------------------加载公告---------------------------------------------------*/
function loadingcomment() {
    var anim = "fadeInDown";
    var removeanim = "fadeOutUp"
    document.getElementById("notice_card").style.opacity = 1;
    var date = new Date();
    var nowtime = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate() + " " + date.toLocaleTimeString('chinese',{hour12:false});
    document.getElementById("notice_time").innerText = nowtime;
    testAnim(anim)
    animTimer(removeanim);
}
function testAnim(x) {
    $('#notice_card').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
};

function animTimer(x){
    setTimeout(function () {
        testAnim(x);
    },4000)
}
