<br/>

>简介：了解到[JavaScript30](https://javascript30.com)的30天挑战，本人开始进行挑战，并在项目中进行学习、思考。项目的完成是根据实现效果分析步骤，然后一步一步地利用所学知识、搜索引擎、参考[未枝丫](https://github.com/soyaine)的中文指南所完成的。

<br/>

# 11 Custom Video Player
### 预览地址：https://qqqqyan.github.io/30_HTML-CSS-JS/11%20-%20Custom%20Video%20Player/index.html
<br/>

## 1. 实现效果
**定制播放器**：页面展示视频、进度条，当用户在视频上悬浮鼠标时，页面出现视频控制按钮，可通过点击按钮或滑动滚动条改变视频播放属性，如暂停、快进、放大音量、倍速播放等。

## 2. 使用到的关键js语法
关于video的语法：
```javascript
video.currentTime;
video.duration;
video.paused;
video.playbackRate；
video.volume;
video.play();
video.addEventListener("timeupdate", f);
```
其他语法：
```javascript
event.offsetX;
element.offsetWigth;
```

## 3. 使用到的关键css语法
```css
position: relative;
position: absolute;
background: none;
cursor: pointer;
cursor: vertical-text;
input[type=range]::-webkit-slider-thumb
input[type=range]::-webkit-slider-runnable-track
input[type=range]::-moz-range-thumb
input[type=range]::-moz-range-track 
```

## 4. 使用到的关键html语法
```html
<input type="range" min="" max="">
```

## 4. 难点/细节
1.在div中水平移动或点击，都会相应改变视频播放进度和div大小
2.设置两位整数的时间展示
3.视频变化的事件"timeupdate"
4.设置底部的控制区在悬浮时才上滑