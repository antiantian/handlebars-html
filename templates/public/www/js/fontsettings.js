/**
 * Created by Administrator on 2017/8/11 0011.
 */
window.onload = function () {
    initpage();
    window.onresize = function () {
        initpage();
    }
    function initpage() {
        var view_width = document.getElementsByTagName('html')[0].getBoundingClientRect().width;
        var _html = document.getElementsByTagName('html')[0];
        view_width > 640 ? _html.style.fontSize = 640 / 16 + 'px' : _html.style.fontSize = view_width / 16 + 'px';
    }
}
