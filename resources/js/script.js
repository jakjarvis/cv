$(document).ready(function() {
    
    /* For the sticky navigation */


    /* Scroll on button */
    
    $('.js--scroll-to-start').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-about').offset().top}, 1000); 
    });
    
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
    
    /* Interests hovers */
    
    $( ".js--fly-icon" ).hover(function() {
        $('.interest-text').append( $( "<span>I have enjoyed my pilots license since 2006 and flown hundreds of hours over three continents.</span>" ));    
    }, function() {
        $('.interest-text').find( "span" ).last().remove();
    });
    
    $( ".js--code-icon" ).hover(function() {
        $('.interest-text').append( $( "<span>Check out my github for all my Python and html projects!</span>" ));    
    }, function() {
        $('.interest-text').find( "span" ).last().remove();
    });
    
    $( ".js--stem-icon" ).hover(function() {
        $('.interest-text').append( $( "<span>Interviewer and mentor for the Arkwright Scholarship Trust.</span>" ));    
    }, function() {
        $('.interest-text').find( "span" ).last().remove();
    });
    
    $( ".js--tool-icon" ).hover(function() {
        $('.interest-text').append( $( "<span>Owning a 1971 VW beetle and a Motorbike, you need to know how to fix everything!</span>" ));    
    }, function() {
        $('.interest-text').find( "span" ).last().remove();
    });
    
    $( ".js--music-icon" ).hover(function() {
        $('.interest-text').append( $( "<span>Usually playing bass or piano in a Jazz band.</span>" ));    
    }, function() {
        $('.interest-text').find( "span" ).last().remove();
    });
    
    $( ".js--hurl-icon" ).hover(function() {
        $('.interest-text').append( $( "<span>Team and committee member for Berlin Setanta GAA.</span>" ));    
    }, function() {
        $('.interest-text').find( "span" ).last().remove();
    });
   
    /* Mobile nav */
    
    $('.js--nav-icon').click(function() {
        var nav = $('.main-nav');
        
        nav.slideToggle(200);
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});