

function draw() {

	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	var mouse = { 
		x: undefined,
		y: undefined
	}

	var colorArray = [
		'#000000',
		'#caff00',
		'#2d2e30',
		'#b7bed7',
		'#0c0040'
	];

	window.addEventListener('mousemove', function(event) {
		mouse.x = event.x;
		mouse.y = event.y;

	})

	window.addEventListener('resize', function(event) {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		init();
	})

	function Circle(x, y, r, dx, dy) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.dx = dx;
		this.dy = dy;
		this.color = colorArray[Math.floor(Math.random() * colorArray.length - 1)];

		this.draw = function () {
			ctx.beginPath();
			// ctx.strokeStyle = 'rgb(' + (Math.random() * 255) + ',' + (Math.random() * 255) + ',' + (Math.random() * 255) + ')';
			ctx.strokeStyle = 'white';
			ctx.fillStyle = this.color;
			ctx.arc(this.x, this.y, this.r, 0, Math.PI *2, 1);
			ctx.stroke();
			ctx.fill();
		}

		this.update = function () {
			if (this.x + this.r > innerWidth || this.x - this.r < 0) {
				this.dx = -this.dx;
			}
			if (this.y + this.r > innerHeight || this.y - this.r < 0) {
				this.dy = -this.dy;
			}

			this.x += this.dx;
			this.y += this.dy;

			//interactivity

			if (mouse.x - this.x < 100 && mouse.x - this.x > -100
				&& mouse.y - this.y < 100 && mouse.y - this.y > -100) {
				if (this.r < 70) {
					this.r += r;
				}
			} else if (this.r > 10) {
				this.r -= r * 1.5;
			} 

			this.draw();
		}
	}

	var circleArray = [];

	init();

	function init() {
		circleArray = [];

		for (var i = 0; i < 600; i++) {
			var r = Math.random() * 3 + 1;
			var x = Math.random() * (innerWidth - r * 2) + r;
			var y = Math.random() * (innerHeight - r * 2) + r;
			var dx = (Math.random() - 0.5) * 4;
			var dy = (Math.random() - 0.5) * 4;
			circleArray.push(new Circle(x, y, r, dx, dy));
		}
	}

	function animate() {
		requestAnimationFrame(animate);
		ctx.clearRect(0, 0, innerWidth, innerHeight);
		for (var i = 0; i < circleArray.length; i++) {
			circleArray[i].update();
		}
		
	}

	animate();

}


























// smile with hell eyes

// ctx.beginPath();
	// ctx.arc(200, 200, 100, 0, Math.PI*2);
	// ctx.stroke();

	// ctx.beginPath();
	// ctx.arc(200, 200, 70, 0, Math.PI, 0);
	// ctx.stroke();

	// var img = new Image();
	// img.src = "01.jpg";

	// ctx.save();
	// ctx.beginPath();
	// ctx.arc(160, 160, 20, 0, Math.PI*2);
	// ctx.arc(240, 160, 20, 0, Math.PI*2);
	// ctx.closePath();
	// ctx.clip();
	// img.addEventListener('load', function() {
	//     ctx.drawImage(this, 220, 140, 40, 40);
	//     ctx.drawImage(this, 140, 140, 40, 40);
	// }, true)