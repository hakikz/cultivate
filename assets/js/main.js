(function ($) {

    $(document).ready(function () {

        // Hide cover page on load the page
        $(window).on('load', function () {
            $( '.preloader' ).fadeOut(200);
        });

        // Popup video
        $('.popup-video').magnificPopup({
            type: 'iframe'
        });

        // Open the image on clicking about section button
        $('.open-img').on('click', function (e) {
            e.preventDefault();
            // Bring Image for About Section
            $('.about-image').css({
                'left': '0'
            });
        });

        // Close the image on clicking arrow sign
        $('.close-img').on('click', function (e) {
            e.preventDefault();
            // Bring Image for About Section
            $('.about-image').css({
                'left': '-150%'
            });
        });

        // Mobile Menu
        $( '.hero__mobile' ).on( 'click', function(){
            if ( $(this).hasClass('open-toggle') ) {
                $(this).removeClass('open-toggle');
                $(this).addClass('close-toggle');
                $( '.hero__sidebar' ).css({
                    'left' : '0',
                });
            }
            else if( $(this).hasClass('close-toggle') ){
                $(this).addClass('open-toggle');
                $(this).removeClass('close-toggle');
                $( '.hero__sidebar' ).css({
                    'left' : '-60%',
                });
            }
        });

    });


})(jQuery);

