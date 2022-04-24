/*
 * camera controls
 */

// condition variables
var camFwd = false;
var camBack = false;
var camLeft = false;
var camRight = false;

/*
 * camera movement function partly derived from from Udemy WebGL tutorial
 * https://www.udemy.com/the-extensive-webgl-series-part1-low-level-basics/
 */
function moveCamera(camera) {
    var step = 0.1;
    camera.direction[0] = Math.cos(camera.pitch) * Math.cos(camera.yaw);
    camera.direction[1] = Math.sin(camera.pitch);
    camera.direction[2] = Math.cos(camera.pitch) * Math.sin(camera.yaw);

    camera.right = vec3.fromValues(-1 * Math.sin(camera.yaw), 0, Math.cos(camera.yaw));

    var movementDirection = vec3.create();
    if (camFwd) {
        vec3.scale(movementDirection, camera.direction, step);
        vec3.add(camera.position, camera.position, movementDirection);
        camFwd = false;
    }
    if (camBack) {
        vec3.scale(movementDirection, camera.direction, -step);
        vec3.add(camera.position, camera.position, movementDirection);
        camBack = false;
    }
    if (camLeft) {
        vec3.scale(movementDirection, camera.right, -step);
        vec3.add(camera.position, camera.position, movementDirection);
        camLeft = false;
    }
    if (camRight) {
        vec3.scale(movementDirection, camera.right, step);
        vec3.add(camera.position, camera.position, movementDirection);
        camRight = false;
    }

}