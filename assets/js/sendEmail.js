function sendMail(contactForm) {
    emailjs.send("service_z4u9c3s", "Baxters", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "from_phone": contactForm.phone.value,
        "from_query": contactForm.query.value
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;  // To block from loading a new page
}

$('#myForm').on('submit', function (e) {
    $('#myModal').modal('show');
    e.preventDefault();
});