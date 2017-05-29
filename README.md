# RedHen_2DPhysics

An ES6 wrapper class for working with the <b>matter.js</b> library (by the amazing <b>Liam Brummit</b>).

## A quick overview...

Using the <i>p5.js library</i>, for example, you simply call <b>RedHen_2DPhysics.setupMatter();</b> in your <b>setup()</b> function to have everything ready to go with matter.js!

Then, in the <b>draw()</b> loop function, call <b>RedHen_2DPhysics.updateObjs();</b> so that the wrapper will update the array of physical bodies you create :)

You create new 2D Physics bodies by calling the <b>newObj()</b> method.

E.g.

Let's say we want a new circle when we press the mouse (note that the mousePressed() function belongs to the p5.js library):

<b>
function mousePressed(){

// Create a circle at the mouse's position.
// The circle's radius will be 28.

RedHen_2DPhysics.newObj("circle", mouseX, mouseY, 28);

}
</b>

If you wanted a green rectangle, instead, you would do the following:

<b>
function mousePressed(){

// Create a rectangle at the mouse's position.
// The rectangle's length will be 10, and height 5.

RedHen_2DPhysics.newObj("rectangle", mouseX, mouseY, 10, 5);

// Set the fill colour of this newly created body.
// To refer to the latest body created, find it at
// the end of the wrapper's 'bods' array: bods[bods.length-1]

bods[bods.length-1].fill = color(0,255,0);

}
</b>

The wrapper also allows you to create rectangles and 'ghost' bodies (bodies that are not rendered, for use with your own rendering code).
You can control the stroke and fill colours, too, through the wrapper, as well as using textures (.jpg or .png -- e.g. after having created a new body, <b>bods[bods.length-1].texture = exampleTextureVariable;</b> ).

By default, the wrapper will create bodies around the canvas area so that created bodies stay on screen. If bodies fly off screen, by default they will be removed from the array of bodies (to help performance); though, if you don't want this to happen, you can turn off the behaviour as needed (see .OSR in the wrapper).

You can manage gravity, change the size and rotation of bodies, and switch bodies to static or dynamic through the wrapper. These are all managed through static functions.

Currently, I'm working on a way to handle collision events. You can do this with the present version, and for example see my [No Man's Flappycraft](http://www.redhendev.com/NoMansFlappyCraft) to see this functionality in action :)
However, at present this would require you to fiddle with the code of the wrapper yourself -- simple enough, but not ideal.

If you'd like any additional features, or have found a bug/issue -- do get in contact. 

Hope the Wrapper is useful! Happy coding! :)


