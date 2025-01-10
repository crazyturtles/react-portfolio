import { Moon, Sun } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import * as THREE from "three";

const ThemeToggle = () => {
	const [darkMode, setDarkMode] = useState(false);
	const containerRef = useRef();

	useEffect(() => {
		if (
			localStorage.theme === "dark" ||
			(!localStorage.theme &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			setDarkMode(true);
			document.documentElement.classList.add("dark");
		}
	}, []);

	const toggleTheme = () => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000,
		);
		const renderer = new THREE.WebGLRenderer({ alpha: true });

		renderer.setSize(window.innerWidth, window.innerHeight);
		containerRef.current.appendChild(renderer.domElement);
		camera.position.z = 5;

		const geometry = new THREE.SphereGeometry(0.15, 32, 32);
		const spheres = [];
		const sphereCount = 500;

		for (let i = 0; i < sphereCount; i++) {
			const material = new THREE.MeshBasicMaterial({
				color: darkMode ? 0xffffff : 0x030712,
				transparent: true,
				opacity: 0,
				blending: THREE.AdditiveBlending,
			});

			const sphere = new THREE.Mesh(geometry, material);
			sphere.position.x = (Math.random() - 0.5) * 15;
			sphere.position.y = (Math.random() - 0.5) * 15;
			sphere.position.z = (Math.random() - 0.5) * 15;

			sphere.velocity = new THREE.Vector3(
				(Math.random() - 0.5) * 0.1,
				(Math.random() - 0.5) * 0.1,
				(Math.random() - 0.5) * 0.1,
			);

			spheres.push(sphere);
			scene.add(sphere);
		}

		let animationFrame;
		const startTime = performance.now();
		const phase1Duration = 4000;
		const phase2Duration = 10;
		const phase3Duration = 2000;
		const totalDuration = phase1Duration + phase2Duration + phase3Duration;

		const animate = (currentTime) => {
			const elapsed = currentTime - startTime;
			const progress = Math.min(elapsed / totalDuration, 1);

			// Phase 1: Spheres appear and expand (4s)
			if (elapsed < phase1Duration) {
				const phaseProgress = elapsed / phase1Duration;
				for (const sphere of spheres) {
					sphere.position.add(sphere.velocity);
					sphere.scale.setScalar(1 + phaseProgress * 3);
					sphere.material.opacity = phaseProgress * 0.8;
				}
			}
			// Phase 2: Theme switch (1s)
			else if (
				elapsed < phase1Duration + phase2Duration &&
				!document.documentElement.classList.contains(
					darkMode ? "light" : "dark",
				)
			) {
				if (darkMode) {
					document.documentElement.classList.remove("dark");
					localStorage.theme = "light";
				} else {
					document.documentElement.classList.add("dark");
					localStorage.theme = "dark";
				}
				setDarkMode(!darkMode);
			}
			// Phase 3: Spheres fade out (2s)
			else if (elapsed < totalDuration) {
				const phaseProgress =
					(elapsed - (phase1Duration + phase2Duration)) / phase3Duration;
				for (const sphere of spheres) {
					sphere.position.add(sphere.velocity);
					sphere.material.opacity = 0.8 * (1 - phaseProgress);
				}
			}
			// Animation complete
			else {
				cancelAnimationFrame(animationFrame);
				containerRef.current.removeChild(renderer.domElement);
				renderer.dispose();
				geometry.dispose();
				for (const sphere of spheres) sphere.material.dispose();
				return;
			}

			renderer.render(scene, camera);
			animationFrame = requestAnimationFrame(animate);
		};

		animate(startTime);
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