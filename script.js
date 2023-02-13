const lefticon = document.getElementsByClassName('fa-solid fa-caret-left')[0];
const rightIcon = document.getElementsByClassName('fa-sharp fa-solid fa-caret-right')[0];
const cards = document.getElementsByClassName('cards')[0];

lefticon.addEventListener('click',()=>{
    cards.scrollLeft -= 140;
})
rightIcon.addEventListener('click',()=>{
    cards.scrollLeft +=140;
})

let poster = document.getElementById('poster');
let title = document.getElementById('title');
let price = document.getElementById('price_cont');

Array.from(document.getElementsByClassName('card')).forEach((ele,i)=>{
   console.log(ele);
    ele.addEventListener('click',()=>{
        poster.src = ele.getElementsByTagName('img')[0].src;
        title.innerText = ele.getElementsByTagName('h5')[0].innerText;
        price.innerText = ele.getElementsByTagName('h4')[0].innerText;
        
    }) 
})


