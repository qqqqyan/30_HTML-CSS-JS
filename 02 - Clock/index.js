/* 
    1.自动更新时间并收集时间数据
    2.将时间数据转换为针的角度
    3.将针的角度应用到div的旋转css样式中
*/
let hourHand = document.getElementsByClassName('hour-hand')[0];
let minHand = document.getElementsByClassName('minute-hand')[0];
let secHand = document.getElementsByClassName('second-hand')[0];
let date, h, m, s;

function main() {
    setInterval(changeCss, 1000);
}

function changeCss() {
    // 创建对象时，获取新的当前系统时间
    date = new Date();
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    hourHand.style.cssText += `
    transform: rotate(${(h / 12) * 360 + m / (12 * 60) * 360}deg);
    `;
    minHand.style.cssText += `
    transform: rotate(${(m / 60) * 360 + (s / (60 * 60) * 360)}deg);
    `;
    secHand.style.cssText += `
    transform: rotate(${(s / 60) * 360}deg);
    `;
}

export {
    main
}
