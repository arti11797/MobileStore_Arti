let fnameNode=document.getElementById('Name');
let errorNode1=document.getElementById('error1');


function validate1(){
    errorNode1.textContent="";
    let fname=fnameNode.value;
    let fnamePattern= new RegExp("^[A-Za-z]*$");
    fnameNode.style.border="2px red solid";
    if(fname==""){
        errorNode1.textContent="First name is required";
        return false;
    }
    else if(fname.length<2){
        errorNode1.textContent="name must contain atleast 2 characters";
        return false;
    }
    else if(fnamePattern.test(fname)==false){
        errorNode1.textContent="name must have only alphabets";
        return false;
    }
    else{
        fnameNode.style.border="2px green solid";
        return true;
    }
}
let mailNode=document.getElementById('mailId');
let errorNode2=document.getElementById('error2');
function validate2(){
    errorNode2.textContent="";
    let email=mailNode.value;
    mailNode.style.border="2px red solid";
    if(email==""){
        errorNode2.textContent="Email Id is required";
        return false;
    }
    else if(!email.includes('@')){
        errorNode2.textContent="Please enter valid EmailId";
        return false;
    }
    else if(email.endsWith('@')){
        errorNode2.textContent="Please enter valid EmailId";
        return false;
    }
    else{
        mailNode.style.border="2px green solid";
        return true;
    }
}let nodeArray=[fnameNode,mailNode];
function validate(){
 
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