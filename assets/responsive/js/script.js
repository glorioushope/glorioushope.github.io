jQuery(document).ready(function ($) {
    $('img').load(function(){
        $(this).addClass('image-loaded');
    });
    console.log('loaded');
});