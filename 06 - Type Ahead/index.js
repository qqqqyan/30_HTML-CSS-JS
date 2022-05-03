/*
    输入框内容改变后，获取输入框的值；
    在json数据中查找该值，返回该值的对象；
        1.只在诗句、诗人、诗名中查找
        2.返回符合的对象数组
    将获取的对象进行展示，forEach+innerHtml
*/

const url = 'https://gist.githubusercontent.com/soyaine/81399bb2b24ca1bb5313e1985533c640/raw/bdf7df2cbcf70706c4a5e51a7dfb8c933ed78878/TangPoetry.json';
// 从网页中获取信息，并将信息转为string格式？
// const arr = JSON.parse(json);
let poetrys = [];
fetch(url)
    .then(response => response.json())
    .then(promise => poetrys.push(...promise));

let input = document.querySelector("input");
let ctbody = document.querySelector(".container-body");

input.addEventListener("change", get_objs);
input.addEventListener('keyup', get_objs);

function get_objs() {
    let new_poetrys = [];
    let html = '';
    // 判断【字符串】是否包含value
    poetrys.forEach(poetry => {
        // 由于数据中，有诗人的名字为[]空数组，无法取得字符串，因此要转换
        if (poetry.detail_author.length === 0) poetry.detail_author = ["undefined"];
        if (poetry.detail_author[0].includes(input.value)
            || poetry.detail_text.includes(input.value)
            || poetry.title.includes(input.value)) {
            new_poetrys.push(poetry);
        };
    });
    html = new_poetrys.map(p => {
        // 为搜索的关键字添加div+class，改变背景颜色
        let author = p.detail_author[0].replace(input.value, `<span class="bgc">${input.value}</span>`);
        let text = p.detail_text.replace(input.value, `<span class="bgc">${input.value}</span>`);
        let title = p.title.replace(input.value, `<span class="bgc">${input.value}</span>`);
        return `
        <div class="item">
            <div>${text}</div>
            <div>${title} - ${author}</div>
        </div>
    `;
    }).join('');
    ctbody.innerHTML = html;
};


