/**
 * PRATHAM SINGH — CINEMATIC & EDITORIAL PHOTOGRAPHY
 * Theme: PANTONE® 15-5519 TCX Turquoise (#45B5AA)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Photography Series Database
  const projects = [
    {
      index: "01",
      category: "EXPEDITION",
      title: "Caldera & Mist",
      sector: "VOLCANIC LANDSCAPES",
      coords: "REF: 15-5519-TURQUOISE // 45.4642° N, 9.1900° E",
      image: "assets/images/hero_bg.jpg",
      client: "National Geographic & Vogue Editorial",
      overview: "Fine art landscape photography documenting primordial volcanic craters and mineral sulfur steam in high altitude calderas, captured on medium format film and digital sensors.",
      metrics: [
        { val: "50MP", lbl: "Medium Format RAW" },
        { val: "12/12", lbl: "Archival Limited Editions" },
        { val: "GOLD", lbl: "International Photo Award" }
      ]
    },
    {
      index: "02",
      category: "ARCHITECTURE",
      title: "Brutalist Monoliths",
      sector: "MONUMENTAL ARCHITECTURAL STUDY",
      coords: "REF: ARCH-BRUTAL-90 // 35.6762° N, 139.6503° E",
      image: "assets/images/project_2.jpg",
      client: "Architectural Review & Spatial Studies",
      overview: "A study in shadow, concrete, and minimalist geometry. Examining the silent weight of monumental brutalist structures against the morning fog.",
      metrics: [
        { val: "Leica M", lbl: "Monochrome Sensor" },
        { val: "Zürich", lbl: "Solo Gallery Showcase" },
        { val: "1st", lbl: "Architectural Photo Prize" }
      ]
    },
    {
      index: "03",
      category: "EXPERIMENTAL",
      title: "Prism & Light",
      sector: "PHOTONIC REFRACTION SERIES",
      coords: "REF: OPTIC-PRISM-03 // 47.3769° N, 8.5417° E",
      image: "assets/images/project_3.jpg",
      client: "Contemporary Visual Arts Foundation",
      overview: "Experimental studio series investigating laser dispersion, optical prisms, and high-frequency light refractions in sensory darkness.",
      metrics: [
        { val: "100%", lbl: "In-Camera — Zero CGI" },
        { val: "4K", lbl: "Volumetric Stills" },
        { val: "BEST", lbl: "Experimental Honor" }
      ]
    },
    {
      index: "04",
      category: "NOCTURNAL",
      title: "Metropolis Rain",
      sector: "CINEMATIC NIGHT DOCUMENTARY",
      coords: "REF: NOCT-8K-NEON // 22.3193° N, 114.1694° E",
      image: "assets/images/project_4.jpg",
      client: "Cinematheque Global Showcase",
      overview: "Capturing the solitary pulse of midnight metropolises through neon reflections, drenched harbor pavements, and glowing turquoise architectural silhouettes.",
      metrics: [
        { val: "8K", lbl: "RAW Master Format" },
        { val: "Vogue", lbl: "Editorial Print Spread" },
        { val: "GRAND", lbl: "Jury Prize Winner" }
      ]
    },
    {
      index: "05",
      category: "SUMMIT",
      title: "Cloud Horizon",
      sector: "HIGH-ALTITUDE AERIAL LANDSCAPES",
      coords: "REF: SUMMIT-ELEV-4810 // 45.8326° N, 6.8652° E",
      image: "assets/images/project_5.jpg",
      client: "Alpine Heritage Fellowship",
      overview: "Ascending above the tropospheric cloud layer at 3,800 meters. The interplay of twilight gradients, glacial peaks, and infinite ocean of clouds.",
      metrics: [
        { val: "3,842m", lbl: "Sub-Zero Alpine Capture" },
        { val: "Hahnemühle", lbl: "Museum Rag Prints" },
        { val: "ICON", lbl: "Alpine Photography Prize" }
      ]
    }
  ];

  let currentProjectIndex = 0;

  // DOM Elements
  const bgSlides = document.querySelectorAll('.bg-slide');
  const archiveItems = document.querySelectorAll('.archive-item');
  const telemetrySector = document.getElementById('telemetrySector');

  // Custom Cursor
  const cursor = document.getElementById('customCursor');
  const cursorDot = document.getElementById('cursorDot');
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
  });

  function renderCursor() {
    cursorX += (mouseX - cursorX) * 0.18;
    cursorY += (mouseY - cursorY) * 0.18;
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    requestAnimationFrame(renderCursor);
  }
  renderCursor();

  // Hover states for cursor
  const interactiveElements = document.querySelectorAll('button, a, .archive-item, .floating-badge-card, .pantone-pill');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('active-hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('active-hover'));
  });

  // Switch Active Project
  function switchProject(index, triggerSound = true) {
    if (index === currentProjectIndex && archiveItems[index].classList.contains('active')) return;
    
    currentProjectIndex = index;
    const proj = projects[index];

    // Background transition
    bgSlides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    // Archive list item state
    archiveItems.forEach((item, i) => {
      const isSelected = (i === index);
      item.classList.toggle('active', isSelected);
      item.setAttribute('aria-selected', isSelected ? 'true' : 'false');
    });

    // Telemetry text updates with smooth scramble effect
    if (telemetrySector) scrambleText(telemetrySector, proj.sector);

    if (triggerSound) {
      playAudioBlip(280 + index * 90);
    }
  }

  // Scramble text effect for high-tech architectural feel
  function scrambleText(element, targetText) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_—//';
    let iteration = 0;
    const interval = setInterval(() => {
      element.innerText = targetText
        .split('')
        .map((letter, index) => {
          if (index < iteration) {
            return targetText[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');

      if (iteration >= targetText.length) {
        clearInterval(interval);
      }
      iteration += 1.5;
    }, 24);
  }

  // Bind Archive Item Click & Hover
  archiveItems.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
      switchProject(index, true);
    });

    item.addEventListener('click', (e) => {
      if (!e.target.classList.contains('view-project-btn')) {
        switchProject(index, true);
      }
    });

    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        switchProject(index, true);
      }
    });
  });

  // Quick select links in top nav dropdown
  document.querySelectorAll('.quick-select').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const projIndex = parseInt(link.getAttribute('data-proj'), 10);
      switchProject(projIndex, true);
    });
  });

  // Keyboard navigation (Arrow keys)
  window.addEventListener('keydown', (e) => {
    if (document.querySelector('.slideout-menu-drawer.open') || 
        document.querySelector('.showreel-modal.open') || 
        document.querySelector('.case-study-modal.open')) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (currentProjectIndex + 1) % projects.length;
      switchProject(nextIndex, true);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
      switchProject(prevIndex, true);
    }
  });

  // ==========================================================================
  // WEB AUDIO AMBIENT SYNTHESIZER
  // ==========================================================================
  let audioCtx = null;
  let isSoundActive = false;
  let droneOsc1 = null;
  let droneOsc2 = null;
  let filterNode = null;
  let masterGain = null;

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }
  }

  function startAmbientDrone() {
    initAudio();
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.01, audioCtx.currentTime);
    masterGain.gain.exponentialRampToValueAtTime(0.12, audioCtx.currentTime + 2.5);

    // Warm Low Drone (Pantone Turquoise harmonic: 108Hz / 216Hz)
    droneOsc1 = audioCtx.createOscillator();
    droneOsc1.type = 'sine';
    droneOsc1.frequency.setValueAtTime(108, audioCtx.currentTime);

    droneOsc2 = audioCtx.createOscillator();
    droneOsc2.type = 'triangle';
    droneOsc2.frequency.setValueAtTime(162, audioCtx.currentTime);

    filterNode = audioCtx.createBiquadFilter();
    filterNode.type = 'lowpass';
    filterNode.frequency.setValueAtTime(450, audioCtx.currentTime);

    droneOsc1.connect(filterNode);
    droneOsc2.connect(filterNode);
    filterNode.connect(masterGain);
    masterGain.connect(audioCtx.destination);

    droneOsc1.start();
    droneOsc2.start();
  }

  function stopAmbientDrone() {
    if (masterGain && audioCtx) {
      masterGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.2);
      setTimeout(() => {
        if (droneOsc1) { droneOsc1.stop(); droneOsc1.disconnect(); droneOsc1 = null; }
        if (droneOsc2) { droneOsc2.stop(); droneOsc2.disconnect(); droneOsc2 = null; }
      }, 1200);
    }
  }

  function playAudioBlip(freq = 440) {
    if (!isSoundActive) return;
    initAudio();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.5, audioCtx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.12);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.12);
  }

  const soundToggleBtn = document.getElementById('soundToggle');
  soundToggleBtn.addEventListener('click', () => {
    isSoundActive = !isSoundActive;
    soundToggleBtn.classList.toggle('active', isSoundActive);
    const label = soundToggleBtn.querySelector('.sound-label');

    if (isSoundActive) {
      startAmbientDrone();
      label.textContent = "AMBIENT ON";
    } else {
      stopAmbientDrone();
      label.textContent = "SOUND";
    }
  });

  // ==========================================================================
  // SLIDE-OUT MENU DRAWER
  // ==========================================================================
  const menuDrawer = document.getElementById('menuDrawer');
  const menuToggle = document.getElementById('menuToggle');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const drawerBackdrop = document.getElementById('drawerBackdrop');

  function openDrawer() {
    menuDrawer.classList.add('open');
    menuDrawer.setAttribute('aria-hidden', 'false');
    menuToggle.setAttribute('aria-expanded', 'true');
    playAudioBlip(520);
  }

  function closeDrawer() {
    menuDrawer.classList.remove('open');
    menuDrawer.setAttribute('aria-hidden', 'true');
    menuToggle.setAttribute('aria-expanded', 'false');
    playAudioBlip(320);
  }

  menuToggle.addEventListener('click', openDrawer);
  drawerCloseBtn.addEventListener('click', closeDrawer);
  drawerBackdrop.addEventListener('click', closeDrawer);

  document.querySelectorAll('.drawer-link').forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // Contact nav triggers drawer
  const navContactTrigger = document.getElementById('navContactTrigger');
  if (navContactTrigger) {
    navContactTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      openDrawer();
    });
  }

  // ==========================================================================
  // FULLSCREEN SHOWREEL CANVAS PLAYER
  // ==========================================================================
  const showreelModal = document.getElementById('showreelModal');
  const playShowreelBtn = document.getElementById('playShowreelBtn');
  const navOpenReel = document.getElementById('navOpenReel');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const canvas = document.getElementById('showreelCanvas');
  const ctx = canvas.getContext('2d');

  let showreelAnimId = null;
  let reelPlaying = true;
  let reelTime = 0;
  const reelDuration = 165; // 2m 45s
  let currentReelProject = 0;

  const hudTimecode = document.getElementById('hudTimecode');
  const hudProjectTitle = document.getElementById('hudProjectTitle');
  const hudProjectSubtitle = document.getElementById('hudProjectSubtitle');
  const hudProgressFill = document.getElementById('hudProgressFill');
  const hudPlayPauseBtn = document.getElementById('hudPlayPauseBtn');
  const hudNextBtn = document.getElementById('hudNextBtn');

  function formatTime(secs) {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = Math.floor(secs % 60).toString().padStart(2, '0');
    const ms = Math.floor((secs % 1) * 100).toString().padStart(2, '0');
    return `00:${m}:${s}.${ms}`;
  }

  function drawShowreelFrame() {
    if (!showreelModal.classList.contains('open')) return;

    if (reelPlaying) {
      reelTime += 0.035;
      if (reelTime >= reelDuration) reelTime = 0;
    }

    const w = canvas.width;
    const h = canvas.height;

    // Clear background
    ctx.fillStyle = '#060a0b';
    ctx.fillRect(0, 0, w, h);

    // Draw active project image with cinematic slow pan/zoom
    const activeImg = new Image();
    const curP = projects[currentReelProject];
    activeImg.src = curP.image;
    
    if (activeImg.complete && activeImg.naturalWidth > 0) {
      const zoom = 1 + (Math.sin(reelTime * 0.4) * 0.08);
      const panX = Math.cos(reelTime * 0.3) * 20;
      ctx.save();
      ctx.translate(w / 2, h / 2);
      ctx.scale(zoom, zoom);
      ctx.globalAlpha = 0.55;
      ctx.drawImage(activeImg, -w / 2 + panX, -h / 2, w, h);
      ctx.restore();
    }

    // Dynamic Procedural Turquoise Wireframe Mesh & Laser Beams
    ctx.save();
    ctx.strokeStyle = 'rgba(69, 181, 170, 0.45)';
    ctx.lineWidth = 1.5;

    // Grid Floor
    const horizon = h * 0.65;
    ctx.beginPath();
    for (let x = -w * 0.5; x < w * 1.5; x += 60) {
      ctx.moveTo(x + Math.sin(reelTime) * 10, h);
      ctx.lineTo(w / 2, horizon);
    }
    ctx.stroke();

    // Harmonic Audio Waveform Visualization
    ctx.beginPath();
    ctx.strokeStyle = '#45B5AA';
    ctx.lineWidth = 2.5;
    ctx.shadowColor = '#5ceade';
    ctx.shadowBlur = 12;

    const wavePoints = 80;
    for (let i = 0; i <= wavePoints; i++) {
      const wx = (w / wavePoints) * i;
      const freq1 = Math.sin(i * 0.2 + reelTime * 4);
      const freq2 = Math.cos(i * 0.15 - reelTime * 3);
      const wy = horizon + (freq1 * freq2 * 35) + (Math.sin(reelTime * 2) * 10);
      if (i === 0) ctx.moveTo(wx, wy);
      else ctx.lineTo(wx, wy);
    }
    ctx.stroke();
    ctx.restore();

    // Floating Turquoise Particles
    ctx.save();
    ctx.fillStyle = '#45B5AA';
    for (let p = 0; p < 35; p++) {
      const px = (Math.sin(p * 99 + reelTime * 0.8) * 0.5 + 0.5) * w;
      const py = (Math.cos(p * 33 + reelTime * 0.5) * 0.5 + 0.5) * h;
      const pSize = (Math.sin(p + reelTime * 2) * 1.5) + 2.5;
      ctx.beginPath();
      ctx.arc(px, py, Math.max(1, pSize), 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    // Update HUD Stats
    hudTimecode.textContent = `${formatTime(reelTime)} / 00:02:45.00`;
    hudProjectTitle.textContent = `${curP.index} ${curP.title.toUpperCase()}`;
    hudProjectSubtitle.textContent = `PRATHAM SINGH // ${curP.sector}`;
    hudProgressFill.style.width = `${(reelTime / reelDuration) * 100}%`;

    // Auto rotate sequence every 5 seconds
    if (Math.floor(reelTime) % 5 === 0 && Math.floor(reelTime) !== 0) {
      const calcP = Math.floor(reelTime / 5) % projects.length;
      if (calcP !== currentReelProject) {
        currentReelProject = calcP;
      }
    }

    showreelAnimId = requestAnimationFrame(drawShowreelFrame);
  }

  function openShowreel() {
    showreelModal.classList.add('open');
    showreelModal.setAttribute('aria-hidden', 'false');
    reelTime = 0;
    reelPlaying = true;
    hudPlayPauseBtn.textContent = 'PAUSE';
    currentReelProject = currentProjectIndex;
    playAudioBlip(620);
    drawShowreelFrame();
  }

  function closeShowreel() {
    showreelModal.classList.remove('open');
    showreelModal.setAttribute('aria-hidden', 'true');
    if (showreelAnimId) cancelAnimationFrame(showreelAnimId);
    playAudioBlip(300);
  }

  if (playShowreelBtn) {
    playShowreelBtn.addEventListener('click', openShowreel);
  }
  if (navOpenReel) navOpenReel.addEventListener('click', (e) => {
    e.preventDefault();
    openShowreel();
  });
  modalCloseBtn.addEventListener('click', closeShowreel);
  modalBackdrop.addEventListener('click', closeShowreel);

  hudPlayPauseBtn.addEventListener('click', () => {
    reelPlaying = !reelPlaying;
    hudPlayPauseBtn.textContent = reelPlaying ? 'PAUSE' : 'PLAY';
    playAudioBlip(reelPlaying ? 540 : 360);
  });

  hudNextBtn.addEventListener('click', () => {
    currentReelProject = (currentReelProject + 1) % projects.length;
    reelTime = currentReelProject * 5;
    playAudioBlip(600);
  });

  // ==========================================================================
  // CASE STUDY DETAIL MODAL
  // ==========================================================================
  const caseStudyModal = document.getElementById('caseStudyModal');
  const caseStudyCloseBtn = document.getElementById('caseStudyCloseBtn');
  const caseStudyBackdrop = document.getElementById('caseStudyBackdrop');
  const caseStudyCoverImg = document.getElementById('caseStudyCoverImg');
  const csCategoryTag = document.getElementById('csCategoryTag');
  const csTitle = document.getElementById('csTitle');
  const csClient = document.getElementById('csClient');
  const csOverviewText = document.getElementById('csOverviewText');

  function openCaseStudy(projIndex) {
    const proj = projects[projIndex];
    caseStudyCoverImg.src = proj.image;
    csCategoryTag.textContent = `${proj.index} — ${proj.category}`;
    csTitle.textContent = proj.title;
    csClient.textContent = proj.client;
    csOverviewText.textContent = proj.overview;

    const metricCards = document.querySelectorAll('.cs-metric-card');
    proj.metrics.forEach((m, i) => {
      if (metricCards[i]) {
        metricCards[i].querySelector('.metric-num').textContent = m.val;
        metricCards[i].querySelector('.metric-lbl').textContent = m.lbl;
      }
    });

    caseStudyModal.classList.add('open');
    caseStudyModal.setAttribute('aria-hidden', 'false');
    playAudioBlip(480);
  }

  function closeCaseStudy() {
    caseStudyModal.classList.remove('open');
    caseStudyModal.setAttribute('aria-hidden', 'true');
    playAudioBlip(290);
  }

  document.querySelectorAll('.view-project-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const projIndex = parseInt(btn.getAttribute('data-project'), 10);
      openCaseStudy(projIndex);
    });
  });

  caseStudyCloseBtn.addEventListener('click', closeCaseStudy);
  caseStudyBackdrop.addEventListener('click', closeCaseStudy);


  // Pantone Pill Interaction
  const pantonePill = document.getElementById('pantonePill');
  if (pantonePill) {
    pantonePill.addEventListener('click', () => {
      openDrawer();
    });
  }

  // ESC key closes any open modal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (menuDrawer.classList.contains('open')) closeDrawer();
      if (showreelModal.classList.contains('open')) closeShowreel();
      if (caseStudyModal.classList.contains('open')) closeCaseStudy();
    }
  });

  console.log("%c PRATHAM SINGH %c PHOTOGRAPHY PORTFOLIO // PANTONE® 15-5519 TCX TURQUOISE (#45B5AA) ", 
    "background: #45B5AA; color: #000; font-weight: bold; padding: 4px 8px; border-radius: 3px;",
    "background: #07090A; color: #45B5AA; padding: 4px 8px; border: 1px solid #45B5AA; border-radius: 3px;"
  );
});
