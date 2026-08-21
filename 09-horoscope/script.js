"use strict";

let zodiacSigns = {
    aries: '21.03-19.04',
    taurus: '20.04-20.05',
    gemini: '21.05-20.06',
    cancer: '21.06-22.07',
    leo: '23.07-22.08',
    virgo: '23.08-22.09',
    libra: '23.09-22.10',
    scorpio: '23.10-21.11',
    sagittarius: '22.11-21.12',
    capricorn: '22.12-19.01',
    aquarius: '20.01-18.02',
    pisces: '19.02-20.03'
};

let horoscopes = {
    aries: {
        today: 'today horoscope',
        tomorrow: 'tomorrow horoscope',
        afterTomorrow: 'after tomorrow horoscope'
    },
    taurus: {
        today: 'today horoscope',
        tomorrow: 'tomorrow horoscope',
        afterTomorrow: 'after tomorrow horoscope'
    },
    gemini: {
        today: 'today horoscope',
        tomorrow: 'tomorrow horoscope',
        afterTomorrow: 'after tomorrow horoscope'
    },
    cancer: {
        today: 'today horoscope',
        tomorrow: 'tomorrow horoscope',
        afterTomorrow: 'after tomorrow horoscope'
    },
    leo: {
        today: 'today horoscope',
        tomorrow: 'tomorrow horoscope',
        afterTomorrow: 'after tomorrow horoscope'
    },
    virgo: {
        today: 'today horoscope',
        tomorrow: 'tomorrow horoscope',
        afterTomorrow: 'after tomorrow horoscope'
    },
    libra: {
        today: 'today horoscope',
        tomorrow: 'tomorrow horoscope',
        afterTomorrow: 'after tomorrow horoscope'
    },
    scorpio: {
        today: 'today horoscope',
        tomorrow: 'tomorrow horoscope',
        afterTomorrow: 'after tomorrow horoscope'
    },
    sagittarius: {
        today: 'today horoscope',
        tomorrow: 'tomorrow horoscope',
        afterTomorrow: 'after tomorrow horoscope'
    },
    capricorn: {
        today: 'today horoscope',
        tomorrow: 'tomorrow horoscope',
        afterTomorrow: 'after tomorrow horoscope'
    },
    aquarius: {
        today: 'today horoscope',
        tomorrow: 'tomorrow horoscope',
        afterTomorrow: 'after tomorrow horoscope'
    },
    pisces: {
        today: 'today horoscope',
        tomorrow: 'tomorrow horoscope',
        afterTomorrow: 'after tomorrow horoscope'
    }
};

function getTodayHoroscope(inputTarget) {
    let [day, month] = inputTarget.value.split('.');

    let userDate = new Date(2000, month - 1, day);

    for (let sign in zodiacSigns) {
        let signRange = zodiacSigns[sign].split('-')
            
        let [startDay, startMonth] = signRange[0].split('.')
        let [endDay, endMonth] = signRange[1].split('.')
        
        let startDate = new Date (2000, startMonth - 1, startDay);
        let endDate;

        if (startMonth === '12') {
            endDate = new Date(2001, endMonth - 1, endDay);
        } else {
            endDate = new Date(2000, endMonth - 1, endDay)
        }

        if (startDate <= userDate && userDate <= endDate) {
            currentSign = sign;

            if (radios[0].checked) {
                p.textContent = horoscopes[currentSign].today;
            }
        }
    }
}

let currentSign;

function showHoroscopeDay() {
    for (let radio of radios) {
            radio.addEventListener('change', function() {
                if(!currentSign) return;
    
                if (this.value === 'radio-today') {
                    p.textContent = horoscopes[currentSign].today;
                } else if (this.value === 'radio-tomorrow') {
                    p.textContent = horoscopes[currentSign].tomorrow;
                } else if (this.value === 'radio-the-dayafter-tomorrow') {
                    p.textContent = horoscopes[currentSign].afterTomorrow;
                }

            })

    };
}

let input = document.querySelector('#input')
let radios = document.querySelectorAll('input[type=radio]')
let p = document.createElement('p');
document.body.append(p)

showHoroscopeDay()

input.addEventListener('keypress', function(event) {
    if(event.key !== 'Enter') return;

    getTodayHoroscope(this);
});