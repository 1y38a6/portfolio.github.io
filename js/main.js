function focusHere(){
    console.log("Open");
    $(".loading-screen").addClass("loading-screen-close");
}

var day = true;
var toggledn = document.getElementById('daynighttoogle');
var lastScroll;

$(function(){
    document.body.addEventListener('mouseenter', focusHere);
    document.body.addEventListener('click', focusHere);

    $(".web-link").bind("click", openWebExample);
    $(".closeButton").bind("click", closeFullscreen);
    
    $(".logos").mouseenter(function(e){OpenHTML(e)});
    $(".logos").mouseleave(function(e){CloseHTML(e)});

    $(".port").mouseenter(function(e){OpenSite(e)});
    $(".port").mouseleave(function(e){CloseSite(e)});
    
});

function DayNightToggle(){
    if(day){
        toggledn.classList.remove('active');

        $("#spotlight").removeClass('active');

        $('#moon').removeClass('animated fadeOut');
        $('#moon').addClass('animated fadeIn');

        $('.stars').removeClass('zoomOut');
        $('.stars').addClass('zoomIn');

        $('.cloud').addClass('fadeOutLeft');
        $('.cloud').removeClass('fadeInLeft');

        $('#sun').removeClass('animated fadeIn');
        $('#sun').addClass('animated fadeOut');

        $('body').addClass('body-night');
        $('header').addClass('header-night');
        $(".promo").addClass('header-night');
        $(".fullscreen").addClass("light-bg");

        var nihElems = document.getElementsByClassName("tac");

        for(var a = 0; a< nihElems.length; a++){
            nihElems[a].classList.add("white-text");
        }

        var nihElems = document.getElementsByClassName("btn");

        for(var a = 0; a< nihElems.length; a++){
            nihElems[a].classList.add("btn-n");
        }

        var nihElems = document.getElementsByClassName("logo-disctription");

        for(var a = 0; a< nihElems.length; a++){
            nihElems[a].classList.add("logo-disctription-night");
        }

        var nihElems = document.getElementsByClassName("underimg");

        for(var a = 0; a< nihElems.length; a++){
            nihElems[a].classList.add("white-text");
        }

        var nihElems = document.getElementsByClassName("logoname");

        for(var a = 0; a< nihElems.length; a++){
            nihElems[a].classList.add("l-white");
        }

        var nihElems = document.getElementsByClassName("tal");

        for(var a = 0; a< nihElems.length; a++){
            nihElems[a].classList.add("white-text");
        }

        var nihElems = document.getElementsByClassName("tar");

        for(var a = 0; a< nihElems.length; a++){
            nihElems[a].classList.add("white-text");
        }

        var nihElems = document.getElementsByClassName("nightdis");

        for(var a = 0; a< nihElems.length; a++){
            nihElems[a].classList.remove("fadeOut");
            nihElems[a].classList.add("fadeIn");
        }

        var dayElems = document.getElementsByClassName("daydis");

        for(var a = 0; a< dayElems.length; a++){
            dayElems[a].classList.remove("fadeIn");
            dayElems[a].classList.add("fadeOut");
        }
    }else{
        toggledn.classList.add('active');

        $("#spotlight").addClass('active');

        $('#moon').removeClass('animated fadeIn');
        $('#moon').addClass('animated fadeOut');

        $('.stars').addClass('zoomOut');
        $('.stars').removeClass('zoomIn');

        $('.cloud').removeClass('fadeOutLeft');
        $('.cloud').addClass('fadeInLeft');

        $('#sun').removeClass('animated fadeOut');
        $('#sun').addClass('animated fadeIn');

        $('body').removeClass('body-night');
        $('header').removeClass('header-night');
        $(".promo").removeClass('header-night');
        $(".fullscreen").removeClass("light-bg");

        var nihElems = document.getElementsByClassName("btn");

        for(var a = 0; a< nihElems.length; a++){
            nihElems[a].classList.remove("btn-n");
        }

        var nihElems = document.getElementsByClassName("logoname");

        for(var a = 0; a< nihElems.length; a++){
            nihElems[a].classList.remove("l-white");
        }
        var nihElems = document.getElementsByClassName("logo-disctription");

        for(var a = 0; a< nihElems.length; a++){
            nihElems[a].classList.remove("logo-disctription-night");
        }

        var nihElems = document.getElementsByClassName("tac");

        for(var a = 0; a< nihElems.length; a++){
            nihElems[a].classList.remove("white-text");
        }

        var nihElems = document.getElementsByClassName("underimg");

        for(var a = 0; a< nihElems.length; a++){
            nihElems[a].classList.remove("white-text");
        }

        var nihElems = document.getElementsByClassName("nightdis");

        for(var a = 0; a< nihElems.length; a++){
            nihElems[a].classList.remove("fadeIn");
            nihElems[a].classList.add("fadeOut");
        }

        var dayElems = document.getElementsByClassName("daydis");

        for(var a = 0; a< dayElems.length; a++){
            dayElems[a].classList.remove("fadeOut");
            dayElems[a].classList.add("fadeIn");
        }
    }

    day=!day;
}

var date = new Date();
var hours = date.getHours();

if(hours < 7 || hours > 19){
    DayNightToggle();

    $(".loading-screen").addClass("dark-loading");
    $(".loading-cube").addClass("dark-loading-cube");
    $(".notice").addClass("dark-notice");
}

window.onscroll = function() {
    newScroll = $("html").scrollTop();
    var scrollDelta = newScroll - lastScroll;
    
    if(scrollDelta > 0){
        $('header').addClass("hidden");
    }else{
        $('header').removeClass("hidden");
    }
    lastScroll = newScroll;
}

function openWebExample(){
    $(".fullscreen").removeClass('close');
    $(".web-prev").removeClass('hide');
}

function closeFullscreen(){
    $(".fullscreen").addClass('close');
}

function OpenHTML(event){
    $(event.target).next().removeClass("logo-close");
}

function CloseHTML(event){
    $(event.target).next().addClass("logo-close");
}

function OpenSite(event){
    $(event.target).next().removeClass("close");

    var target = $(event.target).next().children();
    target.get(0).play();
}

function CloseSite(event){
    $(event.target).next().addClass("close");

    var target = $(event.target).next().children();
    target.get(0).pause();
}