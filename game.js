const canvas = document.getElementById("game");
/**
 * @type {CanvasRenderingContext2D}
 */
const ctx = canvas.getContext("2d");
const cWidth = canvas.width;
const cHeight = canvas.height;

function drawScene(){
    drawGrid()
    requestAnimationFrame(drawScene)
}

function drawGrid(){
    ctx.beginPath();
    var i = 0;
    while(i<9){
        // draw dotted lines (x: cWidth/4, y: 0)
        const xIncrement = (cWidth/10)*(i+1);
        ctx.beginPath();
        ctx.moveTo(xIncrement, 0)
        ctx.lineTo(xIncrement, cHeight)
        ctx.strokeStyle = 'orange'
        ctx.stroke();
        i++;
    }
    i=0;
    while(i<19){
        const yIncrement = (cHeight/20)*(i+1)
        ctx.beginPath();
        ctx.moveTo(0, yIncrement);
        ctx.lineTo(cWidth, yIncrement);
        ctx.strokeStyle = 'lime';
        ctx.stroke();
        i++
    }
}

drawScene()