import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Scene setup
const scene = new THREE.Scene();

// Cube
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 'red' , wireframe: true });
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cubeMesh);

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  30
);
camera.position.set(0, 0, 5);

const axisHelper = new THREE.AxesHelper(2);
cubeMesh.add(axisHelper);

// Renderer
const canvas = document.querySelector('canvas.threejs');
const renderer = new THREE.WebGLRenderer({ 
  canvas,
  antialias: true 
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));

// OrbitControls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.autoRotate = true;

// Resizing Ready
window.addEventListener('resize',()=>{
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation loop
const renderLoop = () => {

  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(renderLoop);
};

renderLoop();