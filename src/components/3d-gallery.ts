import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export function initGallery(container: HTMLElement, models: { src: string }[]) {
    if (!container) return null;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        45,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
    );
    camera.position.set(0, 1.5, 5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
    scene.add(light);

    const loader = new GLTFLoader();
    let currentModel: THREE.Object3D | null = null;
    let currentIndex = 0;

    function loadModel(index: number) {
        if (currentModel) scene.remove(currentModel);
        loader.load(models[index].src, (gltf) => {
            currentModel = gltf.scene;
            scene.add(currentModel);
        });
    }

    function animate() {
        requestAnimationFrame(animate);
        if (currentModel) currentModel.rotation.y += 0.005;
        renderer.render(scene, camera);
    }

    animate();
    loadModel(currentIndex);

    return {
        show: (index: number) => {
            currentIndex = index;
            loadModel(index);
        },
        next: () => {
            currentIndex = (currentIndex + 1) % models.length;
            loadModel(currentIndex);
        },
        prev: () => {
            currentIndex = (currentIndex - 1 + models.length) % models.length;
            loadModel(currentIndex);
        },
    };
}
