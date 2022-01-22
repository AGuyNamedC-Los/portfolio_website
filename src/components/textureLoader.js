import * as THREE from 'three';

export default class TextureLoader {
    constructor() {
        this.textureLoader = new THREE.TextureLoader();

        return this.textureLoader;
    }
}