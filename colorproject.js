var game = {};
game.init = function(){
	setUpButtonListener();
	setUpSquares();
	reset();
}

var numOfSquares = 6;
var colors= [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var colorChange = document.querySelector("#colorChange");
game.init();

 
init();

function init(){
	//mode button event listener
	setUpButtonListener();
	setUpSquares();
	reset();
}

function setUpButtonListener(){
	for(var i=0; i<modeButtons.length; i++){
	
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected") ; 
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
				(this.textContent === "Easy") ? numOfSquares = 3 : numOfSquares=6 ;
			
			reset();
			})
	}
}

function setUpSquares(){
	for(var i=0;i<squares.length;i++){

		squares[i].addEventListener("click",function(){
		    var clickedColor = this.style.backgroundColor;
			if(clickedColor===pickedColor){
				messageDisplay.textContent = "Correct";
				h1.style.backgroundColor = pickedColor;
				colorChange.textContent = "Play Again ?";
				for(var j=0;j<squares.length;j++){
					squares[j].style.backgroundColor = pickedColor;
					}
				}
				else{
					this.style.backgroundColor = "#202020";
					messageDisplay.textContent = "try Again";
				}			
		});
	}
}

colorChange.addEventListener("click",function(){
		reset();
});

// RANDOM COLOR SELECTION
function pickColor(){
	var random = Math.floor(Math.random() *colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr=[];
	//add num random colors to array
	for(var i =0;i<num;i++){
		//get random color and push into array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	// pick a red from 0-255
	var r =Math.floor(Math.random() *256 );
	// pick a green from 0-255 
	var g =Math.floor(Math.random() *256 );
	//pick a blue from 0-255;
	var b =Math.floor(Math.random() *256 );

	return "rgb(" + r + ", " + g + ", " + b + ")"
}



function reset(){
	 colors=generateRandomColors(numOfSquares);
	 colorChange.textContent = "New Colors";
	 pickedColor = pickColor();
	 colorDisplay.textContent = pickedColor ;
	 h1.style.backgroundColor = "steelblue";
	 messageDisplay.textContent = "";

	  for(var i=0;i<squares.length;i++){
	  if(colors[i]){
	  	squares[i].style.display = "block" ;
	  	squares[i].style.backgroundColor = colors[i];
	  }
	  else
	  	squares[i].style.display = 'none'; 
	}
}


