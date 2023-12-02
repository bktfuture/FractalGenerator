window.addEventListener('load', function () {
	const canvas = document.getElementById('canvas1');
	const ctx = canvas.getContext('2d');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	// line settings
	ctx.lineWidth = 10;
	ctx.lineCap = 'round';
	ctx.shadowColor = 'rgba(0,0,0,0.7)';
	ctx.shadowOffsetX = 10;
	ctx.shadowOffsetY = 5;
	ctx.shadowBlur = 10;

	// fractal settings/variables
	let size = canvas.width < canvas.height ? canvas.width * 0.3 : canvas.height * 0.3;
	const maxLevel = 3;
	const branches = 2;

	let color = 'hsl(670, 100%,50%)';
	let scale = 0.4;
	let spread = 0.8;
	let sides = 6;

	// controls
	const randomizeBtn = document.getElementById('randomizeButton');

	function drawBranch(level) {
		if (level > maxLevel) return;
		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.lineTo(size, 0);
		ctx.stroke();

		for (let i = 0; i < branches; i++) {
			ctx.save();
			ctx.translate(size - (size / branches) * i, 0);
			ctx.scale(scale, scale);
			ctx.rotate(spread);

			ctx.save();
			ctx.rotate(spread);
			drawBranch(level + 1);
			ctx.restore();

			ctx.save();
			ctx.rotate(-spread);
			drawBranch(level + 1);
			ctx.restore();
			ctx.restore();
		}
	}

	function randomizeFractal() {
		sides = Math.random() * 7 + 2;
		scale = Math.random() * 0.2 + 0.6;
		spread = Math.random() * 2.9 + 0.1;
		color = 'hsl(' + Math.random() * 360 + ', 100%,50%)';
		drawFractal();
	}

	randomizeBtn.addEventListener('click', randomizeFractal);

	function drawFractal() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.strokeStyle = color;
		ctx.save();
		ctx.translate(canvas.width / 2, canvas.height / 2);

		for (let i = 0; i < sides; i++) {
			ctx.rotate((Math.PI * 2) / sides);
			drawBranch(0);
		}
		ctx.restore();
	}

	drawFractal();
});
