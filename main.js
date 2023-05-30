canvas=document.getElementById('myCanvas');
ctx= canvas.getContext('2d')

images_array =["Alpkey.png","Arrkey.png","numkey.png","otherkey","spkey.png"];


window.addEventListener("keydown",my_keydown)

function my_keydown (e){
    keyPressed =e.keyCode;
    console.log(keyPressed);

    if((keyPressed >=97 && keyPressed <=122 ) ||(keyPressed >=65 && keyPressed<=90) ){
        alphabetkey();
        console.log("You pressed Alphabet Key");
        console.log("alphabet key");
    }
    if(keyPressed >=48 && keyPressed <57){
        numberkey();
        console.log("You pressed Number Key");
        console.log("number key");
    }
    if(keyPressed >=37 && keyPressed <40){
        arrowkey();
        console.log("You pressed Arrow Key");
        console.log("arrow key");
    }
    if((keyPressed == 17) ||  (keyPressed == 18) || (keyPressed == 27)){
        specialkey();
        console.log("You pressed Special Key");
        console.log("special key");
    }
    if((keyPressed >=32 && keyPressed <=47 ) ||(keyPressed >=58 && keyPressed<=64)||(keyPressed >=91 && keyPressed <=96 ) ||(keyPressed >=123 && keyPressed<=126)){
        symbolkey();
        console.log("You pressed symbol Key");
        console.log("symbol key");
    }
}
function alphabetkey(){
    img_image="Alpkey.png";
    add();
}
function numberkey(){
    img_image="numkey.png";
    add();
}
function arrowkey(){
    img_image="Arrkey.png";
    add();
}
function specialkey(){
    img_image="spkey.png";
    add();
}
function symbolkey(){
    img_image="otherkey.png";
    add();
}
function add() {
    background_imgTag=new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = img_image;
    
}
function uploadBackground()  {
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height)
}
    
    