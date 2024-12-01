import React, { useEffect } from 'react';
import 'aframe';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import sky from './stars2.jpg';
import mountain from './model/mountain.glb';
import Bicycle from './bicycle';

function App() {
  useEffect(() => {
    const loader = new GLTFLoader();

    // Load the GLTF model
    loader.load(
      mountain,
      (gltf) => {
        const entity = document.getElementById('mountain');
        if (entity) {
          entity.object3D.add(gltf.scene);
        }
      },
      undefined,
      (error) => {
        console.error('An error occurred while loading the model:', error);
      }
    );
  }, []); // Empty dependency array to run on mount

  return (
    <a-scene>
      <a-assets>
        <img id="sky" src={sky} alt="starry sky texture" />
      </a-assets>
      <a-sky src="#sky" rotation="0 0 0"></a-sky>
      <a-entity id="mountain" rotation="0 0 0" scale="50 50 50" position = "0 -2 0"></a-entity>
      <Bicycle x={0} y={25} z={10}/>
    </a-scene>
  );
}

export default App;
