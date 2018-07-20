$(function () {

    var imgname = " ";
    var flag = true;
    $("#onoroff").click(function () {
        if (flag) {
            imgname = "images/off.jpg"
            flag = false;
        } else {
            imgname = "images/on.jpg"
            flag = true;
        }

        $("img").attr("src", imgname);
    });
/* show hide example */
    $("#btnhide").click(function(){
        $("#randomtext").hide();
    });
     $("#btnshow").click(function(){
        $("#randomtext").show();
    });
     $("#btntoggle").click(function(){
        $("#randomtext").toggle();
    });
    /* fade in out logic*/
      $("#fadein").click(function(){
        $("#box").fadeIn();
    });
      $("#fadeout").click(function(){
        $("#box").fadeOut();
    });
      $("#fadetoggle").click(function(){
        $("#box").fadeToggle();
    });
});
