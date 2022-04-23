$(document).ready(function() {
        $("#checkBtn").click(function (){
            var getName = $("#checkName").val();
            var password = $("#checkAptPassword").val();

            var json = {
                name: getName,
                password: password
            };
            try {
                $.ajax({
                    url: APIIP+"oneshot/findReservationByNamePassword",
                    type: "POST",
                    data: JSON.stringify(json),
                    dataType: 'json',
                    contentType: "application/json; UTF-8;",
                    success: function(data){
                        console.log(data);
                        if(isEmpty(data)){
                            alert('등록된 예약이 없습니다.');
                        }else{
                            $.each( data, function ( item, val ) {
                                $("#checkCName").html(val.name);
                                $("#checkCPhone").html(val.phone);
                                $("#checkCAptName").html(val.apt_name);
                                $("#checkCAptAddr").html(val.apt_addr);
                                $("#checkCAptsize").html(val.apt_size);
                                $("#checkCOrderDate").html(val.aply_date);
                                $("#checkCService").html(val.service);
                                $("#checkCPassword").html(val.password);
                            });
                        }
                    },
                    error: function (request, status, error){
                        alert("예약확인 조회를 실패하였습니다.["+error+"]");
                    }
                });
            } catch (error) {
                console.error(error);
            }
        });
});