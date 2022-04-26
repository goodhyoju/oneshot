$(document).ready(function() {
    var eazyDt = $('#eazyTable').DataTable({
        "ordering": false,
        "info":     false,
        "lengthChange": false,
        "pageLength": 5,
        "search": {
            return: true
        },
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
            {"aaData": "idx",width: "10px", className: "alRight"},
            {"aaData": "type", className: "alCenter" },
            {"aaData": "status", className: "alCenter" },
            {"aaData": "name", className: "alCenter" },
            {"aaData": "phone", className: "alCenter"  },
            {"aaData": "time", className: "alCenter"}
        ],
        "sAjaxSource" : APIIP+"oneshot/loadEazyList",
        "sServerMethod": "POST",
        "fnRowCallback": function( nRow, aData, iDisplayIndex ) {
            var getTime = aData[5];
            var getIdx = aData[0];
            var getStatus = aData[2];
            var statusHtml;
            var stautsClass;
            if(getStatus==0){
                statusHtml = '<button class="btn btn-sm btn-danger" onclick="eazyStatusClick(\''+getIdx+'\',\'eazy\')"><i class="fa fa-times"></i>확인필요</button>';
            }else{
                statusHtml = '<i class="fa fa-check"></i>확인완료';
                stautsClass = 'text-info'
            }
            $("td:eq(5)", nRow).html(moment(getTime).format('YYYY-MM-DD HH:mm'));
            $("td:eq(2)", nRow).html(statusHtml);
            $(nRow).addClass(stautsClass);
        }
    });

    var reservationDt = $('#reservationTable').DataTable({
        "ordering": false,
        "info":     false,
        "lengthChange": false,
        "pageLength": 10,
        "search": {
            return: true
        },
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
            {"aaData": "idx",width: "10px", className: "alRight"},
            {"aaData": "type", className: "alCenter" },
            {"aaData": "status", className: "alCenter" },
            {"aaData": "name", className: "alCenter" },
            {"aaData": "phone", className: "alCenter"  },
            {"aaData": "date", className: "alCenter"  },
            {"aaData": "addr", className: "alLeft"  },
            {"aaData": "apt_size", className: "alRight"  },
            {"aaData": "time", className: "alCenter"}
        ],
        "sAjaxSource" : APIIP+"oneshot/loadReservationList",
        "sServerMethod": "POST",
        "fnRowCallback": function( nRow, aData, iDisplayIndex ) {
            console.log(aData);
            var getIdx = aData[0];
            var getTime = aData[8];
            var getDate = aData[5];
            var getStatus = aData[2];
            var statusHtml;
            var stautsClass;
            if(getStatus==0){
                statusHtml = '<button class="btn btn-sm btn-danger" onclick="eazyStatusClick(\''+getIdx+'\',\'res\')"><i class="fa fa-times"></i>확인필요</button>';
            }else{
                statusHtml = '<i class="fa fa-check"></i>확인완료';
                stautsClass = 'text-info'
            }
            $("td:eq(8)", nRow).html(moment(getTime).format('YYYY-MM-DD HH:mm'));
            $("td:eq(5)", nRow).html(moment(getDate).format('YYYY-MM-DD HH:mm'));
            $("td:eq(2)", nRow).html(statusHtml);
            $(nRow).addClass(stautsClass);
        }
    });

});
function eazyStatusClick(idx,type){
    var req;
    var title;
    if(type=='res'){
        title = '상담신청을 확인 하시겠습니까?'
    }else{
        title = '간편상담을 확인 하시겠습니까?'
    }
    if (confirm(title)) {

    }
}