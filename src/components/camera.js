import * as THREE from 'three';

export default class Camera {
    constructor(sizes) {
        this.camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
        this.camera.position.set(0, 1.18,0);
        // this.camera.position.set(0, 1.18, 10);

        return this.camera;
    }
}