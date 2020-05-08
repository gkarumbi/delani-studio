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