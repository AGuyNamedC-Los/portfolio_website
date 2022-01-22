import * as THREE from 'three';

export default class Lights {
    constructor(scene) {
        this.scene = scene;
        this.pointLight1();
        this.pointLight2();
    }

    pointLight1() {
        let pointLight1 = new THREE.PointLight(0x202734, 1);
        pointLight1.position.set(0, 0.5, 0.2);
        pointLight1.intensity = 2.5;
        this.scene.add(pointLight1);
    }

    pointLight2() {
        let pointLight2 = new THREE.PointLight(0x202734, 1);
        pointLight2.position.set(0, 2.9, 4.1);
        pointLight2.intensity = 15.3;
        this.scene.add(pointLight2);
    }
}