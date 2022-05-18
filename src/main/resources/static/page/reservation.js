$(document).ready(function() {
    $("#orderPhone").on("input", function () {
        var temp = destroyMask($(this).val());
        $(this).val(createMask(temp));
    });
    jQuery.datetimepicker.setLocale('kr');
    $('#orderDate').datetimepicker({
        format:'Y-m-d',
        timepicker:false
    });
    $("#orderSvc").on('change',function (){
        var getValue = this.value;

        if(getValue.indexOf('청소') > 0){
            $(".moveAddr").css('display','none');
        }else{
            $(".moveAddr").css('display','block');
        }
    });
    $('#privacyView').popover({
        placement: 'top',
        html: true,
        trigger: 'hover',
        title : "개인정보수집 제공 동의",
        content: "<p>신용정보의 이용 및 보호에 관한 법률 제 23조 및 24조의 규정에 의하여 본 신청서를 통해 귀사가 본인으로부터 취득한 정보는 상품안내를 위한 기초자료로 활용하는데 동의합니다.</p>"+
            "<p><i class='fa fa-check'></i><strong>수집하는 개인정보 항목:</strong> 자택주소, 휴대전화번호, 이름,이용서비스 기록, 고객 상담 기록</p>"+
            "<p><i class='fa fa-check'></i><strong>수집하는 개인정보 항목:</strong> 본인 확인, 서비스 제공, 민원 및 사무 처리,마케팅 및 광고 활용</p>"+
            "<p><i class='fa fa-check'></i><strong>수집 및 이용 목적:</strong> 자택주소, 휴대전화번호, 이름,이용서비스 기록, 고객 상담 기록</p>"+
            "<p><i class='fa fa-check'></i><strong>보유 및 이용 기간</strong> 소비자 분쟁처리 기록 : 3년, 대금결제 등의 공급에 관한 기록 5년, 계약, 청약철회 등에 관한 기록 5년</p>"
    });


    $("#orderDate").val(moment().format('YYYY-MM-DD'));
    $("#orderBtn").click(function(){
        var getSvc = $("#orderSvc").val();
        var getName = $("#orderName").val();
        var getPhone = $("#orderPhone").val();

        var password1 = $("#orderAPTPassword1").val();
        var password2 = $("#orderAPTPassword2").val();
        var getDate = $("#orderDate").val();

        var orderHomeAddr = $("#orderHomeAddr").val();
        var orderStartAddr = $("#orderStartAddr").val();
        var orderEndAddr = $("#orderEndAddr").val();

        var orderHomeSize = $("#orderHomeSize").val();

        if(!$('#checkShareInfo').is(':checked')){
            alert('개인정보수집 및 이용, 제3자 제공 동의에 체크 후 신청이 가능합니다.');
            return false;
        }

        if(isEmpty(getName) ||
            isEmpty(getPhone) ||
            isEmpty(password1) ||
            isEmpty(password2) ||
            isEmpty(getDate) ||
            isEmpty(orderHomeAddr) )
        {
            alert('모든 정보를 정확히 입력하세요.');
            return false;
        }else if(password1 !=password2){
            alert('비밀번호를 다시 확인해주세요.');
            return false;
        }
        var json = {
            service: getSvc,
            name: getName,
            phone: getPhone,
            home_addr: orderHomeAddr,
            start_addr: orderStartAddr,
            end_addr: orderEndAddr,
            home_size: orderHomeSize,
            aply_date: getDate,
            password: password1
        };

        // 중복 체크
        var diffCheck = true;
        $.ajax({
            url: APIIP+"oneshot/findReservationByNamePhone",
            type: "POST",
            async: false,
            data: JSON.stringify(json),
            dataType: 'json',
            contentType: "application/json; UTF-8;",
            success: function(data){
                if(!isEmpty(data)){
                    alert('동일한 정보의 견적 내역이 있습니다.');
                    diffCheck =  false;
                }
            }
        });
        if(!diffCheck) return false;

        if (confirm('입력하신 내용으로 상담신청 하시겠습니까?')) {
            try {
                $.ajax({
                    url: APIIP+"oneshot/saveReservation",
                    type: "POST",
                    data: JSON.stringify(json),
                    dataType: 'json',
                    contentType: "application/json; UTF-8;",
                    success: function(data){
                        alert("상담 신청을 완료했습니다.");
                        $("#checkReservationDiv").css('display','block');

                        $.each( data, function ( name, val ) {
                            if(name=='service') $("#checkService").html(val);
                            if(name=='name') $("#checkName").html(val);
                            if(name=='phone') $("#checkPhone").html(val);

                            if(name=='home_addr') $("#checkHomeAddr").html(val);
                            if(name=='start_addr') $("#checkStartAddr").html(val);
                            if(name=='end_addr') $("#checkEndAddr").html(val);

                            if(name=='home_size') $("#checkHomesize").html(val);
                            if(name=='aply_date') $("#checkOrderDate").html(val);
                            if(name=='password') $("#checkPassword").html(val);
                        });

                    },
                    error: function (request, status, error){
                        alert("상담 신청을 실패하였습니다.["+error+"]");
                    }
                });
            } catch (error) {
                console.error(error);
            }
        }


    })
});

function findAddr(id){
    new daum.Postcode({
        oncomplete: function(data) {
            document.getElementById(id).value = data.address; // 주소 넣기
        }
    }).open();
}