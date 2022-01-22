import * as THREE from 'three';
const textureLoader = new THREE.TextureLoader();

// when a link is hovered, show the image corresponding to that link on the monitor
export function showImageOnMonitor(htmlLinks, panel) {
    htmlLinks.forEach((link, i) => {
        let type = link.classList[0] + 's';     // so we can differentiate between projects and socials directory
        link.addEventListener('mouseover', () => {
            panel.visible = true;
            let newMaterial = new THREE.MeshBasicMaterial({
                map: textureLoader.load(`/pictures/${type}/${i}.png`)
            });
            panel.material = newMaterial;
        })
    });
}

// when the cursor leaves the link, display nothing on the montor
export function removeImageOnMonitor(htmlLinks, panel) {
    htmlLinks.forEach((link) => {
        link.addEventListener('mouseout', () => {
            panel.visible = false;
        })
    });
}