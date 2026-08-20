"use strict";

function showLinearCalendar() {
    let now = new Date();
    let day = 1;
    
    let ul = document.createElement('ul');
    document.body.append(ul);

    while(true) {
        let monthDays = new Date(now.getFullYear(), now.getMonth(), day);

        if(!(now.getMonth() === monthDays.getMonth())) {
            return;
        }

        let li = document.createElement('li');
        li.textContent = monthDays.getDate();

        
        ul.append(li);
        day++;
    }

}
showLinearCalendar();