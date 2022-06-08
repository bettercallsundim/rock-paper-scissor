const users=document.querySelectorAll('.user .img-fluid');
const bot=document.querySelectorAll('.bot .img-fluid');
const uchose=document.querySelector('.uchose');
const botchose=document.querySelector('.botchose');
const verdict=document.querySelector('.verdict');


users.forEach((user,ind)=>{
    let piu=user;
    user.addEventListener('click',mainfunc)

})
function mainfunc(){
    users.forEach((user,ind)=>{
        user.classList.remove('active');
    })
    bot.forEach((bots,ind)=>{
        bots.classList.remove('active');
    })

    this.classList.add('active');
    uchose.innerHTML=`You chose: ${this.dataset.what}`;
    const userSelected=this.dataset.what;
    botchoosing(userSelected);

}

function botchoosing(leuser){
    const theNumber=Math.floor(Math.random()*3);
    bot[theNumber].classList.add('active');
    const botSelected=bot[theNumber].dataset.what;
    botchose.innerHTML=`Bot chose: ${bot[theNumber].dataset.what}`;
    verdiction(leuser,botSelected);
}
// function verdiction(leuser,lebot){
//     if(leuser===lebot){
//         verdict.innerHTML='Draw';
//     }else if(leuser==='rock' && lebot==='paper'){
//         verdict.innerHTML='Bot Win';
//     }else if(leuser==='rock' && lebot==='scissor'){
//         verdict.innerHTML='You Win';
//     }else if(leuser==='scissor' && lebot==='paper'){
//         verdict.innerHTML='You Win';
//     }else if(leuser==='scissor' && lebot==='rock'){
//         verdict.innerHTML='Bot Win';
//     }else if(leuser==='paper' && lebot==='rock'){
//         verdict.innerHTML='You Win';
//     }else if(leuser==='paper' && lebot==='scissor'){
//         verdict.innerHTML='Bot Win';
//     }
// }

function verdiction(leuser,lebot){
    if(leuser===lebot){
        verdict.innerHTML='Draw';
    }else{
       leuser==='paper' && lebot==='rock'|| leuser==='scissor' && lebot==='paper'||leuser==='rock' && lebot==='scissor'? verdict.innerHTML='You Win': verdict.innerHTML='Bot Win';
    }
}