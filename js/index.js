/**
 * Created by 三木 on 2018/9/5.
 */
    let up=document.querySelector(".up");
    let button=document.querySelector("button");
    let input=document.querySelector("input");
    button.onclick=function () {
        let result=document.createElement("div");
        result.style=`width:70%;
            margin:10px auto;height:30px;line-height=30px;text-align:center;
            font-size:18px;border-bottom:1px solid red;`;
        result.innerText=input.value;
        input.value="";
        up.appendChild(result);
    };