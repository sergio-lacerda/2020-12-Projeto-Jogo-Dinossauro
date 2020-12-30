const dino = document.querySelector(".dino");
let isJumping = false;
let position = 0;
const background = document.querySelector(".background");

function handleKeyUp(event){
	if (event.keyCode === 38){
		if (!isJumping){
			jump();
		}
	}
}

function jump(){	
	isJumping = true;
	
	let upInterval = setInterval( () => {
		if (position >= 150){
			clearInterval(upInterval);
			
			let downInterval = setInterval( () => {
				if (position <= 0){
					clearInterval(downInterval);
					isJumping = false;
				} else {
					position -= 20;
					dino.style.bottom = position + 'px';
				}
			}, 20 );
		} else {
			position += 20;
			dino.style.bottom = position + 'px';
		}
	}, 20 );
}

function createCactus(){
	const cactus = document.createElement('div');
	let cactusPosition = 1000;
	let randomTime = Math.random() * 6000;
	
	cactus.classList.add('cactus');
	cactus.style.left = 1000 + 'px';
	background.appendChild(cactus);
	
	let leftInterval = setInterval( () => {		
		if (cactusPosition < -60){
			clearInterval(leftInterval);
			background.removeChild(cactus);
		} else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) { 
			//game over 
			clearInterval(leftInterval);
			document.body.innerHTML = 
				'<h1 class="game-over">Fim de jogo!!!</h1>' + 
				'<h3 class="creditos">Créditos</h3>'+
				'<ul class="links">'+
				'<li><a href="https://www.freepik.com/vectors/background" target="_Blank">Imagem do Dinossauro: by pikisuperstar - www.freepik.com</a></li>'+
				'<li><a href="https://opengameart.org/content/free-desert-platformer-tileset" target="_Blank">Imagem do deserto: by pzUH - opengameart.org</a></li>'+
				'</ul>'+
				'<div class="background-final"></div>'
				;
		} else {		
			cactusPosition -= 10;
			cactus.style.left = cactusPosition + 'px';
		}
	}, 20 );
	
	setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keyup', handleKeyUp);












