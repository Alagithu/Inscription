let h=document.querySelector(".loginform");
let z=document.querySelector('.btn2');
let v=document.querySelector('.i0');
let i=document.querySelector('.i1');
let j=document.querySelector('.i2');
let k=document.querySelector('.i3');
let l=document.querySelector('.i4');
let a=document.querySelector('.error1');
let b=document.querySelector('.error2');
let c=document.querySelector('.error3');
let d=document.querySelector('.error4');


h.addEventListener('input',function(){
    if(i.value.length > 0 && j.value.length > 0 && k.value.length > 0 && l.value.length > 5){
        z.removeAttribute('disabled');
        z.style="background-color:green";
        v.style.color="green";
        console.log("Successfuly!");
    }
    else{
    z.setAttribute('disabled','disabled');
    v.style.color="red";
    z.style="background-color:red";
    }
});

h.addEventListener('input',function(){
    if(i.value.length > 0 ){
        a.innerHTML=("Valid Information");
        a.style.color="green";
    }
    else{
        a.style.color="red";
    }
});

h.addEventListener('input',function(){
    if(j.value.length >0  ){
        b.innerHTML=("Valid Information");
        b.style.color="green";
    }
    else{
        b.style.color="red";
    }
});

h.addEventListener('input',function(){
    if(k.value.length>0){
        c.innerHTML=("Valid Information");
        c.style.color="green";
    }
    else{
        c.style.color="red";
    }
});

h.addEventListener('input',function(){
    if( l.value.length>5 ){
        d.innerHTML=("Valid Information");
        d.style.color="green";
    }
    else{
        d.style.color="red";
    }
});

z.addEventListener('click',function(){
    switch(""){
            case(i.value):{
                window.alert("Enter your Name");
                break;
            }
            case(j.value):{
                window.alert("Enter your LastName");
                break;
            }
            case(k.value):{
                window.alert("Enter your Email");
                break;
            }
            case(l.value):{
                window.alert("Enter your Password");
                break;
            }
            default:
                window.alert("Successfuly!");
        }
    });