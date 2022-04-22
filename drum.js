var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);


    });
}
document.addEventListner("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);

});

function makeSound(key){
    switch(key){
        case "S":
        var tom1 = new Audio("sound/Fight-Kicks-A1.mp3");
        tom1.play();
        break;

    case "A":
        var tom2 = new Audio("sound/Crunchy-Punch-A.mp3");
        tom2.play();
        break;

    case "T":
        var tom3 = new Audio("sound/electric-transition.mp3");
        tom3.play();
        break;

    case "H":
        var tom4 = new Audio("sound/Punches-A2.mp3");
        tom4.play();
        break;

    case "Y":
        var tom5 = new Audio("sound/Swing-and-Kick-A3.mp3");
        tom5.play();
        break;

    case "I":
        var tom6 = new Audio("sound/Swing-and-Punch-A4.mp3");
        tom6.play();
        break;





    
    default:
        break;
    }



}
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");
    
}
    

           