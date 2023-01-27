import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as THREE from "three";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {FETCH_URL} from "utils/globalVariables";

let container;
let camera, scene, renderer, controls, loader, mesh, points, wireframe;

export default function ModelViewer() {
  let meshID = useSelector((state) => state.home.meshID);

  const meshToggle = useSelector((state) => state.home.modelDisplay);

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
    scene.add(new THREE.AxesHelper(0.5));

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
      FETCH_URL + "/models/" + meshID,
      function (geometry) {
        const material = new THREE.PointsMaterial({
          size: 0.01,
          vertexColors: true,
        });
        mesh = new THREE.Mesh(geometry, material);
        wireframe = new THREE.LineSegments(geometry);
        points = new THREE.Points(geometry, material);
        mesh.rotateX(-Math.PI / 2);
        wireframe.rotateX(-Math.PI / 2);
        points.rotateX(-Math.PI / 2);

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
        camera.aspect =
          document.getElementById("test-render").clientWidth /
          document.getElementById("test-render").clientHeight;
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
      camera.aspect =
        document.getElementById("test-render").clientWidth /
        document.getElementById("test-render").clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let rendered = false;
  useEffect(() => {
    if (!rendered) {
      init();
      animate();
      rendered = true;
    }
  }, []);
  useEffect(() => {
    if (meshToggle) {
      scene.add(mesh);
      scene.remove(points);
    } else {
      scene.remove(mesh);
      scene.add(points);
    }
  }, [meshToggle])
  return (
    <div
      id="test-render"
      style={{ width: "99%", flex: "1", maxHeight: "80%", border: 'solid 1px var(--accent-color)' }}
    ></div>
  );
}
