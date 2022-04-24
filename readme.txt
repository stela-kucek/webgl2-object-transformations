This file contains a few remarks specific to the program for Lab1a.

WebGL version: webgl2
Libraries used: glmatrix

For modularity, the program is composed of 10 javascript files according to functionality:
	- lab_1a_main.js (main file)
	- object.js
		- cube.js
		- rectangle.js
		- sphere.js
	- transformations.js
	- global.js
	- shader_handler.js
	- keystrokes_handler.js
	- camera.js

Supported by: Mozilla Firefox, Google Chrome

Not supported by: Internet Explorer, Microsoft Edge

About the application:
	- the local coordinate system of the object by convention specified with the 3 axes:
	    - x: red
	    - y: green
	    - z: blue
	    and it reflects the local transformations (i.e. transformations of selected object) of the model matrix
	- when all shapes are selected, all transformations are applied globally, i.e. movements, rotations and scaling are aligned to conventional world axes
	- all requirements of lab1a are fulfilled
	    - additional task fulfilled:
	        * camera movement
	            > switch by pressing 'c', turns off transformation key responses, activates camera mobility
	            > move forward, back, left and right with the arrow keys
	            > re-activate transformations by pressing 'c' again
	- all relevant controls are displayed next to the canvas for quick reference
