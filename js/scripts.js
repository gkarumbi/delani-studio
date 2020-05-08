// Toggle show in the what we do section
$(document).ready(function(event){
    //event.preventDefault();
    $(".design-icon").click(function(){
        // alert("design works!");
        $(".show-design").toggleClass("hide-info");

    });
    $(".development-icon").click(function(){
        // alert("design works!");
        $(".show-development").toggleClass("hide-info");

    });
    $(".product-icon").click(function(){
        //alert("product works!");
        $(".show-product-management").toggleClass("hide-info");
        
    });

   
    
});

//Adding Mouse  hover function
// $(document).ready(function(event){

//     // $(".img-fluid").on("mouseenter","img",function(){
//     //     //$(this).find(".overlay").fadeIn(400);
//     //     alert("image hover");
//     // });
//     // $(".portfolio").on("mouseleave","img",function(){
//     //     $(this).find(".overlay").stop().fadeOut(400);
//     // });
//     $(".portfolio").on("mouseenter", function(){
//         $(this).find("img").css({"border": "2px solid green"}).fadeIn(300);
//     });
// });

