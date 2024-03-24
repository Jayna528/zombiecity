var splashscreenbg 
var gamestate = "wait"

function preload(){
    splashscreenbg = loadImage("splashscreen.gif");
};

function setup(){
    createCanvas(3000,1500);
    playbutton = createImg("playgrey.png");
    playbutton.position(3000/3 - 200, 1300);
    playbutton.size(210,210);
    infobutton = createImg("infon.png");
    infobutton.position(2000, 1275);
    infobutton.size(210,210);
    infobutton.hide()
    playbutton.hide()
};

function draw(){
    if(gamestate == "wait"){
        background(splashscreenbg);
        infobutton.show()
        playbutton.show()
        infobutton.mousePressed(()=>{playbutton.hide();
        infobutton.hide();
        gamestate = "about"})

        playbutton.mousePressed(()=>{playbutton.hide();
            infobutton.hide();
            gamestate = "play"})
    }

    if( gamestate =="about"){
        aboutGame();}

    if( gamestate =="play"){
        background("placeholder");
    }        
};

function aboutGame(){
    swal({
        title: "ABOUT GAME",
        text: "Collect all of the coins using the arrow keys. Each time you collect a coin a new zombie appears. Don't get infected!",
        textAlign: "center",
        imageUrl: "zombieimage.png",
        imageSize: "200x200",
        confirmButtonText: "Got It!",
        confirmButtonColor: "lightgreen",
        
    },

function(){
    gamestate = "wait"
    
}
    )
}