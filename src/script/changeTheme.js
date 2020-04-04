// 页面加载完成执行
// window.onload = function () {
//
// }
$(document).ready(function (){
    var date = new Date();
    //加载cookie中的主题version
    var version = getCookie("AsioTheme");
    console.log("主题version:" + version);
    // 按钮元素
    var checkBtn = document.getElementById('ckbx-style-13-1');   //input
    if(checkBtn != null&&checkBtn!=undefined){
        //目前只有黑白两种,1白,2黑，0或其他是未设置，默认切换
        LoadingTheme(version,checkBtn);

        //监听Theme按钮 changeTheme,0是日间背景，1是夜间背景
        checkBtn.addEventListener('click', function(){
            if(checkBtn.checked){
                console.log("当前主题:Dark");
                //AsioTheme值存为2,保存一天cookie，0-1点自动清零
                setCookie("AsioTheme","2",24 - date.getHours(), "/asio");
                DLTheme(Theme.Dark)
                loadjscssfile("https://cdn.jsdelivr.net/gh/AsioSir/AsioBlogTheme-SimpleMemory@master/src/style/NightTheme.css","css");
            }else{
                console.log("当前主题:Light");
                setCookie("AsioTheme","1",24 - date.getHours(),"/asio");
                DLTheme(Theme.Light)
                removejscssfile("https://cdn.jsdelivr.net/gh/AsioSir/AsioBlogTheme-SimpleMemory@master/src/style/NightTheme.css","css");
            }
        })
    }else {
        document.execCommand('Refresh');
    }
});

function  LoadingTheme(version,checkBtn){
    var thistime = "当前时间 " + new Date().toLocaleTimeString('chinese',{hour12:false});
    if(version == 1){
        console.log("当前主题:Light");
        checkBtn.checked = false;
        DLTheme(Theme.Light)
        removejscssfile("https://cdn.jsdelivr.net/gh/AsioSir/AsioBlogTheme-SimpleMemory@master/src/style/NightTheme.css","css");
    }else if (version == 2) {
        console.log("当前主题:Dark");
        checkBtn.checked = true;
        DLTheme(Theme.Dark)
        loadjscssfile("https://cdn.jsdelivr.net/gh/AsioSir/AsioBlogTheme-SimpleMemory@master/src/style/NightTheme.css","css");
    }else{
        console.log('\n' + ' %c 默认主题，自动[8:00-18:00]:LightTheme [18:00-8:00]:DarkTheme %c ' + thistime + '\n', 'color: #fadfa3; background: #030307; padding:5px 0;', 'background: #fadfa3; padding:5px 0;');
        var hour = new Date().getHours();
        //白天
        if(hour >= 8 && hour < 18){
            console.log(thistime + " 默认Light主题")
            checkBtn.checked = false;
            DLTheme(Theme.Light)
            removejscssfile("https://cdn.jsdelivr.net/gh/AsioSir/AsioBlogTheme-SimpleMemory@master/src/style/NightTheme.css","css");
        }
        //夜晚
        if((hour >= 18 && hour <= 23) || (hour >= 0 && hour < 8)){
            console.log(thistime + " 默认Dark主题");
            checkBtn.checked = true;
            DLTheme(Theme.Dark);
            loadjscssfile("https://cdn.jsdelivr.net/gh/AsioSir/AsioBlogTheme-SimpleMemory@master/src/style/NightTheme.css","css");
        }
    }
}

var Theme = {
    Light: {
        'TextColor1': '#4d4d4d',
        'TextColor2': '#5f5f6b',
        'TextColor3': '#97979f',
        'DividColor': '#e7eaf0',
        'BackgroundColor': '#f4f6fa',
        'BlockColor': '#ffffff'
    },
    Dark: {
        'TextColor1': '#cfcecf',
        'TextColor2': '#89888c',
        'TextColor3': '#57565a',
        'DividColor': '#323236',
        'BackgroundColor': '#282c34',
        'BlockColor': '#20242b'
    }
}

function  DLTheme(Light) {
    document.documentElement.style.setProperty("--TextColor1", Light.TextColor1);
    document.documentElement.style.setProperty("--TextColor2", Light.TextColor2);
    document.documentElement.style.setProperty("--TextColor3", Light.TextColor3);
    document.documentElement.style.setProperty("--BackgroundColor", Light.BackgroundColor);
    document.documentElement.style.setProperty("--BlockColor", Light.BlockColor);
}



// 自定义markdown
function mymd() {
    var d = document;
    var cnblogs_post_body = d.getElementById('cnblogs_post_body');

    if (cnblogs_post_body != null) {
        var html = d.getElementById('cnblogs_post_body').innerHTML;
        html = md2video(html);
        html = md2music(html);
        d.getElementById('cnblogs_post_body').innerHTML = html;
    }

    // 自定义视频语法
    function md2video(str) {
        var video_str1 = '<div class="video"><iframe src="';
        var video_str2 =
            '" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe></div>';
        return str.replace(/\<p\>\{video\}\(([^{}()]+)\)\<\/p\>/g, function(match, $1) {
            return video_str1 + $1 + video_str2
        });
    }
    // 自定义音乐语法
    function md2music(str) {
        var music_str1 = '<div class="music"><iframe src="';
        var music_str2 =
            '" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe></div>';
        return str.replace(/\<p\>\{music\}\(([^{}()]+)\)\<\/p\>/g, function(match, $1) {
            return music_str1 + $1 + music_str2
        });
    }
}




//处理cookie

//name为变量名，value为值，hours为保存时间单位为小时，path为目录‘/’为根目录
//domain值可为'.',secure=true,只能在HTTPS或与其他安全协议连接在一起的时候才被传输
//name,value为必写，其他可写可不写
//注意设置path，不同的path会导致不同的页面调取的同一个cookiec值不同，
// 如不设置cookiec的path时，http://wwww.xxx.com/a/index.html和http://www.xxx.com/a/b/index.html的相同cookiec
// 分别保存在/a和/a/b下，调取时自然不一样
function setCookie(name,value,hours,path,domain,secure){
    var cdata = name + "=" + value;
    if(hours){
        var d = new Date();
        d.setHours(d.getHours() + hours);
        cdata += "; expires=" + d.toGMTString();
    }
    cdata +=path ? ("; path=" + path) : "" ;
    cdata +=domain ? ("; domain=" + domain) : "" ;
    cdata +=secure ? ("; secure=" + secure) : "" ;
    document.cookie = cdata;
}

function getCookie(name){
    var reg = eval("/(?:^|;\\s*)" + name + "=([^=]+)(?:;|$)/");
    return reg.test(document.cookie) ? RegExp.$1 : "";
}

function removeCookie(name,path,domain){
    this.setCookie(name,"",-1,path,domain);
}



//动态加载一个js/css文件
function loadjscssfile(filename, filetype){
    if (filetype=="js"){
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src",filename)
    }
    else if (filetype=="css"){
        var fileref=document.createElement("link")
        fileref.setAttribute("rel","stylesheet")
        fileref.setAttribute("type","text/css")
        fileref.setAttribute("href",filename)
    }
    if (typeof fileref!="undefined"){
        document.getElementsByTagName("head")[0].appendChild(fileref)
    }
}

//动态移除已经加载过的js/css
function removejscssfile(filename,filetype){
    var targetelement=(filetype=="js")? "script" :(filetype=="css")? "link" : "none"
    var targetattr=(filetype=="js")?"src" : (filetype=="css")? "href" :"none"
    var allsuspects=document.getElementsByTagName(targetelement)
    for (var i=allsuspects.length; i>=0;i--){
        if (allsuspects[i] &&allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
            allsuspects[i].parentNode.removeChild(allsuspects[i])
    }
}
