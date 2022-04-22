// 1.用户拉动滑动条（事件或者是input）【input————range】
// 2.用户“click”打开颜色面板，“blur”选定颜色（选择颜色的API————【input（color）】）
// 3.记录控制条、颜色面板的数据，
//   文字修改innerText，图片样式修改
let spacing = document.getElementById("spacing");
let blur = document.getElementById("blur");
let color = document.getElementById("color");
let info = document.getElementById("info");
let img = document.getElementsByTagName("img")[0];
let tlcolor = document.getElementById("tlcolor");
// 如何记录更改的value？
// value的更改在浏览器可接收到，但代码不会再次解析
// ————object.defineProperty?事件监听?
let spacingNum = spacing.value;
let blurNum = blur.value;
let colorVal = color.value;

function changeValue() {
    // forEach简化版
    ['mousemove', 'change'].forEach(et =>
        spacing.addEventListener(et, function () {
            spacingNum = spacing.value;
            changeCss();
        })
    );
    ['mousemove', 'change'].forEach(et =>
        blur.addEventListener(et, function () {
            blurNum = blur.value;
            changeCss();
        })
    );
    ['mousemove', 'change'].forEach(et =>
        color.addEventListener(et, function () {
            colorVal = color.value;
            changeCss();
        })
    );
    // #region  暴力添加版 
    // spacing.addEventListener('mousemove', function () {
    //     spacingNum = spacing.value;
    //     changeCss();
    // });
    // spacing.addEventListener('change', function () {
    //     spacingNum = spacing.value;
    //     changeCss();
    // });
    // blur.addEventListener("mousemove", function () {
    //     blurNum = blur.value;
    //     changeCss();
    // });
    // blur.addEventListener("change", function () {
    //     blurNum = blur.value;
    //     changeCss();
    // });
    // color.addEventListener("mousemove", function () {
    //     colorVal = color.value;
    //     changeCss();
    // });
    // color.addEventListener("change", function () {
    //     colorVal = color.value;
    //     changeCss();
    // });
    //#endregion 
}

function changeCss() {
    img.style.cssText = `width: 200px;
    background-color: ${colorVal};
    padding: ${spacingNum}px;
    filter: blur(${blurNum}px);
    `;
    tlcolor.style.cssText = `color: ${colorVal}`;
    info.innerText =
        `img { padding: ${spacingNum}px; filter: blur(${blurNum}px); background: ${colorVal}; }`
}

export {
    changeValue
}
