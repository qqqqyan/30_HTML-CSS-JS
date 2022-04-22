/*
    1.绑定键值：[自定义属性]
    通过自定义属性获取dom,[key=value]
    2.播放声音：item>audio play()
    3.修改样式：设置一个新的类item-change，
    其中transition设置过渡时间，transform设置大小，还有阴影设置
    4.取消样式：当transitioned时，将样式设置为原来的类item
*/

function main() {
    window.addEventListener("keydown", function (e) {
        let item_ = document.querySelector(`[data-code="${e.keyCode}"]`);
        let audio_ = item_.getElementsByTagName("audio")[0];
        // 改变进度条位置，保证按键被按住不放时，响起连续鼓点声，并且不用等到播放结束才能再次播放
        audio_.currentTime = 0;
        audio_.play();
        item_.classList.add('item-change');
        item_.addEventListener("transitionend", function (e) {
            e.target.classList.remove('item-change');
        });
    });
}

export {
    main
}