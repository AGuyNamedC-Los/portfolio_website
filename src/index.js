import './main.css'
import * as THREE from 'three'
// import * as dat from 'dat.gui'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

// gui
// const gui = new dat.GUI();

// Canvas
const canvas = document.querySelector('canvas.webgl');

// scene
const scene = new THREE.Scene();

// texture loader
const textureLoader = new THREE.TextureLoader();

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

// monitor
gltfLoader.load(
    'models/monitor/scene.gltf', (gltf) => {
        let model = gltf.scene;
        let newMaterial = new THREE.MeshStandardMaterial({roughness: 0.5});
        model.traverse((o) => {
            if (o.isMesh) o.material = newMaterial;
        });
        gltf.scene.scale.set(0.5, 0.5, 0.5);
        gltf.scene.position.set(0.652, -1.1, 21);
        gltf.scene.rotation.set(0.024, -3.135, 0);

        scene.add(gltf.scene);
    }
);

// screen
const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1), 
    new THREE.MeshStandardMaterial({side: THREE.DoubleSide})
);
plane.visible = true;
plane.position.set(0.02, 1.11, -0.5);
plane.rotation.set(0.014, 0 ,0);
plane.scale.set(1.89, 1.25, 1);
scene.add(plane);

// tower
gltfLoader.load(
    'models/tower/scene.gltf', (gltf) => {
        gltf.scene.position.set(2.123, 0.527, 0.141);
        gltf.scene.rotation.set(0, 0.046, -0.012);
        gltf.scene.scale.set(.6, 0.6, 0.6);
        let model = gltf.scene;
        let newMaterial = new THREE.MeshStandardMaterial({roughness: 0.5, metalness: 0.5});
        model.traverse((o) => {
            if (o.isMesh) o.material = newMaterial;
        });
        scene.add(gltf.scene);
    }
);

// keyboard
gltfLoader.load(
    'models/keyboard/scene.gltf', (gltf) => {
        gltf.scene.scale.set(0.2, 0.2, 0.2);
        gltf.scene.position.set(0, 0.09, 0.42);
        gltf.scene.rotation.set(0.2, -3.13, 0);
        let model = gltf.scene;
        let newMaterial = new THREE.MeshStandardMaterial();
        model.traverse((o) => {
            if (o.isMesh) o.material = newMaterial;
        });
        scene.add(gltf.scene);
    }
);

// mouse
gltfLoader.load(
    'models/mouse/scene.gltf', (gltf) => {
        gltf.scene.scale.set(0.4, 0.4, 0.4);
        gltf.scene.position.set(1.02, 0.03, 0.4);
        let model = gltf.scene;
        let newMaterial = new THREE.MeshStandardMaterial();
        model.traverse((o) => {
            if (o.isMesh) o.material = newMaterial;
        });
        scene.add(gltf.scene);
    }
);

// chair
gltfLoader.load(
    'models/chair/scene.gltf', (gltf) => {
        gltf.scene.position.set(1.5, -2.2, 1.96);
        gltf.scene.rotation.set(0, -2.18, 0);
        gltf.scene.scale.set(0.7, 0.7, 0.7);
        let model = gltf.scene;
        let newMaterial = new THREE.MeshStandardMaterial();
        model.traverse((o) => {
            if (o.isMesh) o.material = newMaterial;
        });
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
// const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true;
// controls.campingFactor = 0.25;

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
const raycaster = new THREE.Raycaster();

window.addEventListener('scroll', () => {
    const t = document.body.getBoundingClientRect().top;
    camera.position.z = t * -0.0015;
    camera.rotation.x = t * 0.00022;
    camera.position.y = 1.2 + t * -0.0002;
})

const mouse = new THREE.Vector2();
window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / sizes.width) * 2 - 1;
    camera.position.x = mouse.x/2;
    camera.rotation.y = mouse.x/20;
});

// get all link elements and make it so an image appears on the monitor
var projects = document.querySelectorAll("a.project.link");
projects.forEach((p, i) => {
    p.addEventListener("mouseover", () => {
        plane.visible = true;
        let newMaterial = new THREE.MeshBasicMaterial({
            map: textureLoader.load(`/textures/projects/${i}.png`)
        });
        plane.material = newMaterial;
    });
});

projects.forEach((p) => {
    p.addEventListener("mouseout", () => {
        plane.visible = false;
});});

var socials = document.querySelectorAll("a.social.link");
socials.forEach((s, i) => {
    s.addEventListener("mouseover", () => {
        plane.visible = true;
        plane.material = new THREE.MeshBasicMaterial({
            map: textureLoader.load(`/textures/socials/${i}.png`)
        });
    });
});

socials.forEach((s) => {
    s.addEventListener("mouseout", () => {
        plane.visible = false;
    })
});


const clock = new THREE.Clock()
const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    // Update objects

    // Update Orbital Controls
    // controls.update();

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()