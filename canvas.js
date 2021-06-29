const canvas = document.getElementById("canvas")
canvas.onclick = e => {
	console.log(e.x)
	console.log(e.y)
	let div = document.createElement('div')
	div.style.position = 'absolute'
	div.style.left = e.x + 'px'
	div.style.top = e.y + 'px'
	div.style.width = '6px'
	div.style.height = '6px'
	div.style.marginLeft = '-3px'
	div.style.marginTop = '-3px'
	div.style.borderRadius = '50%'
	div.style.backgroundColor = 'black'
	
	canvas.appendChild(div)
}