import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Education3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create cloud group container
    const cloudGroup = new THREE.Group();
    scene.add(cloudGroup);

    // Create 5 clouds
    for (let cloudIndex = 0; cloudIndex < 5; cloudIndex++) {
      const cloud = new THREE.Group();
      const cloudGeometry = new THREE.SphereGeometry(0.3, 32, 32);
      const cloudMaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.8,
        emissive: 0x00a3ff,
        emissiveIntensity: 0.2,
      });

      // Create individual cloud particles
      for (let i = 0; i < 8; i++) {
        const cloudPart = new THREE.Mesh(cloudGeometry, cloudMaterial);
        cloudPart.position.x = Math.random() * 1 - 0.5;
        cloudPart.position.y = Math.random() * 0.3;
        cloudPart.position.z = Math.random() * 1 - 0.5;
        cloudPart.scale.set(
          Math.random() * 0.8 + 0.6,
          Math.random() * 0.8 + 0.6,
          Math.random() * 0.8 + 0.6
        );
        cloud.add(cloudPart);
      }

      // Position each cloud in the group
      cloud.position.x = cloudIndex * 2;
      cloud.position.y = Math.sin(cloudIndex * 0.5) * 0.5;
      cloudGroup.add(cloud);
    }

    // Create raindrops pool
    const raindrops: THREE.Mesh[] = [];
    const raindropGeometry = new THREE.SphereGeometry(0.02, 8, 8);
    const raindropMaterial = new THREE.MeshPhongMaterial({
      color: 0x00a3ff,
      transparent: true,
      opacity: 0.6,
      emissive: 0x00a3ff,
      emissiveIntensity: 0.5,
    });

    // Interaction state
    let isRaining = false;
    let isHovered = false;

    // Add lighting
    const light = new THREE.DirectionalLight(0x00a3ff, 1);
    light.position.set(2, 2, 2);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));

    camera.position.z = 8;

    // Create a raindrop
    const createRaindrop = (cloud: THREE.Object3D) => {
      const raindrop = new THREE.Mesh(raindropGeometry, raindropMaterial);
      // Position raindrop at cloud's position with some random offset
      raindrop.position.x = cloud.position.x + (Math.random() * 2 - 1);
      raindrop.position.y = cloud.position.y - 0.5;
      raindrop.position.z = cloud.position.z + (Math.random() * 2 - 1);
      scene.add(raindrop);
      raindrops.push(raindrop);
      return raindrop;
    };

    // Handle mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      const rect = mountRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      const vector = new THREE.Vector3(x, y, 0.5);
      vector.unproject(camera);
      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      const pos = camera.position.clone().add(dir.multiplyScalar(distance));
      
      isHovered = cloudGroup.children.some(cloud => 
        pos.distanceTo(cloud.position) < 1.5
      );
    };

    // Handle click
    const handleClick = () => {
      if (isHovered) {
        isRaining = !isRaining;
      }
    };

    mountRef.current.addEventListener('mousemove', handleMouseMove);
    mountRef.current.addEventListener('click', handleClick);

    const animate = () => {
      requestAnimationFrame(animate);

      // Move cloud group from right to left
      cloudGroup.position.x -= 0.01;
      if (cloudGroup.position.x < -10) {
        cloudGroup.position.x = 5;
      }

      // Handle rain animation
      if (isRaining || isHovered) {
        // Create raindrops from each cloud
        cloudGroup.children.forEach(cloud => {
          if (Math.random() > 0.9) { // Adjust this value to control rain intensity
            createRaindrop(cloud);
          }
        });
      }

      // Animate existing raindrops
      for (let i = raindrops.length - 1; i >= 0; i--) {
        const raindrop = raindrops[i];
        raindrop.position.y -= 0.1; // Increased falling speed
        
        // Remove raindrops that have fallen below the view
        if (raindrop.position.y < -5) {
          scene.remove(raindrop);
          raindrops.splice(i, 1);
        }
      }

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeEventListener('mousemove', handleMouseMove);
      mountRef.current?.removeEventListener('click', handleClick);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-[200px] cursor-pointer" />;
};