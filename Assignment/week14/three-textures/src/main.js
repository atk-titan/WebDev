import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Scene setup
const scene = new THREE.Scene();

// Initilize texture loader
const textureLoader = new THREE.TextureLoader();

// initialize Geometry
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1 );
const uv2Geometry = new THREE.BufferAttribute(cubeGeometry.attributes.uv.array);
cubeGeometry.setAttribute('uv2',uv2Geometry);

const torusKnot = new THREE.TorusKnotGeometry(0.5 , 0.15 , 100 ,15 );
const uv2TorusGeometry = new THREE.BufferAttribute(torusKnot.attributes.uv.array);
torusKnot.setAttribute('uv2',uv2TorusGeometry);

const sphereGeometry = new THREE.SphereGeometry(1 , 35 , 30 );
const uv2SphereGeometry = new THREE.BufferAttribute(sphereGeometry.attributes.uv.array);
sphereGeometry.setAttribute('uv2',uv2SphereGeometry);

const cylinderGeometry = new THREE.CylinderGeometry(1 , 1 , 2 , 30 , 30 );
const uv2CylinderGeometry = new THREE.BufferAttribute(cylinderGeometry.attributes.uv.array);
cylinderGeometry.setAttribute('uv2',uv2CylinderGeometry);

const planeGeometry = new THREE.PlaneGeometry( 10 , 10 );
const uv2PlaneGeometry = new THREE.BufferAttribute(planeGeometry.attributes.uv.array);
planeGeometry.setAttribute('uv2',uv2PlaneGeometry);

// Initialize texture
const grassAlbedo = textureLoader.load('../statics/textures/whispy-grass-meadow-bl/wispy-grass-meadow_albedo.png');
const grassAo = textureLoader.load('../statics/textures/whispy-grass-meadow-bl/wispy-grass-meadow_ao.png');
const grassHeight = textureLoader.load('../statics/textures/whispy-grass-meadow-bl/wispy-grass-meadow_height.png');
const grassMetallic = textureLoader.load('../statics/textures/whispy-grass-meadow-bl/wispy-grass-meadow_metallic.png');
const grassNormal = textureLoader.load('../statics/textures/whispy-grass-meadow-bl/wispy-grass-meadow_normal-ogl.png');
const grassRoughness = textureLoader.load('../statics/textures/whispy-grass-meadow-bl/wispy-grass-meadow_roughness.png');

// Initialize Material
const material = new THREE.MeshStandardMaterial();
material.map = grassAlbedo;
material.aoMap = grassAo;
material.aoMapIntensity = 1;
material.metalnessMap = grassMetallic;
material.normalMap = grassNormal;
material.roughnessMap = grassRoughness;

// Initialize Mesh
const cubeMesh = new THREE.Mesh(cubeGeometry, material);
cubeMesh.position.x = -2; 
const mesh2 = new THREE.Mesh(torusKnot,material);
mesh2.position.x = 2;
const sphereMesh = new THREE.Mesh(sphereGeometry,material);
sphereMesh.position.y = 2.5;
const cylinderMesh =  new THREE.Mesh(cylinderGeometry,material);
const planeMesh = new THREE.Mesh(planeGeometry,material);

planeMesh.rotation.x = -(Math.PI * 0.5);

// Initialize Groups
const group = new THREE.Group();

// Adding to the scene
group.add( cubeMesh , mesh2 , sphereMesh , cylinderMesh );
// group.add(planeMesh);
scene.add(group);


// Adding Light to the scene
const light = new THREE.AmbientLight(0xffffff,0.4);
scene.add(light);

const pointLight = new THREE.PointLight(0xffffff, 40);
pointLight.position.set(5,5,5);
scene.add(pointLight);

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  200
);
camera.position.set(0, 2 , 5);

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
  // group.children.forEach((child) => {
  //   if (child instanceof THREE.Mesh )
  //     child.rotation.x += 0.01;
  // })

  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(renderLoop);
};

renderLoop();