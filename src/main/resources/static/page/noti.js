var dt;

$(document).ready(function() {

    function format ( d ) {
        console.log(d);
        return '<span class=""><i class="fa fa-check text-primary me-3"></i>작성일: '+moment(d[2]).format('YYYY-MM-DD hh:mm')+'</span><br><br>'+
            '<span class=""><i class="fa fa-check text-primary me-3"></i>제목: '+d[4]+'</span><br>'+
            '<span class=""><i class="fa fa-check text-primary me-3"></i>내용: '+d[5]+'</span>';
    }
    dt = $('#notiTable').DataTable({
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
        "columns": [
            {
                "class":          "details-control",
                "orderable":      false,
                "aaData":           null,
                "defaultContent": "",
                width: "10px"
            },
            {"aaData": "idx",width: "1px","visible": false},
            {"aaData": "time",width: "80px", className: "alCenter"},
            {"aaData": "type",width: "70px", className: "alCenter" },
            {"aaData": "title" },
            {"aaData": "comment","visible": false},
            {"aaData": "writer",width: "50px", className: "alCenter"  },
            {"aaData": "rcount",width: "50px", className: "alRight" ,render: $.fn.dataTable.render.number( ',' ) },
            {"aaData": "controll",width: "10px","visible": true},
        ],
        "sAjaxSource" : APIIP+"oneshot/loadNotisList",
        "sServerMethod": "POST",
        "fnRowCallback": function( nRow, aData, iDisplayIndex ) {
            var getTime = aData['time'];
            var getIdx = aData[1];
            var getTitle = aData[4];

            $("td:eq(1)", nRow).html(moment(getTime).format('YYYY-MM-DD'));
            $("td:eq(6)", nRow).html('<a href="javascript:;" class="text-danger fw-bold mb-0 p-1" title="글 삭제"  onclick="deleteNoits('+getIdx+',\''+getTitle+'\')">X</a>');

        }
    });

    $("#addNotisBtn").click(function (){
        $('#addNotisModal').modal('show');
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
            try {
                $.ajax({
                    url: APIIP+"oneshot/updateNotisCount?idx="+row.data()[1],
                    type: "POST",
                    success: function(data){
                        console.log(data);
                    },
                    error: function (request, status, error){
                        console.log(error);
                    }

                });
            } catch (error) {
                console.error(error);
            }
        }
    }
    var detailRows = [];

    $('#notiTable tbody').on( 'click', 'tr td:not(:last-child)', function () {
        detailRowsFunc(this);
    } );

    // On each draw, loop over the `detailRows` array and show any child rows
    dt.on( 'draw', function () {
        $.each( detailRows, function ( i, id ) {
            $('#'+id+' td.details-control').trigger( 'click' );
        } );
    } );


    $("#addNotisCloseBtn,#addNotisCancelBtn").click(function (){
        $('#addNotisModal').modal('hide');
    });

    $("#addNotisSaveBtn").click(function (){
        if (confirm('입력하신 내용을 저장하시겠습니까?')) {
            var json = {
                site: "oneshot",
                type: $("#notisType").val(),
                title: $("#notisTitle").val(),
                comment: $("#notisComment").val(),
                writer: $("#notisWriter").val()
            };
            try {
                $.ajax({
                    url: APIIP+"oneshot/saveNotis",
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
                $('#addNotisModal').modal('hide');
            } catch (error) {
                console.error(error);
            }
        }
    });

} );
function deleteNoits(idx,title){
    if (confirm('['+ title+ "]를 삭제 하시겠습니까?")) {

        try {
            $.ajax({
                url: APIIP+"oneshot/deleteNotis?idx="+idx,
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
function sleep (delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}