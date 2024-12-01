import React, { useEffect } from 'react';
import 'aframe';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import bicycle from './model/bicycle.glb';
import PropTypes from 'prop-types';

function Bicycle({ x, y, z }) {
  useEffect(() => {
    const loader = new GLTFLoader();

    loader.load(
      bicycle,
      (gltf) => {
        const entity = document.getElementById('bicycle');
        if (entity) {
          entity.object3D.add(gltf.scene);
          console.log('Model added to scene:', gltf.scene);
        }
      },
      undefined,
      (error) => {
        console.error('Error loading the bicycle model:', error);
      }
    );
  }, []);

  return (
    <a-entity id="bicycle" position={`${x} ${y} ${z}`} scale="0.5 0.5 0.5"></a-entity>
  );
}

Bicycle.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  z: PropTypes.number,
};


export default Bicycle;
