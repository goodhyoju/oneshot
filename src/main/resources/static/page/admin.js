var getConsultant,eazyDt,reservationDt,notisDt,qnaDt,reviewDt,calendar;
$(document).ready(function() {
    getConsultant = $("#consultant").val();
    if(isEmpty(getConsultant)){
        getConsultant = '운영자';
    }
    $("#adminTab li:eq(0) a").tab("show");

    $("#datetimepicker2") .datetimepicker({
        locale: "ko",
        format: "YYYY-MM",
        defaultDate: moment(),
        inline: true
    }).on('dp.change', function(e){
        createDashboard();
    });
    createDashboard();

    /*eazyDt = $('#eazyTable').DataTable({
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
            {"aaData": "type", className: "alCenter" },
            {"aaData": "name", className: "alCenter" },
            {"aaData": "phone", className: "alCenter"  },
            {"aaData": "time",width: "50px", className: "alCenter"},
            {"aaData": "status",width: "60px", className: "alCenter" },
            {"aaData": "consultant",width: "50px", className: "alCenter" },
            {"aaData": "control",width: "150px", className: "alCenter" }
        ],
        "sAjaxSource" : APIIP+"oneshot/loadEazyList",
        "sServerMethod": "POST",
        "fnRowCallback": function( nRow, aData, iDisplayIndex ) {
            var getTime = aData[4];
            var getIdx = aData[0];
            var getStatus = aData[5];
            var statusHtml;
            var stautsClass;
            var controlHtml = [];

            if(getStatus==0){
                statusHtml = '<i class="fa fa-exclamation-circle"></i>대기';
            }else if(getStatus==1){
                statusHtml = '<i class="fa fa-user-times"></i>부재';
                stautsClass = 'text-warning'
            }else{
                statusHtml = '<i class="fa fa-check-circle"></i>완료';
                stautsClass = 'text-info'
            }
            controlHtml.push('<div class="btn-group-sm">');
            controlHtml.push('<button class="btn btn-dark"      onclick="eazyStatusClick(\''+getIdx+'\',0)"><i class="fa fa-exclamation-circle"></i>대기</button>');
            controlHtml.push('<button class="btn btn-warning"   onclick="eazyStatusClick(\''+getIdx+'\',1)"><i class="fa fa-user-times"></i>부재</button>');
            controlHtml.push('<button class="btn btn-info"      onclick="eazyStatusClick(\''+getIdx+'\',2)"><i class="fa fa-check-circle"></i>완료</button>');
            controlHtml.push('</div>');
            $("td:eq(4)", nRow).html(moment(getTime).format('YYYY-MM-DD HH:mm'));
            $("td:eq(5)", nRow).html(statusHtml);
            $("td:eq(7)", nRow).html(controlHtml.join(''));

            $(nRow).addClass(stautsClass);
        }
    });*/

    reservationDt = $('#reservationTable').DataTable({
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
            {"aaData": "type", className: "alCenter" },
            {"aaData": "name", className: "alCenter" },
            {"aaData": "phone", className: "alCenter"  },
            {"aaData": "addr", className: "alLeft"  },
            {"aaData": "apt_size", className: "alRight"  },
            {"aaData": "time", className: "alCenter"},
            {"aaData": "status", className: "alCenter" },
            {"aaData": "share", className: "alCenter" },
            {"aaData": "consultant",width: "50px", className: "alCenter" },
            {"aaData": "control", className: "alCenter" }
        ],
        "sAjaxSource" : APIIP+"oneshot/loadReservationList",
        "sServerMethod": "POST",
        "fnRowCallback": function( nRow, aData, iDisplayIndex ) {
            var getIdx = aData[0];
            var getTime = aData[6];
            var getStatus = aData[7];
            var getShare = aData[8];
            var statusHtml;
            var shareHtml;
            var stautsClass;
            var controlHtml = [];

            if(getStatus==0){
                statusHtml = '<i class="fa fa-exclamation-circle"></i>대기';
            }else if(getStatus==1){
                statusHtml = '<i class="fa fa-user-times"></i>부재';
                stautsClass = 'text-warning'
            }else{
                statusHtml = '<i class="fa fa-check-circle"></i>완료';
                stautsClass = 'text-info'
            }

            if(getShare==0) {
                shareHtml = '<label class="text-gray"><i class="fa fa-exclamation-triangle"></i>대상아님</label>';
            }else if(getShare==1) {
                shareHtml = '<label class="text-success"><i class="fa fa-bullhorn"></i>이사방완료</label>';
            }else{
                shareHtml = '<label class="text-danger"><i class="fa fa-times"></i>이사방실패</label>';
            }

            controlHtml.push('<div class="btn-group-sm">');
            controlHtml.push('<button class="btn btn-dark"      onclick="reservationStatusClick(\''+getIdx+'\',0)"><i class="fa fa-exclamation-circle"></i>대기</button>');
            controlHtml.push('<button class="btn btn-warning"   onclick="reservationStatusClick(\''+getIdx+'\',1)"><i class="fa fa-user-times"></i>부재</button>');
            controlHtml.push('<button class="btn btn-info"      onclick="reservationStatusClick(\''+getIdx+'\',2)"><i class="fa fa-check-circle"></i>완료</button>');
            controlHtml.push('</div>');


            $("td:eq(6)", nRow).html(moment(getTime).format('YYYY-MM-DD HH:mm'));
            $("td:eq(7)", nRow).html(statusHtml);
            $("td:eq(8)", nRow).html(shareHtml);
            $("td:eq(10)", nRow).html(controlHtml.join(''));
            $(nRow).addClass(stautsClass);
        }
    });

    // notis method start
    notisDt = $('#notiTable').DataTable({
        "ordering": false,
        "info":     false,
        "lengthChange": false,
        "pageLength":10,
        "search": {
            return: true
        },
        "async": false,
        "language" : lang_kor,
        "processing": true,
        "bServerSide": true,
        "columns": [
            {"aaData": "idx",width: "10px","visible": true, className: "alRight hd"},
            {"aaData": "type",width: "70px", className: "alCenter" },
            {"aaData": "title" , className: "alLeft"},
            {"aaData": "comment","visible": false},
            {"aaData": "time",width: "80px", className: "alCenter"},
            {"aaData": "writer",width: "50px", className: "alCenter"  },
            {"aaData": "rcount",width: "50px", className: "alRight" ,render: $.fn.dataTable.render.number( ',' ) },
            {"aaData": "controll",width: "15px","visible": true, className: "alCenter hd"}
        ],
        "sAjaxSource" : APIIP+"oneshot/loadNotisList",
        "sServerMethod": "POST",
        "fnRowCallback": function( nRow, aData, iDisplayIndex ) {
            var getTime = aData['time'];
            var getIdx = aData[0];
            var getTitle = aData[2];

            $("td:eq(3)", nRow).html(moment(getTime).format('YYYY-MM-DD'));
            $("td:eq(6)", nRow).html('<button class="btn btn-sm btn-danger" title="글 삭제"  onclick="deleteNoits('+getIdx+',\''+getTitle+'\')"><i class="fa fa-times"></i>삭제</button>');

        }
    });

    $("#addNotisBtn").click(function (){
        $('#addNotisModal').modal('show');
    });
    var detailRows = [];

    $('#notiTable tbody').on( 'click', 'td:gt(1)', function () {
        var tr = $(this).closest('tr');
        var row = notisDt.row( tr );


        if($(this).attr('class').indexOf('hd') > 0){
            return false;
        }

        //   detailRowsFunc(this);
        try {
            $.ajax({
                url: APIIP+"oneshot/updateNotisCount?idx="+row.data()[0],
                type: "POST",
                success: function(data){
                    notisDt.ajax.reload();
                },
                error: function (request, status, error){
                    console.log(error);
                }

            });
        } catch (error) {
            console.error(error);
        }
        $("#viewNotisTitle").html('['+row.data()[1]+'] '+ row.data()[2]);
        $("#viewNotisWriter").html(moment(row.data()[4]).format('YYYY-MM-DD')+' '+ row.data()[5]);
        $("#viewNotisComment").html(row.data()[3]);
        $("#viewNotisModal").modal('show');
    } );

    notisDt.on( 'draw', function () {
        $.each( detailRows, function ( i, id ) {
            $('#'+id+' td.details-control').trigger( 'click' );
        } );
    } );
    $("#viewNotisCancelBtn,#viewNotisCloseBtn").click(function (){
        $('#viewNotisModal').modal('hide');
    });

    $("#addNotisCloseBtn,#addNotisCancelBtn").click(function (){
        $('#addNotisModal').modal('hide');
    });

    $("#addNotisSaveBtn").click(function (){
        if (confirm('입력하신 내용을 저장하시겠습니까?')) {
            var json = {
                site: "oneshot",
                type: $("#notisType").val(),
                title: $("#notisTitle").val(),
                comment: $("#notisComment").val().replace(/\r\n|\n/gi , "<br>"),
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
                        notisDt.ajax.reload();
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
    // notis method end
    // qna method start
    qnaDt = $('#qnaTable').DataTable({
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
            {"aaData": "idx",width: "20px", className: "alRight hd"},
            {"aaData": "type",width: "70px", className: "alCenter" },
            {"aaData": "status",width: "80px", className: "alCenter"  },
            {"aaData": "title" , className: "alLeft"},
            {"aaData": "writer",width: "50px", className: "alCenter"  },
            {"aaData": "time",width: "130px", className: "alCenter"},
            {"aaData": "comment","visible": false},
            {"aaData": "answer","visible": false },
            {"aaData": "controll",width: "30px", className: "alCenter hd"}
        ],
        "sAjaxSource" : APIIP+"oneshot/loadQnaList",
        "sServerMethod": "POST",
        "fnRowCallback": function( nRow, aData, iDisplayIndex ) {
            var getIdx      = aData[0];
            var getStatus   = aData[2];
            var getTitle    = aData[3];
            var getTime     = aData[5];

            var getComment  = aData[6];
            var getAnswer   = aData[7];

            var setClass = 'text-dark';
            if(getStatus=='0'){
                getStatus = '미답변';
                setClass = 'text-danger';
            }else{
                getStatus = '답변완료';
            }

            $("td:eq(5)", nRow).html(moment(getTime).format('YYYY-MM-DD HH:mm'));
            $("td:eq(2)", nRow).html(getStatus);
            $("td:eq(6)", nRow).html('<div class="btn-group-sm"><button class="btn btn-success" title="답변 입력" onclick="answerQna('+getIdx+',\''+getTitle+'\',\''+getComment+'\',\''+getAnswer+'\')"><i class="fas fa-reply"></i></button>'+
                '<button class="btn btn-danger" title="글 삭제" onclick="deleteQna('+getIdx+',\''+getTitle+'\')"><i class="fa fa-times"></i></button></div>');

            $(nRow).addClass(setClass);
        }
    });

    $("#addQnaBtn").click(function (){
        $("#qnaWriter").val(randName());
        $('#addQnaModal').modal('show');
    });

    var detailRows = [];

    $('#qnaTable tbody').on( 'click', 'td:gt(1)', function () {
        //  detailRowsFunc(this);
        var tr = $(this).closest('tr');
        var row = qnaDt.row( tr );

        if($(this).attr('class').indexOf('hd') > 0){
            return false;
        }
        $("#viewQnaTitle").html('['+row.data()[1]+'] '+ row.data()[3]);
        $("#viewQnaWriter").html(moment(row.data()[5]).format('YYYY-MM-DD')+' '+ row.data()[4]);
        $("#viewQnaComment").html("<i class='fa fa-arrow-right'></i>질문: "+row.data()[6]);

        if(row.data()[2]=='1'){
            $("#viewQnaAnswer").html("<i class='fa fa-arrow-left'></i>답변: "+row.data()[7]);
        }else{
            $("#viewQnaAnswer").html('');
        }

        $('#viewQnaModal').modal('show');
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
                        qnaDt.ajax.reload();
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
                        qnaDt.ajax.reload();
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
    // qna method start

    // review method start
    reviewDt = $('#reviewTable').DataTable({
        "ordering": false,
        "info":     false,
        "lengthChange": false,
        "pageLength": 10,
        "searching": false,
        "language" : lang_kor,
        "processing": true,
        "bServerSide": true,
        "columns": [
            {"aaData": "idx",width: "50px", className: "alRigth"  },
            {"aaData": "type",width: "50px", className: "alCenter"  },
            {"aaData": "score",width: "150px", className: "alLeft"  },
            {"aaData": "comment", className: "alLeft"},
            {"aaData": "writer",width: "50px", className: "alCenter"  },
            {"aaData": "time",width: "150px", className: "alCenter"},
            {"aaData": "control",width: "20px", className: "alCenter"}
        ],
        "sAjaxSource" : APIIP+"oneshot/loadReviewList",
        "sServerMethod": "POST",
        "fnRowCallback": function( nRow, aData, iDisplayIndex ) {
            var getIdx = aData[0];
            var getTime = aData[5];
            var getScore = aData[2];

            var scoreHtml = [];
            scoreHtml.push('<div class="form-control d-inline bg-white border-0">')
            for(var i=0; i<getScore; i++){
                scoreHtml.push('<img src="img/icon-star.png" width="20"/>')
            }
            scoreHtml.push('</div>');

            $("td:eq(5)", nRow).html(moment(getTime).format('YYYY-MM-DD HH:mm'));
            $("td:eq(2)", nRow).html(scoreHtml.join(''));
            $("td:eq(6)", nRow).html('<button class="btn btn-sm btn-danger" title="리뷰 삭제"  onclick="deleteReview('+getIdx+')"><i class="fa fa-times"></i>삭제</button>');
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
                        reviewDt.ajax.reload();
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
    // review method end

    // free method start
    var initialLocaleCode = 'ko';
    var calendarEl = document.getElementById('calendar');

    calendar = new FullCalendar.Calendar(calendarEl, {
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
        },
        locale: initialLocaleCode,
        buttonIcons: true,
        weekNumbers: true,
        navLinks: true,
        editable: false,
        dayMaxEvents: true,
        selectable: true,
        select: function(arg) {

            var getStart = moment(arg.start).format('YYYY-MM-DD');
            var getEnd = moment(arg.end).format('YYYY-MM-DD');

            if (confirm('시작일: '+getStart+'\n종료일: '+getEnd+'\n 이날에 손없는 날로 저장하시겠습니까?')) {
                var json = {
                    start: getStart,
                    end: getEnd,
                    title: '손 없는 날'
                };
                try {
                    $.ajax({
                        url: APIIP+"oneshot/saveFree",
                        type: "POST",
                        data: JSON.stringify(json),
                        dataType: 'json',
                        contentType: "application/json; UTF-8;",
                        success: function(data){
                            calendar.refetchEvents();
                        },
                        error: function (request, status, error){
                            alert("저장에 실패하였습니다.["+error+"]");
                        }
                    });
                } catch (error) {
                    console.error(error);
                }
            }

        },
        events: {
            url: APIIP+'oneshot/loadFree'
        },
        eventColor: '#d0072e',
        eventClick: function(arg) {
            var getStart = moment(arg.start).format('YYYY-MM-DD');
            var getEnd = moment(arg.end).format('YYYY-MM-DD');
            var getId = arg.event.id;

            if (confirm('시작일: '+getStart+'\n종료일: '+getEnd+'\n 이날을 손없는 날에서 삭제하시겠습니까?')) {
                var json = {
                    idx: getId
                };

                try {
                    $.ajax({
                        url: APIIP+"oneshot/deleteFree",
                        type: "POST",
                        data: JSON.stringify(json),
                        dataType: 'json',
                        contentType: "application/json; UTF-8;",
                        success: function(data){
                            calendar.refetchEvents();
                        },
                        error: function (request, status, error){
                            alert("삭제에 실패하였습니다.["+error+"]");
                        }
                    });
                } catch (error) {
                    console.error(error);
                }

            }
        }
    });
    calendar.render();
    // free method end


    // datatable reload timer(1min)
    var timeout = 60000;
    var eazyReload,reservationReload,notiReload,qnaReload,reviewReload,freeReload;
    $('a[data-bs-toggle="tab"]').on("shown.bs.tab", function(e){

        var getHref = $(this).attr('href');

        if(getHref.indexOf('reservationTab') > -1){
            try {
                clearInterval(eazyReload);
                clearInterval(reservationReload);
                clearInterval(notiReload);
                clearInterval(qnaReload);
                clearInterval(reviewReload);
                clearInterval(freeReload);
            }catch (error){
                console.log(error);
            }
            try {
            //    eazyReload = setInterval(function() {eazyDt.ajax.reload();}, timeout);
                reservationReload = setInterval(function() {reservationDt.ajax.reload();}, timeout);
            }catch (error){
                console.log(error);
            }
        }else if(getHref.indexOf('notiTab') > -1){
            try {
              //  clearInterval(eazyReload);
                clearInterval(reservationReload);
                clearInterval(notiReload);
                clearInterval(qnaReload);
                clearInterval(reviewReload);
                clearInterval(freeReload);
            }catch (error){
                console.log(error);
            }
            try {
                notiReload = setInterval(function() {notisDt.ajax.reload();}, timeout);
            }catch (error){
                console.log(error);
            }
        }else if(getHref.indexOf('reviewTab') > -1){
            try {
               // clearInterval(eazyReload);
                clearInterval(reservationReload);
                clearInterval(notiReload);
                clearInterval(qnaReload);
                clearInterval(reviewReload);
                clearInterval(freeReload);
            }catch (error){
                console.log(error);
            }
            try {
                reviewReload = setInterval(function() {reviewDt.ajax.reload();}, timeout);
            }catch (error){
                console.log(error);
            }
        }else if(getHref.indexOf('freeTab') > -1){
            try {
             //   clearInterval(eazyReload);
                clearInterval(reservationReload);
                clearInterval(notiReload);
                clearInterval(qnaReload);
                clearInterval(reviewReload);
                clearInterval(freeReload);
            }catch (error){
                console.log(error);
            }
            try {
                setTimeout(function() {calendar.render();}, 500);

                freeReload = setInterval(function() {calendar.refetchEvents();}, timeout);
            }catch (error){
                console.log(error);
            }
        }
    });

    $(".fc-button").addClass('btn-sm');
});
function eazyStatusClick(idx,status){
    if(status==0){
        title = '간편상담을 대기로 변경 하시겠습니까?'
    }else if(status==1){
        title = '간편상담을 부재로 변경 하시겠습니까?'
    } else{
        title = '간편상담을 완료로 변경 하시겠습니까?'
    }
    if (confirm(title)) {
        var json = {
            idx: idx,
            status: status,
            consultant: getConsultant
        };
        try {
            $.ajax({
                url: APIIP+"oneshot/updateEazy",
                type: "POST",
                data: JSON.stringify(json),
                dataType: 'json',
                contentType: "application/json; UTF-8;",
                success: function(data){
                    eazyDt.ajax.reload();
                },
                error: function (request, status, error){
                    alert("저장에 실패하였습니다.["+error+"]");
                }
            });
        } catch (error) {
            console.error(error);
        }
    }
}

function reservationStatusClick(idx,status){
    if(status==0){
        title = '견적신청을 대기로 변경 하시겠습니까?'
    }else if(status==1){
        title = '견적신청을 부재로 변경 하시겠습니까?'
    } else{
        title = '견적신청을 완료로 변경 하시겠습니까?'
    }
    if (confirm(title)) {
        var json = {
            idx: idx,
            status: status,
            consultant: getConsultant
        };
        try {
            $.ajax({
                url: APIIP+"oneshot/updateReservation",
                type: "POST",
                data: JSON.stringify(json),
                dataType: 'json',
                contentType: "application/json; UTF-8;",
                success: function(data){
                    reservationDt.ajax.reload();
                },
                error: function (request, status, error){
                    alert("저장에 실패하였습니다.["+error+"]");
                }
            });
        } catch (error) {
            console.error(error);
        }
    }
}

function deleteNoits(idx,title){
    if (confirm('['+ title+ "]를 삭제 하시겠습니까?")) {

        try {
            $.ajax({
                url: APIIP+"oneshot/deleteNotis?idx="+idx,
                type: "POST",
                success: function(data){
                    notisDt.ajax.reload();
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

function deleteReview(idx){
    if (confirm('['+ idx+ "]를 삭제 하시겠습니까?")) {

        try {
            $.ajax({
                url: APIIP+"oneshot/deleteReview?idx="+idx,
                type: "POST",
                success: function(data){
                    reviewDt.ajax.reload();
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

function deleteQna(idx, title){
    if (confirm('['+ title+ "]를 삭제 하시겠습니까?")) {

        try {
            $.ajax({
                url: APIIP+"oneshot/deleteQna?idx="+idx,
                type: "POST",
                success: function(data){
                    qnaDt.ajax.reload();
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

function createDashboard(){


    var getDate = $("#datetimepicker2").data("DateTimePicker").date().toDate();
    var begin = moment(getDate).add(-9, 'hours').format('YYYY-MM-01 00:00:00');
    var end = moment(getDate).add(-9, 'hours').format("YYYY-MM-") + moment(getDate).daysInMonth()+' 23:59:59';

    var unixBegin = moment(begin).unix()*1000;
    var unixEnd = moment(end).unix()*1000;

    var createUrl = "http://49.50.174.83:3000/d/ObeQ3cunz/24oneshot?orgId=1&kiosk&refresh=1m&from="+unixBegin+"&to="+unixEnd;


    $("#countIframe").attr('src',createUrl);
}