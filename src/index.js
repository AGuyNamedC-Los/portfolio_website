import './main.css'
import * as THREE from 'three'
import Scene from './components/scene.js';
import Camera from './components/camera.js';
import Lights from './components/lights.js';
import Objects from './components/objects';
import GLTFModels from './components/gltfModels';
import Renderer from './components/renderer';

import { showImageOnMonitor, removeImageOnMonitor } from './components/eventListeners/monitorScreen';

THREE.DefaultLoadingManager.onLoad = () => {
    let loadingScreen = document.getElementById("loading-screen");
    let main = document.getElementsByTagName("main")[0];

    loadingScreen.style.display = "none";
    main.style.display = "initial";
}

const canvas = document.querySelector('canvas.webgl');
// Window sizes
const sizes = { 
    width: window.innerWidth, 
    height: window.innerHeight,
    devicePixelRatio: window.devicePixelRatio
}

const scene = new Scene();              // creates a new scene
const camera = new Camera(sizes);       // creates a new camera
const objects = new Objects(scene);         // loads all the three js objects onto the scene
const gltfModels = new GLTFModels(scene);      // loads all the gltf models onto the scene
const lights = new Lights(scene);          // loads all the lights onto the scene

scene.add(camera);
const renderer = new Renderer(canvas, sizes);

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
 * Animate
 */

// zooms the camera in and out on scroll
window.addEventListener('scroll', () => {
    const t = document.body.getBoundingClientRect().top;
    camera.position.z = t * -0.0015;
    camera.rotation.x = t * 0.00022;
    camera.position.y = 1.2 + t * -0.0002;
})

// makes camera pan left and right when moving mouse left to right
const mouse = new THREE.Vector2();
window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / sizes.width) * 2 - 1;
    camera.position.x = mouse.x/2;
    camera.rotation.y = mouse.x/20;
});

let projects = document.querySelectorAll("a.project.link");
let socials = document.querySelectorAll("a.social.link");
showImageOnMonitor(projects, objects.panel);
removeImageOnMonitor(projects, objects.panel);
showImageOnMonitor(socials, objects.panel);
removeImageOnMonitor(socials, objects.panel);


const clock = new THREE.Clock()
const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
}

tick();