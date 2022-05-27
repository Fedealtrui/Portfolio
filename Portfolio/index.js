function validateForm(){
   let fname = document.forms['contactForm']['nombre'].value;
    let email = document.forms["contactForm"]["email"].value;
    
    if (fname ==''){
        alert("Por Favor, ingresa tu nombre");
        return false;
    }else if (email ===''){
        alert("Por favor, ingresa tu email");
        return false;   
    }else {
        alert("Gracias por contactarme!");
        return true;
    }

    
}

document.getElementById('submit').addEventListener('click', (e)=> {
    e.preventDefault()
    validateForm()
});