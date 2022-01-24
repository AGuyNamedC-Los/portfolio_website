import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';

export default class GLTFModels {
    constructor(scene) {
        this.scene = scene;
        this.gltfLoader = new GLTFLoader();
        this.textureLoader = new THREE.TextureLoader();
        this.list = [];
        this.desk;
        this.statueBase;
        this.superSeed;

        this.addGLTFModelsToScene();
        this.assignModels();
    }

    addGLTFModelsToScene() {
        this.desk();
        this.monitor();
        this.tower();
        this.keyboard();
        this.mouse();
        this.chair();
        this.statueBase();
        this.superSeed();
    }

    assignModels() {
        this.superSeed = this.list[this.length - 1];
    }

    desk() {
        this.gltfLoader.load(
            'models/desk/scene.gltf', (gltf) => {
                let model = gltf.scene;
                let newMaterial = new THREE.MeshStandardMaterial();
                model.traverse((o) => {
                    if (o.isMesh) o.material = newMaterial;
                });
                gltf.scene.scale.set(1.1, 0.75, 0.75);
                this.scene.add(gltf.scene);
            }
        );
    }

    monitor() {
        this.gltfLoader.load(
            'models/monitor/scene.gltf', (gltf) => {
                let model = gltf.scene;
                let newMaterial = new THREE.MeshStandardMaterial({roughness: 0.5});
                model.traverse((o) => {
                    if (o.isMesh) o.material = newMaterial;
                });
                gltf.scene.scale.set(0.5, 0.5, 0.5);
                gltf.scene.position.set(0.652, -1.1, 21);
                gltf.scene.rotation.set(0.024, -3.135, 0);

                this.scene.add(gltf.scene);
            }
        );
    }

    tower() {
        this.gltfLoader.load(
            'models/tower/scene.gltf', (gltf) => {
                gltf.scene.position.set(2.123, 0.527, 0.141);
                gltf.scene.rotation.set(0, 0.046, -0.012);
                gltf.scene.scale.set(.6, 0.6, 0.6);
                let model = gltf.scene;
                let newMaterial = new THREE.MeshStandardMaterial({roughness: 0.5, metalness: 0.5});
                model.traverse((o) => {
                    if (o.isMesh) o.material = newMaterial;
                });
                this.scene.add(gltf.scene);
            }
        );
    }

    keyboard() {
        this.gltfLoader.load(
            'models/keyboard/scene.gltf', (gltf) => {
                gltf.scene.scale.set(0.2, 0.2, 0.2);
                gltf.scene.position.set(0, 0.09, 0.42);
                gltf.scene.rotation.set(0.2, -3.13, 0);
                let model = gltf.scene;
                let newMaterial = new THREE.MeshStandardMaterial();
                model.traverse((o) => {
                    if (o.isMesh) o.material = newMaterial;
                });
                this.scene.add(gltf.scene);
            }
        );
    }

    mouse() {
        this.gltfLoader.load(
            'models/mouse/scene.gltf', (gltf) => {
                gltf.scene.scale.set(0.4, 0.4, 0.4);
                gltf.scene.position.set(1.02, 0.03, 0.4);
                let model = gltf.scene;
                let newMaterial = new THREE.MeshStandardMaterial();
                model.traverse((o) => {
                    if (o.isMesh) o.material = newMaterial;
                });
                this.scene.add(gltf.scene);
            }
        );
    }

    chair() {
        this.gltfLoader.load(
            'models/chair/scene.gltf', (gltf) => {
                gltf.scene.position.set(1.5, -2.2, 1.96);
                gltf.scene.rotation.set(0, -2.18, 0);
                gltf.scene.scale.set(0.7, 0.7, 0.7);
                let model = gltf.scene;
                let newMaterial = new THREE.MeshStandardMaterial();
                model.traverse((o) => {
                    if (o.isMesh) o.material = newMaterial;
                });
                this.scene.add(gltf.scene);
            }
        );
    }

    statueBase() {
        this.gltfLoader.load(
            'models/statue_base/scene.gltf', (gltf) => {
                let model = gltf.scene;
                model.position.set(-2, 0, 0);
                model.rotation.set(0, 0, 0);
                model.scale.set(0.1, 0.2, 0.1);
                let newMaterial = new THREE.MeshStandardMaterial();
                model.name = 'base';

                model.traverse((o) => {
                    o.name = 'base';
                    if (o.isMesh) {
                        o.material = newMaterial;
                    }
                });
                this.scene.add(model);
                this.list.push(model);
            }
        );
    }

    superSeed() {
        this.gltfLoader.load(
            'models/super_seed/scene.gltf', (gltf) => {
                let model = gltf.scene;
                model.position.set(-2, 0.3, 0);
                model.rotation.set(0, 0, 0);
                model.scale.set(5, 5, 2);
                model.name = 'superSeed';
                let newMaterial = new THREE.MeshStandardMaterial();

                model.traverse((o) => {
                    o.name = 'superSeed';
                    if (o.isMesh) {
                        o.material = newMaterial;
                    }
                });
                this.scene.add(model);
                this.list.push(model);
            }
        );
    }
}