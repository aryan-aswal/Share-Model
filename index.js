let button = document.getElementById('share-my-profile');
button.addEventListener('click',()=>{
    let content = document.querySelector('.pop-up-modal');
    content.setAttribute("style","display:block;");
})

let close = document.querySelector('.cross');
close.addEventListener('click',()=>{
    let content = document.querySelector('.pop-up-modal');
    content.setAttribute("style","display:none;");
})
