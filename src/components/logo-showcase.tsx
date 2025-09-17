'use client';

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

const LogoShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xffffff);

      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current?.appendChild(renderer.domElement);

      // Add lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.05);
      scene.add(ambientLight);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
      directionalLight.position.set(10, 1, 5);
      scene.add(directionalLight);

      // Position camera
      camera.position.z = 15; // Start farther away
      camera.position.y = 3;
      camera.lookAt(0, 3, 0);

      let loadedObject: THREE.Group | null = null;

      const objLoader = new OBJLoader();
      objLoader.load('/h-logo/h-logo.obj', (root) => {
        // Center the object
        const box = new THREE.Box3().setFromObject(root);
        const center = box.getCenter(new THREE.Vector3());
        root.position.sub(center);

        const scale = 4;
        root.scale.set(scale, scale, scale);

        const material = new THREE.MeshPhongMaterial({
          color: 0x000000,
          shininess: 1000,
          flatShading: true
        });
        root.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material = material;
          }
        });

        scene.add(root);
        loadedObject = root;
      });

      let scrollPosition = 0;

      const handleScroll = () => {
        scrollPosition = window.scrollY * 0.006;
        const scrollProgress = Math.min(window.scrollY / (window.innerHeight * 0.5), 1);

        // Direct camera position update
        camera.position.z = 15 - 5 * scrollProgress;
        camera.position.y = 3 - scrollProgress * 0.5;
        camera.lookAt(0, 3 - scrollProgress * 0.5, 0);
      };
      window.addEventListener('scroll', handleScroll);

      const renderScene = () => {
        if (loadedObject) {
          loadedObject.rotation.y = scrollPosition;

          // Calculate color transition with delayed start (starts at 95% scroll)
          const scrollProgress = Math.min(window.scrollY / (window.innerHeight * 0.5), 2); // Allow progress up to 200%
          const colorProgress = Math.max(0, Math.min(1, (scrollProgress - 1.8) * 2.5)); // Slower transition

          // Interpolate between black and red
          const currentColor = new THREE.Color();
          currentColor.lerpColors(new THREE.Color(0x000000), new THREE.Color(0xd70000), colorProgress);

          // Apply the color
          loadedObject.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              (child.material as THREE.MeshPhongMaterial).color = currentColor;
            }
          });
        }
        renderer.render(scene, camera);
        requestAnimationFrame(renderScene);
      };
      renderScene();

      const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
      };
      window.addEventListener('resize', handleResize);

      const currentRef = containerRef.current;
      return () => {
        window.removeEventListener('resize', handleResize);
        currentRef?.removeChild(renderer.domElement);
        renderer.dispose();
      };
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100vw',
        height: '100vh'
      }}
    />
  );
};

export default LogoShowcase;
