const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const loader = document.getElementById("loader");
const navLinks = document.getElementById("navLinks");
const menuToggle = document.getElementById("menuToggle");
const scrollProgress = document.getElementById("scrollProgress");
const cursorGlow = document.getElementById("cursorGlow");
const particleField = document.getElementById("particleField");

const safeGsap = window.gsap;
const safeScrollTrigger = window.ScrollTrigger;

function hideLoader() {
  if (!loader) return;
  if (safeGsap && !prefersReducedMotion) {
    safeGsap.to(loader, {
      opacity: 0,
      duration: 0.7,
      delay: 0.25,
      ease: "power2.out",
      onComplete: () => loader.classList.add("is-hidden")
    });
  } else {
    loader.classList.add("is-hidden");
  }
}

window.addEventListener("load", hideLoader);
window.setTimeout(hideLoader, 2200);

if (window.lucide) {
  window.lucide.createIcons();
}

function createParticles() {
  if (!particleField) return;

  const amount = window.innerWidth < 700 ? 22 : 42;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i += 1) {
    const particle = document.createElement("span");
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.setProperty("--duration", `${9 + Math.random() * 14}s`);
    particle.style.setProperty("--drift", `${-90 + Math.random() * 180}px`);
    particle.style.animationDelay = `${Math.random() * -16}s`;
    fragment.appendChild(particle);
  }

  particleField.appendChild(fragment);
}

createParticles();

function updateScrollProgress() {
  if (!scrollProgress) return;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  scrollProgress.style.width = `${progress}%`;
}

window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);
updateScrollProgress();

if (cursorGlow && window.matchMedia("(pointer: fine)").matches && !prefersReducedMotion) {
  let glowX = 0;
  let glowY = 0;
  let targetX = 0;
  let targetY = 0;

  window.addEventListener("pointermove", (event) => {
    targetX = event.clientX;
    targetY = event.clientY;
    cursorGlow.style.opacity = "1";
  }, { passive: true });

  const renderGlow = () => {
    glowX += (targetX - glowX) * 0.18;
    glowY += (targetY - glowY) * 0.18;
    cursorGlow.style.transform = `translate3d(${glowX - 130}px, ${glowY - 130}px, 0)`;
    requestAnimationFrame(renderGlow);
  };

  renderGlow();
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuToggle.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    document.body.classList.toggle("menu-open", isOpen);
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();

    navLinks?.classList.remove("is-open");
    menuToggle?.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");

    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start"
    });
  });
});

const sections = Array.from(document.querySelectorAll("main section[id]"));
const navigationLinks = Array.from(document.querySelectorAll(".nav-links a"));

const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    navigationLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
    });
  });
}, {
  rootMargin: "-38% 0px -52% 0px",
  threshold: 0.01
});

sections.forEach((section) => activeObserver.observe(section));

function initGsapAnimations() {
  if (!safeGsap || prefersReducedMotion) {
    document.querySelectorAll(".skill-card").forEach((card) => {
      const bar = card.querySelector(".skill-bar span");
      if (bar) bar.style.width = `${card.dataset.level || 0}%`;
    });
    return;
  }

  if (safeScrollTrigger) {
    safeGsap.registerPlugin(safeScrollTrigger);
  }

  safeGsap.from(".navbar", {
    y: -40,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out",
    delay: 0.25
  });

  safeGsap.from(".hero .reveal", {
    y: 46,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.11,
    delay: 0.35
  });

  safeGsap.to(".role-strip span", {
    y: -7,
    duration: 2.2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    stagger: {
      each: 0.18,
      from: "center"
    }
  });

  safeGsap.to(".hud-panel", {
    x: 10,
    y: -12,
    duration: 3.8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    stagger: 0.45
  });

  safeGsap.utils.toArray(".section:not(.hero) .reveal").forEach((element) => {
    const animationConfig = {
      y: 54,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out"
    };

    if (safeScrollTrigger) {
      animationConfig.scrollTrigger = {
        trigger: element,
        start: "top 84%"
      };
    }

    safeGsap.from(element, animationConfig);
  });

  safeGsap.utils.toArray(".skill-card").forEach((card) => {
    const level = Number(card.dataset.level || 0);
    const bar = card.querySelector(".skill-bar span");
    if (!bar) return;

    const barConfig = {
      width: `${level}%`,
      duration: 1.25,
      ease: "power3.out"
    };

    if (safeScrollTrigger) {
      barConfig.scrollTrigger = {
        trigger: card,
        start: "top 82%"
      };
    }

    safeGsap.to(bar, barConfig);
  });

  safeGsap.to(".hero-visual", {
    y: -18,
    duration: 3.8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
}

initGsapAnimations();

function initTiltCards() {
  if (prefersReducedMotion || !window.matchMedia("(pointer: fine)").matches) return;

  document.querySelectorAll("[data-tilt]").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 9;
      const rotateX = ((0.5 - (y / rect.height)) * 9);

      card.style.setProperty("--mx", `${(x / rect.width) * 100}%`);
      card.style.setProperty("--my", `${(y / rect.height) * 100}%`);
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

initTiltCards();

function initProjectFilters() {
  const buttons = Array.from(document.querySelectorAll(".filter-btn"));
  const cards = Array.from(document.querySelectorAll(".project-card"));

  if (!buttons.length || !cards.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      buttons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });

      cards.forEach((card) => {
        const match = filter === "all" || card.dataset.category === filter;

        if (!safeGsap || prefersReducedMotion) {
          card.classList.toggle("is-hidden", !match);
          return;
        }

        if (match) {
          card.classList.remove("is-hidden");
          safeGsap.fromTo(card, { opacity: 0, y: 18, scale: 0.97 }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.35,
            ease: "power2.out"
          });
        } else {
          safeGsap.to(card, {
            opacity: 0,
            y: 16,
            scale: 0.96,
            duration: 0.22,
            ease: "power2.out",
            onComplete: () => card.classList.add("is-hidden")
          });
        }
      });
    });
  });
}

initProjectFilters();

function initContactForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  if (!form || !status) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name")?.toString().trim() || "there";
    status.textContent = `Thanks, ${name}. Your message is ready. Use WhatsApp, call, or email to send the project details directly.`;
    form.reset();
  });
}

initContactForm();

function initMagneticButtons() {
  if (prefersReducedMotion || !window.matchMedia("(pointer: fine)").matches) return;

  document.querySelectorAll(".magnetic").forEach((button) => {
    button.addEventListener("pointermove", (event) => {
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      button.style.transform = `translate(${x * 0.08}px, ${y * 0.16}px)`;
    });

    button.addEventListener("pointerleave", () => {
      button.style.transform = "";
    });
  });
}

initMagneticButtons();

function initHeroParallax() {
  if (prefersReducedMotion || !window.matchMedia("(pointer: fine)").matches) return;

  const visual = document.querySelector(".hero-visual");
  const items = document.querySelectorAll(".orbit-tag, .hud-panel, .profile-chip");

  if (!visual || !items.length) return;

  visual.addEventListener("pointermove", (event) => {
    const rect = visual.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    items.forEach((item, index) => {
      const depth = Number(item.dataset.depth || (index % 2 ? -0.12 : 0.12));
      item.style.transform = `translate3d(${x * depth * 120}px, ${y * depth * 120}px, 0)`;
    });
  });

  visual.addEventListener("pointerleave", () => {
    items.forEach((item) => {
      item.style.transform = "";
    });
  });
}

initHeroParallax();

function initThreeHero() {
  const canvas = document.getElementById("heroCanvas");
  const fallback = document.getElementById("canvasFallback");

  if (!canvas || !window.THREE) {
    fallback?.style.setProperty("display", "block");
    return;
  }

  const THREE = window.THREE;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 0, 6.6);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: "high-performance",
    preserveDrawingBuffer: true
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const group = new THREE.Group();
  scene.add(group);

  const geometry = new THREE.IcosahedronGeometry(1.15, 22);
  const material = new THREE.MeshPhysicalMaterial({
    color: 0x78e7ff,
    metalness: 0.48,
    roughness: 0.18,
    transmission: 0.18,
    thickness: 1.1,
    clearcoat: 0.8,
    clearcoatRoughness: 0.18,
    emissive: 0x18124c,
    emissiveIntensity: 0.32
  });

  const sphere = new THREE.Mesh(geometry, material);
  group.add(sphere);

  const wire = new THREE.Mesh(
    geometry,
    new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.12
    })
  );
  wire.scale.setScalar(1.012);
  group.add(wire);

  const ringMaterial = new THREE.MeshBasicMaterial({
    color: 0x58e5ff,
    transparent: true,
    opacity: 0.26,
    side: THREE.DoubleSide
  });

  const ringOne = new THREE.Mesh(new THREE.TorusGeometry(1.62, 0.01, 16, 150), ringMaterial);
  const ringTwo = new THREE.Mesh(new THREE.TorusGeometry(1.96, 0.008, 16, 150), ringMaterial.clone());
  ringOne.rotation.x = Math.PI / 2.8;
  ringTwo.rotation.y = Math.PI / 2.4;
  group.add(ringOne, ringTwo);

  const particlesGeometry = new THREE.BufferGeometry();
  const particleCount = window.innerWidth < 700 ? 90 : 150;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 5.8;
    positions[i + 1] = (Math.random() - 0.5) * 5.8;
    positions[i + 2] = (Math.random() - 0.5) * 4.8;
  }

  particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const points = new THREE.Points(
    particlesGeometry,
    new THREE.PointsMaterial({
      color: 0xbdf7ff,
      size: 0.017,
      transparent: true,
      opacity: 0.78
    })
  );
  scene.add(points);

  scene.add(new THREE.AmbientLight(0x99dfff, 1.25));

  const cyanLight = new THREE.PointLight(0x58e5ff, 5.8, 9);
  cyanLight.position.set(2.8, 2.6, 3.2);
  scene.add(cyanLight);

  const magentaLight = new THREE.PointLight(0xff5edb, 4.4, 8);
  magentaLight.position.set(-3.2, -1.7, 2.8);
  scene.add(magentaLight);

  const emeraldLight = new THREE.PointLight(0x50ffc0, 2.8, 8);
  emeraldLight.position.set(0, -3, 3.8);
  scene.add(emeraldLight);

  const mouse = { x: 0, y: 0 };

  window.addEventListener("pointermove", (event) => {
    mouse.x = (event.clientX / window.innerWidth - 0.5) * 2;
    mouse.y = (event.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });

  function resizeRenderer() {
    const rect = canvas.getBoundingClientRect();
    const width = Math.max(rect.width, 280);
    const height = Math.max(rect.height, 280);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  resizeRenderer();
  window.addEventListener("resize", resizeRenderer);

  let frame = 0;

  function animate() {
    frame += 0.01;

    group.rotation.y += 0.006;
    group.rotation.x += 0.002;
    group.rotation.x += (mouse.y * 0.18 - group.rotation.x) * 0.018;
    group.rotation.z += (mouse.x * 0.12 - group.rotation.z) * 0.018;
    sphere.position.y = Math.sin(frame * 1.8) * 0.08;
    ringOne.rotation.z += 0.004;
    ringTwo.rotation.x += 0.003;
    points.rotation.y -= 0.0015;
    points.rotation.x += 0.0008;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  animate();
}

window.addEventListener("load", initThreeHero);
