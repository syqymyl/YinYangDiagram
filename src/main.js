let html = document.querySelector("#html"); //通过css选择器找到这个元素
let style = document.querySelector("#style");

let string = `/* 你好，我是一名前端新人
 * 接下来我要展示一下我的前端功底
 * 首先我要准备一个div
 **/
#div1{
  border: 1px solid green;  
  width: 200px;
  height: 200px;
}
/* 接下来我把div变成一个八卦图
 * 注意看好了
 * 首先，把div变成一个圆
 **/
#div1{
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  border: none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#div1{
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个神秘的小球 */
#div1::before{
  width: 100px;
  height: 100px;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  background: #fff;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(247,247,247,1) 25%, rgba(255,255,255,1) 100%);
}
#div1::after{
  width: 100px;
  height: 100px;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  background: #000;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(235,235,235,1) 25%, rgba(0,0,0,1) 25%);
}
`;

// string = string.replace(/\n/g, "<br>"); //取代所有回车

let string2 = ""; //用于存储字符
//在控制台使用string[0].charCodeAt()可以得出其的Unicode编码
let n = 0; //将其作为数组的下标

// demo.innerHTML = string.substring(0, n);

let step = () => {
  setTimeout(() => {
    // console.log(n); //用于调试
    if (string[n] === "\n") {
      //如果是回车,就照搬;
      string2 += "<br>"; //在html回车要表示为<br>
    } else if (string[n] === " ") {
      //如果是空格
      string2 += "&nbsp;"; //在html空格要表示为&nbsp
    } else {
      //否则不照搬
      string2 += string[n];
    }
    // html.innerHTML = string.substring(0, n); //string[11]超过字符串长度,改为判断n + 1
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n); //除掉转换成<br>和&nbsp;
    window.scrollTo(0, 9999);
    html.scrollTo(0, 9999); //配合overflow让代码滚动
    if (n < string.length - 1) {
      //如果不是最后一个，就继续
      n += 1; //n = 55时时最后一字符,但+1后又变成了56,进入step
      step();
    }
  }, 0);
};

step();
// step(); //两个setTimeout都是在1s后执行，看不到变化过程
