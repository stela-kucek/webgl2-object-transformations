/*
 * this is the second 'primitive', with 1x1x4 dimensions,
 * where the unit size in the model space equals 0.125
 */
class rectangle extends object {
    constructor() {
        super();
        this.vertices = [
            -0.125, -0.5, -0.125,
            0.125, -0.5, -0.125,
            0.125, 0.5, -0.125,
            0.125, 0.5, -0.125,
            -0.125, 0.5, -0.125,
            -0.125, -0.5, -0.125,

            -0.125, -0.5, 0.125,
            0.125, -0.5, 0.125,
            0.125, 0.5, 0.125,
            0.125, 0.5, 0.125,
            -0.125, 0.5, 0.125,
            -0.125, -0.5, 0.125,

            -0.125, 0.5, 0.125,
            -0.125, 0.5, -0.125,
            -0.125, -0.5, -0.125,
            -0.125, -0.5, -0.125,
            -0.125, -0.5, 0.125,
            -0.125, 0.5, 0.125,

            0.125, 0.5, 0.125,
            0.125, 0.5, -0.125,
            0.125, -0.5, -0.125,
            0.125, -0.5, -0.125,
            0.125, -0.5, 0.125,
            0.125, 0.5, 0.125,

            -0.125, -0.5, -0.125,
            0.125, -0.5, -0.125,
            0.125, -0.5, 0.125,
            0.125, -0.5, 0.125,
            -0.125, -0.5, 0.125,
            -0.125, -0.5, -0.125,

            -0.125, 0.5, -0.125,
            0.125, 0.5, -0.125,
            0.125, 0.5, 0.125,
            0.125, 0.5, 0.125,
            -0.125, 0.5, 0.125,
            -0.125, 0.5, -0.125
        ];

        this.colors = [];

        this.faceColors = [
            [1.0, 0.0, 0.0, 1.0], // Front face
            [0.0, 1.0, 0.0, 1.0], // Back face
            [0.0, 0.0, 1.0, 1.0], // Top face
            [1.0, 1.0, 0.0, 1.0], // Bottom face
            [1.0, 0.0, 1.0, 1.0], // Right face
            [0.0, 1.0, 1.0, 1.0] // Left face

        ];


        var that = this;

        this.faceColors.forEach(function (color) {
                for (var i = 0; i < 6; i++) {
                    that.colors = that.colors.concat(color);
                }
            }
        );


        this.modelMatrix = mat4.create();

        this.index = objects.push(this)-1;

        this.vPositionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vPositionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
        this.vPositionBuffer.itemSize = 3;
        this.vPositionBuffer.numItems = this.vertices.length / 3;

        this.vColorBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vColorBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.colors), gl.STATIC_DRAW);
        this.vColorBuffer.itemSize = 4;
        this.vColorBuffer.numItems = this.colors.length / 4;

    }


}
