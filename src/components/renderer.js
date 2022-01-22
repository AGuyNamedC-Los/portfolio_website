import * as THREE from 'three';

export default class Renderer {
    constructor(canvas, sizes) {
        this.canvas = canvas;
        this.sizes = sizes;
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            alhpa: true
        });

        this.renderer.physicallyCorrectLights = true;
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(Math.min(this.sizes.devicePixelRatio, 2));
        
        return this.renderer;
    }
}