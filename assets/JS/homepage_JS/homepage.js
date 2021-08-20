/*initialises the emailJS interface*/
(function() {
    emailjs.init("user_TnGv5LfOGP5Nqwj1AQR0U");
  })();
/*passes the emailJS API the necessary inputs to send the automated email*/
function sendMail(contactForm) {
    emailjs.send("service_epz8iti", "contact_form", {
        "first_name": contactForm.firstName.value,
        "last_name": contactForm.lastName.value,
        "email_address": contactForm.emailAddress.value,
        "message": contactForm.suggestion.value,
    })
    return false;    
}
/*function to validate the form for user idea submissions.
Checks that all fields are populated.
Checks that the name fields contain only letters.
If all the conditions are met then the sendMail function is called and an email is sent via emailJS.*/
function formValidation(that) {
    let fName = document.forms["ideasForm"]["firstName"].value;
    let lName = document.forms["ideasForm"]["lastName"].value;
    let email = document.forms["ideasForm"]["emailAddress"].value;
    let suggestion = document.forms["ideasForm"]["suggestion"].value;
    let errormsg = document.getElementById("formErrorMessage");
    let showMessage = document.getElementById("navigateToFooter");
    let letters = /^[A-Za-z]+$/;
    let emailContent = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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
    } else if (suggestion == "") {
        errormsg.innerHTML = "**Please enter your message**";
        errormsg.classList.add("text-red");
        errormsg.classList.remove("text-green");
        showMessage.click();
        return false;
    } else if (!fName.match(letters) || !lName.match(letters)) {        
        errormsg.innerHTML = "**The name fields should only contain characters A-Z**";
        showMessage.click();
        return false;
    }  else if (email.match(emailContent)) {
        sendMail(that);
        errormsg.innerHTML = `Thanks for getting in touch!<br>We'll get back to you soon <i class="far fa-smile"></i>`
        errormsg.classList.remove("text-red");
        errormsg.classList.add("text-green");
        showMessage.click();
        return false;
    }  else {
        errormsg.innerHTML = "**Please enter a valid email address**";
        errormsg.classList.add("text-red");
        errormsg.classList.remove("text-green");
        showMessage.click();
        return false;
    }
}