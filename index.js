function speak(letter){
    var audio = document.getElementById("audio");
    var image = document.getElementById("img-box");
    var soundBox = document.getElementById("sound-box");
    if(letter == 'a') {
        audio.src = "apple.mp3";
        document.getElementById("imgClickAndChange").src = "app.jpg";
        soundBox.style.color= "black";
    }
    else if(letter == 'b') {
        audio.src = "ball.mp3";
        document.getElementById("imgClickAndChange").src = "ball.jpg";
    }
    else if(letter == 'c') {
        audio.src = "cat.mp3";
        document.getElementById("imgClickAndChange").src = "cat.jpeg";
    }
    else if(letter == 'd') {
        audio.src = "dog.mp3";
        document.getElementById("imgClickAndChange").src = "dog.jpeg";
    }
        else if(letter == 'e') {
            audio.src = "elephant.mp3";
            document.getElementById("imgClickAndChange").src = "elephant.jpg";
        }
        else if(letter == 'f') {
            audio.src = "fat.mp3";
            document.getElementById("imgClickAndChange").src = "fat.jpg";
        }
         else if(letter == 'g') {
            document.getElementById("imgClickAndChange").src = "gun.jpg";
            audio.src = "gun.mp3";
         }
    else if(letter == 'h') {
        document.getElementById("imgClickAndChange").src = "hen.jpeg";
        audio.src = "hen.mp3";}
    else if(letter == 'i') {
        document.getElementById("imgClickAndChange").src = "inkpot.jpeg";
        audio.src = "inkpot.mp3";}
    else if(letter == 'j') {
        document.getElementById("imgClickAndChange").src = "jocker.jpeg";
        audio.src = "jocker.mp3";}
    else if(letter == 'k') {
        document.getElementById("imgClickAndChange").src = "king.jpg";
        audio.src = "king.mp3";}
    else if(letter == 'l') {
        document.getElementById("imgClickAndChange").src = "lion.jpeg";
        audio.src = "lion.mp3";}
    else if(letter == 'm') {
        document.getElementById("imgClickAndChange").src = "man.jpeg";
        audio.src = "man.mp3";}
    else if(letter == 'n') {
        document.getElementById("imgClickAndChange").src = "neck.jpeg";
        audio.src = "neck.mp3";}
    else if(letter == 'o') {
        document.getElementById("imgClickAndChange").src = "owl.jpeg";
        audio.src = "owl.mp3";}
    else if(letter == 'p') {
        document.getElementById("imgClickAndChange").src = "parrot.jpeg";
        audio.src = "parrot.mp3";}
    else if(letter == 'q') {
        document.getElementById("imgClickAndChange").src = "queen.jpeg";
        audio.src = "queen.mp3";}
    else if(letter == 'r') {
        document.getElementById("imgClickAndChange").src = "rat.jpeg";
        audio.src = "rat.mp3";}
    else if(letter == 's') {
        document.getElementById("imgClickAndChange").src = "sparrow.jpeg";
        audio.src = "sparrow.mp3";}
    else if(letter == 't') {
        document.getElementById("imgClickAndChange").src = "today.jpeg";
        audio.src = "today.mp3";}
    else if(letter == 'u') {
        document.getElementById("imgClickAndChange").src = "umbrella.jpeg";
        audio.src = "umbrella.mp3";}
    else if(letter == 'v') {
        document.getElementById("imgClickAndChange").src = "van.jpeg";
        audio.src = "van.mp3";}
    else if(letter == 'w') {
        document.getElementById("imgClickAndChange").src = "wonderfull.jpeg";
        audio.src = "wonderfull.mp3";}
    else if(letter == 'x') {
        document.getElementById("imgClickAndChange").src = "xray.jpeg";
        audio.src = "xray.mp3";}
    else if(letter == 'y') {
        document.getElementById("imgClickAndChange").src = "yak.jpeg";
        audio.src = ".mp3";}
    else if(letter == 'z') {
        document.getElementById("imgClickAndChange").src = "zero.jpeg";   
        audio.src = "kuchuna.mp3";
    }
        audio.play();
}