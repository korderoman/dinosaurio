var dino;
var pepa;
var piwicho;
var gameOver=false;
var valor;
var puntaje
var mifuente;
function preload(){
    mifuente=loadFont("./images/GeBody.ttf");
}
function setup(){
    createCanvas(600, 400);
    dino= new Dinosaurios();
    pepa=new Cactus();
    piwicho= new Aves();
    pepa.crear();
    dino.crear();
    piwicho.crear();
    youLose=loadImage("./images/gameOver.png");
    valor=1
    puntaje=0;
}

function draw(){
   
   if(valor==2){dino.crear();valor++;}
    dino.movimiento(gameOver);
    dino.fondo(gameOver);
    
    pepa.movimiento(dino);
    dino.muerte(pepa,piwicho);
    piwicho.movimiento(dino);
    pepa.muerte(dino);
    piwicho.muerte(dino);
    if(gameOver==false && dino.partida==true){
        puntaje++;
    }else{puntaje=puntaje;}
    //todo lo relacionado al texto de puntaje
    textFont(mifuente);
    textSize(26);
    textStyle(BOLD);
    fill(90);
    text(puntaje, dino.lagartija.position.x+350, 50, 200, 40);
    text("Puntos",dino.lagartija.position.x+250, 50, 200, 40)
    //
    drawSprites();
    //Puedes validar la posición del dino
    //console.log(dino.lagartija.position.y);
    
}

function juegoTerminado(){
   
    dino.partida=false;
    dino.lagartija.changeAnimation("muerto");
    dino.lagartija.animation.rewind();
    gameOver=true;
    updateSprites(false);
    valor=1;
}

function juegoNuevo(){
    pepa.tunaArray.removeSprites();
    piwicho.palomaArray.removeSprites();
    dino.lagartija.remove();
    gameOver=false;
    valor=2;
    updateSprites(true);
    dino.lagartija.position.x=30;
    dino.lagartija.position.y=360;
    dino.lagartija.changeAnimation("quieto");
    dino.lagartija.animation.rewind();
    dino.reset.hide();
    puntaje=0;
    
}
