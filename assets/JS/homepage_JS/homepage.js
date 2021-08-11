function sendMail(contactForm) {
    emailjs.send("service_epz8iti", "contact_form", {
        "first_name": contactForm.firstName.value,
        "last_name": contactForm.lastName.value,
        "email_address": contactForm.emailAddress.value,
        "message": contactForm.suggestion.value,
    })
    console.log("pass thru working");
    return false;
    
}
function formValidation(that) {
    let fName = document.forms["ideasForm"]["firstName"].value;
    let lName = document.forms["ideasForm"]["lastName"].value;
    let email = document.forms["ideasForm"]["emailAddress"].value;
    let errormsg = document.getElementById("formErrorMessage");
    let showMessage = document.getElementById("navigateToFooter");
    if (fName == "") {
        errormsg.innerHTML = "**Please enter your first name**";
        errormsg.classList.add("text-red");
        errormsg.classList.remove("text-green");
        showMessage.click();
        return false;
    } else if (lName == "") {        
        errormsg.innerHTML = "**Please enter your last name**";
        errormsg.classList.add("text-red");
        errormsg.classList.remove("text-green");
        showMessage.click();
        return false;
    } else if (email == "") {
        errormsg.innerHTML = "**Please enter your email address**";
        errormsg.classList.add("text-red");
        errormsg.classList.remove("text-green");
        showMessage.click();
        return false;
    } else {
        sendMail(that);
        errormsg.innerHTML = `Thanks for getting in touch!<br>We'll get back to you soon <i class="far fa-smile"></i>`
        errormsg.classList.remove("text-red");
        errormsg.classList.add("text-green");
        showMessage.click();
        return false;
    }
}