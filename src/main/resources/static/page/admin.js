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
        "columns": [
            {"aaData": "idx",width: "10px", className: "alRight"},
            {"aaData": "time", className: "alCenter"},
            {"aaData": "type", className: "alCenter" },
            {"aaData": "name", className: "alCenter" },
            {"aaData": "phone", className: "alCenter"  },
            {"aaData": "status", className: "alCenter" }
        ],
        "sAjaxSource" : APIIP+"oneshot/loadEazyList",
        "sServerMethod": "POST",
        "fnRowCallback": function( nRow, aData, iDisplayIndex ) {
            var getTime = aData[1];
            var getIdx = aData[0];
            var getStatus = aData[5];
            var statusHtml;
            var stautsClass;
            if(getStatus==0){
                statusHtml = '<button class="btn btn-sm btn-danger" onclick="eazyStatusClick(\''+getIdx+'\',\'eazy\')"><i class="fa fa-times"></i>확인필요</button>';
            }else{
                statusHtml = '<i class="fa fa-check"></i>확인완료';
                stautsClass = 'text-info'
            }
            $("td:eq(1)", nRow).html(moment(getTime).format('YYYY-MM-DD hh:mm'));
            $("td:eq(5)", nRow).html(statusHtml);
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
        "columns": [
            {"aaData": "idx",width: "10px", className: "alRight"},
            {"aaData": "time", className: "alCenter"},
            {"aaData": "type", className: "alCenter" },
            {"aaData": "name", className: "alCenter" },
            {"aaData": "phone", className: "alCenter"  },
            {"aaData": "date", className: "alCenter"  },
            {"aaData": "apt_addr", className: "alLeft"  },
            {"aaData": "apt_name", className: "alLeft"  },
            {"aaData": "apt_size", className: "alRight"  },
            {"aaData": "status", className: "alCenter" }
        ],
        "sAjaxSource" : APIIP+"oneshot/loadReservationList",
        "sServerMethod": "POST",
        "fnRowCallback": function( nRow, aData, iDisplayIndex ) {
            var getIdx = aData[0];
            var getTime = aData[1];
            var getDate = aData[5];
            var getStatus = aData[9];
            var statusHtml;
            var stautsClass;
            if(getStatus==0){
                statusHtml = '<button class="btn btn-sm btn-danger" onclick="eazyStatusClick(\''+getIdx+'\',\'res\')"><i class="fa fa-times"></i>확인필요</button>';
            }else{
                statusHtml = '<i class="fa fa-check"></i>확인완료';
                stautsClass = 'text-info'
            }
            $("td:eq(1)", nRow).html(moment(getTime).format('YYYY-MM-DD hh:mm'));
            $("td:eq(5)", nRow).html(moment(getDate).format('YYYY-MM-DD hh:mm'));
            $("td:eq(9)", nRow).html(statusHtml);
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