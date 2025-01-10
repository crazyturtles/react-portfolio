import { Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    // Initial theme check
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);
    
    for(let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: darkMode ? 0xffffff : 0x000000,
    });
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    particlesRef.current = particles;
    
    camera.position.z = 5;
    sceneRef.current = { scene, camera, renderer };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.x += 0.001;
      particles.rotation.y += 0.002;
      renderer.render(scene, camera);
    };
    
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      scene.remove(particles);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, [darkMode]);

  const toggleTheme = () => {
    // Update theme
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
    
    // Animate particles
    if (particlesRef.current) {
      particlesRef.current.material.color.set(darkMode ? 0x000000 : 0xffffff);
      
      // Add swirl animation
      const duration = 1000; // ms
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        particlesRef.current.rotation.y += 0.1 * (1 - progress);
        particlesRef.current.rotation.x += 0.05 * (1 - progress);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      animate();
    }
    
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div 
        ref={containerRef} 
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 40 }}
      />
      <button
        onClick={toggleTheme}
        className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-surface-dark relative z-50"
        aria-label="Toggle dark mode"
        type="button"
      >
        {darkMode ? (
          <Sun className="h-5 w-5 text-primary dark:text-primary-dark" />
        ) : (
          <Moon className="h-5 w-5 text-primary dark:text-primary-dark" />
        )}
      </button>
    </>
  );
};

export default ThemeToggle;
