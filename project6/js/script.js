
const inputSign=document.getElementById("Signin");
inputSign.addEventListener("click", function(){

    const inputEmail=document.getElementById("inputEmail");
    const inputSubject=document.getElementById("inputSubject");
    const inputMessege=document.getElementById("inputMessege");
    const errorText=document.getElementById("error-text");
        
        const emailValue =inputEmail.value;
        const subjectValue =inputSubject.value;
        const messegeValue =inputMessege.value; 

        var templateParams = {
            emailValue: emailValue,
            subjectValue: subjectValue,
            messegeValue: messegeValue,
        };


        // console.log(emailvalue,subjectvalue,messegevalue);

        if(emailValue && subjectValue && messegeValue){
            
            console.log(emailValue,subjectValue,messegeValue);

            inputEmail.value="";
            inputSubject.value="";
            inputMessege.value="";
            errorText.innerHTML="";

            emailjs.send("service_test", "template_xjqd7ds", templateParams, "5cldo3Kqg7rvyW_8g");
 
        }else{
            errorText.innerHTML=`<p class="text-danger text-center">plz enter your email</p>`;
        }

});