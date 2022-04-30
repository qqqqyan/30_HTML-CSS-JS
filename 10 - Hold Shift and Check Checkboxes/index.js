// 1.当box选中时，文字加删除线
// 2.按下Shift时，记录前一次修改的box（位置和状态），并加border以标注，
//   保持按住Shift，记录点击的box，然后这两个box之间的box的状态都变得和Shift之前的box一致。

const rows = document.querySelectorAll(".row");
const boxs = document.querySelectorAll("input");
const text_div = document.querySelectorAll(".row-right");

// 1.当box选中时，文字加删除线
function toggle_del() {
    rows.forEach(row => {
        row.querySelector('.row-right').classList.toggle("del", row.querySelector('input').checked);
    });
};
boxs.forEach(box => box.addEventListener("change", toggle_del));

// 2.Shift功能
/*
    再次click会更新的，因此要存下上一次click的目标
    e.shiftKey是click事件中的一个属性，是按下shift再操作的关键
*/
let i, j;
let state;
function shift_listen(e, box) {
    if (this.getAttribute("data-index") === i) {
        i = this.getAttribute("data-index");
    };
    if (this.getAttribute("data-index") !== i) {
        state = this.checked;
    };
    if (e.shiftKey) {
        j = this.getAttribute("data-index");
        if (i < j) {
            for (let h = i; h <= j; h++) {
                boxs[h - 1].checked = state;
            }
        }
        else {
            for (let h = j; h <= i; h++) {
                boxs[h - 1].checked = state;
            }
        }
    };
    i = this.getAttribute("data-index");

};

boxs.forEach(box => box.addEventListener("click", shift_listen));