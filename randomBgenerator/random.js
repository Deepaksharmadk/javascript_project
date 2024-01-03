const btn=document.querySelectorAll('.start');
console.log(btn);
const stop=document.querySelectorAll('.stop');
const body=document.querySelectorAll('body');
function change(){
    document.body.style.backgroundColor = random();
}
let intervalid;
btn.forEach(function(e) {
    e.addEventListener('click', function() {
        if(!intervalid){
            intervalid= setInterval(change,1000)
        }
    });
})
stop.forEach(function(e){
    e.addEventListener('click', function() {
        clearInterval(intervalid);
        intervalid=null
    })})

function random(){
    const hex='0123456789ABCDEF'
     console.log(hex);
     let color='#'
    for (let i= 0; i < 6; i++) {
       
         let random=[Math.floor(Math.random() * 16)]
        color=color+hex[random]
        // console.log(random);
      
    }
    return color
}

