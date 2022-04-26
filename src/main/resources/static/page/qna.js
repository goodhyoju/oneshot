var dt;

$(document).ready(function() {

    function format ( d ) {
        var html = '<span class=""><i class="fa fa-check text-primary me-3"></i>제목: '+d[4]+'</span><br>'+
                    '<span class=""><i class="fa fa-check text-primary me-3"></i>내용: '+d[5]+'</span>';
        if(d[7] !=null && d[7].length > 1){
            html+='<br><br><span class="fw-bold"><i class="fa fa-arrow-right text-danger me-3"></i>답변: '+d[7]+'</span>';
        }
        return html;
    }
    dt = $('#qnaTable').DataTable({
        "ordering": false,
        "info":     false,
        "lengthChange": false,
        "pageLength": 10,
        "search": {
            return: true
        },
        "async": false,
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
            {"aaData": "idx",width: "20px", className: "alRight hd"},
            {"aaData": "controll",width: "30px", className: "alCenter hd"},
            {"aaData": "type",width: "70px", className: "alCenter" },
            {"aaData": "status",width: "80px", className: "alCenter"  },
            {"aaData": "title" , className: "alLeft"},
            {"aaData": "writer",width: "50px", className: "alCenter"  },
            {"aaData": "time",width: "130px", className: "alCenter"},
            {"aaData": "comment","visible": false},
            {"aaData": "answer","visible": false }
        ],
        "sAjaxSource" : APIIP+"oneshot/loadQnaList",
        "sServerMethod": "POST",
        "fnRowCallback": function( nRow, aData, iDisplayIndex ) {
            var getTime = aData[6];
            var getIdx = aData[0];
            var getTitle = aData[4];
            var getComment = aData[7];
            var getAnswer = aData[8];
            var getStatus = aData[3];

            if(getStatus=='0'){
                getStatus = '<label class="bg-danger rounded text-white p-1">미답변</label>'
            }else{
                getStatus = '<label class="bg-success rounded text-white p-1">답변완료</label>'
            }
            $("td:eq(6)", nRow).html(moment(getTime).format('YYYY-MM-DD HH:mm'));
            $("td:eq(3)", nRow).html(getStatus);
            $("td:eq(1)", nRow).html('<div class="col-md-12 d-inline"><a href="javascript:;" class="text-primary fw-bold mb-0 p-1" title="답변 입력" onclick="answerQna('+getIdx+',\''+getTitle+'\',\''+getComment+'\',\''+getAnswer+'\')"><i class="fas fa-reply"></i></a>'+
                                     '<a href="javascript:;" class="text-danger fw-bold mb-0 p-1" title="글 삭제" onclick="deleteQna('+getIdx+',\''+getTitle+'\')">X</a></div>');
        }
    });

    $("#addQnaBtn").click(function (){
        $("#qnaWriter").val(randName());
        $('#addQnaModal').modal('show');
    });

    function detailRowsFunc(target){
        var tr = $(target).closest('tr');
        var row = dt.row( tr );
        var idx = $.inArray( tr.attr('id'), detailRows );

        if ( row.child.isShown() ) {
            tr.removeClass( 'details' );
            row.child.hide();

            // Remove from the 'open' array
            detailRows.splice( idx, 1 );
            dt.ajax.reload();
        }
        else {
            tr.addClass( 'details' );
            row.child( format( row.data() ) ).show();

            // Add to the 'open' array
            if ( idx === -1 ) {
                detailRows.push( tr.attr('id') );
            }
        }
    }
    var detailRows = [];

    $('#qnaTable tbody').on( 'click', 'td:gt(1)', function () {
      //  detailRowsFunc(this);
        var tr = $(this).closest('tr');
        var row = dt.row( tr );

        if($(this).attr('class').indexOf('hd') > 0){
            return false;
        }
        $("#viewQnaTitle").html('['+row.data()[2]+'] '+ row.data()[4]);
        $("#viewQnaWriter").html(moment(row.data()[6]).format('YYYY-MM-DD')+' '+ row.data()[5]);
        $("#viewQnaComment").html("<i class='fa fa-arrow-right'></i>질문: "+row.data()[7]);

        if(row.data()[3]=='1'){
            $("#viewQnaAnswer").html("<i class='fa fa-arrow-left'></i>답변: "+row.data()[8]);
        }else{
            $("#viewQnaAnswer").html('');
        }

        $('#viewQnaModal').modal('show');
    } );

    // On each draw, loop over the `detailRows` array and show any child rows
    dt.on( 'draw', function () {
        $.each( detailRows, function ( i, id ) {
            $('#'+id+' td.details-control').trigger( 'click' );
        } );
    } );

    $("#viewQnaCloseBtn,#viewQnaCancelBtn").click(function (){
        $('#viewQnaModal').modal('hide');
    });
    $("#answerQnaCloseBtn,#answerQnaCancelBtn").click(function (){
        $('#answerQnaModal').modal('hide');
    });
    $("#addQnaCloseBtn,#addQnaCancelBtn").click(function (){
        $('#addQnaModal').modal('hide');
    });

    $("#answerQnaSaveBtn").click(function (){
        if (confirm('입력하신 내용을 답글을 남기시겠습니까?')) {
            var json = {
                idx:  $("#answerQnaIdx").val(),
                answer: $("#answerQnaReply").val()
            };
            try {
                $.ajax({
                    url: APIIP+"oneshot/updateQna",
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
                $('#answerQnaModal').modal('hide');
            } catch (error) {
                console.error(error);
            }
        }
    });

    $("#addQnaSaveBtn").click(function (){
        if (confirm('입력하신 내용을 저장하시겠습니까?')) {
            var json = {
                type: $("#qnaType").val(),
                title: $("#qnaTitle").val(),
                comment: $("#qnaComment").val(),
                writer: $("#qnaWriter").val()
            };
            try {
                $.ajax({
                    url: APIIP+"oneshot/saveQna",
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
                $('#addQnaModal').modal('hide');
            } catch (error) {
                console.error(error);
            }
        }
    });

} );
function deleteQna(idx, title){
    if (confirm('['+ title+ "]를 삭제 하시겠습니까?")) {

        try {
            $.ajax({
                url: APIIP+"oneshot/deleteQna?idx="+idx,
                type: "POST",
                success: function(data){
                    dt.ajax.reload();
                },
                error: function (request, status, error){
                    alert("삭제를 실패하였습니다.["+error+"]");
                }

            });
        } catch (error) {
            console.error(error);
        }
    }
}

function answerQna(idx,title,comment,answer){
    $("#answerQnaTitle").val(title);
    $("#answerQnaComment").val(comment);
    if(answer!=null && answer !='null'){
        $("#answerQnaReply").val(answer);
    }else{
        $("#answerQnaReply").val('');
    }
    $("#answerQnaIdx").val(idx);
    $('#answerQnaModal').modal('show');
}
function sleep (delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}
