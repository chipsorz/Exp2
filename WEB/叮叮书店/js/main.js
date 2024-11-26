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