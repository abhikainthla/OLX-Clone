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
});
