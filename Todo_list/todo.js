 const targetbtn=document.querySelector('#push')
console.log(targetbtn);
targetbtn.addEventListener('click',function(E) {
let inputbox = document.querySelector('#new-task input')
console.log(inputbox.value);
if (inputbox.value.length=='') {
    alert('Please enter the Tasks list')

} else {
    let tasks=document.querySelector('#tasks')
    tasks.innerHTML=+ `<div id="tasks">
    <span class='taskname'>
       let current= ${document.querySelector('#new-task input').value}
    </span>
    </div>`
 
}
})
