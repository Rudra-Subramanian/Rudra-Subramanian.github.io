import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';




const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setSize(window.innerWidth/2, window.innerHeight/2);

renderer.setPixelRatio(window.devicePixelRatio);

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const controls = new OrbitControls( camera, renderer.domElement );
const loader = new GLTFLoader();
// Append the renderer to the child of the model container
const ModelControl = document.getElementById("ModelsContainer");
ModelControl.appendChild(renderer.domElement);
