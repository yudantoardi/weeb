(function($){
    $(window).on("load",function(){
        $(".content").mCustomScrollbar();
    });
})(jQuery);



$(document).ready(function(){
    $("#menu1").click(function(){
        $(".sidebar").toggleClass("show");
    });

    $("#menu2").click(function(){
        $("header").toggleClass("show");
    });

    var $el = $(".user-pic a");
    var $ee = $(".user-dropdown");
    $el.click(function(e){
        e.stopPropagation();
        e.preventDefault();
        $(".user-dropdown").toggleClass('show');
    });
    $(document).on('click',function(e){
        if(($(e.target) != $el) && ($ee.hasClass('show'))){
            $ee.removeClass('show');
        }
    });

    if(window.innerWidth < 1025){
        console.log("true");
        $($(".has-dropdown a img").parent()).click(function(d){
            d.preventDefault();
            $(".drop-ct").slideToggle(500);
        });
    }

});