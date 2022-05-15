<br/>

>简介：了解到[JavaScript30](https://javascript30.com)的30天挑战，本人开始进行挑战，并在项目中进行学习、思考。项目的完成是根据实现效果分析步骤，然后一步一步地利用所学知识、搜索引擎、参考[未枝丫](https://github.com/soyaine)的中文指南所完成的。

<br/>

# 05 Flex Panel Gallery
### 预览地址：https://qqqqyan.github.io/30_HTML-CSS-JS/05%20-%20Flex%20Panel%20Gallery/index.html
<br/>

## 1. 实现效果
**可伸缩的图片墙**：展示同等大小的图片，用户点击图片会使图片放大，字体放大，并从上下两端滑入字体，再次点击则恢复原样。

## 2. 使用到的关键js语法
```javascript
element.classList.toggle("className",flag);
```

## 3. 使用到的关键css语法
```css
display: flex;
flex: n;
transform: translateY();
cubic-bezier();
```

## 4. 难点/细节
1.div滑入屏幕<br/>
2.css优先级问题