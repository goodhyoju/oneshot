$(document).ready(function() {
    var dt = $('#reviewTable').DataTable({
        "ordering": false,
        "info":     false,
        "lengthChange": false,
        "pageLength": 10,
        "searching": false,
        "language" : lang_kor,
        "processing": true,
        "bServerSide": true,
        "columns": [
            {"aaData": "time",width: "150px", className: "alCenter"},
            {"aaData": "type",width: "50px", className: "alCenter"  },
            {"aaData": "comment"},
            {"aaData": "writer",width: "50px", className: "alCenter"  },
            {"aaData": "score",width: "130px", className: "alLeft"  },
            {"aaData": "controll",width: "30px","visible": true},
        ],
        "sAjaxSource" : APIIP+"oneshot/loadReviewList",
        "sServerMethod": "POST",
        "fnRowCallback": function( nRow, aData, iDisplayIndex ) {
            var getTime = aData[0];
            var getScore = aData[4];

            var scoreHtml = [];
            scoreHtml.push('<div class="form-control d-inline bg-white border-0">')
            for(var i=0; i<getScore; i++){
                scoreHtml.push('<img src="lib/raty/images/star-on.png" />')
            }
            scoreHtml.push('</div>');

            $("td:eq(0)", nRow).html(moment(getTime).format('YYYY-MM-DD hh:mm'));
            $("td:eq(4)", nRow).html(scoreHtml.join(''));
        }
    });


    $('#reviewStart').raty({
        score: 3,
        path : "lib/raty/images",
        width : 250,
        size: 20,
        click: function(score, evt) {
            $("#reviewScope").val(score);
        }
    });

    $("#addReviewBtn").click(function (){
        $("#reviewWriter").val(randName());
        $("#addReviewModal").modal('show');
    });

    $("#addReviewCloseBtn,#addReviewCancelBtn").click(function (){
        $('#addReviewModal').modal('hide');
    });

    $("#addReviewSaveBtn").click(function (){
        if (confirm('입력하신 내용으로 후기를 남기시겠습니까?')) {
            var json = {
                type: $("#reviewType").val(),
                writer: $("#reviewWriter").val(),
                comment: $("#reviewComment").val(),
                scope: $("#reviewScope").val()
            };
            try {
                $.ajax({
                    url: APIIP+"oneshot/saveReview",
                    type: "POST",
                    data: JSON.stringify(json),
                    dataType: 'json',
                    contentType: "application/json; UTF-8;",
                    success: function(data){
                        dt.ajax.reload();
                    },
                    error: function (request, status, error){
                        alert("저장에 실패하였습니다.["+error+"]");
                    }
                });
                $('#addReviewModal').modal('hide');
            } catch (error) {
                console.error(error);
            }
        }
    });
});