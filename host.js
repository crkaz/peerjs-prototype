var hostPeer = new Peer();
var hostController = new HostController();
var codeTextEle = document.getElementById("peerCode");
var clients = [];



// Establish self as peer/node.
hostPeer.on('open', function (id) {
    console.log('Host peer ID is: ' + id);
    codeTextEle.innerText = id;
});


// Listen for connections (people who have this peer/node's ID).
hostPeer.on('connection', function (conn) {
    var clientId = conn.peer;
    console.log("New peer connected with id:" + clientId);

    //  Recieve data from this peer (callback) and update the 'host' model.
    conn.on('data', function (data) {
        console.log(clientId + " sent ", data);
        hostController.update(data);
    });

    addClient(clientId, conn);
});


// Update list dictionary of connected peers and the connections to them.
addClient = function (clientId, conn) {
    if (!clients.includes(clientId)) {
        // Update dictionary with peer id and connection.
        clients.push(clientId);

        //#region Maintain html list of connected peers.
        var node = document.createElement("LI");                 // Create a <li> node
        var textnode = document.createTextNode(clientId);         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        document.getElementById("clientList").appendChild(node);     // Append <li> to <ul> with id="myList"
        //#endregion
    }
}

hostPeer.on("error", function (err) { 
    alert("Unexpected error: " + err.message);
});