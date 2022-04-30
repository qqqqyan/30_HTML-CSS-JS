<br/>

>简介：了解到[JavaScript30](https://javascript30.com)的30天挑战，本人开始进行挑战，并在项目中进行学习、思考。项目的完成是根据实现效果分析步骤，然后一步一步地利用所学知识、搜索引擎、参考[未枝丫](https://github.com/soyaine)的中文指南所完成的。

<br/>

# 08 Canvas

## 1. 实现效果
**一**：展示空白页面，用户通过按下并拖动鼠标滑出曲线，曲线的颜色和粗细随着曲线的已有长度而变化。

## 2. 使用到的关键js语法
关于canvas的语法
1.设置笔画的格式
```javascript
ctx.lineWidth;
ctx.lineCap;
ctx.lineJoin;
ctx.strokeStyle;
```
2.画线
```javascript
ctx.moveTo();
ctx.lineTo();
ctx.stroke();
```

## 3. 难点/细节
1.lineWidth增长到某个数后逐渐减小，减小到某个数后逐渐增加
2.设置笔画之间的连接样式和线条的头尾样式