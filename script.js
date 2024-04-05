// dice for player one with random number


var randomNumber1 = (Math.floor(Math.random()*6))+1;
var randomDiceimage = "dice" + randomNumber1 +".png"
var randomDicesource = "images/" + randomDiceimage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDicesource);

// dice for player 2 with random number

var randomNumber2 = (Math.floor(Math.random()*6))+1;
var randomDiceimage2 = "dice" + randomNumber2 +".png"
var randomDicesource2 = "images/" + randomDiceimage2;
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomDicesource2);

// change the heading base on the player won

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "&#128079 Player 1 Won!"
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "&#128079 Player 2 Won!"
}
else{
    document.querySelector("h1").innerHTML = "Draw! &#128523"
}