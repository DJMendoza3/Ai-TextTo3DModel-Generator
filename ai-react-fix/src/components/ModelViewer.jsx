import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as THREE from "three";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import test_mesh from "temp_models/mesh.ply";

var container;
var camera, scene, renderer, controls, loader;

export default function ModelViewer() {
    const [model, setModel] = useState();

    


  function init() {
    //Creating the container for the ply
    container = document.createElement("div");
    document.getElementById("test-render").appendChild(container);

    //initializing the camera
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.01,
      2000
    );
    camera.position.z = 2;
    camera.position.set(1, 1, 1);

    //initializing the scene
    scene = new THREE.Scene();
    scene.add(new THREE.AxesHelper(.5));

    //initializing renderer
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    //size of viewport (width, height) grab size of container and set it to renderer
    renderer.setSize(
      document.getElementById("test-render").clientWidth,
      document.getElementById("test-render").clientHeight
    );
    renderer.outputEncoding = THREE.sRGBEncoding;

    //adding renderer to DOM
    container.appendChild(renderer.domElement);

    //initializing interactive controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    //rendering ply file
    const plyLoader = new PLYLoader();

    plyLoader.load(
      'http://10.1.10.164:5000/models/4',
      function (geometry) {
        const material = new THREE.PointsMaterial({
          size: 0.01,
          vertexColors: true,
        });
        const mesh = new THREE.Points(geometry, material);
        mesh.rotateX(-Math.PI / 2);
        
        scene.add(mesh);
      },
      // called when loading is in progress
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      // called when loading has errors
      function (error) {
        console.log("An error happened");
        console.log(error);
      }
    );
  }

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    controls.update();
  }


  //useEffect for reloading rederer when settingsOpen or navToggle is toggled 
    useEffect(() => {
        const element = document.getElementById("test-render");
        //new resize observer
        new ResizeObserver(() => {
            if (renderer !== undefined) {
                renderer.setSize(
                    document.getElementById("test-render").clientWidth,
                    document.getElementById("test-render").clientHeight
                );
                camera.aspect = document.getElementById("test-render").clientWidth / document.getElementById("test-render").clientHeight;
                camera.updateProjectionMatrix();
            }
        }).observe(element);
    }, []);


  //useEffect for reloading rederer when window is resized 
    useEffect(() => {
        const handleResize = () => {
            renderer.setSize(
                document.getElementById("test-render").clientWidth,
                document.getElementById("test-render").clientHeight
            );
            camera.aspect = document.getElementById("test-render").clientWidth / document.getElementById("test-render").clientHeight;
            camera.updateProjectionMatrix();
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    //fetch GET request to get model from server and set it to model
    useEffect(() => {
        fetch('http://10.1.10.164:5000/models/2', {
            method: 'GET',
            })
            .then(response => response.blob())
            .then(data => {
                setModel(data);
            })
            .catch(err => console.log(err));
    }, []);

  let rendered = false;
  useEffect(() => {
    if (!rendered) {
      init();
      animate();
      rendered = true;
    }
  }, []);
  return <div id="test-render" style={{ width: "100%", flex: "1", maxHeight: '80%' }}></div>;
}
