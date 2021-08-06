function sendMail(contactForm) {
    emailjs.send("service_epz8iti", "contact_form", {
        "to_name": contactForm.toName.value,
        "fron_name": contactForm.fromName.value,
        "from_email": contactForm.fromEmail.value,
        "message": contactForm.message.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
    return false;
}
