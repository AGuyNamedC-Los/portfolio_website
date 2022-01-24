import * as THREE from 'three';
import {GUI} from 'dat.gui';

export default class Lights {
    constructor(scene) {
        this.scene = scene;
        this.pointLight1();
        this.pointLight2();
        // this.directionalLight();
        this.folder;
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

    directionalLight() {
        const directionalLight = new THREE.SpotLight( 0xffffff );
        directionalLight.name = "superSeedLight"
        // let directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
        // this.folder = this.gui.addFolder("d light");
        let gui = new GUI();
        const folder = gui.addFolder('light');
        folder.add(directionalLight.position, 'x').step(0.01)
        folder.add(directionalLight.position, 'y').step(0.01)
        folder.add(directionalLight.position, 'z').step(0.01)
        folder.add(directionalLight.rotation, 'x').step(0.01)
        folder.add(directionalLight.rotation, 'y').step(0.01)
        folder.add(directionalLight.rotation, 'z').step(0.01)
        folder.add(directionalLight, 'intensity').step(0.01)
        this.scene.add( directionalLight );
        console.log(directionalLight);
        // console.log(this.scene.getObjectByName('superSeed'));
        // directionalLight.target = this.scene.getObjectByName('superSeed')
        const helper = new THREE.DirectionalLightHelper( directionalLight, 5 );
        this.scene.add(helper)
    }
}