class cone extends object {
    constructor() {
        super();

        var nbPoints = 10;
        var rayon = 3;
        var hauteur = 5;

        this.vertices = [
            0, 0, hauteur,
            Math.random(), Math.random(), Math.random(),
            0, 0, 0,
            Math.random(), Math.random(), Math.random()
        ];
        this.indices = [];

        for (var i = 0; i < nbPoints; i++) {
            var iN = i / nbPoints;
            var theta = iN * 2 * Math.PI;
            this.vertices.push(rayon * Math.cos(theta), rayon * Math.sin(theta), 0, Math.random(), Math.random(), Math.random());

            this.indices.push(0, i + 2, (i === nbPoints - 1) ? 2 : i + 3);
            this.indices.push(1, i + 2, (i === nbPoints - 1) ? 2 : i + 3);
        }

        this.colors = [];
        for ( var i = 0; i < this.vertices.length; i++) {
            this.colors.push(1-(i*0.01));
            this.colors.push(1-(i*0.04));
            this.colors.push(0.5);
            this.colors.push(1);
        }

        this.modelMatrix = mat4.create();
        mat4.translate(this.modelMatrix, this.modelMatrix, [4, 0, 0]);
       // mat4.scale(this.modelMatrix, this.modelMatrix, [0.5, 0.5, 0.5]);
        this.index = objects.push(this) - 1;

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

        this.indicesBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indicesBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indices), gl.STATIC_DRAW);
    }
}