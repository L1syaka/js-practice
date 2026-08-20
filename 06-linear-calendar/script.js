"use strict";

function showLinearCalendar() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();
    let monthsArr = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    
    let calendarContainer = document.createElement('div');
    let calendarHeader = document.createElement('div');
    let arrowPrevious = document.createElement('a');
    let arrowNext = document.createElement('a');
    let title = document.createElement('span')
    let ul = document.createElement('ul');
    

    calendarContainer.classList.add('calendar-container')
    calendarHeader.classList.add('calendar-header')
    arrowPrevious.classList.add('arrow-prev');
    arrowNext.classList.add('arrow-next');
    arrowPrevious.href = '';
    arrowNext.href = '';

    arrowPrevious.textContent = '←';
    arrowNext.textContent = '→';
    title.textContent = `${monthsArr[month]} | ${year}`;
    

    document.body.append(calendarContainer);
    calendarHeader.append(arrowPrevious);
    calendarHeader.append(title);
    calendarHeader.append(arrowNext);
    calendarContainer.append(calendarHeader);
    calendarContainer.append(ul);
    
    function makeCalendar(month, year) {
        ul.textContent = '';

        for(let day = 1; ;day++) {
            let currentMonth = new Date(year, month, day);

            if(month !== currentMonth.getMonth()) {
                return;
            }

            let li = document.createElement('li');
            li.textContent = currentMonth.getDate();

            if(currentMonth.getDate() === now.getDate() &&
               currentMonth.getMonth() === now.getMonth() &&
               currentMonth.getFullYear() === now.getFullYear()) {
                li.classList.add('currentDay');
            }

            ul.append(li);
        }   
    }
    makeCalendar(month, year);

    
        calendarHeader.addEventListener('click', function(event) {
        let target = event.target.closest('a');
        
        if(!target) return;
        event.preventDefault();

        if (target.classList.contains('arrow-prev')) {
            month--;
        } else {
            month++;
        }

        if (month < 0) {
            month = 11;
            year--;
        }
        if (month > 11) {
            month = 0;
            year++;
        }
        makeCalendar(month, year)
        title.textContent = `${monthsArr[month]} | ${year}`;
    });
}
showLinearCalendar();