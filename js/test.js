
$(function () {

    //multipage

    $('#booklist li:nth-of-type(1)').click(function () {

        $('#list_a').show();
        $('#list_b').hide();
        $('#list_c').hide();
        $('#list_d').hide();
        $('#list_e').hide();


    });

    $('#booklist li:nth-of-type(2)').click(function () {

        $('#list_a').hide();
        $('#list_b').show();
        $('#list_c').hide();
        $('#list_d').hide();
        $('#list_e').hide();

    });


    $('#booklist li:nth-of-type(3)').click(function () {


        $('#list_a').hide();
        $('#list_b').hide();
        $('#list_c').show();
        $('#list_d').hide();
        $('#list_e').hide();


    });

    $('#booklist li:nth-of-type(4)').click(function () {


        $('#list_a').hide();
        $('#list_b').hide();
        $('#list_c').hide();
        $('#list_d').show();
        $('#list_e').hide();


    });

    $('#booklist li:nth-of-type(5)').click(function () {


        $('#list_a').hide();
        $('#list_b').hide();
        $('#list_c').hide();
        $('#list_d').hide();
        $('#list_e').show();


    });




    // title 

    $("#booklist li").click(function () {

        $("#titlelist").text($(this).text());


    });




});


