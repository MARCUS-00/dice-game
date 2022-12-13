
// FIRST DICE PLAYER 1

var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomImage = "./images/dice" + randomNumber + ".png";
var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImage);

// SECOND DICE PLAYER 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "./images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

// RESULT MESSAGE

if (randomNumber > randomNumber2) {
    document.querySelector("h1").innerHTML= "🎉 Player1 Wins!!";
    
} 
else if(randomNumber < randomNumber2) {
    document.querySelector("h1").innerHTML= "Player2 Wins!! 🎉"
    
} 
else {
    document.querySelector("h1").innerHTML= "Draw!! 🙂"
}