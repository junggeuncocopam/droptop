// main.js

// nav
$(function(){
    $('.depth1').hover(
        function(){
            $(this).children('.depth2').stop().slideDown(200);
            console.log('test')
        },
        function(){
            $(this).children('.depth2').stop().slideUp(200);
        });
});

// 숨기기
$(function () {
    var lastScrollTop = 0,
        delta = 15;
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta) return;
        if ((st > lastScrollTop) && (lastScrollTop > 0)) {
            $("#navi").css("top", "-70px");
        } else {
            $("#navi").css("top", "0px").css("background", "white");
        }
        lastScrollTop = st;
    });
}); 

// main slide
$(function(){
    var left = 0;
    var duration = 3000;
    var num = 0;
    var event_banner = document.querySelector('#main_right > .event > .event_benner');

    function main_slide() {
        $(event_banner).css('marginLeft', left);
        $('#main_right > ul > li > a').removeClass('white');
        $('#main_right > ul > li > a').eq(num).addClass('white');
    }

    function sliderStart(){
        slider = setInterval(function(){
            if(left <= -1066) {left = 0;}
            else{left = left - 533;}

            if(num >= 2) {num = 0;}
            else{num = num + 1;}
            console.log(num)

            main_slide();
        },duration)
    }

    function sliderStop(){
        clearInterval(slider);
    }

    sliderStart();

    $('.event, .l_btn, .r_btn').hover(
        function(){
            sliderStop();
            console.log('stop')
        },
        function(){
            sliderStart();
        }
    )

    $('.l_btn').click(function(){
        if(left < 0) {left = left + 533;}
        else{left = -1066;}

        if(num > 0) {num = num - 1;}
        else{num = 2;}
        main_slide();
    })

    $('.r_btn').click(function(){
        if(left > -1066) {left = left - 533;}
        else{left = 0;}

        if(num < 2) {num = num + 1;}
        else{num = 0;}
        main_slide();
    })
})

// best menu
$(function(){
    var bestLeft = 0;
    var duration = 3000;
    var menuIn = document.querySelector('#best_menu > .menu > .menu_in');

    function best_slide() {
        $(menuIn).css('marginLeft', bestLeft);
        $('#main_right a').removeClass('white');
    }

    function best_sliderStart(){
        bestslider = setInterval(function(){
            if(bestLeft <= -2135) {bestLeft = 0;}
            else{bestLeft = bestLeft - 427;}

            best_slide();
        }, duration)
    }

    function best_sliderStop(){
        clearInterval(bestslider);
    }

    best_sliderStart();

    $('.best, .left_btn, .right_btn').hover(
        function(){
            best_sliderStop();
            console.log('stop')
        },
        function(){
            best_sliderStart();
        }
    )

    $('.left_btn').click(function(){
        if(bestLeft < 0) {bestLeft = bestLeft + 427;}
        else{bestLeft = -2135;}

        best_slide();
    })

    $('.right_btn').click(function(){
        if(bestLeft > -2135) {bestLeft = bestLeft - 427;}
        else{bestLeft = 0;}

        best_slide();
    })
})