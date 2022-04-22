<br/>

>简介：了解到[JavaScript30](https://javascript30.com)的30天挑战，本人开始进行挑战，并在项目中进行学习、思考。项目的完成是根据实现效果分析步骤，然后一步一步地利用所学知识、搜索引擎、参考[未枝丫](https://github.com/soyaine)的中文指南所完成的。

<br/>

# 02 CLock

## 1. 实现效果
**模拟时钟**：页面展示时钟，其时针、分针、秒针都随时间变化。

## 2. 使用到的关键js语法
```javascript
new Date();
date.getHours();
setInterval();
```
## 3. 使用到的关键css语法
旋转：
```css
transform: rotate();
transform-origin: bottom;
```
居中重叠：
```css
position:absolute;
Z-index:2;
bottom:50%;
```

## 4. 难点/细节
1.钟表内元素重叠，并将指针的底部位置居中</br>
2.不断更新当前时间