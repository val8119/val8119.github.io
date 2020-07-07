$(document).ready(function () {
    $(".dropdown-link").click(function () {
        $(".dropdown-container").slideUp('slow')
        $(this).closest('.dropdown').find('.dropdown-container').slideDown('slow');
    });
});