function sendMail(contactForm) {
    emailjs.send("service_epz8iti", "contact_form", {
        "first_name": contactForm.firstName.value,
        "last_name": contactForm.lastName.value,
        "email_address": contactForm.emailAddress.value,
        "message": contactForm.suggestion.value,
    })
    return false;
}
