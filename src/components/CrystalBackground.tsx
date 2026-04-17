import { useEffect, useRef } from "react";
import * as THREE from "three";

type Props = { isLit?: boolean; };

export default function CrystalBackground({ isLit = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // QUAN TRỌNG: setClearColor alpha là 0 để canvas trong suốt hoàn toàn
    renderer.setClearColor(0x000000, 0); 
    container.appendChild(renderer.domElement);

    // --- Logic Texture & Particles giữ nguyên của bạn ---
    const flowerCanvas = document.createElement("canvas");
    flowerCanvas.width = 128; flowerCanvas.height = 128;
    const ctx = flowerCanvas.getContext("2d")!;
    ctx.translate(64, 64);
    for (let i = 0; i < 5; i++) {
      ctx.rotate((Math.PI * 2) / 5);
      ctx.beginPath(); ctx.fillStyle = "#f9a8d4"; ctx.moveTo(0, 0);
      ctx.bezierCurveTo(18, -12, 18, -35, 0, -42); ctx.bezierCurveTo(-18, -35, -18, -12, 0, 0); ctx.fill();
    }
    const flowerTexture = new THREE.CanvasTexture(flowerCanvas);

    const dotCanvas = document.createElement("canvas");
    dotCanvas.width = 64; dotCanvas.height = 64;
    const dctx = dotCanvas.getContext("2d")!;
    const grad = dctx.createRadialGradient(32, 32, 0, 32, 32, 28);
    grad.addColorStop(0, "rgba(255,255,255,1)"); grad.addColorStop(0.3, "rgba(125,211,252,.95)"); grad.addColorStop(1, "rgba(125,211,252,0)");
    dctx.fillStyle = grad; dctx.beginPath(); dctx.arc(32, 32, 28, 0, Math.PI * 2); dctx.fill();
    const dotTexture = new THREE.CanvasTexture(dotCanvas);

    const darkCount = 180;
    const darkGeo = new THREE.BufferGeometry();
    const darkPos = new Float32Array(darkCount * 3);
    for (let i = 0; i < darkCount; i++) {
      darkPos[i*3] = (Math.random()-0.5)*120; darkPos[i*3+1] = (Math.random()-0.5)*120; darkPos[i*3+2] = (Math.random()-0.5)*80;
    }
    darkGeo.setAttribute("position", new THREE.BufferAttribute(darkPos, 3));
    const darkMat = new THREE.PointsMaterial({ map: dotTexture, size: 2.3, transparent: true, opacity: 0.95, depthWrite: false, blending: THREE.AdditiveBlending });
    const darkParticles = new THREE.Points(darkGeo, darkMat);
    scene.add(darkParticles);

    const flowerCount = 35;
    const flowerGeo = new THREE.BufferGeometry();
    const flowerPos = new Float32Array(flowerCount * 3);
    for (let i = 0; i < flowerCount; i++) {
      flowerPos[i*3] = (Math.random()-0.5)*100; flowerPos[i*3+1] = (Math.random()-0.5)*100; flowerPos[i*3+2] = (Math.random()-0.5)*30;
    }
    flowerGeo.setAttribute("position", new THREE.BufferAttribute(flowerPos, 3));
    const flowerMat = new THREE.PointsMaterial({ map: flowerTexture, transparent: true, alphaTest: 0.01, size: 6, opacity: 0.95, depthWrite: false });
    const flowers = new THREE.Points(flowerGeo, flowerMat);
    scene.add(flowers);

    darkParticles.visible = !isLit;
    flowers.visible = isLit;

    let frame: number;
    let time = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      time += 0.01;
      if (!isLit) {
        const arr = darkGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < darkCount; i++) {
          arr[i*3] += Math.sin(time + i) * 0.02;
          arr[i*3+1] += Math.cos(time * 0.8 + i) * 0.015;
          if (arr[i*3] > 60) arr[i*3] = -60;
        }
        darkGeo.attributes.position.needsUpdate = true;
        darkParticles.rotation.y += 0.0015;
      } else {
        const arr = flowerGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < flowerCount; i++) {
          arr[i*3+1] -= 0.045;
          arr[i*3] += Math.sin(Date.now() * 0.0008 + i) * 0.025;
          if (arr[i*3+1] < -55) arr[i*3+1] = 55;
        }
        flowerGeo.attributes.position.needsUpdate = true;
      }
      renderer.render(scene, camera);
    };
    animate();

    const resize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      renderer.dispose();
      darkGeo.dispose(); darkMat.dispose();
      flowerGeo.dispose(); flowerMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isLit]);

  return (
    <>
      {/* LỚP 1: CHỈ CHỨA MÀU NỀN GRADIENT (NẰM DƯỚI CÙNG) */}
      <div 
        className="fixed inset-0 transition-all duration-1000 -z-20"
        style={{
          background: isLit
            ? `radial-gradient(circle at top right, rgba(255,220,240,.9), transparent 35%),
               radial-gradient(circle at left center, rgba(255,245,220,.9), transparent 35%),
               radial-gradient(circle at bottom right, rgba(255,235,245,.9), transparent 40%),
               linear-gradient(135deg,#ffffff 0%,#fffafc 35%,#fff5f7 70%,#ffffff 100%)`
            : `radial-gradient(circle at top left, rgba(56,189,248,.12), transparent 25%),
               radial-gradient(circle at bottom right, rgba(168,85,247,.10), transparent 25%),
               linear-gradient(135deg,#020617 0%,#050816 45%,#000000 100%)`,
        }}
      />

      {/* LỚP 2: CHỨA CANVAS THREE.JS (NẰM TRÊN LỚP MÀU) */}
      <div
        ref={ref}
        className="fixed inset-0 pointer-events-none -z-10"
        style={{ width: "100vw", height: "100vh" }}
      />
    </>
  );
}