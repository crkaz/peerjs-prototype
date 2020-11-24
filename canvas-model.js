class CanvasModel {
    canvas;
    ctx;
    x = 0;
    y = 0;

    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.ctx.moveTo(this.x, this.y);
    }
}