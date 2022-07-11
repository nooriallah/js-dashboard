
// show menubar
$("#btnNavBarToggler").click(() => {
    $("#menu1").toggle(200);
});


var sidebarToggler = document.querySelector("#sidebarToggler");
var sidebar = document.querySelector("#sidebar");
var mainContent = document.querySelector(".main-content");

// show and close side barebarToggler");



let xside = 1;
sidebarToggler.addEventListener("click", function () {
    if (xside % 2 == 0) {
        sidebarToggler.classList.remove("loop");
        sidebar.classList.add("showside");
        mainContent.classList.remove("col-md-12");
        mainContent.classList.add("col-md-10");
        xside = 0;
    }
    else {
        sidebarToggler.classList.add("loop");
        sidebar.classList.remove("showside");
        mainContent.classList.add("col-md-12");
    }
    xside++;
});


// show sidebar setting collaps
var x3 = 2;
$("#btnSetting").click(() => {
    $(".clp1").toggle(200);

    if (x3 % 2 == 0) {
        $(".ar1").addClass("arrotate");
        x3 = 2;
    }
    else {
        $(".ar1").removeClass("arrotate");
    }
    x3++;

});
var x4 = 2;
$("#btnProduct").click(() => {
    $(".clp2").toggle(200);

    if (x4 % 2 == 0) {
        $(".ar2").addClass("arrotate");
        x4 = 2;
    }
    else {
        $(".ar2").removeClass("arrotate");
    }
    x4++;
});





//----------- drawing char--------------------

// char1 
var ch1 = document.querySelector("#chart1");
var char1 = new Chart(ch1, {
    type: "line",
    data: {
        labels: ["Sat", "Sun", "mon", "Tues", "Wed", "Thurs", "fri"],
        datasets: [{
            label: "Visits",
            data: [20, 50, 130, 100, 150, 200, 171],
            backgroundColor: "#ffd556",
            borderColor: "#fff",
            pointBackgroundColor: "#fff"
        }],
    },
    options: {
        scales: {
            yAxes: [{
                display: false
            }],
            xAxes: [{
                display: false
            }]
        },
        legend: {
            display: false
        }
    }

});

// char2
var ch2 = document.querySelector("#chart2");
var char2 = new Chart(ch2, {
    type: "bar",
    data: {
        labels: ["Sat", "Sun", "mon", "Tues", "Wed", "Thurs", "fri"],
        datasets: [{
            label: "Visits",
            data: [100, 150, 230, 300, 250, 210, 271],
            backgroundColor: "#ff6574",
            borderColor: "#fff",
            pointBackgroundColor: "#fff"
        }],
    },
    options: {
        scales: {
            yAxes: [{
                display: false
            }],
            xAxes: [{
                display: false
            }]
        },
        legend: {
            display: false
        }
    }

});

// char3
var ch3 = document.querySelector("#chart3");
var char3 = new Chart(ch3, {
    type: "line",
    data: {
        labels: ["Sat", "Sun", "mon", "Tues", "Wed", "Thurs", "fri"],
        datasets: [{
            label: "Visits",
            data: [100, 150, 230, 300, 250, 210, 271],
            backgroundColor: "#3cda60",
            borderColor: "#fff",
            pointBackgroundColor: "#fff"
        }],
    },
    options: {
        scales: {
            yAxes: [{
                display: false
            }],
            xAxes: [{
                display: false
            }]
        },
        legend: {
            display: false
        }
    }

});

// char4
var ch4 = document.querySelector("#chart4");
var char4 = new Chart(ch4, {
    type: "bar",
    data: {
        labels: ["Sat", "Sun", "mon", "Tues", "Wed", "Thurs", "fri"],
        datasets: [{
            label: "Visits",
            data: [20, 50, 130, 100, 150, 200, 171],
            backgroundColor: "#3dcee5",
            borderColor: "#fff",
            pointBackgroundColor: "#fff"
        }],
    },
    options: {
        layout: {
            padding: {
                left: 5, right: 5, top: 5, bottom: 5
            }
        },
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                display: false
            }],
            xAxes: [{
                display: false
            }]
        },

    }

});


// visit char
var vis = document.querySelector("#chVisit");
var visit = new Chart(vis, {
    type: "line",
    data: {
        labels: ["Sat", "Sun", "mon", "Tues", "Wed", "Thurs", "fri"],
        datasets: [{
            label: "Visits",
            data: [20, 50, 130, 100, 150, 200, 171],
            backgroundColor: "",
            borderColor: "#000",
            pointBackgroundColor: "#000"
        },
        {
            label: "Visits2",
            data: [50, 100, 50, 180, 135, 80, 120],
            backgroundColor: "#red",
            borderColor: "#aaa",
            pointBackgroundColor: "#333"
        }
        ],
    },
    options: {
        layout: {
            padding: {
                left: 5, right: 5, top: 5, bottom: 5
            }
        },
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                display: false
            }],
            xAxes: [{
                display: false
            }]
        },

    }

});






