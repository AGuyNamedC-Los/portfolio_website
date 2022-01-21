import * as THREE from 'three';
// import * as THREE from 'https://unpkg.com/three/build/three.module.js';
// import * as dat from 'dat.gui'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// gui
// const gui = new dat.GUI();

// Canvas
const canvas = document.querySelector('canvas.webgl');

// scene
const scene = new THREE.Scene();

// texture loader
// const textureLoader = new THREE.TextureLoader();

// gltf loader
const gltfLoader = new GLTFLoader();


// const mainColor = none;

/**
 * Objects
 */
// room
const geometry = new THREE.BoxGeometry(20, 10, 10);
const walls =
[
    new THREE.MeshStandardMaterial({side: THREE.DoubleSide}),   // right
    new THREE.MeshStandardMaterial({side: THREE.DoubleSide}),   // left
    new THREE.MeshStandardMaterial({visible: false}),   // top
    new THREE.MeshStandardMaterial({side: THREE.DoubleSide}),   // bottom
    new THREE.MeshStandardMaterial({visible: false}),   // front
    new THREE.MeshStandardMaterial({side: THREE.DoubleSide})    // back
];
const room = new THREE.Mesh(geometry, walls);
room.position.set(0, 2.8, 4.01);
scene.add(room);

// desk
gltfLoader.load(
    'models/desk/scene.gltf', (gltf) => {
        let model = gltf.scene;
        let newMaterial = new THREE.MeshStandardMaterial();
        model.traverse((o) => {
            if (o.isMesh) o.material = newMaterial;
        });
        gltf.scene.scale.set(1.1, 0.75, 0.75);
        scene.add(gltf.scene);
    }
);

/**
 * Lights
 */
// Point light 1
const pointLight1 = new THREE.PointLight(0x202734, 1);
pointLight1.position.set(0, 0.5, 0.2);
pointLight1.intensity = 2.5;
// let col = {color: '#202734'};
// light1.addColor(col, 'color').onChange(() => {
//     pointLight1.color.set(col.color);
// });
scene.add(pointLight1);
scene.add(new THREE.PointLightHelper(pointLight1, 0.1))

const pointLight4 = new THREE.PointLight(0x202734, 1);
pointLight4.position.set(0, 2.9, 4.1);
pointLight4.intensity = 15.3;
scene.add(pointLight4);
scene.add(new THREE.PointLightHelper(pointLight4, 0.1))

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
camera.position.set(0, 1.18, 0);
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.campingFactor = 0.25;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
})
renderer.physicallyCorrectLights = true;
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */

const clock = new THREE.Clock()
const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    // Update objects

    // Update Orbital Controls
    controls.update();

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()