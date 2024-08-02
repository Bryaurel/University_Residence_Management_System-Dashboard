$(document).ready(function() {
    // Sample Chart.js implementation
    var ctx = document.getElementById('occupancyChart').getContext('2d');
    var occupancyChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Room 1', 'Room 2', 'Room 3', 'Room 4'],
            datasets: [{
                label: 'Occupancy Rate',
                data: [12, 19, 3, 5],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

$(document).ready(function() {
    // Room data simulation
    var rooms = [
        { id: 1, resident: 'John Doe', status: 'occupied', amenities: 'WiFi, AC' },
        { id: 2, resident: 'Jane Smith', status: 'vacant', amenities: 'WiFi' },
        { id: 3, resident: 'Michael Brown', status: 'under maintenance', amenities: 'AC' }
    ];

    // Display room information
    function displayRooms() {
        var roomList = $('#roomList');
        roomList.empty();
        rooms.forEach(function(room) {
            roomList.append(`<li>Room ${room.id} - Resident: ${room.resident}, Status: ${room.status}, Amenities: ${room.amenities}</li>`);
        });
    }

    displayRooms();
});

$(document).ready(function() {
    // Maintenance request data simulation
    var maintenanceRequests = [
        { id: 1, room: 1, status: 'pending', notes: '' },
        { id: 2, room: 2, status: 'completed', notes: 'Fixed AC' },
        { id: 3, room: 3, status: 'ongoing', notes: 'Fixing WiFi' }
    ];

    // Display maintenance requests
    function displayRequests() {
        var requestList = $('#requestList');
        requestList.empty();
        maintenanceRequests.forEach(function(request) {
            requestList.append(`<li>Request ${request.id} - Room: ${request.room}, Status: ${request.status}, Notes: ${request.notes}</li>`);
        });
    }

    displayRequests();
});

$(document).ready(function() {
    // Alerts simulation
    var alerts = [
        { id: 1, message: 'Room inspection due tomorrow' },
        { id: 2, message: 'Maintenance deadline for Room 3' },
        { id: 3, message: 'Urgent request from Room 2' }
    ];

    // Display alerts
    function displayAlerts() {
        var alertList = $('#alertList');
        alertList.empty();
        alerts.forEach(function(alert) {
            alertList.append(`<li>${alert.message}</li>`);
        });
    }

    displayAlerts();
});

$(document).ready(function() {
    // Theme switcher
    $('#themeSwitcher').on('change', function() {
        var theme = $(this).val();
        if (theme === 'dark') {
            $('body').css('background-color', '#343a40');
            $('body').css('color', '#f8f9fa');
        } else {
            $('body').css('background-color', '#f8f9fa');
            $('body').css('color', '#343a40');
        }
        localStorage.setItem('theme', theme);
    });

    // Load saved theme
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        $('#themeSwitcher').val(savedTheme).change();
    }
});


$(document).ready(function() {
    // Load mock data
    $.getJSON('data/mockData.json', function(data) {
        // Display rooms
        var rooms = data.rooms;
        var roomList = $('#roomList');
        roomList.empty();
        rooms.forEach(function(room) {
            roomList.append(`<li>Room ${room.id} - Resident: ${room.resident}, Status: ${room.status}, Amenities: ${room.amenities}</li>`);
        });

        // Display maintenance requests
        var maintenanceRequests = data.maintenanceRequests;
        var requestList = $('#requestList');
        requestList.empty();
        maintenanceRequests.forEach(function(request) {
            requestList.append(`<li>Request ${request.id} - Room: ${request.room}, Status: ${request.status}, Notes: ${request.notes}</li>`);
        });

        // Display alerts
        var alerts = data.alerts;
        var alertList = $('#alertList');
        alertList.empty();
        alerts.forEach(function(alert) {
            alertList.append(`<li>${alert.message}</li>`);
        });
    });
});
