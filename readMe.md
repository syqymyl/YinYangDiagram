# 制作思路和制作过程

## 首先实现数字变化效果

1. 先用 document.querySelector()找到到一个 div 的 id"html"。
2. 实现将 html.innerHTML 内容在指定时间从 1 变到 2，再能变到 3...n。用 setInterval 可实现连续变化，但用 setTimeout 不仅可以实现上述变化，还可随时停止，其中数字自增并显示的功能封装成了函数，以供递归调用。

## 实现字符随着变化连续全部显示的效果

### 将数字换为字符

用一个变量存储需要显示的字符串,设置 html.innerHTML 为 string[n]

### 让字符连续全部显示

用 string.substring(0, n)使字符串的字符全部陆续出现

### 解决回车与空格无法显示的问题

1. 使用正则表达式用\<br>替换所有回车，用\&nbsp;替换所有空格：

```javascript
string = string.replace(/\n/g, "<br>");
```

2. 当一个个字符读取显示时，每读到半个标签<b，便会换行，但在读到 b 前，标签会以左尖括号形式显示到页面，故应让回车一次性检测到整个\<br>标签，故定义一个新的变量 string2 存储随着 n 的增加需要显示的字符总量，在出现回车、空格还是普通字符时进行判断，分别往 string2 变量中添加不同的字符：

   ```javascript
   setTimeout(() => {

    // console.log(n); //用于调试
    if (string[n] === "\n") {
      //如果是回车,就照搬;
      string2 += "<br>";
    } else if (string[n] === " ") {
      //如果是空格
      string2 += "&nbsp;";
    } else {
      //否则不照搬
      string2 += string[n];
    }
   ```

## 让设置的 css 样式生效

1. 尝试在 html 中加 style id，用 document.querySelector()拿到它，然后在 innerHTML 中写样式代码，看是否能生效。
2. 成功实现效果后，把原本 html 中的内容也放到 css 中，就可以实现 html 中的 css。
3. 发现不生效，查看控制台，发现 style 中有\<br>与\&nbsp;，解决办法：将 style 中的内容设为，未将回车和空格改成\<br>与\&nbsp;的字符串。

```javascript
style.innerHTML = string.substring(0, n);
```

4. 仍然无效果，猜测可能是因为内容中的文字影响，尝试将文字加注释，达到预期效果

## 制作太极

1. 画圆，设置 position、宽高等。
2. 左白右黑：搜索 css gradient background generator，调整到需要的效果后，复制其代码。
3. 加两个圆：加两个伪元素 div1::before 与 div1::after，由于伪元素相当于行内元素，要使其一上一下，应该将其设为块级元素。接着设置 position、宽高位置等。
4. 为两个圆中间加上相反颜色的圈：搜索 css gradient background generator，选择渐变，调整到需要的效果后，复制其代码。

## 细节调整

1. 注意干掉 CSS 默认样式。
2. 设置显示的 css 代码自动换行。

```
word-break: break-all;
```

3. 随着字符的出现，超出 pc 端屏幕的字符需要手动拖动滚动条才能查看，如何设置页面自动滚动：搜索 js 设置滚动条得到解决办法：window.scrollTo(x, y)，将 y 调到一个特大值。
4. pc 端太极位置的调整
5. 移动端 BUG 的修复：媒体查询，设置代码显示与太极在移动端屏幕各占一半，其间不断调整太极的三个圆的位置使其达到效果
