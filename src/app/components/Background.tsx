'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const { clientWidth: width, clientHeight: height } = containerRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 20;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    containerRef.current.appendChild(renderer.domElement);

    // Light
    scene.add(new THREE.AmbientLight(0xffffff, 0.1));

    // Particles
    const particlesCount = 1500;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
      const x = Math.random() * 50 - 25;
      const y = Math.random() * 50 - 25;
      const z = Math.random() * 50 - 25;
      positions.set([x, y, z], i * 3);
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffffff, // White particles
      size: 0.05, // Adjust size to make them smaller and more like particles
      transparent: true,
      opacity: 0.8, // Slight transparency
      sizeAttenuation: true, // Particles get smaller with distance
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.x += 0.0005;
      particles.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };
    animate();

    // Mouse interaction
    const handleMouseMove = ({ clientX: x, clientY: y }: MouseEvent) => {
      camera.position.x = ((x / window.innerWidth) * 2 - 1) * 10;
      camera.position.y = (-(y / window.innerHeight) * 2 + 1) * 10;
      camera.lookAt(scene.position);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 10,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    />
  );
};

export default ThreeBackground;
