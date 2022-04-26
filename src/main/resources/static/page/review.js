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
        responsive: {
            details: {
                renderer: function ( api, rowIdx, columns ) {
                    var data = $.map( columns, function ( col, i ) {
                        return col.hidden ?
                            '<tr data-dt-row="'+col.rowIndex+'" data-dt-column="'+col.columnIndex+'">'+
                            '<td>'+col.title+':'+'</td> '+
                            '<td>'+col.data+'</td>'+
                            '</tr>' :
                            '';
                    } ).join('');

                    return data ?
                        $('<table/>').append( data ) :
                        false;
                }
            }
        },
        "columns": [
            {"aaData": "type",width: "50px", className: "alCenter"  },
            {"aaData": "score",width: "130px", className: "alLeft"  },
            {"aaData": "comment", className: "alLeft"},
            {"aaData": "writer",width: "50px", className: "alCenter"  },
            {"aaData": "time",width: "150px", className: "alCenter"}
        ],
        "sAjaxSource" : APIIP+"oneshot/loadReviewList",
        "sServerMethod": "POST",
        "fnRowCallback": function( nRow, aData, iDisplayIndex ) {
            var getTime = aData[4];
            var getScore = aData[1];

            var scoreHtml = [];
            scoreHtml.push('<div class="form-control d-inline bg-white border-0">')
            for(var i=0; i<getScore; i++){
                scoreHtml.push('<img src="img/icon-star.png" width="20"/>')
            }
            scoreHtml.push('</div>');

            $("td:eq(4)", nRow).html(moment(getTime).format('YYYY-MM-DD HH:mm'));
            $("td:eq(1)", nRow).html(scoreHtml.join(''));
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
                comment: $("#reviewComment").val().replace(/\r\n|\n/gi , "<br>"),
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