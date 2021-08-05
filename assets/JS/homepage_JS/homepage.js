var templateParams = {
    name: 'James',
    notes: 'Check this out!'
};
function sendMail(templateParams) {
    console.log("worked");
    emailjs.send('default_service', 'contact_form', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
}
