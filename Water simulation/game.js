var c=document.getElementById('canvas'),

	w = window.innerWidth,
	h = window.innerHeight,
	ctx = c.getContext('2d'),
	mouse,
	drops=[],
	shower= false,
	water=[],
	water_level = 50;
	res=50,
	k = 0.0025,
  tension = 0.005
  dampen = 0.02;

	dropplet = function(x,y){
	  this.x = x;
	  this.y = y;
	  this.vel = Math.random() * 10 - 5;

	  this.col = Math.floor(res/w*this.x);
	  this.update=function(){
		this.vel = this.vel *0.7;
		this.y = this.y + Math.random()  * 1.5 + 1;
		this.x = this.x + this.vel;
		this.col = Math.floor(res/w*this.x);

		if(this.x <= 0 || this.x >= w || this.y <= h || this.y <= water[this.col].height){
		  ctx.beginPath();
		  ctx.arc(this.x, this.y, 1.5, 0, 2 * Math.PI, false);
		  ctx.fillStyle = '#28d9e2';
		  ctx.fill();
		} else {
		  this.destroy();
		  if (this.col >= 0 && this.col < water.length) {
			  water_level += 0.025;
				water[this.col].speed = 1;
		  }
		}
	  }
	  this.destroy=function(){
		drops.splice( drops.indexOf( this ), 1 );
	  }
	}

	spring = function(){
	  this.height = h-water_level;
	  this.speed = 0;
	  this.update = function() {
		var x = (h-water_level) - this.height;
		this.speed += tension * x - this.speed * dampen;
		this.height += this.speed;
		if(this.height > h) {this.height = h ;}
	  }
	}

	animate = function() {
	  ctx.clearRect(0, 0, w, h);
	  for (var i=0; i < drops.length; i++) {
		drops[i].update();
	  }

	  var i;
	  for (i = 0; i < water.length; i++) {
		water[i].update();
	  }

	  var ldelta = new Array(water.length);
	  var rdelta = new Array(water.length);

	  for (var j = 0; j < 8; j++) {
		for (i = 0; i < water.length; i++) {
		  if (i > 0) {
			ldelta[i] = k * (water[i].height - water[i - 1].height);
			water[i - 1].speed += ldelta[i];
		  }
		  if (i < water.length - 1) {
			rdelta[i] = k * (water[i].height - water[i + 1].height);
			water[i + 1].speed += rdelta[i];
		  }
		}

		for (i = 0; i < water[i].length; i++) {
		  if (i > 0) {
			water[i - 1].height += ldelta[i];
		  }
		  if (i < water.length - 1) {
			water[i + 1].height += rdelta[i];
		  }
		}
	  }

	  var lingrad = ctx.createLinearGradient(0,0,0,h);
	  lingrad.addColorStop(0, '#28d9e2');
	  lingrad.addColorStop(1, '#116691')

	  ctx.fillStyle = lingrad;

	  ctx.beginPath();
	  ctx.moveTo(0, water[0].height);

	  for (var i = 0; i < water.length; i++) {
		ctx.lineTo((i+1)*(w/res), water[i].height);
	  }
	  ctx.lineTo(w, h);
	  ctx.lineTo(0, h);
	  ctx.lineTo(0, water[water.length-1].height);
	  ctx.fill();

	}

	c.width=w;
	c.height=h;

	c.addEventListener('mousemove', function(e) {
	  mouse = {
		'x': e.clientX - c.getBoundingClientRect().left,
		'y': e.clientY - c.getBoundingClientRect().top
	  }
	}, false);

	c.addEventListener('mousedown', function() {
	  shower = setInterval(function(){
		drops.push(new dropplet(mouse.x,mouse.y));
	  },1);
	}, false);

	document.addEventListener('mouseup', function() {
	  clearInterval(shower);
	}, false);

	for (var i=0;i<res;i++) {
	  water[i] = new spring();
	}

	setInterval(function(){
	  animate();
	},60/1000);