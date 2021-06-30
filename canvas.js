const canvas = document.getElementById("canvas")
canvas.width = document.documentElement.clientWidth
canvas.height = document.documentElement.clientHeight
let ctx = canvas.getContext('2d')
let painting = false
let prePosition = []
let paintingColor = 'black'

ctx.fillStyle = "paintingColor"
ctx.strokeStyle = "paintingColor"
ctx.lineWidth = '10'
ctx.lineCap = "round"

const divs = document.querySelectorAll('div')
for()

canvas.onmousedown = (e) => {
		painting = true
		prePosition = [e.clientX, e.clientY]
}

canvas.onmousemove = (e) => {
	if (painting === true) {
			ctx.beginPath()
			drawLine(prePosition[0], prePosition[1], e.clientX, e.clientY)
			prePosition = [e.clientX, e.clientY]
	}
}
canvas.onmouseup = () => {
	painting = false
}
function drawLine(x1, y1, x2, y2) {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.stroke();
}




