$(document).ready(function() {
    $('.mobile_center_right').click(function() {
        // Toggle between up and down chevron
        $(this).children('.fas').toggleClass('fa-chevron-up fa-chevron-down');

        // Toggle the visibility of the hidden div
        $(this).children('.sort_items').slideToggle();
    });


    $('.like_heart').click(function() {
        $(this).children('.fa-heart').toggleClass('fa-regular fa-solid');
    });

    $('.sb_section_heading').click(function() {
        $(this).parent().children('.sb_section').slideToggle();

        $(this).find('.fas').toggleClass('fa-chevron-up fa-chevron-down');
    });

    $('.location').click(function() {
        $(this).children('.select_options').slideToggle();

        $(this).children('.fas').toggleClass('fa-chevron-up fa-chevron-down');
    });

    $('.lang').click(function() {
        $(this).children('.lang_options').slideToggle();

        $(this).children('.fas').toggleClass('fa-chevron-up fa-chevron-down');
    });

    $('.lang_options li').click(function() {
        var text = $(this).text();
        $(this).parent().find("i").remove();
        $( '<i class="fa-solid fa-check"></i>' ).insertAfter($(this).children('.sub_lang'));
        $(this).parents('.lang').children('.language_heading').text(text);
    });
});
