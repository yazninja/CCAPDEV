$(document).ready(function(){
    $('.cal').click(function(){
        location.assign("calendar.html");
        console.log("calendar");
    });
    $('.home').click(function(){
        location.assign("dashboard.html");
        console.log("dashboard");
    });
    $('.add').click(function(){
        location.assign("add.html");
        console.log("add");
    });
    $('.signout').click(function(){
        location.assign("index.html");
        console.log("signout");
    });
    $('.side-menu li').mouseenter(function(){
        $(this).find('img')[0].src = $(this).find('img')[0].src.replace(/white/, 'green');
    });
    $('.side-menu li').mouseleave(function(){
        $(this).find('img')[0].src = $(this).find('img')[0].src.replace(/green/, 'white');
        $('.side-menu li.active').find('img')[0].src = $('.side-menu li.active').find('img')[0].src.replace(/white/, 'green');
    });
    $('.side-menu li.active').find('img')[0].src = $('.side-menu li.active').find('img')[0].src.replace(/white/, 'green');

});