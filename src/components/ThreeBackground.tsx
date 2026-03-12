"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if(!canvas) return;

        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(window.innerWidth, window.innerHeight);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.set(0, 0, 5);

        const pCount = 1800;
        const positions = new Float32Array(pCount * 3);
        for (let i = 0; i < pCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 14;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
        };
        const pGeo = new THREE.BufferGeometry();
        pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        const pMat = new THREE.PointsMaterial({ color: 0x00f5c4, size: 0.018, transparent: true, opacity: 0.5 });
        const particles = new THREE.Points(pGeo, pMat);
        scene.add(particles);

        const torusGeo = new THREE.TorusGeometry(1.4, 0.45, 18, 80);
        const torusMat = new THREE.MeshBasicMaterial({ color: 0x7b61ff, wireframe: true, transparent: true, opacity: 0.08 });
        const torus = new THREE.Mesh(torusGeo, torusMat);
        torus.position.set(3.2, -0.5, -1.5);
        scene.add(torus);

        const icoGeo = new THREE.IcosahedronGeometry(0.85, 1);
        const icoMat = new THREE.MeshBasicMaterial({ color: 0x00f5c4, wireframe: true, transparent: true, opacity: 0.07 });
        const ico = new THREE.Mesh(icoGeo, icoMat);
        ico.position.set(-3.5, 0.8, -0.5);
        scene.add(ico);

        let mouseX = 0;
        let mouseY = 0;
        const onMouseMove = (e: MouseEvent) => {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
            mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
        };
        document.addEventListener("mousemove", onMouseMove);
        
        const onResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        document.addEventListener("resize", onResize);

        let t = 0;
        let animId: number;
        const animate = () => {
            animId = requestAnimationFrame(animate);
            t += 0.005;

            particles.rotation.y += 0.0008
            particles.rotation.x += 0.0003

            torus.rotation.x += 0.003
            torus.rotation.y += 0.005
            torus.position.y = -0.5 + Math.sin(t * 0.8) * 0.15

            ico.rotation.x += 0.004
            ico.rotation.z += 0.003
            ico.position.y = 0.8 + Math.sin(t * 0.6 + 1) * 0.12

            camera.position.x += (mouseX * 0.3 - camera.position.x) * 0.03
            camera.position.y += (-mouseY * 0.2 - camera.position.y) * 0.03

            renderer.render(scene, camera);
        };
        animate();

        return () => {
            cancelAnimationFrame(animId);
            document.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("resize", onResize);
            renderer.dispose();
            pGeo.dispose();
            pMat.dispose();
            torusGeo.dispose();
            torusMat.dispose();
            icoGeo.dispose();
            icoMat.dispose();
        };
    }, [])

    return (
        <canvas 
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0, left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 0,
                opacity: 0.7,
            }}
        />
    );
};