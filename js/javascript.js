$(function() {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    $('#myList a').on('click', function(e) {
        e.preventDefault()
        $(this).tab('show')
    })
})