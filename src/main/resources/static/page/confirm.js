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

                        if(isEmpty(data)){
                            alert('등록된 예약이 없습니다.');
                        }else{
                            $.each( data, function ( item, val ) {
                                $("#checkService").html(val.service);
                                $("#checkNamed").html(val.name);
                                $("#checkPhone").html(val.phone);

                                $("#checkHomeAddr").html(val.home_addr);
                                $("#checkStartAddr").html(val.start_addr);
                                $("#checkEndAddr").html(val.end_addr);

                                $("#checkHomesize").html(val.home_size);
                                $("#checkOrderDate").html(val.aply_date);
                                $("#checkPassword").html(val.password);
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