// Featured provided bio is hidden when page is loaded, when button is pressed the content is shown
document.addEventListener('DOMContentLoaded', toggleContent());
document.addEventListener('DOMContentLoaded', hideContent());


function hideContent() {
    $('.card-body').children('p').hide();
};

function toggleContent() {
    $(".card-button").click(function () {
        $(this).siblings('p').slideToggle('slow');
    });
};


