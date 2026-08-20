"use strict";

function showLinearCalendar() {
    let now = new Date();
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
    let calendarCurrentDate = document.createElement('div')
    let ul = document.createElement('ul');
    
    calendarContainer.classList.add('calendar-container')
    calendarCurrentDate.textContent = `${monthsArr[now.getMonth()]} | ${now.getFullYear()}`;
    
    document.body.append(calendarContainer);
    calendarContainer.append(calendarCurrentDate);
    calendarContainer.append(ul);
    
    for(let day = 1; ;day++) {
        let currentMonth = new Date(now.getFullYear(), now.getMonth(), day);
        
        if(!(now.getMonth() === currentMonth.getMonth())) {
            return;
        }

        let li = document.createElement('li');
        li.textContent = currentMonth.getDate();

        if(currentMonth.getDate() === now.getDate()) {
            li.classList.add('currentDay');
        }

        ul.append(li);
    }

}
showLinearCalendar();