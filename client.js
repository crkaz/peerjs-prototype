var peer = new Peer();
var canvasController = new CanvasController();
var hostConn;
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');



// Establish self as peer/node.
peer.on('open', function (id) {
    console.log('Client peer ID is: ' + id);
    document.getElementById("clientId").innerText = id;
});


// Connect to a 'host' peer.
connect = function () {
    var hostCode = document.getElementById("hostCode").value;
    console.log("Attempting to connect to host at " + hostCode);
    hostConn = peer.connect(hostCode);
}


// Send data to the 'host' (demo purpose).
move = function (dir) {
    data = { x: 0, y: 0 };

    switch (dir) {
        case "left": data.x -= 3; break;
        case "right": data.x += 3; break;
        case "down": data.y += 3; break;
        case "up": data.y -= 3; break;
    }

    console.log("Sending data to host:");
    console.log(data);
    hostConn.send(data);
}


// Listen for updates from 'host'.
peer.on('connection', function (conn) {
    console.log("Receiving update from host");

    // Listen for updates from 'host'.
    conn.on('data', function (data) {
        console.log("Host sent ", data);
        canvasController.update(data);
    });
    conn.on('close', function () {
        console.log("Connection to host closed");
    });
});

peer.on("error", function (err) {
    alert("Unexpected error: " + err.message);
});