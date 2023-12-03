let btn_1 = document.getElementById('btn-1');
let btn_2 = document.getElementById('btn-2');
let section = document.querySelector('section');
let container = document.getElementById('container');
let valid = document.getElementById('valid');
let emailInput = document.getElementById('email');



btn_1.onclick = function (event) {
    event.preventDefault();

    // let emailInput = document.getElementById('email');
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailValue = emailInput.value.trim();
    // if(!emailPattern.test(emailValue)){}

    if(emailPattern.test(emailValue)){
        section.style.opacity = '1';
        section.style.pointerEvents = 'all';

        container.style.opacity = '0';
        container.style.pointerEvents = 'none';

    }else{
    valid.style.opacity= '1';
    email.style.border ='3px solid red';
    }


   


}

btn_2.onclick = function () {
    section.style.opacity = '0';
    section.style.pointerEvents = 'none';

    container.style.opacity = '1';
    container.style.pointerEvents = 'all';
    

}