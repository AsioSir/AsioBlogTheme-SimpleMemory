var rewardHtml = '<div class="content">\n' +
    '<p><a href="javascript:void(0)" onclick="dashangToggle()" class="dashang" title="打赏，支持一下">打赏</a></p>\n' +
'<div class="hide_box"></div>\n' +
    '<div class="shang_box">\n' +
    '<a class="shang_close" href="javascript:void(0)" onclick="dashangToggle()" title="关闭"><div class="xclose"></div></a>\n' +
'<div class="shang_tit">\n' +
    '<p>感谢您的支持，我会继续努力的!</p>\n' +
'</div>\n' +
'<div class="shang_payimg">\n' +
    '<img src="https://blog-static.cnblogs.com/files/asio/alipayimg.gif" alt="扫码支持" title="扫一扫" />\n' +
    '</div>\n' +
    '<div class="pay_explain">请赏我点铜板买喵粮自己吃( •̀ ω •́ )y</div>\n' +
'<div class="shang_payselect">\n' +
    '<div class="pay_item checked" data-id="alipay">\n' +
    '<span class="radiobox"></span>\n' +
    '<span class="pay_logo"><div class="payImg alipay"></div></span>\n' +
'</div>\n' +
'<div class="pay_item" data-id="weipay">\n' +
    '<span class="radiobox"></span>\n' +
    '<span class="pay_logo"><div class="payImg wechatpay"></div></span>\n' +
'</div>\n' +
'</div>\n' +
'<div class="shang_info">\n' +
    '<p>打开<span id="shang_pay_txt">支付宝</span>扫一扫，即可进行扫码打赏哦</p>\n' +
'</div>\n' +
'</div>\n' +
'</div>\n';

$("#cnblogs_post_body").append(rewardHtml);


