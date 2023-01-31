var type = new Typed('.typing-text',{
    strings : [ 'web designer', 'front end developer', 'PHP developer', 'Laravel developer' ],
    typeSpeed: 110,
    loop:true
});

let themeColor = document.querySelectorAll('.theme-toggler span');
themeColor.forEach(color => color.addEventListener('click', () =>{
    let background = color.style.background;
    document.querySelector('body').style.background = background;
}));

let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});

// ***************from send to mailjs start***************************
const inputSign=document.getElementById('Signin');
inputSign.addEventListener("click", function(){
    
    const inputName=document.getElementById('inputName');
    const inputEmail=document.getElementById('inputEmail');
    const inputNumber=document.getElementById('inputNumber');
    const inputMessege=document.getElementById('inputMessege');


    const nameValue=inputName.value; 
    const emailValue=inputEmail.value; 
    const numberValue=inputNumber.value; 
    const messegeValue=inputMessege.value; 

    var templateParams = {
        nameValue:nameValue,
        emailValue: emailValue,
        numberValue: numberValue,
        messegeValue: messegeValue,
    }; 


   if(nameValue && emailValue && numberValue && messegeValue){
    console.log(nameValue,emailValue,numberValue,messegeValue);

    inputName.value="";
    inputEmail.value="";
    inputNumber.value="";
    inputMessege.value="";

    emailjs.send("email send", "template_ez9kevx", templateParams, "tYiMrwyCWgBFEUep5");
   }
//    console.log(nameValue,emailValue,numberValue,messegeValue);
});
// ***************from send to mailjs end***************************


// ******************preloader website start************************ 
window.onload = function() { 
 const preloaderArea = document.getElementById("preloader-area");
 preloaderArea.className = "page-loader";

 setTimeout(function (){
    preloaderArea.style.display="none";
 },3500);
};

// ******************preloader website end************************ 