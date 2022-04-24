// Global vars - transformations
// Scaling
var decWidth = false;
var incWidth = false;
var decHeight = false;
var incHeight = false;
var decDepth = false;
var incDepth = false;

//Rotation
var rot_X_cw = false; // rotate around X-axis clockwise
var rot_X_ccw = false;

var rot_Y_cw = false; // rotate around Y-axis clockwise
var rot_Y_ccw = false;

var rot_Z_cw = false; // rotate around Z-axis clockwise
var rot_Z_ccw = false;

var angleDelta = 0.0; // an angle 'tracker' for realizing smooth rotations

//Translation
var movStartedR = false; //  false, initially
var movStartedL = false; //  true, when the respective movement (transformation)
var movStartedU = false; //        is initiated (see keydown handlers)
var movStartedD = false; //
var movStartedB = false;
var movStartedF = false;

var stepDelta = 0.0; // a step 'tracker' for realizing smooth translations

//-----------
// Camera
var cameraActive = false;

function handleKeyStrokes(event) {
    if (currentlyPressedKeys['c']) {
        if (cameraActive) cameraActive = false;
        else cameraActive = true;
    }

    // Translation
    if (currentlyPressedKeys['ArrowRight']) {
        if (cameraActive) {
            camRight = true;
        }
        else {
            console.log('right');
            movStartedR = true;
            stepDelta = 0.0;
        }
    }
    if (currentlyPressedKeys['ArrowLeft']) {
        if (cameraActive) {
            camLeft = true;
        }
        else {
            console.log('left');
            movStartedL = true;
            stepDelta = 0.0;
        }
    }
    if (currentlyPressedKeys['ArrowUp']) {
        if (cameraActive) {
            camFwd = true;
        }
        else {
            console.log('up');
            movStartedU = true;
            stepDelta = 0.0;
        }
    }
    if (currentlyPressedKeys['ArrowDown']) {
        if (cameraActive) {
            camBack = true;
        }
        else{
            console.log('down');
            movStartedD = true;
            stepDelta = 0.0;
        }
    }

    if(!cameraActive){
        // Selection
        if (currentlyPressedKeys['0']) {
            // 0 = Select all shapes
            console.log("0 pressed");
            allActive = true;
            activeShapeIdx = 10;
            mat4.identity(gMatrix);
        }

        if (currentlyPressedKeys['1'] || currentlyPressedKeys['2'] || currentlyPressedKeys['3'] ||
            currentlyPressedKeys['4'] || currentlyPressedKeys['5'] || currentlyPressedKeys['6'] ||
            currentlyPressedKeys['7'] || currentlyPressedKeys['8'] || currentlyPressedKeys['9']) {

            allActive = false;
            activeShapeIdx = parseInt(event.key) - 1;
            console.log(event.key + " number pressed \n");
        }

        // The rest of translation
        if (currentlyPressedKeys[',']) {
            console.log('forward');
            movStartedF = true;
            stepDelta = 0.0;

        }
        if (currentlyPressedKeys['.']) {
            console.log('backward');
            movStartedB = true;
            stepDelta = 0.0;
        }

        // Rotation
        if (currentlyPressedKeys['w']) {
            console.log('rot-x-cw');
            rot_X_cw = true;
            angleDelta = 0.0;
        }
        if (currentlyPressedKeys['s']) {
            console.log('rot-x-ccw');
            rot_X_ccw = true;
            angleDelta = 0.0;
        }
        if (currentlyPressedKeys['e']) {
            console.log('rot-y-cw');
            rot_Y_cw = true;
            angleDelta = 0.0;
        }
        if (currentlyPressedKeys['q']) {
            console.log('rot-Y-ccw');
            rot_Y_ccw = true;
            angleDelta = 0.0;
        }
        if (currentlyPressedKeys['d']) {
            console.log('rot-Z-cw');
            rot_Z_cw = true;
            angleDelta = 0.0;
        }
        if (currentlyPressedKeys['a']) {
            console.log('rot-Z-ccw');
            rot_Z_ccw = true;
            angleDelta = 0.0;
        }

        // Scaling
        if (currentlyPressedKeys['x']) {
            console.log('dec-width');
            decWidth = true;
        }
        if (currentlyPressedKeys['X']) {
            console.log('inc-width');
            incWidth = true;
        }
        if (currentlyPressedKeys['y']) {
            console.log('dec-height');
            decHeight = true;
        }
        if (currentlyPressedKeys['Y']) {
            console.log('inc-height');
            incHeight = true;
        }
        if (currentlyPressedKeys['z']) {
            console.log('dec-depth');
            decDepth = true;
        }
        if (currentlyPressedKeys['Z']) {
            console.log('inc-depth');
            incDepth = true;
        }
    }

}

function handleKeyDown(event) {
    currentlyPressedKeys[event.key] = true;
    handleKeyStrokes(event);
}

function handleKeyUp(event) {
    currentlyPressedKeys[event.key] = false;
}