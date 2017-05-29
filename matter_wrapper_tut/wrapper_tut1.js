// Global canvas element necessary!
// This is to allow mouse/touch interaction to work.
var canvas;

// Not moving obj, so can spawn obj.
var canSpawn = true;

function setup(){
    // Remember to assign value of canvas like this :)
    canvas = createCanvas(windowWidth,windowHeight);
    background(72);
    
    RedHen_2DPhysics.setupMatter();
}

// ***** UDPATE LOOP *****
function draw(){ 
    background(72);
    printInstructions();
    
    RedHen_2DPhysics. checkInputgGlobalMovement();
    RedHen_2DPhysics.updateObjs();
    
}

// ***** INPUT and OTHER FUNCTIONS *****

function mouseDragged(){
    // This simple mechanism allows for
    // user to tap/click to instantiate
    // new bodies, while being able to 
    // drag bodies around without 
    // unintentially instantiating a new
    // body when releasing mouse button/
    // finger from screen.
    // See touchEnded() function too.
    canSpawn = false;
}
function touchEnded(){
    
    // Instantiate a new circle or box
    // depending on where on screen user
    // clicks/taps.
    if (canSpawn && mouseX < width/2)
    RedHen_2DPhysics.newObj("box", mouseX, mouseY, 28);
    if (canSpawn && mouseX > width/2)
    RedHen_2DPhysics.newObj("circle", mouseX, mouseY, 28);
    
    canSpawn = true;
}

function printInstructions(){
    textSize(20); stroke(0); fill(255);
    text("Tap left of screen for blocks, right for balls. Objects can also be moved around :)", 32,32);
   
    text("WSAD to move environment; space-bar for zero-gravity; g for usual gravity :O", 32, 92);
}