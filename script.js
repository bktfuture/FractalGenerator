window.addEventListener('load', function () {
	const canvas = document.getElementById('canvas1');
	const ctx = canvas.getContext('2d');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	// canvas settings
	ctx.fillStyle = 'yellow';
	ctx.strokeStyle = 'pink';
	ctx.lineWidth = 20;
	ctx.lineCap = 'round';

	ctx.fillRect(50, 50, 100, 100);
	console.log(ctx);

	ctx.beginPath();
	ctx.moveTo(canvas.width / 2, canvas.height / 2);
	ctx.lineTo(600, 600);
	ctx.stroke();
});
