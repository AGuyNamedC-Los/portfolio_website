import * as THREE from 'three';

export default class Objects {
    constructor(scene) {
        this.scene = scene;
        this.room = this.room();
        this.panel = this.panel();
    }

    room() {
        const roomGeometry = new THREE.BoxGeometry(20, 10, 10);
        const walls =
        [
            new THREE.MeshStandardMaterial({side: THREE.DoubleSide}),   // right
            new THREE.MeshStandardMaterial({side: THREE.DoubleSide}),   // left
            new THREE.MeshStandardMaterial({visible: false}),   // top
            new THREE.MeshStandardMaterial({side: THREE.DoubleSide}),   // bottom
            new THREE.MeshStandardMaterial({visible: false}),   // front
            new THREE.MeshStandardMaterial({side: THREE.DoubleSide})    // back
        ];
        this.room = new THREE.Mesh(roomGeometry, walls);
        this.room.position.set(0, 2.8, 4.01);
        this.scene.add(this.room);

        return this.room;
    }

    panel() {
        this.panel = new THREE.Mesh(
            new THREE.PlaneGeometry(1, 1), 
            new THREE.MeshStandardMaterial({side: THREE.DoubleSide})
        );
        this.panel.visible = true;
        this.panel.position.set(0.02, 1.11, -0.5);
        this.panel.rotation.set(0.014, 0 ,0);
        this.panel.scale.set(1.89, 1.25, 1);
        this.scene.add(this.panel);

        return this.panel;
    }
}