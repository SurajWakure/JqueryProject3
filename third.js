$(document).ready(function(){
    $("#toggle_btn").click(function(){
        $("body").toggleClass("change-background");
        $(this).css("border","1px solid #f5f5f5");
        //toggle button text 
        $("span").text($("span").text()=="Light Mode"?"Dark mode":"Light Mode");
    });
    $("#toggle_btn").click(function(){
        $(this).find("i").toggleClass("fa-moon fa-sun");
    });
});