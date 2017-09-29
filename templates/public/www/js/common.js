/**页面验证码**/
$(function () {
    $("#getCode").click(function () {
        var opt = $(this).attr('dataOption');
        var T, count = 3;
        if (opt == 1) {
            sendCode()
            $("#getCode").addClass("blackBg");
            $(this).attr('dataOption', 2);
            $(this).html('剩余 ' + count + 's');
            T = setInterval(function () {
                count--;
                if (count < 0) {
                    $("#getCode").attr('dataOption', 1);
                    $("#getCode").html('重新获取');
                    $("#getCode").removeClass("blackBg")
                    clearInterval(T);
                } else {
                    $("#getCode").html('剩余 ' + count + 's');
                }
            }, 1000)
        }
    })

})
//刷新
function sendCode() {
    var token = getQueryString("token") || '';
    $.ajax({
        type: 'post',
        url: '/api/resend',
        data: {
            token: token
        },
        dataType: 'json',
        success: function (result) {
            if (result.status == 2) {
                $("#code").val(result.message);
                $("#code_get").val(result.message)
            }
        }
    })
}
//获取url参数
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
//去 空格
function trim(s) {
    return s.replace(/(^\s*)|(\s*$)/g, "");
}