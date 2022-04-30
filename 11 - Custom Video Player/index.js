const video = document.querySelector(".video");
const progress_slider = document.querySelector(".bottom_progress_slider");
const progress = document.querySelector(".bottom_progress_slider_juice");
const pause_btn = document.querySelector(".bottom_controls_pause_btn");
const show_time = document.querySelector(".bottom_controls_time");
const volume_slider = document.querySelector(".bottom_controls_volume_slider");
const speed_slider = document.querySelector(".bottom_controls_speed_slider");
const forward_btn = document.querySelector(".bottom_controls_fastforward_btn");
const rewind_btn = document.querySelector(".bottom_controls_rewind_btn");
// 播放或暂停视频，视频播放并且改变pause——btn的text
function pause_play() {
    if (video.paused) {
        this.innerText = "►";
        video.play();
    }
    else {
        this.innerText = '❚❚';
        video.pause();
    }
};
// 随着视频的播放，获取当前时间和总时间，更新当前时间
// 设置时间的格式，保持两位整数
function time_format(seconds) {
    let minute = ("0" + parseInt(seconds / 60)).slice(-2);
    let second = ("0" + parseInt(seconds % 60)).slice(-2);
    let timeString = `${minute}:${second}`;
    return timeString;
};
function time_show() {
    const nowTime = time_format(video.currentTime);
    const endTime = time_format(video.duration);
    show_time.innerText = `${nowTime} / ${endTime}`;
};
// 随着视频的播放，通过当前时间和总时间调整进度条
function progress_update() {
    const played_percentage = video.currentTime / video.duration;
    progress.style.width = played_percentage * 100 + "%";
};
// 可以移动进度条，鼠标移动的抬起点，鼠标的点击点，都是新的进度
//
function progress_change(e) {
    // 获取元素的宽度
    // console.log(getComputedStyle(this, null)["width"]);
    // offset系列
    /* 
       https://eliux.github.io/javascript/common-errors/why-this-gets-undefined-inside-methods-in-javascript/
       this的指向会在箭头函数、赋给一个变量、函数调用时没有依赖的对象，在严格模式下，this不会指向window，而指向undefined
       const time_point = (e.offsetX / this.offsetWidth) * video.duration;
    */
    const time_point = (e.offsetX / progress_slider.offsetWidth) * video.duration;
    video.currentTime = time_point;
};
// 拉动slider，获取value以改变音量、速度
function volume_change() {
    video.volume = volume_slider.value;
};
function speed_change() {
    video.playbackRate = speed_slider.value;
};
// 点击btn，video时间改变
function forward() {
    video.currentTime += 10;
};
function rewind() {
    video.currentTime -= 10;
};

function main() {
    pause_btn.addEventListener('click', pause_play);
    video.addEventListener("timeupdate", time_show);
    video.addEventListener("timeupdate", progress_update);
    // progress_slider.addEventListener("click", progress_change);
    // 拖动过程也会更新播放进度，需要限制触发条件，当mousedown时，mousemove才触发，并在mouseup结束。
    let mousedown = false;
    progress_slider.addEventListener("mousedown", () => mousedown = true);
    progress_slider.addEventListener("mouseup", () => mousedown = false);
    progress_slider.addEventListener("mousemove", e => {
        if (mousedown) {
            progress_change(e);
        }
    });

    // progress_slider.addEventListener("mousemove", function (e) { if (mousedown) progress_change(e) });
    volume_slider.addEventListener("change", volume_change);
    speed_slider.addEventListener("change", speed_change);
    forward_btn.addEventListener("click", forward);
    rewind_btn.addEventListener("click", rewind);
}

export {
    main
}
