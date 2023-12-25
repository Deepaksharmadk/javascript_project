const spantarget=document.querySelector('.clock')
// console.log(spantarget);
setInterval(function() {
    let date=new Date();
    console.log(date);
    let h=date.getHours()
    let m=date.getMinutes();
    let s=date.getSeconds();
    // Convert to 12-hour format
let amPm = h >= 12 ? 'PM' : 'AM';
h = h % 12 || 12; // Handle midnight (12:00 AM)
     let currentTime=spantarget.innerHTML=`${h}:${m}:${s}`
     console.log(currentTime);
}, 1000);