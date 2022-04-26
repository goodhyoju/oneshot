(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top');
        } else {
            $('.nav-bar').removeClass('sticky-top');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });
    
})(jQuery);

var APIIP = "http://49.50.174.83:8081/";
$(document).ready(function() {
    var myip = $("#myip").val();
    if(myip=='180.70.55.111' || myip=='203.236.8.208'){
        APIIP = "http://localhost:8081/";
    }
    APIIP = "http://localhost:8081/";

    $(".nav-link").removeClass('active');
    var getPageName = $("#pagename").val();

    $.each($(".smenu"), function (i,v){
        var getHref = $(this).attr('href');

        if(getHref=='index' && getPageName==getHref){
            $(this).addClass('active');
        }else if(getHref=='admin' && getPageName==getHref){
            $(this).addClass('active');
        }else if(getPageName==getHref){
            $(this).parent().siblings('.nav-link').addClass('active');
        }
    });

    $("#eazyOrderPhone").on("input", function () {
        var temp = destroyMask($(this).val());
        $(this).val(createMask(temp));
    });
    $("#eazyOrderBtn").click(function(){

        var getSvc = $("#eazyOrderSvc").val();
        var getName = $("#eazyOrderName").val();
        var getPhone = $("#eazyOrderPhone").val();

        if(isEmpty(getName) || isEmpty(getPhone)){
            alert('이름과 전화번호를 정확히 입력하세요.');
            return false;
        }
        var json = {
            service: getSvc,
            name: getName,
            phone: getPhone
        };
        var diffCheck = true;
        $.ajax({
            url: APIIP+"oneshot/findEazy",
            type: "POST",
            async: false,
            data: JSON.stringify(json),
            dataType: 'json',
            contentType: "application/json; UTF-8;",
            success: function(data){
                console.log(data);
                if(!isEmpty(data)){
                    alert('동일한 정보의 간편신청 내역이 있습니다.');
                    diffCheck =  false;
                }
            }
        });
        if(!diffCheck) return false;

        if (confirm('입력하신 내용으로 간편 상담을 신청 하시겠습니까?')) {
            try {
                $.ajax({
                    url: APIIP+"oneshot/saveEazy",
                    type: "POST",
                    data: JSON.stringify(json),
                    dataType: 'json',
                    contentType: "application/json; UTF-8;",
                    success: function(data){
                        alert("간편 상담 신청을 완료했습니다.");
                    },
                    error: function (request, status, error){
                        alert("간편 상담 신청을 실패하였습니다.["+error+"]");
                    }
                });
            } catch (error) {
                console.error(error);
            }
        }
    });
});

var isEmpty = function(value){ if( value == "" || value == null || value == undefined || ( value != null && typeof value == "object" && !Object.keys(value).length ) ){ return true }else{ return false } };
function randName() {
    var text = "";
    var first = "김이박최정강조윤장임한오서신권황안송류전홍고문양손배조백허유남심노정하곽성차주우구신임나전민유진지엄채원천방공강현함변염양변여추노도소신석선설마주연방위표명기반왕모장남탁국여진구";
    var last = "가강건경고관광구규근기길나남노누다단달담대덕도동두라래로루리마만명무문미민바박백범별병보사산상새서석선설섭성세소솔수숙순숭슬승시신아안애엄여연영예오옥완요용우원월위유윤율으은의이익인일자잔장재전정제조종주준중지진찬창채천철초춘충치탐태택판하한해혁현형혜호홍화환회효훈휘희운모배부림봉혼황량린을비솜공면탁온디항후려균묵송욱휴언들견추걸삼열웅분변양출타흥겸곤번식란더손술반빈실직악람권복심헌엽학개평늘랑향울련";

    for (var i = 0; i < 1; i++)
        text += first.charAt(Math.floor(Math.random() * first.length));
    for (var i = 0; i < 2; i++)
        text += last.charAt(Math.floor(Math.random() * last.length));

    return text;
}

function destroyMask(string) {
    return string.replace(/\D/g, '').substring(0, 11);
}

function createMask(string) {
    return string.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
}

var lang_kor = {
    "decimal" : "",
    "emptyTable" : "데이터가 없습니다.",
    "info" : "_START_ - _END_ (총 _TOTAL_ 명)",
    "infoEmpty" : "0명",
    "infoFiltered" : "(전체 _MAX_ 명 중 검색결과)",
    "infoPostFix" : "",
    "thousands" : ",",
    "lengthMenu" : "_MENU_ 개씩 보기",
    "loadingRecords" : "로딩중...",
    "processing" : "처리중...",
    "search" : "<i class=\"fa fa-search\" aria-hidden=\"true\"></i> 검색 : ",
    "searchPlaceholder": "검색어 입력 후 엔터",
    "zeroRecords" : "검색된 데이터가 없습니다.",
    "paginate" : {
        "first" : "첫 페이지",
        "last" : "마지막 페이지",
        "next" : "다음",
        "previous" : "이전"
    },
    "aria" : {
        "sortAscending" : " :  오름차순 정렬",
        "sortDescending" : " :  내림차순 정렬"
    }
};