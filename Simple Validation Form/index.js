console.log('Index js')
const name =document.getElementById('name');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
let validUser;
let validEmail;
let validPhone;

$('#failure').hide();
$('#success').hide();

// console.log(name,email,phone)
name.addEventListener('blur',()=>{
    console.log('Name Blured')
    let reg=/^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str=name.value;
    // console.log(reg,str);
    if(reg.test(str)){
        console.log('Valid Name');
        name.classList.remove('is-invalid');
        validUser=true;
        
    }
    else{
        console.log('InValid Name');
        name.classList.add('is-invalid');
        validUser=false;

    }
})

email.addEventListener('blur',()=>{
    console.log('Email Blured');
    let reg=/^([_\-\.0-9a-zA-z]+)@([_\-\.0-9a-zA-Z]+){2,8}.([a-zA-Z]){2,7}$/;
    let str=email.value;
    if(reg.test(str)){
        validEmail=true;
        email.classList.remove('is-invalid');
        console.log('email Valid');

    }
    else{
        validEmail=false;
        email.classList.add('is-invalid');
        console.log('Email invalid');
    }
})

phone.addEventListener('blur',()=>{
    console.log('Phone Blured');
    let reg=/^(0)([0-9]){10}$/;
    let str=phone.value;
    if(reg.test(str)){
        validPhone=true;
        phone.classList.remove('is-invalid');
        console.log('Phone Valid');
    }
    else{
        validPhone=false;
        phone.classList.add('is-invalid')
        console.log('Invalid Number');
    }
})

let submit=document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    e.preventDefault(); 
    console.log('you click on submit');

    if(validUser && validEmail && validPhone){
        let failure=document.getElementById('failure');
        let success=document.getElementById('success');
        success.classList.add('show');

        $('#failure').hide();
        $('#success').show();
    }

    else{
        let failure=document.getElementById('failure');
        failure.classList.add('show');
        $("#success").hide();
        $("#failure").show();
    }
    
})