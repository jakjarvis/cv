$(document).ready(function() {
    
    /* navigation scroll*/
    $(function(){
         $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
                && location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                         scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    
    /* For slider */
    $("#slider > div:gt(0)").hide();

    setInterval(function() {
        $("#slider > div:first")
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo(".slider");
    }, 3000);
    
});