$(document).ready(function (){
    loadingemem()
});

function loadingemem() {
    console.log("loading")
    var memeDiv = document.createElement("div");
    var commontEle = document.getElementsByClassName("commentbox_main")[0];
    var emeBtn = document.getElementById('btn_comment_submit');
    var tag = true;
    if(memeDiv!=undefined){
        memeDiv.setAttribute('class','OwO OwO-open')
        memeDiv.innerHTML = "<div class=\"OwO-logo\"><span class=\"face-icon\"  >OωO</span></div>";
    }else{
        tag = false;
    }
   if(commontEle!=undefined){
       commontEle.appendChild(memeDiv);
   }else {
       tag = false;
   }
   if (emeBtn!=undefined){
       emeBtn.setAttribute('onmousedown','outeme()');
   }else{
       tag = false;
   }
// 绑定表情
    $('.face-icon').SinaEmotion($('#tbCommentBody'));
   return tag;
}
//提交按钮方法
function outeme() {
    var inputText = $('#tbCommentBody').val();
    //将表情描述替换为指定形式
    $('#tbCommentBody').val(AnalyticEmotion(inputText));
}
