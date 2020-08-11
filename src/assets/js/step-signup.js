$(document).ready(function () {

    var inputed = false;


    $('.single-form').each(function () {
        var inputed = false;
        var allValue = $(this).find('input').val();
        var buttonNext = $(this).find('.next');
        $(this).find('input').each(function () {
            $(this).focusin(function () {
                if ($(this).val().length === 0) {
                    $(this).siblings('label').addClass('active');
                    console.log('nothing here');
                }
            });
            $(this).focusout(function () {
                if ($(this).val().length === 0) {
                    $(this).siblings('label').removeClass('active');
                    console.log('nothing here');
                }
            });
        });
    });

});