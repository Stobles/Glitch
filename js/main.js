var glitch = document.querySelector('[data-title]');
 
function setProperty(duration) {
    glitch.style.setProperty('--text-glitch-time', duration +'s');
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
 
function changeAnimationTime() {
  var animationDuration = getRandomInt(2,6);
  setProperty(animationDuration);
}
 
setInterval(changeAnimationTime, 2000);

canvas = document.getElementById("myCanvas");
context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', ()=>{
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

setTimeout("drawFrame()", 20);

function drawFrame() {
	// Очистить холст
	context.clearRect(0, 0, canvas.width, canvas.height);

	context.beginPath();
	
	context.fillStyle = '#46b9a2';
    context.beginPath();
    context.moveTo(50, 30);
    context.lineTo(58, 55);
    context.lineTo(76, 61);
    context.lineTo(95, 35);
    context.fill();
	
	context.fillStyle = '#46b9a2';
    context.beginPath();
    context.moveTo(580, 0);
    context.lineTo(670, 130);
    context.lineTo(800, 180);
    context.lineTo(910, 0);
    context.fill();

    context.fillStyle = '#46b9a2';
    context.beginPath();
    context.moveTo(650, window.innerHeight);
    context.lineTo(800, window.innerHeight-180);
    context.lineTo(910, window.innerHeight);
    context.fill();

    context.fillStyle = '#46b9a2';
    context.beginPath();
    context.moveTo(1500, 260);
    context.lineTo(1720, 210);
    context.lineTo(1670, 390);
    context.lineTo(1590, 370);
    context.fill();

	setTimeout("drawFrame()", 20);
}

