class CanvasController {
    model = new CanvasModel();

    constructor() {
        this.draw(this.model.x, this.model.y);
     }

    update(data) {
        this.model.x += data.x;
        this.model.y += data.y;
        this.draw(data.x, data.y);
    }

    draw(x,y){
        this.model.ctx.clearRect(0, 0, this.model.canvas.width, this.model.canvas.height); // Clear
        this.model.ctx.fillRect(x, y, 25, 25);
    }
}