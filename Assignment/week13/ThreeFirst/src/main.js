import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Scene setup
const scene = new THREE.Scene();

// Cube
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 'red' });
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

// const aspectRatio = window.innerWidth/window.innerHeight ;
// const camera = new THREE.OrthographicCamera(
//   -1*aspectRatio,1*aspectRatio,1,-1,0.1,100
// )
camera.position.set(0, 0, 2);



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

// controls.enablePan = true;
// controls.enableKeys = true;
// controls.listenToKeyEvents(window);
// controls.keys = {
//   LEFT: 'KeyA',
//   UP: 'KeyW',
//   RIGHT: 'KeyD',
//   BOTTOM: 'KeyS'
// };
controls.autoRotate = true;
// controls.keyPanSpeed = 100;
// controls.enableRotate = true;

// Resizing Ready
window.addEventListener('resize',()=>{
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

console.log(window.devicePixelRatio);

// Animation loop
const renderLoop = () => {
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(renderLoop);
};

renderLoop();