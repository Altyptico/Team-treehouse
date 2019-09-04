const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".pdf"]');

$secureLinks.attr('target', '_blank');
$pdfs.attr('download', true);

$secureLinks.addClass('secure');
$pdfs.addClass('pdf');

$pdfs.on('click', function(event){
    event.preventDefault();
    //check if checkbox has been checked
    //if zero checkboxes are checked
    //prevent download of document
    //alert the user
    //else allow the download
});
