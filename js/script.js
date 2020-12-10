$(document).ready(function(){
    $.fakeLoader({
        timeToHide:2200,
        bgColor:"#3b5998",
        // spinner:"spinner1",
        //spinner:"spinner2",
        // spinner:"spinner3",
        // spinner:"spinner4",
        //spinner:"spinner5",
        //spinner:"spinner6",
         spinner:"spinner7"
    });

    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });

});
// scrol to top

var $btnTop = $(".btn-top");
$(window).on("scroll",function(){
    if($(window).scrollTop() >= 20)
    {
        $btnTop.fadeIn();
    }
    else{
        $btnTop.fadeOut();
    }
});
$btnTop.on("click",function(){
    $("html,body").animate({scrollTop:0},1200)
});



// counter

$('.count').each(function(){
    $(this).prop('Counter',0).animate({
        Counter:$(this).text()
    },{
        duration:5000,
        easing:'swing',
        step:function(now){
            $(this).text(Math.ceil(now));
        }
    });
});

// scrol menu
   function Scroll(){
            
            var top = document.getElementById('nav');
            var logo = document.getElementById('img');

            var ypos=window.pageYOffset;
            if(ypos<10){
                top.style = "background: transparent;";
                logo.style = "height: 150px; width: 150px;";
                
            } else {
                top.style = "background:#64b5f6";
                logo.style = "height: 50px; width: 50px;";
                
    
            }
        }
    window.addEventListener("scroll",Scroll);