function js_alert() {
    var array_digit = [];
    var i = 1;
    while (i < 7) {
        var tmp = document.forms["form_digit"].elements["digit_" + i].value
        array_digit[i - 1] = tmp;
        i++;
    }
    array_crossing(array_digit);
    clock(array_digit);
}

function array_crossing(array) {
    var i = 0;
    while (i < 7) {
        if (array[i] > array[i + 1]) {
            var tmp = 0;
            tmp = array[i];
            array[i] = array[i + 1]
            array[i + 1] = tmp;
            i = 0;
        } else {
            i++;

        }
    }
    return array;
}

function clock(array_clock) {
    alert(array_clock);
    var hour = [];
    var i = 1;
    if (i == 1) {
        if (array_clock[0] < 3) {
            hour.push(array_clock[0]);
            alert(hour[0] + "0:00:00");
            i++;
        } else {
            alert("N/A");
        }

    }
    if (i == 2) {
        if (hour[0] < 2) {
            hour.push(array_clock[1]);
            alert(hour[0] + hour[1] + ":00:00");
            i++
        } else {
            if (array_clock[1] < 4) {
                hour.push(array_clock[1]);
                alert(hour[0] + hour[1] + ":00:00");
                i++;
            } else {
                alert("N/A");
            }
        }
        if (i == 3) {
            if (array_clock[2] < 7) {
                hour.push(array_clock[2]);
                alert(hour[0] + hour[1] + ":" + hour[2] + "0:00");
                i++;
            } else {
                alert("N/A");
            }
        }
        if (i == 4) {
            hour.push(array_clock[3]);
            alert(hour[0] + hour[1] + ":" + hour[2] + hour[3] + ":00");
            i++;
        }
        if (i == 5) {
            if (array_clock[4] < 7) {
                hour.push(array_clock[4]);
                alert(hour[0] + hour[1] + ":" + hour[2] + hour[3] + ":" + hour[4] + "0");
                i++;
            } else {
                alert("N/A");
            }
        }
        if (i == 6) {
            hour.push(array_clock[5]);
            alert(hour[0] + hour[1] + ":" + hour[2] + hour[3] + ":" + hour[4] + hour[5]);
            i++;
        }
    }
}