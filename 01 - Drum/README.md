<br/>

>简介：了解到[JavaScript30](https://javascript30.com)的30天挑战，本人开始进行挑战，并在项目中进行学习、思考。项目的完成是根据实现效果分析步骤，然后一步一步地利用所学知识、搜索引擎、参考[未枝丫](https://github.com/soyaine)的中文指南所完成的。

<br/>

# 01 Drum
### 预览地址：https://qqqqyan.github.io/30_HTML-CSS-JS/01%20-%20Drum/index.html
<br/>

## 1. 实现效果
**模拟打鼓**：页面展示键值与声音名称相对应的键方块，用户按下键盘的ASDFGHJKL这一行键的任一个，页面都会发出与键值相应的声音，并使页面上的相对应的键方块放大、变亮。

## 2. 使用到的关键js语法
```javascript
querySelector(`[data-code="${e.keyCode}"]`);
audio.currentTime = 0;
audio.play();
event.keyCode;
event.target;
element.classList.add();
element.classList.remove();
element.addEventListener("transitionend",f);
```

## 3. 难点/细节
1.按键与对应的div绑定。<br/>
2.div的样式在样式变换结束后变回原来的样子。<br/>
3.快速按键时，中断音频，从头开始播放音频。