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
    
    // Instantiate a new circle or green brick
    // depending on where on screen user
    // clicks/taps.
    if (canSpawn && mouseX < width/2){
    // Create a rectangle at the mouse's position.
    // The rectangle's length will be 40, and height the golden ratio smaller :)
    RedHen_2DPhysics.newObj("rectangle", mouseX, mouseY, 40, 40*0.618);

    // Set the fill colour of this newly created body.
    // To refer to the latest body created, find it at
    // the end of the wrapper's 'bods' array: bods[bods.length-1]

    bods[bods.length-1].fill = color(0,255,0);   
        
    }
        
    // If right side of screen, make a circle.    
    if (canSpawn && mouseX > width/2)
    RedHen_2DPhysics.newObj("circle", mouseX, mouseY, 28);
    
    // Because this input did not involve
    // dragging, the user may want to spawn
    // an object with a tap/click. So, set
    // canSpawn to true here.
    canSpawn = true;
}

function printInstructions(){
    textSize(20); stroke(0); fill(255);
    text("Tap left of screen for blocks, right for balls. Objects can also be moved around :)", 32,32);
   
    text("WSAD to move environment; space-bar for zero-gravity; g for usual gravity :O", 32, 92);
}