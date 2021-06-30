const canvas = document.getElementById("canvas")
canvas.width = document.documentElement.clientWidth
canvas.height = document.documentElement.clientHeight -20
let ctx = canvas.getContext('2d')
let painting = false
let prePosition = []
let paintingColor = 'black'
let divColor = ['#ff0000', '#00ff00', '#000000', '#0000ff', '#ffffff']
ctx.fillStyle = "paintingColor"
ctx.strokeStyle = "paintingColor"
ctx.lineWidth = '4'
ctx.lineCap = "round"

const divs = document.querySelectorAll('div')
for(let i=0 ; i<divs.length ; i++) {
	divs[i].style.backgroundColor = divColor[i]
	divs[i].onclick = function(){
		paintingColor = divColor[i]
		ctx.fillStyle = divColor[i]
		ctx.strokeStyle = divColor[i]
		if(i<divs.length - 1){
			ctx.lineWidth = '4'
		}else{
			ctx.lineWidth = '40'
		}
	}
}
// divs[i].onclick = function(){
// 	paintingColor = divColior[i]
// 	console.log(divColor[i])
// 	ctx.fillStyle = divColor[i]
// 	ctx.strokeStyle = divColor[i]
// }

var isTouchDevice = 'ontouchstart' in document.documentElement

if(isTouchDevice){
	canvas.ontouchstart = e =>{
		let x = e.touches[0].clientX
		let y = e.touches[0].clientY
		prePosition = [x, y]
	}
	canvas.ontouchmove = e => {
		let x = e.touches[0].clientX
		let y = e.touches[0].clientY
		ctx.beginPath()
		drawLine(prePosition[0], prePosition[1], x, y)
		prePosition = [x, y]
	}
}

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




