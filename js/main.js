/* ==========================================================================
   24 COLORES SIN FALLOS DE TRANSICIÓN Y CON PÉTALOS TRASEROS ILUMINADOS
   ========================================================================== */
const COLORS = [
  { name: "Rojo Carmesí",    main: "#e01e5a", mid: "#b51244", back: "#d11952", light: "#ff7aa2", glow: "rgba(255, 46, 108, 0.85)" },
  { name: "Rosa Intenso",    main: "#ff3d7f", mid: "#c91e5a", back: "#eb2f70", light: "#ff9ebb", glow: "rgba(255, 77, 136, 0.85)" },
  { name: "Fucsia Brillante",main: "#d9048e", mid: "#9e0267", back: "#c40480", light: "#ff78ce", glow: "rgba(255, 25, 179, 0.85)" },
  { name: "Coral",           main: "#ff5238", mid: "#c42f19", back: "#eb4228", light: "#ffa394", glow: "rgba(255, 94, 66, 0.85)" },
  { name: "Durazno",         main: "#ff7b3b", mid: "#c75118", back: "#ed6b2b", light: "#ffc299", glow: "rgba(255, 138, 77, 0.85)" },
  { name: "Naranja Ámbar",   main: "#f57c00", mid: "#b85600", back: "#e06d00", light: "#ffc266", glow: "rgba(255, 145, 0, 0.85)" },
  { name: "Oro",             main: "#eab308", mid: "#a67902", back: "#d9a306", light: "#ffe97d", glow: "rgba(255, 209, 26, 0.85)" },
  { name: "Amarillo Sol",    main: "#facc15", mid: "#b89006", back: "#e6b80e", light: "#fff59e", glow: "rgba(255, 230, 66, 0.85)" },
  { name: "Verde Lima",      main: "#65a30d", mid: "#3f6905", back: "#579108", light: "#bef264", glow: "rgba(132, 204, 22, 0.85)" },
  { name: "Verde Esmeralda", main: "#10b981", mid: "#067a54", back: "#0ca673", light: "#6ee7b7", glow: "rgba(16, 219, 148, 0.85)" },
  { name: "Verde Jade",      main: "#22c55e", mid: "#15803d", back: "#1cb353", light: "#86efac", glow: "rgba(34, 197, 94, 0.85)" },
  { name: "Menta",           main: "#14b8a6", mid: "#0d7a6e", back: "#11a393", light: "#99f6e4", glow: "rgba(45, 212, 191, 0.85)" },
  { name: "Turquesa",        main: "#06b6d4", mid: "#087b91", back: "#07a3be", light: "#7dd3fc", glow: "rgba(34, 211, 238, 0.85)" },
  { name: "Azul Celeste",    main: "#0ea5e9", mid: "#0369a1", back: "#0992d1", light: "#93c5fd", glow: "rgba(56, 189, 248, 0.85)" },
  { name: "Azul Real",       main: "#3b82f6", mid: "#1d4ed8", back: "#296ef2", light: "#93c5fd", glow: "rgba(59, 130, 246, 0.85)" },
  { name: "Azul Zafiro",     main: "#2563eb", mid: "#1e3a8a", back: "#1f54cc", light: "#60a5fa", glow: "rgba(56, 128, 255, 0.85)" },
  { name: "Índigo",          main: "#6366f1", mid: "#3730a3", back: "#5254e8", light: "#a5b4fc", glow: "rgba(114, 117, 255, 0.85)" },
  { name: "Violeta",         main: "#8b5cf6", mid: "#5b21b6", back: "#7c4dff", light: "#c4b5fd", glow: "rgba(155, 107, 255, 0.85)" },
  { name: "Lavanda",         main: "#a855f7", mid: "#6b21a8", back: "#9333ea", light: "#e9d5ff", glow: "rgba(184, 102, 255, 0.85)" },
  { name: "Púrpura",         main: "#c026d3", mid: "#701a75", back: "#a81cba", light: "#f0abfc", glow: "rgba(217, 70, 239, 0.85)" },
  { name: "Magenta",         main: "#db2777", mid: "#831843", back: "#c41d68", light: "#f472b6", glow: "rgba(244, 63, 148, 0.85)" },
  { name: "Rosa Pastel",     main: "#fb7185", mid: "#be123c", back: "#f43f5e", light: "#ffe4e6", glow: "rgba(253, 164, 175, 0.85)" },
  { name: "Blanco Perla",    main: "#e2e8f0", mid: "#94a3b8", back: "#cbd5e1", light: "#ffffff", glow: "rgba(255, 255, 255, 0.85)" },
  { name: "Vino Borgoña",    main: "#be123c", mid: "#7a0926", back: "#a60f35", light: "#fb7185", glow: "rgba(225, 29, 72, 0.85)" }
];

// Elegir color aleatorio inmediatamente al cargar
let index = Math.floor(Math.random() * COLORS.length);
const root = document.documentElement.style;

function updateRoseColor(newIndex, burst = false) {
  index = (newIndex + COLORS.length) % COLORS.length;
  const c = COLORS[index];

  // Cambia todos los pétalos simultáneamente
  root.setProperty("--c-main", c.main);
  root.setProperty("--c-mid", c.mid);
  root.setProperty("--c-back", c.back);
  root.setProperty("--c-light", c.light);
  root.setProperty("--c-glow", c.glow);

  if (burst) {
    const roseEl = document.getElementById("rose");
    if (roseEl) {
      const roseRect = roseEl.getBoundingClientRect();
      createSparkles(roseRect.left + 100, roseRect.top + 95, 30);
    }
  }
}

// Aplicar el color aleatorio de inmediato
updateRoseColor(index, false);

// Bloqueo total de zoom en móviles (doble toque, pinch, gestos)
document.addEventListener('gesturestart', (e) => e.preventDefault(), { passive: false });
document.addEventListener('gesturechange', (e) => e.preventDefault(), { passive: false });
document.addEventListener('gestureend', (e) => e.preventDefault(), { passive: false });

let lastTouchTime = 0;
document.addEventListener('touchstart', (e) => {
  if (e.touches.length > 1) {
    e.preventDefault(); // Evitar zoom con dos o más dedos
  }
}, { passive: false });

document.addEventListener('touchend', (e) => {
  const now = performance.now();
  if (now - lastTouchTime <= 300) {
    e.preventDefault(); // Evitar zoom por doble toque rápido
  }
  lastTouchTime = now;
}, { passive: false });

// Interacción en pantalla completa sin botones molestos:
// - Mitad izquierda (0% a 50% de la pantalla) retrocede de color
// - Mitad derecha (50% a 100%) o tocar la rosa avanza de color
function handleTrigger(clientX, clientY, target) {
  const roseEl = document.getElementById("rose");
  if (roseEl && roseEl.contains(target)) {
    updateRoseColor(index + 1, true);
    createSparkles(clientX, clientY, 34);
  } else if (clientX < window.innerWidth * 0.5) {
    updateRoseColor(index - 1, true);
    createSparkles(clientX, clientY, 22);
  } else {
    updateRoseColor(index + 1, true);
    createSparkles(clientX, clientY, 22);
  }
}

window.addEventListener("click", (e) => {
  handleTrigger(e.clientX, e.clientY, e.target);
});

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") updateRoseColor(index - 1, true);
  if (e.key === "ArrowRight") updateRoseColor(index + 1, true);
});

/* ==========================================================================
   CANVAS DE PARTÍCULAS
   ========================================================================== */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let w = (canvas.width = window.innerWidth);
let h = (canvas.height = window.innerHeight);

window.addEventListener("resize", () => {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
});

const particles = [];
const bgStars = [];
const fireflies = [];
const shootingStars = [];

// Estrellas fijas titilantes en el cielo nocturno
for (let i = 0; i < 90; i++) {
  bgStars.push({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 1.4 + 0.3,
    alpha: Math.random(),
    da: (Math.random() * 0.015 + 0.004) * (Math.random() < 0.5 ? 1 : -1)
  });
}

// Luciérnagas mágicas que suben suavemente
for (let i = 0; i < 28; i++) {
  fireflies.push({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 2.2 + 0.8,
    alpha: Math.random() * 0.8 + 0.2,
    vy: -(Math.random() * 0.45 + 0.15),
    vx: (Math.random() - 0.5) * 0.3,
    angle: Math.random() * Math.PI * 2
  });
}

// Estrellas fugaces ocasionales
function spawnShootingStar() {
  if (shootingStars.length < 2 && Math.random() < 0.012) {
    shootingStars.push({
      x: Math.random() * (w * 0.8) + w * 0.1,
      y: Math.random() * (h * 0.35),
      len: Math.random() * 70 + 50,
      speed: Math.random() * 6 + 7,
      alpha: 1
    });
  }
}

function createSparkles(x, y, count = 30) {
  const c = COLORS[index];
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 4.2 + 0.8;
    particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 0.6,
      r: Math.random() * 3 + 1.2,
      alpha: 1,
      decay: Math.random() * 0.02 + 0.012,
      color: i % 2 === 0 ? c.light : c.main
    });
  }
}

/* ==========================================================================
   ANIMACIÓN DE PÉTALOS DE LA ROSA (RESPIRACIÓN)
   ========================================================================== */
const bloomPetals = document.querySelectorAll(".petals > div");

function updateRoseBloom(now) {
  const t = now * 0.0018;
  const s = (Math.sin(t) + 1) * 0.5;

  if (bloomPetals[3]) {
    const deg4 = -15 - s * 4;
    bloomPetals[3].style.transform = `translate3d(0, 0, 0) rotate(${deg4.toFixed(3)}deg)`;
  }
  if (bloomPetals[4]) {
    const deg5 = 15 + s * 4;
    bloomPetals[4].style.transform = `translate3d(0, 0, 0) rotate(${deg5.toFixed(3)}deg)`;
  }
  if (bloomPetals[5]) {
    const deg6 = -6 - s * 3;
    bloomPetals[5].style.transform = `translate3d(0, 0, 0) rotate(${deg6.toFixed(3)}deg)`;
  }
  if (bloomPetals[6]) {
    const deg7 = 6 + s * 3;
    bloomPetals[6].style.transform = `translate3d(0, 0, 0) rotate(${deg7.toFixed(3)}deg)`;
  }
}

/* ==========================================================================
   SISTEMA DE PÉTALOS CAÍDOS:
   - Inicia con 2 pétalos ya caídos en el suelo.
   - Cada pétalo cae donde tenga que caer (posición orgánica no fija).
   - Donde cae, mantiene su lugar en el suelo.
   - El pétalo más antiguo de los que estaban en el suelo se desvanece y desaparece.
   - En pantalla siempre quedan exactamente 2 pétalos en reposo.
   ========================================================================== */
const deadPetalsContainer = document.getElementById("deadPetals");

// Lista de pétalos descansando en el suelo (máximo 2 en reposo)
const restingPetals = [];

function createPetalNode(x, y, rot, opacity) {
  const el = document.createElement("div");
  el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) rotate(${rot.toFixed(2)}deg)`;
  el.style.opacity = opacity.toFixed(3);
  if (deadPetalsContainer) {
    deadPetalsContainer.appendChild(el);
  }
  return el;
}

// 1. Inicializar con dos pétalos naturales ya caídos en el suelo
function initGroundPetals() {
  if (!deadPetalsContainer) return;
  deadPetalsContainer.innerHTML = "";
  restingPetals.length = 0;

  // Pétalo inicial izquierdo con variación natural
  const x1 = 70 + (Math.random() * 14 - 7);
  const y1 = 388 + Math.random() * 5;
  const rot1 = -18 + (Math.random() * 14 - 7);
  restingPetals.push(createPetalNode(x1, y1, rot1, 0.55));

  // Pétalo inicial derecho con variación natural
  const x2 = 106 + (Math.random() * 14 - 7);
  const y2 = 389 + Math.random() * 5;
  const rot2 = 16 + (Math.random() * 14 - 7);
  restingPetals.push(createPetalNode(x2, y2, rot2, 0.55));
}

let fallTurn = 0;
let fallCycle = {
  el: null,
  oldEl: null,
  startX: 100,
  startY: 118,
  targetX: 80,
  targetY: 390,
  targetRot: -15,
  swayAmp: 16,
  swayFreq: 2.5,
  duration: 5400,
  elapsed: 0,
  phase: "waiting",
  waitDuration: 2400,
  waitElapsed: 0
};

function launchNextPetal() {
  // El pétalo más antiguo de los caídos es el que se desvanecerá
  const oldPetal = restingPetals.length > 0 ? restingPetals[0] : null;

  fallTurn++;
  const toLeftSide = fallTurn % 2 === 1;

  // Posición orgánica en el suelo: no fija, cae naturalmente donde el viento lo lleve
  const targetX = toLeftSide
    ? (56 + Math.random() * 32)   // Entre 56px y 88px a la izquierda del tallo
    : (102 + Math.random() * 34); // Entre 102px y 136px a la derecha del tallo

  const targetY = 386 + Math.random() * 8; // Altura natural en el suelo
  const targetRot = (toLeftSide ? -1 : 1) * (8 + Math.random() * 32); // Inclinación libre

  // Desprendimiento desde la flor
  const startX = toLeftSide ? (96 + Math.random() * 12) : (84 + Math.random() * 12);
  const startY = 116 + Math.random() * 6;

  const newPetal = createPetalNode(startX, startY, -20, 0);

  fallCycle = {
    el: newPetal,
    oldEl: oldPetal,
    startX,
    startY,
    targetX,
    targetY,
    targetRot,
    swayAmp: (toLeftSide ? 1 : -1) * (12 + Math.random() * 8),
    swayFreq: 2.2 + Math.random() * 0.6,
    duration: 5200 + Math.random() * 800,
    elapsed: 0,
    phase: "falling",
    waitDuration: 2800 + Math.random() * 800,
    waitElapsed: 0
  };
}

function updatePetalsCycle(dt) {
  if (fallCycle.phase === "waiting") {
    fallCycle.waitElapsed += dt;
    if (fallCycle.waitElapsed >= fallCycle.waitDuration) {
      launchNextPetal();
    }
    return;
  }

  if (fallCycle.phase === "falling" && fallCycle.el) {
    fallCycle.elapsed += dt;
    const progress = Math.min(1, fallCycle.elapsed / fallCycle.duration);

    // Trayectoria mecida por el viento hacia donde tenga que caer
    const sway = Math.sin(progress * Math.PI * fallCycle.swayFreq) * fallCycle.swayAmp * (1 - progress * 0.35);
    const currX = fallCycle.startX + (fallCycle.targetX - fallCycle.startX) * progress + sway;
    const currY = fallCycle.startY + (fallCycle.targetY - fallCycle.startY) * progress;
    const currRot = -20 + Math.sin(progress * Math.PI * fallCycle.swayFreq) * 22 + (fallCycle.targetRot + 20) * progress;

    // Opacidad de entrada suave
    const newAlpha = progress < 0.15 ? (progress / 0.15) * 0.55 : 0.55;
    fallCycle.el.style.transform = `translate3d(${currX.toFixed(2)}px, ${currY.toFixed(2)}px, 0) rotate(${currRot.toFixed(2)}deg)`;
    fallCycle.el.style.opacity = newAlpha.toFixed(3);

    // Conforme aterriza en el suelo, el pétalo más antiguo se desvanece suavemente
    if (fallCycle.oldEl) {
      if (progress > 0.65) {
        const fadeProgress = (progress - 0.65) / 0.35;
        const oldAlpha = 0.55 * (1 - fadeProgress);
        fallCycle.oldEl.style.opacity = Math.max(0, oldAlpha).toFixed(3);
      }
    }

    // ATERRIZAJE: Mantiene exactamente el lugar donde cayó
    if (progress >= 1) {
      // Eliminar del DOM el pétalo antiguo que ya se desvaneció
      if (fallCycle.oldEl) {
        if (fallCycle.oldEl.parentNode) {
          fallCycle.oldEl.parentNode.removeChild(fallCycle.oldEl);
        }
        const idx = restingPetals.indexOf(fallCycle.oldEl);
        if (idx !== -1) {
          restingPetals.splice(idx, 1);
        }
      }

      // Fijar el nuevo pétalo exactamente donde cayó en el suelo
      fallCycle.el.style.transform = `translate3d(${fallCycle.targetX.toFixed(2)}px, ${fallCycle.targetY.toFixed(2)}px, 0) rotate(${fallCycle.targetRot.toFixed(2)}deg)`;
      fallCycle.el.style.opacity = "0.55";
      restingPetals.push(fallCycle.el);

      // Garantizar que solo haya 2 pétalos descansando en pantalla
      while (restingPetals.length > 2) {
        const excess = restingPetals.shift();
        if (excess && excess.parentNode) {
          excess.parentNode.removeChild(excess);
        }
      }

      // Entrar en fase de espera (solo 2 pétalos en pantalla)
      fallCycle.phase = "waiting";
      fallCycle.waitElapsed = 0;
      fallCycle.el = null;
      fallCycle.oldEl = null;
    }
  }
}

// Rastro de hadas al mover mouse o deslizar el dedo
let lastTrail = 0;
function handlePointerMove(x, y) {
  const now = performance.now();
  if (now - lastTrail > 10) {
    lastTrail = now;
    const c = COLORS[index];
    particles.push({
      x,
      y,
      vx: (Math.random() - 0.5) * 1.1,
      vy: (Math.random() - 0.5) * 1.1 - 0.3,
      r: Math.random() * 2 + 0.8,
      alpha: 0.85,
      decay: 0.025,
      color: Math.random() < 0.5 ? c.light : "#ffffff"
    });
  }
}

window.addEventListener("mousemove", (e) => handlePointerMove(e.clientX, e.clientY));
window.addEventListener("touchmove", (e) => {
  if (e.touches && e.touches[0]) {
    handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
  }
}, { passive: true });

let lastFrameTime = performance.now();

function animate(now = performance.now()) {
  const rawDt = now - lastFrameTime;
  const dt = Math.min(32, Math.max(1, rawDt));
  const step = dt / 16.6667;
  lastFrameTime = now;

  ctx.clearRect(0, 0, w, h);
  const c = COLORS[index];

  updateRoseBloom(now);
  updatePetalsCycle(dt);

  // 1. Estrellas del fondo
  for (let i = 0; i < bgStars.length; i++) {
    const s = bgStars[i];
    s.alpha += s.da * step;
    if (s.alpha > 0.95 || s.alpha < 0.15) s.da *= -1;

    ctx.save();
    ctx.globalAlpha = Math.max(0.1, Math.min(1, s.alpha));
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  // 2. Estrellas fugaces
  spawnShootingStar();
  for (let i = shootingStars.length - 1; i >= 0; i--) {
    const st = shootingStars[i];
    st.x -= st.speed * step;
    st.y += st.speed * 0.45 * step;
    st.alpha -= 0.018 * step;

    if (st.alpha <= 0) {
      shootingStars.splice(i, 1);
      continue;
    }

    ctx.save();
    const grad = ctx.createLinearGradient(
      st.x,
      st.y,
      st.x + st.len,
      st.y - st.len * 0.45
    );
    grad.addColorStop(0, `rgba(255, 255, 255, ${st.alpha})`);
    grad.addColorStop(0.4, c.light);
    grad.addColorStop(1, "rgba(255, 255, 255, 0)");

    ctx.strokeStyle = grad;
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.moveTo(st.x, st.y);
    ctx.lineTo(st.x + st.len, st.y - st.len * 0.45);
    ctx.stroke();
    ctx.restore();
  }

  // 3. Luciérnagas
  for (let i = 0; i < fireflies.length; i++) {
    const f = fireflies[i];
    f.angle += 0.02 * step;
    f.y += f.vy * step;
    f.x += (Math.sin(f.angle) * 0.35 + f.vx) * step;

    if (f.y < -15) {
      f.y = h + 15;
      f.x = Math.random() * w;
    }

    ctx.save();
    ctx.globalAlpha = f.alpha;
    ctx.fillStyle = c.light;
    ctx.shadowBlur = 12;
    ctx.shadowColor = c.main;
    ctx.beginPath();
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  // 4. Destellos al cambiar o tocar
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.vx * step;
    p.y += p.vy * step;
    p.vy += 0.04 * step;
    p.alpha -= p.decay * step;

    if (p.alpha <= 0) {
      particles.splice(i, 1);
      continue;
    }

    ctx.save();
    ctx.globalAlpha = p.alpha;
    ctx.fillStyle = p.color;
    ctx.shadowBlur = 12;
    ctx.shadowColor = c.main;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  requestAnimationFrame(animate);
}

// Inicialización
window.addEventListener("DOMContentLoaded", () => {
  initGroundPetals();
});

window.addEventListener("load", () => {
  initGroundPetals();
  lastFrameTime = performance.now();
  animate();
});
