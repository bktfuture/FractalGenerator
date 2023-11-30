window.addEventListener('load', function () {
	const canvas = document.getElementById('canvas1');
	const ctx = canvas.getContext('2d');
	canvas.width = window.innerWidth * 0.8;
	canvas.height = window.innerHeight * 0.8;

	// canvas settings
	ctx.fillStyle = 'green';
	ctx.strokeStyle = 'pink';
	ctx.lineWidth = 10;
	ctx.lineCap = 'round';

	//effect settings

	let size = 190;
	let sides = 20;
	ctx.save();
	ctx.translate(canvas.width / 2, canvas.height / 2);
	ctx.rotate(0);
	ctx.scale(1.5, 1.5);

	for (let i = 0; i < sides; i++) {
		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.lineTo(size, 0);
		ctx.stroke();
		ctx.rotate((Math.PI * 2) / sides);
		ctx.scale(0.95, 0.95);
		ctx.translate(20, 10);
	}

	ctx.restore();
});
