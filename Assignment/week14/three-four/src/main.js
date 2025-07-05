import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Scene setup
const scene = new THREE.Scene();

// Mesh basic Material tuts
// cubeMaterial.side = THREE.DoubleSide
// cubeMaterial.fog = true;
// console.log(cubeMaterial.fog);
// // Adding fog to to the scene/material
// const fog = new THREE.Fog(0xffffff,1,10);
// scene.fog = fog ;
// scene.background = new THREE.Color('white');

const cubeMaterial = new THREE.MeshLambertMaterial();
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1 );
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cubeMesh);

const torusMaterial = new THREE.MeshPhongMaterial({
  specular: 0xffffff, // bright white highlights
  emissive: 0xff0000
});

torusMaterial.shininess = 90 ;
const torusKnot = new THREE.TorusKnotGeometry(0.5 , 0.15 , 100 ,15 );
const mesh2 = new THREE.Mesh(torusKnot,torusMaterial);
mesh2.position.x = 2;
scene.add(mesh2);

// Adding Light to the scene
const light = new THREE.AmbientLight(0xffffff,0.2);
scene.add(light);
const pointLight = new THREE.PointLight(0xffffff, 20);
pointLight.position.set(2,2,2);
scene.add(pointLight);
// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  30
);
camera.position.set(0, 0 , 5);

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