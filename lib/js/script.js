// toggle todo color & line through
$('ul').on('click', 'li', function() {
    $(this).toggleClass('completed');
});

// removes todo
$('ul').on('click', 'span', function(event) {
    // targets todo span was clicked
    $(this).parent().fadeOut(500, function() {
        // removes todo
        $(this).remove();
    });
    event.stopPropagation;
});

// add todo on enter key
$('input[type="text"]').keypress(function(event) {
    if (event.which === 13) {
        // store todo
        var todoText = $(this).val();
        // clears input field once todo is stored
        $(this).val('');
        // creates a todo
        $('ul').append("<li><span><i class='fas fa-trash-alt'></i></span>" + todoText + "</li>");
    }
});

// hide input field
$('input').hide();
// toggle input field
$('.fa-plus-circle').on('click', function() {
  $('input').slideToggle('fast');
});