window.onload = function(){
    
    /* Nav Toggle */ 

    var nav_togg = document.getElementById("nav_toggle");
    var nav = document.getElementById("nav");

    nav_togg.onclick = function(event){
        event.preventDefault();

        nav_togg.classList.toggle("_active");
        nav.classList.toggle("_active");

    };


    /* scroll */
        /* Fixed Header */

    var introH = document.getElementById("intro").offsetHeight;
    var header = document.getElementById("header"); 
    window.addEventListener('scroll', function(){
        var scrollT = window.scrollY;
        console.log(scrollT);
        
        if(scrollT >= introH){
            header.classList.add("fixed");
        }

        else{
            header.classList.remove("fixed");
        }


    });

    /* Scroll to  */

    $("[data-scroll]").on('click', function(event){
        event.preventDefault();

        var blockid = $(this).data('scroll'),
            blockOffset = $(blockid).offset().top;

        nav.classList.remove("_active");
        nav_togg.classList.remove("_active");

        $("html, body").animate({
            scrollTop: blockOffset - 100
        }, 500);
    });

}

