// Detecting Button Press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);

        // switch (buttonInnerHTML) {
        //     case "w":
        //         var tom1 = new Audio('sounds/tom-1.mp3');
        //         tom1.play();
        //         break;
        //     case "a":
        //         var tom2 = new Audio('sounds/tom-2.mp3');
        //         tom2.play();
        //         break;
        //     case "s":
        //         var tom3 = new Audio('sounds/tom-3.mp3');
        //         tom3.play();
        //     case "d":
        //         var tom4 = new Audio('sounds/tom-4.mp3');
        //         tom4.play();
        //         break;
        //     case "j":
        //         var crash = new Audio('sounds/crash.mp3');
        //         crash.play();
        //         break;
        //     case "k":
        //         var kick = new Audio('sounds/kick-bass.mp3');
        //         kick.play();
        //         break;
        //     case "l":
        //         var snare = new Audio('sounds/snare.mp3');
        //         snare.play();
        //         break;
        //     default:
        //         break;
        // }



    });
}


/* function HouseKeepr(yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
}

var houseKeeper1 = new HouseKeepr(5, "Sarah", ["Toilette", "Kitchen", "Bedroom"]); */


//  Detecting Keyboard Press
document.addEventListener("keydown", function(event){
makeSound(event.key);

});

            //document.querySelectorAll(".drum")[i].addEventListener("keydown", function () {

            //console.log(e);
            function makeSound(key) {
            switch (key) {
                case "w":
                    var sound1 = new Audio('sounds/sound1.ogg');
                    sound1.play();
                    break;
                case "a":
                    var sound2 = new Audio('sounds/sound2.ogg');
                    sound2.play();
                    break;
                case "s":
                    var whawha = new Audio('sounds/whawha.ogg');
                    whawha.play();
                case "d":
                    var tom4 = new Audio('sounds/sound4.ogg');
                    tom4.play();
                    break;
                case "j":
                    var slide_whistle = new Audio('sounds/slide_whistle.ogg');
                    slide_whistle.play();
                    break;
                case "k":
                    var kick = new Audio('sounds/sound6.ogg');
                    kick.play();
                    break;
                case "l":
                    var twit = new Audio('sounds/twit.ogg');
                    twit.play();
                    break;
                default:
                    break;
            }

};
