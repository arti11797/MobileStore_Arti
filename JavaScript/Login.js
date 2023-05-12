let mailNode=document.getElementById('mailId');
let errorNode1=document.getElementById('error1');
function validate1(){
    errorNode1.textContent="";
    let email=mailNode.value;
    mailNode.style.border="2px red solid";
    if(email==""){
        errorNode1.textContent="Email Id is required";
        return false;
    }
    else if(!email.includes('@')){
        errorNode1.textContent="Please enter valid EmailId";
        return false;
    }
    else if(email.endsWith('@')){
        errorNode1.textContent="Please enter valid EmailId";
        return false;
    }
    else{
        mailNode.style.border="2px green solid";
        return true;
    }
}

let passNode=document.getElementById('pass');
let errorNode2=document.getElementById('error2');
function validate2(){
    errorNode2.textContent="";
    let password=passNode.value;
    passNode.style.border="2px red solid";
    let passPattern= new RegExp("^[A-Za-z0-9]{4,8}$");
    if(password==""){
        errorNode2.textContent="Password is required";
        return false;
    }
    else if(passPattern.test(password)==false){
        errorNode2.append(ulNode);
        return false;
    }
    else{
        passNode.style.border="2px green solid";
        return true;
    }

}
let nodeArray=[mailNode,passNode];
function validateForm(){
 
    let flag1=validate1();
    let flag2=validate2();
    
    let flagArray=[flag1,flag2];
    for(let i=0;i<flagArray.length;i++){
            if(flagArray[i]==false){
                nodeArray[i].focus();
                break;
            }
        }
    return (flag1 && flag2)
}