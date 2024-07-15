const fName=document.getElementById('fname');
const sName=document.getElementById('sname');
const email=document.getElementById('email');
const radios=document.getElementsByName('radios');
const textField=document.getElementById('text-field');
const checkBox=document.getElementsByName('checkbox');
const submitBtn=document.getElementById('submit-btn');
const option=document.getElementsByName('option');
const queryError=document.getElementById('query-error');
const checkError=document.getElementById('check-error');
const emailError=document.getElementById('email-error');
const alertBox=document.getElementById('alert-box');


submitBtn.addEventListener("click",function(e){
    e.preventDefault();
    if(validatedInputs()){
        alertFunction()
    }
})

const alertFunction=()=>{
    alertBox.style.display="block";
}


const validatedInputs=()=>{
    let validate=true;
    let inputs=document.querySelectorAll('input');
    inputs.forEach((i)=>{
        const parent=i.parentElement;
        if(i.value===""){
            parent.querySelector('small').innerText="This field is required";
            parent.querySelector('small').style.color="red";
            parent.querySelector('span').style.color="red";
            i.style.borderColor="red";
            validate=false;
        }
        if(i.value){
            i.value="";
            validate=true;
        }
        
         
        if(email.value===""){
            emailError.innerText="Please enter a valid email";
            validate=false;
        }
       


        if((!option[0].checked || option[1].checked)){
            queryError.innerText="Please select a query type";
            queryError.parentElement.querySelector('span').style.color="red";
            queryError.style.color="red";
            validate=false;
        }
        option.forEach((i)=>{
            if(i.checked){
                validate=true;
            }
        })
        

        if((!checkBox[0].checked)){
            checkError.innerText="To submit this form,please consent to being contacted";
            checkError.style.color="red";
            checkError.parentElement.querySelector('span').style.color="red";
            validate=false;
        }
        if(checkBox[0].checked){
            validate=true;
        }
        

    })
    
    return validate;
}

































// submitBtn.addEventListener("click",(e)=>{
//     e.preventDefault();

//     validatedInputs();
// })

// const setError = (element,message)=>{
//     const inputContainer = element.parentElement;
//     const errorDisplay = inputContainer.querySelector('.error');

//     errorDisplay.innerText=message;
//     inputContainer.classList.add('error');
//     inputContainer.classList.remove('sucess');
// }


// const setSucess=(element)=>{
//     const inputContainer=element.parentElement;
//     const errorDisplay=inputContainer.querySelector('.error');

//     errorDisplay.innerText="";
//     inputContainer.classList.add('success');
//     inputContainer.classList.remove('error');
// }



// const validatedInputs = ()=>{
//     const fNameValue=fName.value.trim();
//     const sNameValue=sName.value.trim();
//     const emailValue=email.value.trim();
//     const textFieldValue=textField.value.trim();
//     // const checkBoxValue=checkBox.checked.trim();

//     if(fNameValue===""){
//         setError(fName,"This field is required")
//     }
//     else{
//         setSucess(fName);
//     }
//     if(sNameValue===""){
//         setError(sName,"This field is required")
//     }else{
//         setSucess(sName)
//     }
//     if(emailValue===""){
//         setError(email,"Please Enter a valid email")
//     }else{
//         setSucess(email);
//     }
   

//     if(textFieldValue===""){
//         setError(textField,"This field is required");
//     }else{
//         setSucess(textField);
//     }

//     if((!option[0].checked || option[0].checked)){
//         setError(option,"this")
//     }
//     else{
//         setSucess(option)
//     }

// }

