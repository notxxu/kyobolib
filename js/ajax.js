$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "오래" },
    headers: { Authorization: "KakaoAK 285fafe83d6119f0e12200300e752b94" }
})
    .done(function (msg) {
        console.log(msg);



        var boxs = document.getElementsByClassName('box');


        for (var i = 0; i < boxs.length; i++) {

            $("#list_a >.box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
            $("#list_a >.box").eq(i).append("<h3>" + '<a href="sub2.html">' + msg.documents[i].title + "</a>" + "</h3>");
            $("#list_a >.box").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");



            $("#list_a >.box").eq(i).append("<h6>" + msg.documents[i].price + "원" + "</h6>");

            var price = msg.documents[i].price;
            var sale_price = msg.documents[i].sale_price;


            $("#list_a >.box").eq(i).append("<h6>" + msg.documents[i].sale_price + "원" + "</h6>");
            $("#list_a >.box").eq(i).append("<h6>" + "정상가보다" + msg.documents[i].sale_price + "원 저렴해요" + "</h6>");

            $("#list_a >.box").eq(i).append('<a href="#" class="btn">' + "click" + "</a>");

        }

    });


$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "오늘" },
    headers: { Authorization: "KakaoAK 285fafe83d6119f0e12200300e752b94" }
})
    .done(function (msg) {
        console.log(msg);


        // for문 (8개)
        var boxs = document.getElementsByClassName('box');


        for (var i = 0; i < boxs.length; i++) {

            $("#list_b >.box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
            $("#list_b >.box").eq(i).append("<h3>" + '<a href="sub2.html">' + msg.documents[i].title + "</a>" + "</h3>");
            $("#list_b >.box").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");

            $("#list_b >.box").eq(i).append("<h6>" + msg.documents[i].sale_price + "원" + "</h6>");
            $("#list_b >.box").eq(i).append("<h6>" + "정상가보다" + msg.documents[i].sale_price + "원 저렴해요" + "</h6>");

            $("#list_b >.box").eq(i).append('<a href="#" class="btn">' + "click" + "</a>");


        }
    });


$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "인문" },
    headers: { Authorization: "KakaoAK 285fafe83d6119f0e12200300e752b94" }
})
    .done(function (msg) {
        console.log(msg);

        // for문 (8개)
        var boxs = document.getElementsByClassName('box');


        for (var i = 0; i < boxs.length; i++) {

            $("#list_c >.box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
            $("#list_c >.box").eq(i).append("<h3>" + '<a href="sub2.html">' + msg.documents[i].title + "</a>" + "</h3>");
            $("#list_c >.box").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");


            $("#list_c >.box").eq(i).append("<h6>" + msg.documents[i].sale_price + "원" + "</h6>");
            $("#list_c >.box").eq(i).append("<h6>" + "정상가보다" + msg.documents[i].sale_price + "원 저렴해요" + "</h6>");

            $("#list_c >.box").eq(i).append('<a href="#" class="btn">' + "click" + "</a>");

        }




    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "경제" },
    headers: { Authorization: "KakaoAK 285fafe83d6119f0e12200300e752b94" }
})
    .done(function (msg) {
        console.log(msg);

        // for문 (8개)
        var boxs = document.getElementsByClassName('box');


        for (var i = 0; i < boxs.length; i++) {

            $("#list_d >.box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
            $("#list_d >.box").eq(i).append("<h3>" + '<a href="sub2.html">' + msg.documents[i].title + "</a>" + "</h3>");
            $("#list_d >.box").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");


            $("#list_d >.box").eq(i).append("<h6>" + msg.documents[i].sale_price + "원" + "</h6>");
            $("#list_d >.box").eq(i).append("<h6>" + "정상가보다" + msg.documents[i].sale_price + "원 저렴해요" + "</h6>");

            $("#list_d >.box").eq(i).append('<a href="#" class="btn">' + "click" + "</a>");

        }




    });


$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: " 어린이" },
    headers: { Authorization: "KakaoAK 285fafe83d6119f0e12200300e752b94" }
})
    .done(function (msg) {
        console.log(msg);

        // for문 (8개)
        var boxs = document.getElementsByClassName('box');


        for (var i = 0; i < boxs.length; i++) {

            $("#list_e >.box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
            $("#list_e >.box").eq(i).append("<h3>" + '<a href="sub2.html">' + msg.documents[i].title + "</a>" + "</h3>");
            $("#list_e >.box").eq(i).append("<h6>" + msg.documents[i].authors + "</h6>");


            $("#list_e >.box").eq(i).append("<h6>" + msg.documents[i].sale_price + "원" + "</h6>");
            $("#list_e >.box").eq(i).append("<h6>" + "정상가보다" + msg.documents[i].sale_price + "원 저렴해요" + "</h6>");

            $("#list_e >.box").eq(i).append('<a href="#" class="btn">' + "click" + "</a>");

        }




    });
