// 获取当前日期和时间
var datetime = new Date();
var date = '';
var weekday = "";
var week = datetime.getDay();
// 根据星期几的数字设置对应的中文星期名称
switch(week){
    case 0: weekday = "星期日"; break;
    case 1: weekday = "星期一"; break;
    case 2: weekday = "星期二"; break;
    case 3: weekday = "星期三"; break;
    case 4: weekday = "星期四"; break;
    case 5: weekday = "星期五"; break;
    case 6: weekday = "星期六"; break;
}
// 格式化日期字符串，包括年、月、日和星期
date = `${datetime.getFullYear()}年${parseInt(datetime.getMonth())+1}月${datetime.getDate()}日${weekday}`;
// 设置定时器，每秒调用一次showtime函数更新时间
var timerID = window.setInterval("showtime()",1000);
// 定义showtime函数，用于显示当前时间
function showtime(){
    let datetime = new Date();
    let time = "";
    // 格式化，如果小于10则在前面加0
    time += datetime.getHours() < 10 ? `0${datetime.getHours()}:` : `${datetime.getHours()}:`;
    time += datetime.getMinutes() < 10 ? `0${datetime.getMinutes()}:` : `${datetime.getMinutes()}:`;
    time += datetime.getSeconds() < 10 ? `0${datetime.getSeconds()}` : `${datetime.getSeconds()}`;
    document.getElementById("date-time").innerHTML = `${date} ${time}`;
}

var count = 2;
var a = [...document.querySelectorAll('#banner a')];
var carouselID = window.setInterval("carousel()",2000);
for(let i = 0; i < a.length; i++){
    a[i].addEventListener('click', function(){
        count = i + 1;
        changebgcolor(count);
    },false);
}
function carousel(){
    let imgSrc = `../叮叮书店素材/图片素材/b-ad${count}.jpg`;
    let aChange = `a${count}`;
    // 记录<a>标签需要变回背景颜色的序号
    let aCount = count - 1;
    if(aCount == 0) {aCount = 5;}
    let aRestore = `a${aCount}`;
    document.getElementById("b-ad").src = imgSrc;
    document.getElementById(aChange).style.backgroundColor = "hsl(150, 40%, 30%)";
    document.getElementById(aRestore).style.backgroundColor = "hsl(85, 55%, 50%)";
    count++;
    if(count == 6) {count = 1;}
}
function changebgcolor(num){
    document.getElementById("b-ad").src = `../叮叮书店素材/图片素材/b-ad${num}.jpg`;
    for(let targetNum = 1; targetNum <= 5; targetNum++){
        let aTarget = `a${targetNum}`;
        if(targetNum == num){
            document.getElementById(aTarget).style.backgroundColor = "hsl(150, 40%, 30%)";
        }else{
            document.getElementById(aTarget).style.backgroundColor = "hsl(85, 55%, 50%)";
        }
    }
}
