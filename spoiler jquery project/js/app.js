$('.spoiler').on('click', 'button', function(event){
    console.log(event.target);

    //show the spoiler text
    $(this).prev().show();
//hide the "reveal spoiler" button
    $(this).hide();
});
//Create the "Reveal Spoiler" Button
const $button = $('<button>Reveal Spoiler</button>');
//Append to web page
$('.spoiler').append($button);

//hide the spoiler text on page load
$('.spoiler span').hide();





 