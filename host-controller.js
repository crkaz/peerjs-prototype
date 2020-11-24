class HostController {
    hostModel = new HostModel();
    modelText = document.getElementById("modelText");

    constructor() {
        this.updateUi();
    }

    // Update host data model, ui, and all connected peers.
    update(data) {
        this.hostModel.x += data.x;
        this.hostModel.y += data.y;
        this.updateUi();
        this.broadcast();
    }

    updateUi() {
        this.modelText.innerText = "x: " + this.hostModel.x + ", y: " + this.hostModel.y;
    }

    // Update all connected peers with new 'host' model i.e. coordinates.
    broadcast() {
        console.log("Updating clients");

        clients.forEach(key => {
            let clientConn = hostPeer.connect(key);
            //#TODO: Delay is necessary to allow connection to establish but isn't v scalable.
            setTimeout(() => { clientConn.send(this.hostModel.HostModel); }, 500);
        });
    }
}
