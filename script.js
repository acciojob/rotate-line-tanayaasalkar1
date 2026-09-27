//your JS code here. If required.
let line = document.getElementById('line');
let rotateAngle = 0;

window.addEventListener('DOMContentLoaded', ()=>{

	const interval = setInterval(()=>{
		 rotateAngle += 2;

        line.style.transform = `rotate(${rotateAngle}deg)`;
	}, 20)
})