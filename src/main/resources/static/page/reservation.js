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


    $("#privacyView").click(function (){
        $("#privacyContentModal").modal('show');
    });

    $("#privacyContentCloseBtn,#privacyContentCancelBtn").click(function (){
        $('#privacyContentModal').modal('hide');
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
            password: password1,
            status: 0
        };

        // 중복 체크
        var diffCheck = true;
        $.ajax({
            url: APIIP+"oneshot/findAllByPhoneAndMonthAgo",
            type: "POST",
            async: false,
            data: JSON.stringify(json),
            dataType: 'json',
            contentType: "application/json; UTF-8;",
            success: function(data){
                if(!isEmpty(data)){
                    alert('1달 이내에 동일한 전화번호의 견적내역이 있습니다.');
                    diffCheck =  false;
                }
            }
        });
        if(!diffCheck) return false;
        if (confirm('입력하신 내용으로 상담신청 하시겠습니까?')) {

            if(getSvc.indexOf('청소') == -1){
                //이사방에 전송
                var newForm = $('<form></form>');
                newForm.attr("method", "post");
                newForm.attr("action", "http://isabang.co.kr/trans/request_trans.php?cmd=save");
                newForm.attr("target", "_blank");
                newForm.append($('<input/>', {type: 'hidden', name: 'ord_type', value: 't_1'}));
                newForm.append($('<input/>', {type: 'hidden', name: 'quick', value: 'land_27a'}));
                newForm.append($('<input/>', {type: 'hidden', name: 'charset', value: 'utf8'}));
                newForm.append($('<input/>', {type: 'hidden', name: 'name', value: getName}));
                newForm.append($('<input/>', {type: 'hidden', name: 'pcs', value: getPhone}));
                newForm.append($('<input/>', {type: 'hidden', name: 'svc_date', value: getDate}));
                newForm.append($('<input/>', {type: 'hidden', name: 'f_addr1', value: orderStartAddr}));
                newForm.append($('<input/>', {type: 'hidden', name: 't_addr1', value: orderEndAddr}));
                newForm.append($('<textarea/>', {type: 'hidden', name: 'req_etcs', text: "이사청소한방 테스트입니다."}));

                var postData = newForm.serialize();
                var formURL = newForm.attr("action");

                $.ajax({
                    url : formURL,
                    type: "POST",
                    crossDomain: true,
                    data : postData,
                    async: false,
                    dataType : "json",
                    success:function(data, textStatus, jqXHR){
                        console.log('it did work');
                        json.status = 3;
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        console.log('it didnt work');
                    }
                });
            }

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