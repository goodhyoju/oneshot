
$(document).ready(function() {
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
        selectable: false,
        events: {
            url: APIIP+'oneshot/loadFree'
        },
        eventColor: '#d0072e'
    });
    calendar.render();

    $(".fc-button").addClass('btn-sm');
});