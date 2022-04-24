var viewMatrix;

var gMatrix;

function initGlobalMatrices(){
    viewMatrix = mat4.create();
    mat4.translate(viewMatrix, viewMatrix, [0, 0, -7.0]);
    gMatrix = mat4.create();
}
