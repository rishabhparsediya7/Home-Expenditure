window.onload = () => {
    var months = ["January", "February", "March", "April", "May", "June", "July", "august", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var monthDaysLeap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    var d = new Date();
    var year = d.getFullYear();
    var mi = d.getMonth();
    var start = 1;
    var dayToFind = months[mi] + " " + start + "," + year;
    var date = new Date(dayToFind);
    d = date.getDay();

    totalDayInMonth = monthDays[mi];
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        totalDayInMonth = monthDaysLeap[mi];
    }
    document.getElementById("month").innerHTML = months[mi] + ", " + year;
    var monthsd = document.getElementById("monthsd");
    for (var i = 0; i < totalDayInMonth; i++) {
        monthsd.innerHTML += '<a href=""> <div class = "card" ><p onclick=fetchDate() >' + months[mi] + '  ' + (start + i) + ', ' + year + '<br>' +
            days[d++ % 7] + '</p> </div></a>';
    }
}

function getMonth(m) {
    var mi;
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var monthDaysLeap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


    var d = new Date();
    var year = d.getFullYear();

    var start = 1;

    console.log("initial:" + m);
    if (m == undefined) {
        mi = d.getMonth();
    } else {
        for (var i = 0; i < months.length; i++) {
            if (m == months[i]) {
                mi = i;
            }
        }
    }
    var month = mi;
    console.log(m + ":m and " + "mi:" + mi);
    console.log(month);

    var totalDayInMonth = monthDays[mi];
    console.log(months[mi]);

    document.getElementById("month").innerHTML = months[mi] + ", " + d.getFullYear();

    console.log(year);
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        totalDayInMonth = monthDaysLeap[mi];
    }
    var dayToFind = months[mi] + " " + start + "," + year;
    var date = new Date(dayToFind);
    d = date.getDay();

    var monthsd = document.getElementById("monthsd");
    monthsd.innerHTML = "";
    var temp = "";
    for (var i = 0; i < totalDayInMonth; i++) {
        temp = '' + months[mi] + ' ' + (start + i) + ', ' + year;
        // temp = i //String(temp);
        monthsd.innerHTML += ' <div class = "card" onclick=\"(fetchDate(\'' + temp + '\'))\" ><p> ' + months[mi] + '  ' + (start + i) + ', ' + year + '<br> ' + days[d++ % 7] + '</p> </div>';
    }
}

function fetchDate(date) {
    console.log(date);
}