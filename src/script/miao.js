// 吊死喵js
var timer = null;
var offset = 100,
    offset_opacity = 1200,
    scroll_top_duration = 700,
    $back_to_top = $('.cd-top');
// 步进
var step = 7
// 动画间隔时间
var intervalTime = 500
// 当前移动距离
var currentDistance = 0
// 最大移动距离
var maxDistance =7
$(window).scroll(function () {
    clearTimeout(timer);
    if ($(this).scrollTop() > offset) {
        $back_to_top.addClass('cd-is-visible');

        if ($(window).height() > 960) {
            $(".cd-top.cd-is-visible").css("top", "0");
            timer = setInterval(function() {
                // 超过最大距离时反向运动
                if (currentDistance >= maxDistance) {
                    step = -step
                }
                // 小于0时反向运动
                if (currentDistance <= 0) {
                    step = -step
                }
                currentDistance += step
                $back_to_top.css('top', currentDistance)

            }, intervalTime)
        } else {
            timer = setInterval(function() {
                // 超过最大距离时反向运动
                if (currentDistance >= maxDistance) {
                    step = -step
                }
                // 小于0时反向运动
                if (currentDistance <= 0) {
                    step = -step
                }
                currentDistance += step
                $back_to_top.css('top', ($(window).height() - 960)+currentDistance)

            }, intervalTime)
            $(".cd-top.cd-is-visible").css("top", ($(window).height() - 960) + "px");
        }
    } else {
        $(".cd-top.cd-is-visible").css("top", "-900px");
        $back_to_top.removeClass('cd-is-visible cd-fade-out');
    }
    if ($(this).scrollTop() > offset_opacity) {
        $back_to_top.addClass('cd-fade-out');
    }
});
//smooth scroll to top

$back_to_top.on('click', function (event) {
    clearTimeout(timer);
    event.preventDefault();
    $('body,html').animate({
        scrollTop: 0,
    }, scroll_top_duration);
    return false;
});

var comment_nav  = document.getElementById('comment_nav');
if(comment_nav!=undefined){
    var toTop = comment_nav.lastElementChild;
    if(toTop!=undefined){
        toTop.onclick = function(){
            event.preventDefault();
            $('body,html').animate({
                scrollTop: 0,
            }, scroll_top_duration);
            return false;
        }
    }
}