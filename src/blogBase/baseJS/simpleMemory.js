window.cnblogsConfig = {
    GhVersions    : 'v2020.4.7', // 版本
    blogUser      : "༺ཌ༈君☠纤༈ད༻", // 用户名
    blogAvatar    : "https://pic.cnblogs.com/avatar/1924746/20200215183155.png", // 用户头像
    blogStartDate : "2020-1-17", // 入园时间，年-月-日。入园时间查看方法：鼠标停留园龄时间上，会显示入园时间
}


if (initCheck()) {

    var sidebarHtml =
        '<div class="container">' +
        '    <div class="menu-wrap optiscroll" id="menuWrap" style="display:none">' +
        '        <nav class="menu">' +
        '            <!-- 个人简介 -->' +
        '            <div class="introduce-box">' +
        '                <div class="introduce-head">' +
        '                    <div class="introduce-via" id="menuBlogAvatar"></div>' +
        '                </div>' +
        '                <div id="introduce"></div>' +
        '            </div>' +
        '            <!-- 导航 -->' +
        '            <div class="nav-title"></div>' +
        '            <div class="icon-list">' +
        '                <ul id="m-nav-list">' +
        '                </ul>' +
        '            </div>' +
        '            <!-- 日历 -->' +
        '            <span id="calendar-box"></span>' +
        '            <!-- 找找看 -->' +
        '            <div class="m-list-title"><span>找找看</span></div>' +
        '            <div class="m-icon-list" id="sb-sidebarSearchBox"></div>' +
        '            <!-- 积分与排名 -->' +
        '            <div class="m-list-title"><span>积分排名<span class="iconfont icon-select m-list-title-select"></span></span></div>' +
        '            <div class="m-icon-list" id="sb-sidebarScorerank"></div>' +
        '            <!-- 最新随笔 -->' +
        '            <div class="m-list-title"><span>最新随笔<span class="iconfont icon-select m-list-title-select"></span></span></div>' +
        '            <div class="m-icon-list" id="sb-sidebarRecentposts"></div>' +
        '            <!-- 随笔分类 -->' +
        '            <div class="m-list-title"><span>随笔分类<span class="iconfont icon-select m-list-title-select"></span></span></div>' +
        '            <div class="m-icon-list" id="sb-classify"></div>' +
        '            <!-- 我的标签 -->' +
        '            <div class="m-list-title"><span>我的标签<span class="iconfont icon-select m-list-title-select"></span></span></div>' +
        '            <div class="m-icon-list" id="sb-toptags"></div>' +
        '            <!-- 阅读排行 -->' +
        '            <div class="m-list-title"><span>阅读排行<span class="iconfont icon-select m-list-title-select"></span></span></div>' +
        '            <div class="m-icon-list" id="sb-topview"></div>' +
        '            <!-- 推荐排行 -->' +
        '            <div class="m-list-title"><span>推荐排行<span class="iconfont icon-select m-list-title-select"></span></span></div>' +
        '            <div class="m-icon-list" id="sb-topDiggPosts"></div>' +
        '            <!-- 最新评论 -->' +
        '            <div class="m-list-title"><span>最新评论<span class="iconfont icon-select m-list-title-select"></span></span></div>' +
        '            <div class="m-icon-list" id="sb-recentComments"></div>' +
        '            <!-- 文章档案 -->' +
        '            <div class="m-list-title"><span>文章档案<span class="iconfont icon-select m-list-title-select"></span></span></div>' +
        '            <div class="m-icon-list" id="sb-articlearchive"></div>' +
        '            <!-- 随笔档案 -->' +
        '            <div class="m-list-title"><span>随笔档案<span class="iconfont icon-select m-list-title-select"></span></span></div>' +
        '            <div class="m-icon-list" id="sb-record"></div>' +
        '            <!-- 自定义列表 -->' +
        '            <span id="menuCustomList"></span>' +
        '        </nav>' +
        '        <button class="close-button" id="close-button">Close Menu</button>' +
        '        <div class="morph-shape" id="morph-shape" data-morph-open="M-7.312,0H15c0,0,66,113.339,66,399.5C81,664.006,15,800,15,800H-7.312V0z;M-7.312,0H100c0,0,0,113.839,0,400c0,264.506,0,400,0,400H-7.312V0z">' +
        '            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 800" preserveAspectRatio="none">' +
        '                <path d="M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z"/>' +
        '            </svg>' +
        '        </div>' +
        '    </div>' +
        '    <button class="menu-button" id="open-button">MENU</button>' +
        '    <div class="content-wrap" id="content-wrap"></div><!-- /content-wrap -->' +
        '</div>' +
        '<div class="main-header">' +
        '    <canvas id="notHomeTopCanvas"></canvas>' +
        '            <!-- 切换主题按钮 -->' +
        '    <div class="TButton clearfix" id="TButton">'+
        '         <div id="Tday">day</div>'+
        '         <div class="ckbx-style-13" id="ckbx-style-13">'+
        '             <input name="ckbx-style-13" id="ckbx-style-13-1" type="checkbox" value="0">'+
        '             <label id="btnLabel" for="ckbx-style-13-1"></label>'+
        '         </div>'+
        '         <div id="TNight">night</div>'+
        '    </div>'+
        '            <!-- 切换主题按钮 -->' +
        '    <div class="vertical">' +
        '        <div class="main-header-content inner">' +
        '            <link href="https://fonts.proxy.ustclug.org/css?family=Playball" rel="stylesheet">' +
        '            <h1 class="page-title" style="font-family: \'Playball\', cursive;" id="homeTopTitle"></h1>' +
        '            <h2 class="page-description" id="hitokoto"></h2>' +
        '            <h3 class="page-author" id="hitokotoAuthor"></h3>' +
        '            <h1 class="sb-title" id="sbTitle"></h1>' +
        '            <p class="article-info" id="articleInfo"></p>' +
        '        </div>' +
        '    </div>' +
        '    <a class="scroll-down" href="javascript:void(0);" data-offset="-45">' +
        '        <span class="hidden">Scroll Down</span>' +
        '        <i class="scroll-down-icon iconfont icon-fanhui"></i>' +
        '    </a>' +
        '</div>' +
        '<div id="loading"></div>'  +
        '<div id="bottomProgressBar"></div>' +
        '<div id="rightMenu"></div>';

    window.cnblogsConfigDefault = {
        GhUserName: 'AsioSir',   //GitHub用户名
        GhRepositories: 'AsioBlogTheme-SimpleMemory',  //GitHub仓库名
        GhVersions: 'v2020.4.7',   //GitHub发布版本或提交哈希值，根据版本加载代码。
        CnVersions: "",
        isVersionMapping: true,
		codeMaxHeight: true,  //代码最高限制，超过长度的70%scroll
        blogUser: "",   //用户昵称，默认抓取博客园用户名
        blogAvatar: "",  //用户头像图片Url。
        blogStartDate: "2020-01-17",  //入园时间，年-月-日，入园时间查看方法：鼠标停留园龄时间上，会显示入园时间。
        menuCustomList: {
            // "title1": { // 标题
            //     "data": [ // 列表数据 ['列表', '链接']
            //         ['我的博客1', 'https://www.cnblogs.com/bndong/']
            //     ],
            //     "icon": "icon-brush_fill" // 配置图标，参考文档：定制化/字体图标库
            // }
        },//定义菜单数据，显示在默认数据下方。

        menuNavList: [
            // 列表数据 ['导航名称', '链接']
            ['博客园', 'https://www.cnblogs.com/'],
            ['༺ཌ༈Asio君༈ད༻','https://blog.csdn.net/weixin_43439972'],
            ['虫部落资源','http://magnet.chongbuluo.com/'],
            ['联系博主','https://msg.cnblogs.com/send/']
        ],//自定义菜单导航，显示在默认导航下方
        menuUserInfoBgImg: 'https://files.cnblogs.com/files/asio/menu_bg.gif',//菜单个人信息背景图片
        webpageTitleOnblur: "(oﾟvﾟ)ノ Hi",//当页面失去焦点，页面title显示的文字。
        webpageTitleOnblurTimeOut: 500,//当页面失去焦点，页面title变化的延时时间，单位毫秒。
        webpageTitleFocus: "(*´∇｀*) 欢迎回来！",//当页面获取焦点，页面title显示的文字；显示后，延时恢复原title
        webpageTitleFocusTimeOut: 1000,//当页面获取焦点，页面title变化的延时时间，单位毫秒
        webpageIcon: "https://files.cnblogs.com/files/asio/blog_logo.gif",//网站图标图片Url
        fontIconExtend: "",//字体图标库扩展Css的Url
        progressBar: {//进度条配置，显示在页面顶部
            id: 'top-progress-bar',// 请勿修改该值
            color: '#99FFCC',
            height: '2px',
            duration: 0.2
        },
        loading: {//页面加载loading
            rebound: {
                tension: 16,
                friction: 5
            },
            spinner: {
                id: 'spinner',
                radius: 90,
                sides: 3,
                depth: 4,
                colors: {
                    background: '#f0f0f0',
                    stroke: '#272633',
                    base: null,
                    child: '#272633'
                },
                alwaysForward: true,
                restAt: 0.5,
                renderBase: false
            }
        },
        homeTopAnimationRendered: true,//是否渲染主页banner动效
        homeTopAnimation: {//主页banner动效配置
            radius: 15,
            density: 0.2,
            color: 'rgba(255,255,255, .2)',
            clearOffset: 0.3
        },
        essayTopAnimationRendered: true,//是否渲染文章页banner动效
        essayTopAnimation: {//文章页banner动效配置
            triW: 14,
            triH: 20,
            neighbours: ["side", "top", "bottom"],
            speedTrailAppear: .1,
            speedTrailDisappear: .1,
            speedTriOpen: 1,
            trailMaxLength: 30,
            trailIntervalCreation: 100,
            delayBeforeDisappear: 2,
            colorsRandom: false,//是否自动生成颜色
            colors: [
                '#66FF99', '#5BC6A9',
                '#99FF99', '#66FFCC',
                '#38668C', '#666699',
                '#BED5CB', '#62ADC6',
                '#CC99FF', '#CC9999',
                '#FFFF66', '#FF9999'
            ]
        },
        bgAnimationRendered: true,//是否渲染页面背景动效
        backgroundAnimation: {//页面背景动效配置
            colorSaturation: "60%",
            colorBrightness: "50%",
            colorAlpha: 0.5,
            colorCycleSpeed: 5,
            verticalPosition: "random",
            horizontalSpeed: 200,
            ribbonCount: 3,
            strokeSize: 0,
            parallaxAmount: -0.2,
            animateSections: true
        },
        homeTopImg: [//主页banner图片Url，推荐尺寸>= 1920*1080，支持多张，每次刷新随机设置一张
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200217113617ACG%E2%99%A5%E6%9A%97%E9%BB%91%E7%B3%BB24.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200217114042ACG%E2%99%A5%E5%A4%9A%E5%AD%90%E6%98%9F12.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200217114147ACG%E2%99%A5%E5%A4%9A%E5%AD%90%E6%98%9F16.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219200320ACG%E2%99%A5%E9%AC%BC%E5%88%8074.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219200334ACG%E2%99%A5%E9%AC%BC%E5%88%8088.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219200713ACG%E2%9D%A4%E8%BF%B7%E6%A2%A6%E4%BA%AD5.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219200725ACG%E2%99%A5%E9%AC%BC%E5%88%8016.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219200743ACG%E2%99%A5%E9%AC%BC%E5%88%8068.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219200803ACG%E2%9D%A4%E9%BB%98%E9%83%81%E4%BA%AD50.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219200815ACG%E2%99%A5%E5%85%83%E6%B3%B1%E5%A2%8327.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219200826ACG%E2%9D%A4%E9%AC%BC%E5%88%8061.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219200836ACG%E2%9D%A4%E9%AC%BC%E5%88%8043.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219200842ACG%E2%9D%A4%E8%BF%B7%E6%A2%A6%E4%BA%AD9.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219200852ACG%E2%9D%A4%E6%BC%AB%E5%AF%BB%E5%B0%91%E5%A5%B38.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219200913ACG%E2%9D%A4%E8%90%8C%E7%B3%BB%E5%B0%91%E5%A5%B355.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219200927ACG%E2%99%A5%E5%A4%A9%E5%85%83%E5%A2%836.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219200934ACG%E2%99%A5%E8%8A%99%E8%93%89%E9%98%8125.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219200943ACG%E2%9D%A4%E5%A4%9A%E5%AD%90%E6%98%9F17.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219200955ACG%E2%9D%A4%E6%8B%89%E5%A7%86%E9%9B%B7%E5%A7%8610.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201006ACG-%E5%8F%8C%E5%AD%90%E6%98%9F13.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201015ACG-%E5%8F%8C%E5%AD%90%E6%98%9F17.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201030ACG-%E5%88%9D%E9%9F%B3%E5%B0%91%E5%A5%B32.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201101ACG%E2%9D%A4%E8%90%8C%E7%B3%BB%E5%B0%91%E5%A5%B346.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201108ACG%E2%99%A5%E8%90%8C%E7%B3%BB%E5%B0%91%E5%A5%B342.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201118ACG%E2%9D%A4%E8%90%8C%E7%B3%BB%E5%B0%91%E5%A5%B354.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201139ACG-%E7%BB%BF%E9%87%8E%E4%BB%99%E8%B8%AA40.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201147ACG-%E5%85%BD%E8%80%B3%E5%A8%9821.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201155ACG%E2%99%A5%E5%A4%9A%E5%AD%90%E6%98%9F28.png",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201204ACG%E2%99%A5%E5%A4%A9%E5%85%83%E5%A2%8324.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201213ACG%E2%99%A5%E7%BA%A2%E9%A2%9C%E9%98%8142.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201221ACG%E2%9D%A4%E8%90%8C%E7%99%BD%E7%B3%BB8.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201229ACG%E2%9D%A4%E8%BD%BB%E9%A3%8E%E9%98%8127.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201236ACG%E2%9D%A4%E5%A4%9A%E5%AD%90%E6%98%9F11.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201246ACG%E2%99%A5%E6%B5%B7%E8%93%9D%E6%98%9F11.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201339ACG-%E6%8B%89%E5%A7%86%E9%9B%B7%E5%A7%864.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201353ACG%E2%9D%A4%E9%BB%91%E9%A2%9C%E5%B0%91%E5%A5%B36.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201359ACG%E2%99%A5%E5%85%83%E6%B3%B1%E5%A2%8359.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201407ACG%E2%9D%A4%E5%A4%9A%E5%AD%90%E6%98%9F13.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201420ACG%E2%99%A5%E5%A4%9A%E5%AD%90%E6%98%9F18.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201545ACG-%E7%BA%A2%E9%A2%9C%E9%98%8138.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201554ACG%E2%99%A5%E9%AC%BC%E5%88%8082.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201607ACG%E2%9D%A4%E5%88%9D%E9%9F%B3%E5%B0%91%E5%A5%B320.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201617ACG%E2%99%A5%E5%A4%A9%E5%85%83%E5%A2%8327.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201628ACG%E2%99%A5%E9%AC%BC%E5%88%8052.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201635ACG%E2%99%A5%E5%A4%A9%E5%85%83%E5%A2%8323.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201641ACG%E2%9D%A4%E9%AC%BC%E5%88%80148.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201649ACG-%E5%85%BD%E8%80%B3%E5%A8%983.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201656ACG%E2%9D%A4%E5%A4%9A%E5%AD%90%E6%98%9F7.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201705ACG-%E5%AD%90%E8%A1%BF%E9%98%8112.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201714ACG%E2%99%A5%E9%AC%BC%E5%88%8030.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201723ACG%E2%9D%A4%E8%BF%B7%E6%A2%A6%E4%BA%AD12.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201739ACG%E2%99%A5%E5%8F%8C%E5%AD%90%E6%98%9F34.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201840ACG%E2%99%A5%E7%BA%A2%E9%A2%9C%E9%98%8126.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201846ACG%E2%99%A5%E5%A4%A9%E5%85%83%E5%A2%8320.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201846ACG%E2%99%A5%E5%A4%A9%E5%85%83%E5%A2%8320.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201852ACG%E2%99%A5%E8%90%8C%E7%B3%BB%E5%B0%91%E5%A5%B323.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201904ACG%E2%99%A5%E8%90%8C%E7%B3%BB%E5%B0%91%E5%A5%B338.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201909ACG%E2%9D%A4%E5%8F%8C%E5%AD%90%E6%98%9F32.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201913ACG%E2%99%A5%E5%8F%8C%E5%AD%90%E6%98%9F15.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201918ACG%E2%9D%A4%E7%BB%BF%E9%87%8E%E4%BB%99%E8%B8%AA1.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201923ACG%E2%99%A5%E6%B5%B7%E8%93%9D%E6%98%9F10.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201927ACG-%E6%8B%89%E5%A7%86%E9%9B%B7%E5%A7%867.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201931ACG%E2%99%A5%E7%BA%A2%E9%A2%9C%E9%98%8127.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201935ACG%E2%9D%A4%E5%AD%90%E8%A1%BF%E9%98%817.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201942ACG-%E7%BA%A2%E9%A2%9C%E9%98%8136.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201949ACG%E2%99%A5%E5%A4%A9%E5%85%83%E5%A2%8318.jpg"
        ],
        homeBannerText: "",//主页banner上的标语，设置此选项会固定显示文字，默认为空，自动获取一句
        homeBannerTextType: "jinrishici",//主页 banner 上的标语获取源，默认为 jinrishici 每次刷新随机获取一句古诗词
        essayTopImg: [//文章页banner图片Url，推荐尺寸>= 1920*1080，支持多张，每次刷新随机设置一张
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200217113617ACG%E2%99%A5%E6%9A%97%E9%BB%91%E7%B3%BB24.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200217114042ACG%E2%99%A5%E5%A4%9A%E5%AD%90%E6%98%9F12.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200217114147ACG%E2%99%A5%E5%A4%9A%E5%AD%90%E6%98%9F16.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219200320ACG%E2%99%A5%E9%AC%BC%E5%88%8074.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219200334ACG%E2%99%A5%E9%AC%BC%E5%88%8088.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219200713ACG%E2%9D%A4%E8%BF%B7%E6%A2%A6%E4%BA%AD5.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219200725ACG%E2%99%A5%E9%AC%BC%E5%88%8016.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219200743ACG%E2%99%A5%E9%AC%BC%E5%88%8068.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219200803ACG%E2%9D%A4%E9%BB%98%E9%83%81%E4%BA%AD50.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219200815ACG%E2%99%A5%E5%85%83%E6%B3%B1%E5%A2%8327.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219200826ACG%E2%9D%A4%E9%AC%BC%E5%88%8061.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219200836ACG%E2%9D%A4%E9%AC%BC%E5%88%8043.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219200842ACG%E2%9D%A4%E8%BF%B7%E6%A2%A6%E4%BA%AD9.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219200852ACG%E2%9D%A4%E6%BC%AB%E5%AF%BB%E5%B0%91%E5%A5%B38.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219200913ACG%E2%9D%A4%E8%90%8C%E7%B3%BB%E5%B0%91%E5%A5%B355.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219200927ACG%E2%99%A5%E5%A4%A9%E5%85%83%E5%A2%836.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219200934ACG%E2%99%A5%E8%8A%99%E8%93%89%E9%98%8125.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219200943ACG%E2%9D%A4%E5%A4%9A%E5%AD%90%E6%98%9F17.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219200955ACG%E2%9D%A4%E6%8B%89%E5%A7%86%E9%9B%B7%E5%A7%8610.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201006ACG-%E5%8F%8C%E5%AD%90%E6%98%9F13.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201015ACG-%E5%8F%8C%E5%AD%90%E6%98%9F17.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201030ACG-%E5%88%9D%E9%9F%B3%E5%B0%91%E5%A5%B32.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201101ACG%E2%9D%A4%E8%90%8C%E7%B3%BB%E5%B0%91%E5%A5%B346.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201108ACG%E2%99%A5%E8%90%8C%E7%B3%BB%E5%B0%91%E5%A5%B342.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201118ACG%E2%9D%A4%E8%90%8C%E7%B3%BB%E5%B0%91%E5%A5%B354.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201139ACG-%E7%BB%BF%E9%87%8E%E4%BB%99%E8%B8%AA40.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201147ACG-%E5%85%BD%E8%80%B3%E5%A8%9821.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201155ACG%E2%99%A5%E5%A4%9A%E5%AD%90%E6%98%9F28.png",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201204ACG%E2%99%A5%E5%A4%A9%E5%85%83%E5%A2%8324.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201213ACG%E2%99%A5%E7%BA%A2%E9%A2%9C%E9%98%8142.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201221ACG%E2%9D%A4%E8%90%8C%E7%99%BD%E7%B3%BB8.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201229ACG%E2%9D%A4%E8%BD%BB%E9%A3%8E%E9%98%8127.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201236ACG%E2%9D%A4%E5%A4%9A%E5%AD%90%E6%98%9F11.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201246ACG%E2%99%A5%E6%B5%B7%E8%93%9D%E6%98%9F11.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201339ACG-%E6%8B%89%E5%A7%86%E9%9B%B7%E5%A7%864.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201353ACG%E2%9D%A4%E9%BB%91%E9%A2%9C%E5%B0%91%E5%A5%B36.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201359ACG%E2%99%A5%E5%85%83%E6%B3%B1%E5%A2%8359.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201407ACG%E2%9D%A4%E5%A4%9A%E5%AD%90%E6%98%9F13.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201420ACG%E2%99%A5%E5%A4%9A%E5%AD%90%E6%98%9F18.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201545ACG-%E7%BA%A2%E9%A2%9C%E9%98%8138.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201554ACG%E2%99%A5%E9%AC%BC%E5%88%8082.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201607ACG%E2%9D%A4%E5%88%9D%E9%9F%B3%E5%B0%91%E5%A5%B320.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201617ACG%E2%99%A5%E5%A4%A9%E5%85%83%E5%A2%8327.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201628ACG%E2%99%A5%E9%AC%BC%E5%88%8052.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201635ACG%E2%99%A5%E5%A4%A9%E5%85%83%E5%A2%8323.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201641ACG%E2%9D%A4%E9%AC%BC%E5%88%80148.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201649ACG-%E5%85%BD%E8%80%B3%E5%A8%983.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201656ACG%E2%9D%A4%E5%A4%9A%E5%AD%90%E6%98%9F7.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201705ACG-%E5%AD%90%E8%A1%BF%E9%98%8112.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201714ACG%E2%99%A5%E9%AC%BC%E5%88%8030.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201723ACG%E2%9D%A4%E8%BF%B7%E6%A2%A6%E4%BA%AD12.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201739ACG%E2%99%A5%E5%8F%8C%E5%AD%90%E6%98%9F34.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201840ACG%E2%99%A5%E7%BA%A2%E9%A2%9C%E9%98%8126.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201846ACG%E2%99%A5%E5%A4%A9%E5%85%83%E5%A2%8320.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201846ACG%E2%99%A5%E5%A4%A9%E5%85%83%E5%A2%8320.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201852ACG%E2%99%A5%E8%90%8C%E7%B3%BB%E5%B0%91%E5%A5%B323.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201904ACG%E2%99%A5%E8%90%8C%E7%B3%BB%E5%B0%91%E5%A5%B338.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201909ACG%E2%9D%A4%E5%8F%8C%E5%AD%90%E6%98%9F32.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201913ACG%E2%99%A5%E5%8F%8C%E5%AD%90%E6%98%9F15.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201918ACG%E2%9D%A4%E7%BB%BF%E9%87%8E%E4%BB%99%E8%B8%AA1.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201923ACG%E2%99%A5%E6%B5%B7%E8%93%9D%E6%98%9F10.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201927ACG-%E6%8B%89%E5%A7%86%E9%9B%B7%E5%A7%867.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201931ACG%E2%99%A5%E7%BA%A2%E9%A2%9C%E9%98%8127.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201935ACG%E2%9D%A4%E5%AD%90%E8%A1%BF%E9%98%817.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201942ACG-%E7%BA%A2%E9%A2%9C%E9%98%8136.jpg",
            "https://images.cnblogs.com/cnblogs_com/asio/1649321/o_200219201949ACG%E2%99%A5%E5%A4%A9%E5%85%83%E5%A2%8318.jpg"
        ],
        essayCodeHighlightingType: 'highlightjs',//使用博客园代码高亮样式cnblogs或highlightjs，介意加载速度的可以使用此配置
        essayCodeHighlighting: 'atom-one-dark-reasonable',//当使用博客园代码高亮样式时，此配置不会对渲染产生影响，highlightjs 代码高亮主题：demo
        //   monokai-sublime  *  atelier-seaside-dark    *    atom-one-dark-reasonable
        essaySuffix: {//文章后缀配置，不配置使用默认
            codeImgUrl: '',// >= v1.1.5 左侧图片设置，不配置使用 window.cnblogsConfig.blogAvatar
            aboutHtml: '',// 关于博主，不配置使用默认
            copyrightHtml: '',// 版权声明，不配置使用默认
            supportHtml: ''// 声援博主，不配置使用默认
        },
        bottomBlogroll: [
            // 友情链接，[[链接名,链接]....]
            ["申请坑位", 'https://msg.cnblogs.com/send/asio'],
            ["申请坑位", 'https://msg.cnblogs.com/send/asio'],
            ["申请坑位", 'https://msg.cnblogs.com/send/asio']
        ],//友情链接
        bottomText: {//页脚标语
            icon: "❤️",
            left: "☞ bug全无",
            right: "测试全过 ☜"
        },
        footerStyle: 3,//页脚样式，有1和2,3   parseInt(Math.random() * 3 + 1)
        consoleList: [
            ['君纤 CNBlogs', 'https://www.cnblogs.com/asio']
        ],//控制台输出
        bookList: [ ],
        themeAuthor: false,   //是否显示主题作者
        isVersionMapping: false     //是否版本映射
        /*
        *关于转载文章在Html源码中加入如下代码来指定文章作者和来源：
            <input id="articleAuthor" type="hidden" value="作者" />
            <input id="articleSource" type="hidden" value="来源URL" />
        首先需要在页面源码中加入以下代码，来标识该页面为书单页面：
            <input id="bookListFlg" type="hidden">
         // 书单配置
        window.cnblogsConfig.bookList = [
            {
                title: '标题1',
                books: [
                    {
                        cover: 'https://images.weserv.nl/?url=https://img3.doubanio.com/view/subject/l/public/s29934992.jpg',
                        name: '后物欲时代的来临',
                        formerNname: '',
                        author: '郑也夫',
                        translator: '',
                        press: '中信出版社',
                        year: '2016-8'
                        ------------------------------
                        key               Description
                        title	           书目标题
                        books	           书目数据
                        books.cover	       封面
                        books.name	       书名
                        books.formerNname 原书名
                        books.author	   作者
                        books.translator  译者
                        books.press	       出版社
                        books.year	       出版年
                    }
                ]
            },
            .....
        ];
        * */
    };

    window.cnblogsConfig = $.extend( true, window.cnblogsConfigDefault, window.cnblogsConfig );
    getVersionConfig();

} else {

    $('a[name="top"]').text("SimpleMemory：基础配置有误，请阅读文档，检查配置！").css({
        'display': 'block',
        'text-align': 'center',
        'padding-top': '45vh',
        'font-size': '20px',
        'color': '#333'
    });
}

// init check博客园样式是否为SimpleMemory
function initCheck() {

    // check base theme
    var baseStyle = $('#mobile-style').attr('href');
    if (typeof baseStyle != 'undefined') {
        var bt = baseStyle.split('/');
        if($.inArray('SimpleMemory', bt) !== -1) {
            return true;
        }
    }
    return false;
}

// get version config
function getVersionConfig() {

    window.cnblogsConfig.CnVersions = window.cnblogsConfig.GhVersions;

    if (window.cnblogsConfig.isVersionMapping) {
        var url = 'https://raw.githubusercontent.com/' + window.cnblogsConfig.GhUserName + '/' + window.cnblogsConfig.GhRepositories + '/master/version.conf';

        $.ajax({
            type: "get",
            url: url,
            dataType: "text",
            async: false,
            success: function(conf)
            {
                window.themeVersion = conf ? JSON.parse(conf) : false;
                window.themeVersion && setConfVersion();
            }
        });

    } else if(window.cnblogsConfig.GhUserName === 'BNDong') {
        window.themeVersion = [
            [
                "v1.1.6",
                "d8adfb50252062f658350bda29d7145f5eff0b80"
            ]
            ,
            [
                "v1.1.8",
                "461aab69de17a84f0af9ff0c326bfcb94438b06c"
            ]
            ,
            [
                "v1.2.2",
                "08eab99303d7c463a495adabd8feccc784a8507d"
            ]
            ,
            [
                "v1.2.3",
                "36901bf16e2aa3656d4e6f78d44486273b0b8972"
            ]
            ,
            [
                "v1.2.4",
                "9354db2147c11fc56cfe02a502f1f8229332fc2f"
            ]
            ,
            [
                "v1.2.5",
                "4d744f980758500078df349520472e3b360fb841"
            ]
        ];
        setConfVersion();
    } else {
        init();
    }

    function setConfVersion() {
        var confVersion = getEndConfVal(window.cnblogsConfig.GhVersions);

        if (confVersion) {
            window.cnblogsConfig.GhVersions = confVersion;
        }

        init();
    }

    function getEndConfVal(thisGhVersion) {
        var endVal = '';
        window.themeVersion && $.each(window.themeVersion, function (i) {
            if (window.themeVersion[i][0] === thisGhVersion) {
                endVal = window.themeVersion[i][1]; return false;
            }
        });
        if (endVal === '') {
            return thisGhVersion;
        } else {
            return getEndConfVal(endVal);
        }
    }
}

// init
function init() {

    // set sidebar html
    var url = window.location.href,tmp = [];
    tmp = url.split("/");
    var user = tmp[3];
    var navListHtml = '<li><a href="https://www.cnblogs.com/'+user+'/" target="_self">首页</a></li>' +
        '<li><a href="https://i.cnblogs.com/" target="_blank">管理</a></li>'


    var menuNavList = window.cnblogsConfig.menuNavList;
    if (menuNavList.length > 0) {
        $.each(menuNavList, function (i) {
            navListHtml += '<li><a href="'+(menuNavList[i][1])+'" target="_blank">'+(menuNavList[i][0])+'</a></li>';
        });
    }

    $('#blog-news').prepend(sidebarHtml);
    $('#m-nav-list').append(navListHtml);

    // set userName
    if (window.cnblogsConfig.blogUser === "") window.cnblogsConfig.blogUser = user;

    // start cache
    $.ajaxSetup({cache: true});

    // load loadingJs
    $.getScript(getJsDelivrUrl('loading.js'), function () {

        // Loading start
        pageLoading.initRebound();
        pageLoading.initSpinner();
        pageLoading.spinner.init(pageLoading.spring, true);

        $.getScript(getJsDelivrUrl('jquery.mCustomScrollbar.min.js'), function () {
            $.getScript(getJsDelivrUrl('require.min.js'), function () {
                $.getScript(getJsDelivrUrl('config.js'), function () {
                    var staticResource = [
                        // 'optiscroll', 'ToProgress', 'rotate',
                        'optiscroll_ToProgress_rotate',
                        'snapSvg', 'classie', 'main4', 'tools'];
                    require(staticResource, function() {
                        require(['base'], function() {
                            (new Base).init();
                        });
                    });
                });
            });
        });
    });
}

// get file url
function getJsDelivrUrl(file, directory) {
    file = setFileNameMin(file, directory);
    return 'https://cdn.jsdelivr.net/gh/'+(window.cnblogsConfig.GhUserName)+'/'+(window.cnblogsConfig.GhRepositories)+'@'+(window.cnblogsConfig.GhVersions)+'/' + (file ? file : '');
}

// optimization file name
function setFileNameMin(file, directory) {
    if (typeof file == 'undefined') return '';
    var suffix  = null,fileArr = file.split('.');
    if (fileArr.length > 0 && $.inArray(fileArr[(fileArr.length -1)], ['js', 'css']) !== -1) {
        suffix = fileArr.pop();
        switch (suffix) {
            case 'js':directory = 'script';break;
            case 'css':directory = 'style';break;
        }
    } else {
        if (typeof directory == 'undefined') return '';
        switch (directory) {
            case 'js':directory = 'script';break;
            case 'css':directory = 'style';break;
        }
    }
    file.search('.min') === -1 && fileArr.push('min');
    suffix != null && fileArr.push(suffix);
    return (typeof directory !== 'undefined' ? ('src/' + directory + '/' + fileArr.join('.')) : (fileArr.join('.')));
}
