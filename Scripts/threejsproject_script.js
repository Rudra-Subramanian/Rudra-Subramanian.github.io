import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const hero = document.getElementById("hero");
const ModelControl = document.getElementById("ModelsContainer");
const width = hero.offsetWidth*0.5;
const height = hero.offsetHeight*0.5;
console.log(`ModelContainer Width: ${width}, Height: ${height}`);

const quadeca_button = document.getElementById('LoadQuadeca');
quadeca_button.addEventListener('click', LoadQuadecaModel);

const PCB_button = document.getElementById('LoadPCB');
PCB_button.addEventListener('click', LoadPCBModel);



//scene
var QuadecaMondayScene = new THREE.Scene();
var PCBScene = new THREE.Scene();




//renderer
const renderer = new THREE.WebGLRenderer({ antialias: true , alpha: true });
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setSize(width, height);


renderer.setPixelRatio(window.devicePixelRatio);
//camera
const camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
const controls = new OrbitControls( camera, renderer.domElement );
const loader = new GLTFLoader();
// Append the renderer to the child of the model container

ModelControl.appendChild(renderer.domElement);
let quadeca_object;
let pcbobject;
let currentScene = new THREE.Scene();

let objToRender = "quadeca_model"

// gltf model loader
if (quadeca_object && pcbobject) {
    QuadecaMondayScene.remove(quadeca_object);
    PCBScene.remove(pcbobject);
}
loader.load(
  `../models/${objToRender}/scene.gltf`,
  function (gltf) {
    //If the file is loaded, add it to the scene
    quadeca_object = gltf.scene;
    QuadecaMondayScene.add(quadeca_object);
  },
  function (xhr) {
    //While it is loading, log the progress
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    //If there is an error, log it
    console.error(error);
  }
);
if (pcbobject) {
    PCBScene.remove(pcbobject);
}
loader.load(
    `../models/big_pcb.glb`,
    function (gltf) {
        pcbobject = gltf.scene;
        PCBScene.add(pcbobject);
        pcbobject.rotation.x = 1.57;
        //pcbobject.scale.set(5,5,5);
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
        console.error(error);
    }
);






// Set the camera position
camera.position.z = 7;
camera.position.y = 3;
camera.position.x = 0;
camera.rotation.x = -0.5;

//make ambient light for quadeca scene
const ambientLight = new THREE.AmbientLight(0x212121, 150);
ambientLight.position.set(5.75, 11, 0);
QuadecaMondayScene.add(ambientLight);

currentScene = QuadecaMondayScene;

//make ambient light for PCB scene
const PCBambientLight = new THREE.AmbientLight(0x212121, 300);
PCBambientLight.position.set(0, 2, 2);

PCBScene.add(PCBambientLight);



function LoadQuadecaModel(){
    camera.position.z = 7;
    camera.position.y = 3;
    camera.position.x = 0;
    camera.rotation.x = -0.5;
    objToRender = "quadeca_model";
    currentScene = QuadecaMondayScene;
}

function LoadPCBModel(){
    objToRender = "big_pcb.glb";
    currentScene = PCBScene;
    camera.position.set(0,0,2);
    camera.rotation.set(0,0,0);
}



function animate() {
    requestAnimationFrame(animate);
    if (quadeca_object && objToRender === "quadeca_model"){
    quadeca_object.rotation.y += 0.01;
    }
    if (pcbobject && objToRender === "big_pcb.glb"){
        pcbobject.rotation.z += 0.005;
    }
    renderer.render(currentScene, camera);
}
animate();