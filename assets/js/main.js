// Featured provided bio is hidden when page is loaded, when button is pressed the content is shown
document.addEventListener('DOMContentLoaded', toggleContent());
document.addEventListener('DOMContentLoaded', hideContent());


function hideContent() {
    $('.card-body').children('p').hide();
}

function toggleContent() {
    $(".card-button").click(function () {
        $(this).siblings('p').slideToggle('slow');
    });
}



// Clear form contents on submission of form
// Code  from https://www.w3schools.com/jsref/met_form_reset.asp
function clearForm() {
  document.getElementById("myForm").reset();
}