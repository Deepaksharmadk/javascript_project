 const box=document.querySelectorAll('.box')
//  console.log(box);
 box.forEach((color)=>{
    // console.log(color);
    color.addEventListener('click',(e)=>{
        // console.log(e.target.className);
        if(e.target.id==='red'){
            const body =document.querySelector('body')
            body.style.backgroundColor=e.target.id;

            // console.log(body);
        }
        if(e.target.id==='blue'){
            const body =document.querySelector('body')
            body.style.backgroundColor=e.target.id;

            // console.log(e.target.id==='blue');
        }
        if(e.target.id==='black'){
            const body =document.querySelector('body')
            body.style.backgroundColor=e.target.id;

         
        }
        if(e.target.id==='orange'){
            const body =document.querySelector('body')
            body.style.backgroundColor=e.target.id;

         
        }
        if(e.target.id==='yellow'){
            const body =document.querySelector('body')
            body.style.backgroundColor=e.target.id;

         
        }
        if(e.target.id==='pink'){
            const body =document.querySelector('body')
            body.style.backgroundColor=e.target.id;

         
        }
        if(e.target.id==='purple'){
            const body =document.querySelector('body')
            body.style.backgroundColor=e.target.id;

         
        }
        if(e.target.id==='violet'){
            const body =document.querySelector('body')
            body.style.backgroundColor=e.target.id;

         
        }
        if(e.target.id==='gold'){
            const body =document.querySelector('body')
            body.style.backgroundColor=e.target.id;

         
        }
        if(e.target.id==='white'){
            const body =document.querySelector('body')
            body.style.backgroundColor=e.target.id;

         
        }
        if(e.target.id==='navy'){
            const body =document.querySelector('body')
            body.style.backgroundColor=e.target.id;

         
        }
        if(e.target.id==='lime'){
            const body =document.querySelector('body')
            body.style.backgroundColor=e.target.id;

         
        }
        if(e.target.id==='brown'){
            const body =document.querySelector('body')
            body.style.backgroundColor=e.target.id;

         
        }
        if(e.target.id==='coral'){
            const body =document.querySelector('body')
            body.style.backgroundColor=e.target.id;

         
        }
        
       
    })
 })
// const spans=document.querySelector('.d');
const box1=document.querySelector('.box');
console.log(box1);
console.dir(box1);