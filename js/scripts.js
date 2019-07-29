$(document).ready(function(){
    $("#des").click(function(){
        $("img#ign").toggle();
        $("p#ign").toggle();
        $("p#despar").toggle();
    });

    $("#dev").click(function(){
        $("img#ment").toggle();
        $("p#ment").toggle();
        $("p#devpar").toggle();
    });

    $("#pro").click(function(){
        $("img#duct").toggle();
        $("p#duct").toggle();
        $("p#propar").toggle();
    });

    $("p#one").hide();
    $("#work1").hover(function(){
        $(this).stop().animate({opacity:.2},200);
        $("p#one").fadeIn();
    },function(){
        $(this).stop().animate({opacity:2},500);
        $("p#one").fadeOut();
    });

    $("#two").hide();
    $("#work2").hover(function(){
        $(this).stop().animate({opacity:.2},200);
        $("#two").fadeIn();
    },function(){
        $(this).stop().animate({opacity:2},500);
        $("#two").fadeOut();
    });

    $("#three").hide();
    $("#work3").hover(function(){
        $(this).stop().animate({opacity:.2},200);
        $("#three").fadeIn();
    },function(){
        $(this).stop().animate({opacity:2},500);
        $("#three").fadeOut();
    });

    $("#four").hide();
    $("#work4").hover(function(){
        $(this).stop().animate({opacity:.2},200);
        $("#four").fadeIn();
    },function(){
        $(this).stop().animate({opacity:2},500);
        $("#four").fadeOut();
    });

    $("#five").hide();
    $("#work5").hover(function(){
        $(this).stop().animate({opacity:.2},200);
        $("#five").fadeIn();
    },function(){
        $(this).stop().animate({opacity:2},500);
        $("#five").fadeOut();
    });

    $("#six").hide();
    $("#work6").hover(function(){
        $(this).stop().animate({opacity:.2},200);
        $("#six").fadeIn();
    },function(){
        $(this).stop().animate({opacity:2},500);
        $("#six").fadeOut();
    });

    $("#seven").hide();
    $("#work7").hover(function(){
        $(this).stop().animate({opacity:.2},200);
        $("#seven").fadeIn();
    },function(){
        $(this).stop().animate({opacity:2},500);
        $("#seven").fadeOut();
    });

    $("#eight").hide();
    $("#work8").hover(function(){
        $(this).stop().animate({opacity:.2},200);
        $("#eight").fadeIn();
    },function(){
        $(this).stop().animate({opacity:2},500);
        $("#eight").fadeOut();
    });

    $("#submit").click(function(){
        var name=$("#name").val();
        var email=$("#email").val();
        var message=$("#exampleFormControlTextArea").val();
        if((name==="")||(email==="")||(message==="")){
            alert("Please, fill in the empty boxes");
        }
        else{
            alert(name+ ", we have received your message. Thank you for reaching out to us!");
        }
        event.preventDefault();
    });
      
});