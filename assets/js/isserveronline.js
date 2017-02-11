function signal(val) {
    var json = JSON.parse(val);
    // -1: Query failed 0: Not open 1: Low load 2: Heavy load 3: High load
    for (var i = 0; i < 3; i++) {
        switch (json[i]['status']) {
            case -1:
                document.getElementById("server" + i).innerHTML = "Query failed";
                $('#server' + i).addClass('major');
                break;
            case 0:
                document.getElementById("server" + i).innerHTML = "Server closed";
                $('#server' + i).addClass('major');
                break;
            case 1:
                document.getElementById("server" + i).innerHTML = "Low load";
                $('#server' + i).addClass('good');
                break;
            case 2:
                document.getElementById("server" + i).innerHTML = "Medium load";
                $('#server' + i).addClass('minor');
                break;
            case 3:
                document.getElementById("server" + i).innerHTML = "High load";
                $('#server' + i).addClass('high');
                break;
            default:
                document.getElementById("server" + i).innerHTML = "Unknown";
                $('#server' + i).addClass('major');

        }
    }
}

$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "http://manager.hw.99.com/signals.php",
        dataType: "jsonp",
        success: function (json) {
        }
    });

    // http://manager.hw.99.com/signals.php


    //     EU West Low Load
    // EU East Medium Load
});