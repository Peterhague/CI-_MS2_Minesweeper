function sendMail(params) {
    var tempParams = {
        from_name:document.getElementById("fromName").value,
        to_name:document.getElementById("toName").value,
        message:document.getElementById("msg").value,
    };
    emailjs.send("service_epz8iti", "contact_form", tempParams)
    .then(function() {
       console.log("success"); 
    })
}