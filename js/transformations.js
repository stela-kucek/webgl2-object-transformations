/*
 * controller function for the transforms
 */
function animate() {
    mat4.identity(gMatrix); // reset global transformation matrix

    if (angleDelta < 30) animateRot(); // perform smooth rotations
    else {
        rot_X_ccw = false;
        rot_X_cw = false;

        rot_Y_cw = false;
        rot_Y_ccw = false;

        rot_Z_cw = false;
        rot_Z_ccw = false;

    }

    if (stepDelta < 0.5) animateMov(); // perform smooth movements
    else {
        movStartedL = false;
        movStartedR = false;
        movStartedU = false;
        movStartedD = false;
        movStartedF = false;
        movStartedB = false;
    }

    scale(); // perform scaling
}

/*
    perform rotations according to pressed key
 */
function animateRot() {

    if (rot_X_ccw) {

        if (allActive) {

            mat4.rotateX(gMatrix, gMatrix, degToRad(-3));

        }
        else {
            var object = objects[activeShapeIdx];
            mat4.rotateX(object.modelMatrix, object.modelMatrix, degToRad(-3));
        }
        angleDelta = angleDelta + 3;

    }
    else if (rot_X_cw) {

        if (allActive) {

            mat4.rotateX(gMatrix, gMatrix, degToRad(3));

        }
        else {
            var object = objects[activeShapeIdx];
            mat4.rotateX(object.modelMatrix, object.modelMatrix, degToRad(3));

        }
        angleDelta = angleDelta + 3;

    }

    else if (rot_Y_ccw) {

        if (allActive) {

            mat4.rotateY(gMatrix, gMatrix, degToRad(-3));

        }
        else {
            var object = objects[activeShapeIdx];
            mat4.rotateY(object.modelMatrix, object.modelMatrix, degToRad(-3));

        }
        angleDelta = angleDelta + 3;

    }

    else if (rot_Y_cw) {

        if (allActive) {

            mat4.rotateY(gMatrix, gMatrix, degToRad(3));

        }
        else {
            var object = objects[activeShapeIdx];
            mat4.rotateY(object.modelMatrix, object.modelMatrix, degToRad(3));
        }
        angleDelta = angleDelta + 3;

    }

    else if (rot_Z_ccw) {

        if (allActive) {

            mat4.rotateZ(gMatrix, gMatrix, degToRad(-3));

        }
        else {
            var object = objects[activeShapeIdx];
            mat4.rotateZ(object.modelMatrix, object.modelMatrix, degToRad(-3));
        }
        angleDelta = angleDelta + 3;

    }

    else if (rot_Z_cw) {

        if (allActive) {

            mat4.rotateZ(gMatrix, gMatrix, degToRad(3));

        }
        else {
            var object = objects[activeShapeIdx];
            mat4.rotateZ(object.modelMatrix, object.modelMatrix, degToRad(3));
        }
        angleDelta = angleDelta + 3;

    }
}

/*
    perform translations (movements) according to pressed key
 */
function animateMov() {
    var step = 0.1;

    if (movStartedR) {
        if (allActive) {

            mat4.translate(gMatrix, gMatrix, [step, 0, 0]);

        }
        else {
            var object = objects[activeShapeIdx];
            mat4.translate(object.modelMatrix, object.modelMatrix, [step, 0, 0]);
        }
        stepDelta = stepDelta + step;
    }
    else if (movStartedL) {
        if (allActive) {
            mat4.translate(gMatrix, gMatrix, [-step, 0, 0]);
        }
        else {
            var object = objects[activeShapeIdx];
            mat4.translate(object.modelMatrix, object.modelMatrix, [-step, 0, 0]);
        }
        stepDelta = stepDelta + step;
    }
    else if (movStartedU) {
        if (allActive) {
            mat4.translate(gMatrix, gMatrix, [0, step, 0]);
        }
        else {
            var object = objects[activeShapeIdx];
            mat4.translate(object.modelMatrix, object.modelMatrix, [0, step, 0]);
        }
        stepDelta = stepDelta + step;
    }
    else if (movStartedD) {
        if (allActive) {
            mat4.translate(gMatrix, gMatrix, [0, -step, 0]);
        }
        else {
            var object = objects[activeShapeIdx];
            mat4.translate(object.modelMatrix, object.modelMatrix, [0, -step, 0]);
        }
        stepDelta = stepDelta + step;
    }
    else if (movStartedF) {
        if (allActive) {
            mat4.translate(gMatrix, gMatrix, [0, 0, step]);
        }
        else {
            var object = objects[activeShapeIdx];
            mat4.translate(object.modelMatrix, object.modelMatrix, [0, 0, step]);
        }
        stepDelta = stepDelta + step;
    }
    else if (movStartedB) {
        if (allActive) {
            mat4.translate(gMatrix, gMatrix, [0, 0, -step]);
        }
        else {
            var object = objects[activeShapeIdx];
            mat4.translate(object.modelMatrix, object.modelMatrix, [0, 0, -step]);
        }
        stepDelta = stepDelta + step;
    }
}

/*
    perform scaling according to pressed key
 */
function scale() {
    dec = 0.9;
    inc = 1.1;

    if (decWidth) {
        if (allActive) {
            mat4.scale(gMatrix, gMatrix, [dec, 1, 1]);
        }
        else {
            var object = objects[activeShapeIdx];
            mat4.scale(object.modelMatrix, object.modelMatrix, [dec, 1, 1]);
        }
        decWidth = false;
    }
    else if (incWidth) {
        if (allActive) {
            mat4.scale(gMatrix, gMatrix, [inc, 1, 1]);
        }
        else {
            var object = objects[activeShapeIdx];
            mat4.scale(object.modelMatrix, object.modelMatrix, [inc, 1, 1]);
        }
        incWidth = false;
    }
    else if (decHeight) {
        if (allActive) {
            mat4.scale(gMatrix, gMatrix, [1, dec, 1]);
        }
        else {
            var object = objects[activeShapeIdx];
            mat4.scale(object.modelMatrix, object.modelMatrix, [1, dec, 1]);
        }
        decHeight = false;
    }
    else if (incHeight) {
        if (allActive) {
            mat4.scale(gMatrix, gMatrix, [1, inc, 1]);
        }
        else {
            var object = objects[activeShapeIdx];
            mat4.scale(object.modelMatrix, object.modelMatrix, [1, inc, 1]);
        }
        incHeight = false;
    }
    else if (decDepth) {
        if (allActive) {
            mat4.scale(gMatrix, gMatrix, [1, 1, dec]);
        }
        else {
            var object = objects[activeShapeIdx];
            mat4.scale(object.modelMatrix, object.modelMatrix, [1, 1, dec]);
        }
        decDepth = false;
    }
    else if (incDepth) {
        if (allActive) {
            mat4.scale(gMatrix, gMatrix, [1, 1, inc]);
        }
        else {
            var object = objects[activeShapeIdx];
            mat4.scale(object.modelMatrix, object.modelMatrix, [1, 1, inc]);
        }
        incDepth = false;
    }
}