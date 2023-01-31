const sendMessage=document.getElementById("sendMessage");

sendMessage.addEventListener("click",function(){
    const yourname=document.getElementById("name");
    const youremail=document.getElementById("email");
    const yourmessege=document.getElementById("messege");


    const name=yourname.value;
    const email=youremail.value;
    const messege=yourmessege.value;

    if(name && email && messege){

        console.log(name && email && messege);
        
    }else{
        alert("please enter your name");
    }
});
 
