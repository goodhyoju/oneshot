
document.addEventListener('DOMContentLoaded', function() {
    var initialLocaleCode = 'ko';
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
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
});
$(document).ready(function() {
    $(".fc-button").addClass('btn-sm');
});