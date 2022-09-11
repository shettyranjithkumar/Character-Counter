
var text=document.getElementById('txt-area');
text.addEventListener('input',()=>{
    let num=document.getElementById('no-character');
     num.innerHTML=text.value.length;
})


