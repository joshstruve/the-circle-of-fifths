// --- Triad-only maps ---
const triadMap = {
    "C":  [{ note: "C",  cell: "c_major_segment" },  { note: "E",  cell: "e_minor_segment" },      { note: "G",  cell: "g_major_segment" }],
    "G":  [{ note: "G",  cell: "g_major_segment" },  { note: "B",  cell: "b_minor_segment" },      { note: "D",  cell: "d_major_segment" }],
    "D":  [{ note: "D",  cell: "d_major_segment" },  { note: "F♯", cell: "f♯_minor_segment" },     { note: "A",  cell: "a_major_segment" }],
    "A":  [{ note: "A",  cell: "a_major_segment" },  { note: "C♯", cell: "c♯_minor_segment" },     { note: "E",  cell: "e_major_segment" }],
    "E":  [{ note: "E",  cell: "e_major_segment" },  { note: "G♯", cell: "g♯_minor_segment" },     { note: "B",  cell: "b_major_segment" }],
    "B":  [{ note: "B",  cell: "b_major_segment" },  { note: "D♯", cell: "d♯_minor_segment" },     { note: "G♭", cell: "g♭_major_segment" }],
    "G♭": [{ note: "G♭", cell: "g♭_major_segment" }, { note: "A♯", cell: "a♯_minor_segment" },     { note: "D♭", cell: "d♭_major_segment" }],
    "D♭": [{ note: "D♭", cell: "d♭_major_segment" }, { note: "F",  cell: "f_minor_segment" },      { note: "A♭", cell: "a♭_major_segment" }],
    "A♭": [{ note: "A♭", cell: "a♭_major_segment" }, { note: "C",  cell: "c_minor_segment" },      { note: "E♭", cell: "e♭_major_segment" }],
    "E♭": [{ note: "E♭", cell: "e♭_major_segment" }, { note: "G",  cell: "g_minor_segment" },      { note: "B♭", cell: "b♭_major_segment" }],
    "B♭": [{ note: "B♭", cell: "b♭_major_segment" }, { note: "D",  cell: "d_minor_segment" },      { note: "F",  cell: "f_major_segment" }],
    "F":  [{ note: "F",  cell: "f_major_segment" },  { note: "A",  cell: "a_minor_segment" },      { note: "C",  cell: "c_major_segment" }],
  
    "a":  [{ note: "A",  cell: "a_minor_segment" },  { note: "C",  cell: "c_major_segment" },      { note: "E",  cell: "e_minor_segment" }],
    "e":  [{ note: "E",  cell: "e_minor_segment" },  { note: "G",  cell: "g_major_segment" },      { note: "B",  cell: "b_minor_segment" }],
    "b":  [{ note: "B",  cell: "b_minor_segment" },  { note: "D",  cell: "d_major_segment" },      { note: "F♯", cell: "f♯_minor_segment" }],
    "f♯": [{ note: "F♯", cell: "f♯_minor_segment" }, { note: "A",  cell: "a_major_segment" },      { note: "C♯", cell: "c♯_minor_segment" }],
    "c♯": [{ note: "C♯", cell: "c♯_minor_segment" }, { note: "E",  cell: "e_major_segment" },      { note: "G♯", cell: "g♯_minor_segment" }],
    "g♯": [{ note: "G♯", cell: "g♯_minor_segment" }, { note: "B",  cell: "b_major_segment" },      { note: "D♯", cell: "d♯_minor_segment" }],
    "d♯": [{ note: "D♯", cell: "d♯_minor_segment" }, { note: "G♭", cell: "g♭_major_segment" },     { note: "A♯", cell: "a♯_minor_segment" }],
    "a♯": [{ note: "A♯", cell: "a♯_minor_segment" }, { note: "D♭", cell: "d♭_major_segment" },     { note: "F",  cell: "f_minor_segment" }],
    "d":  [{ note: "D",  cell: "d_minor_segment" },  { note: "F",  cell: "f_major_segment" },      { note: "A",  cell: "a_minor_segment" }],
    "g":  [{ note: "G",  cell: "g_minor_segment" },  { note: "B♭", cell: "b♭_major_segment" },     { note: "D",  cell: "d_minor_segment" }],
    "c":  [{ note: "C",  cell: "c_minor_segment" },  { note: "E♭", cell: "e♭_major_segment" },     { note: "G",  cell: "g_minor_segment" }],
    "f":  [{ note: "F",  cell: "f_minor_segment" },  { note: "A♭", cell: "a♭_major_segment" },     { note: "C",  cell: "c_minor_segment" }]
  };
  
  const triadMapDisplay = {
    "C": "C, E, G",   "G": "G, B, D",   "D": "D, F♯, A",  "A": "A, C♯, E",
    "E": "E, G♯, B",  "B": "B, D♯, G♯", "G♭": "G♭, A♯, D♭","D♭": "D♭, F, A♭",
    "A♭": "A♭, C, E♭","E♭": "E♭, G, B♭","B♭": "B♭, D, F","F": "F, A, C",
    "a": "A, C, E",   "e": "E, G, B",   "b": "B, D, F♯",  "f♯": "F♯, A, C♯",
    "c♯": "C♯, E, G♯","g♯": "G♯, B, D♯","d♯": "D♯, F♯, A♯","a♯": "A♯, C♯, F",
    "d": "D, F, A",   "g": "G, B♭, D",  "c": "C, E♭, G",  "f": "F, A♭, C"
  };
  
  // =========================================================
  // CSS helpers
  // =========================================================
  function cssVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }
  
  // Triad highlight shades (dark -> light)
  function triadStepColor(stepIndex) {
    if (stepIndex === 0) return cssVar("--triad-step-1") || "#3f7ea6";
    if (stepIndex === 1) return cssVar("--triad-step-2") || "#5c9ec6";
    return cssVar("--triad-step-3") || "#7ec3ea";
  }
  
  function isAccidentalKey(key) {
    return key.includes("♯") || key.includes("♭");
  }
  
  function getSegmentFill(key, isMinor) {
    const accidental = isAccidentalKey(key);
    if (!accidental && !isMinor) return cssVar("--natural-major");
    if (!accidental && isMinor)  return cssVar("--natural-minor");
    if (accidental && !isMinor)  return cssVar("--accidental-major");
    return cssVar("--accidental-minor");
  }
  
  // =========================================================
  // INFO PANEL (placeholder before first click)
  // =========================================================
  function displayInfo(key = null) {
    if (!key) {
      document.getElementById("info-panel").innerHTML = `
        <h2>Key</h2>
        <p>Triad</p>
      `;
      return;
    }
  
    const isMajor = key === key.toUpperCase();
    const title = `${key} ${isMajor ? "Major" : "Minor"}`;
    const triad = triadMapDisplay[key] || "N/A";
  
    document.getElementById("info-panel").innerHTML = `
      <h2>${title}</h2>
      <p>${triad}</p>
    `;
  
    playSound(key);
  }
  
  // =========================================================
  // AUDIO GRAPH
  // =========================================================
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  
  const masterGain = audioCtx.createGain();
  masterGain.gain.value = 0.95;
  
  const analyser = audioCtx.createAnalyser();
  analyser.fftSize = 2048;
  analyser.smoothingTimeConstant = 0.85;
  
  masterGain.connect(analyser);
  analyser.connect(audioCtx.destination);
  
  // =========================================================
  // ACTIVE PLAYBACK STATE (clean cancel)
  // =========================================================
  const active = {
    oscillators: [],
    gains: [],
    timeouts: [],
    highlights: new Map(), // cellId -> originalFill
    nodes: [],
    stoppers: [],
  };
  
  function restoreAllHighlightsNow() {
    for (const [cellId, originalFill] of active.highlights.entries()) {
      const path = document.getElementById(cellId);
      if (path) path.setAttribute("fill", originalFill);
    }
    active.highlights.clear();
  }
  
  function stopActivePlayback() {
    // clear pending timers (highlights + scheduled highlight starts)
    active.timeouts.forEach(id => clearTimeout(id));
    active.timeouts = [];
  
    // restore any currently-highlighted segments immediately
    restoreAllHighlightsNow();
  
    const t = audioCtx.currentTime;
  
    // fade out quickly, then stop oscillators after the fade
    active.gains.forEach(g => {
      try {
        if (!g.gain) return;
        g.gain.cancelScheduledValues(t);
        g.gain.setValueAtTime(Math.max(0.0001, g.gain.value || 0.0001), t);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 0.14);
      } catch {}
    });
  
    active.oscillators.forEach(osc => {
      try { osc.stop(t + 0.16); } catch {}
    });
  
    // disconnect any custom nodes/LFOs/etc
    active.stoppers.forEach(fn => { try { fn(); } catch {} });
    active.stoppers = [];
  
    active.nodes.forEach(n => { try { n.disconnect(); } catch {} });
    active.nodes = [];
  
    active.oscillators = [];
    active.gains = [];
  }
  
  // =========================================================
  // VISUALIZER (always visible)
  // =========================================================
  const canvas = document.getElementById("viz");
  const ctx = canvas.getContext("2d", { alpha: true });
  
  const timeData = new Uint8Array(analyser.fftSize);
  let phase = 0;
  
  function resizeViz() {
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    const cssW = canvas.clientWidth || 170;
    const cssH = canvas.clientHeight || 170;
    canvas.width = Math.round(cssW * dpr);
    canvas.height = Math.round(cssH * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  
  function rmsFromTimeDomain(buf) {
    let sum = 0;
    for (let i = 0; i < buf.length; i++) {
      const v = (buf[i] - 128) / 128;
      sum += v * v;
    }
    return Math.sqrt(sum / buf.length);
  }
  
  function drawViz() {
    analyser.getByteTimeDomainData(timeData);
  
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    const cx = w / 2;
    const cy = h / 2;
  
    const energy = rmsFromTimeDomain(timeData);
    const maxR = Math.min(w, h) * 0.5;
  
    const baseR = maxR * 0.62;
    const amp = maxR * 0.22 * (0.12 + energy * 1.35);
  
    phase += 0.004 + energy * 0.02;
  
    ctx.clearRect(0, 0, w, h);
  
    // Use the middle triad shade for the viz “accent”
    const vizAccent = triadStepColor(1);
  
    // Idle ring (use triad shade too)
    ctx.beginPath();
    ctx.strokeStyle = "rgba(126,195,234,0.18)";
    ctx.lineWidth = 1.25;
    ctx.arc(cx, cy, baseR, 0, Math.PI * 2);
    ctx.stroke();
  
    // Wrapped waveform ring
    const N = 720;
    const stride = Math.max(1, Math.floor(timeData.length / N));
  
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(phase);
  
    ctx.beginPath();
    for (let i = 0; i <= N; i++) {
      const idx = (i * stride) % timeData.length;
      const v = (timeData[idx] - 128) / 128;
      const shaped = Math.tanh(v * 1.7);
      const r = baseR + shaped * amp;
  
      const a = (i / N) * Math.PI * 2;
      const x = Math.cos(a) * r;
      const y = Math.sin(a) * r;
  
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
  
    // Glow pass
    ctx.strokeStyle = "rgba(126,195,234,0.22)";
    ctx.lineWidth = 10 + energy * 10;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.stroke();
  
    // Crisp pass
    ctx.strokeStyle = vizAccent;
    ctx.globalAlpha = 0.95;
    ctx.lineWidth = 2.0 + energy * 2.6;
    ctx.stroke();
    ctx.globalAlpha = 1;
  
    ctx.restore();
  
    requestAnimationFrame(drawViz);
  }
  
  resizeViz();
  requestAnimationFrame(drawViz);
  window.addEventListener("resize", resizeViz);
  
  // =========================================================
  // PITCH HELPERS
  // =========================================================
  function getBaseFrequency(note) {
    const frequencies = {
      "C": 261.63, "C♯": 277.18, "D": 293.66, "D♯": 311.13, "E": 329.63,
      "F": 349.23, "G♭": 369.99, "G": 392.00, "G♯": 415.30, "A": 440.00,
      "A♯": 466.16, "B": 493.88,
      "D♭": 277.18, "E♭": 311.13, "A♭": 415.30, "B♭": 466.16, "F♯": 369.99
    };
    return frequencies[note.toUpperCase()] || 0;
  }
  
  function getAscendingFrequencies(noteNames) {
    const out = [];
    let prev = -Infinity;
  
    for (const name of noteNames) {
      let f = getBaseFrequency(name);
      if (f <= 0) continue;
      while (f <= prev) f *= 2;
      out.push(f);
      prev = f;
    }
    return out;
  }
  
  // =========================================================
  // HIGHLIGHTING (triad step colors)
  // =========================================================
  function highlightPath(cellId, durationMs, color) {
    const path = document.getElementById(cellId);
    if (!path) return;
  
    if (!active.highlights.has(cellId)) {
      active.highlights.set(cellId, path.getAttribute("fill"));
    }
  
    path.setAttribute("fill", color);
  
    const tid = setTimeout(() => {
      if (!active.highlights.has(cellId)) return;
      const originalFill = active.highlights.get(cellId);
      path.setAttribute("fill", originalFill);
      active.highlights.delete(cellId);
    }, durationMs);
  
    active.timeouts.push(tid);
  }
  
  // =========================================================
  // ANALOG HELPERS (voice chain)
  // =========================================================
  function clamp(v, a, b) {
    return Math.max(a, Math.min(b, v));
  }
  
  function makeSaturator(amount = 0.55) {
    const ws = audioCtx.createWaveShaper();
    const n = 2048;
    const curve = new Float32Array(n);
  
    const k = Math.max(0.0001, amount * 30);
    for (let i = 0; i < n; i++) {
      const x = (i * 2) / (n - 1) - 1;
      curve[i] = Math.tanh(k * x) / Math.tanh(k);
    }
  
    ws.curve = curve;
    ws.oversample = "4x";
    return ws;
  }
  
  function createAnalogChain({ start, end, release, brightness = 1.0 }) {
    const filter = audioCtx.createBiquadFilter();
    filter.type = "lowpass";
    filter.Q.value = 0.85;
  
    const sat = makeSaturator(0.55);
  
    const amp = audioCtx.createGain();
    amp.gain.setValueAtTime(0.0001, start);
  
    // Filter envelope: open a bit on attack then settle (warm "bloom")
    const baseCutoff = 900 * brightness;
    const openCutoff = 2600 * brightness;
    const cutoff = clamp(baseCutoff, 500, 2200);
    const open = clamp(openCutoff, 1200, 5200);
  
    const fAttack = 0.025;
    const fDecay = 0.18;
  
    filter.frequency.setValueAtTime(cutoff, start);
    filter.frequency.linearRampToValueAtTime(open, start + fAttack);
    filter.frequency.linearRampToValueAtTime(cutoff, start + fAttack + fDecay);
  
    filter.frequency.setValueAtTime(cutoff, end);
  
    filter.connect(sat);
    sat.connect(amp);
  
    const nodes = [filter, sat, amp];
  
    return {
      inputNode: filter,
      outputNode: amp,
      nodes,
      stop() {
        try { nodes.forEach(n => n.disconnect()); } catch {}
      }
    };
  }
  
  function addDetuneDrift(detuneParam, { start, stopAt, rateHz = 5.2, depthCents = 5 }) {
    const lfo = audioCtx.createOscillator();
    const lfoGain = audioCtx.createGain();
  
    lfo.type = "sine";
    lfo.frequency.setValueAtTime(rateHz, start);
    lfoGain.gain.setValueAtTime(depthCents, start);
  
    lfo.connect(lfoGain);
    lfoGain.connect(detuneParam);
  
    lfo.start(start);
    lfo.stop(stopAt);
  
    return {
      lfo, lfoGain,
      stop() {
        try { lfoGain.disconnect(); } catch {}
        try { lfo.disconnect(); } catch {}
      }
    };
  }
  
  // =========================================================
  // PLAYBACK
  // =========================================================
  async function ensureAudioRunning() {
    if (audioCtx.state === "suspended") {
      try { await audioCtx.resume(); } catch {}
    }
  }
  
  async function playSound(key) {
    stopActivePlayback();
    await ensureAudioRunning();
  
    const notes = triadMap[key] || [];
    const noteNames = notes.map(n => n.note);
    const freqs = getAscendingFrequencies(noteNames);
  
    // schedule slightly in the future to avoid timing weirdness
    const now = audioCtx.currentTime + 0.015;
  
    const step = 1.0;       // seconds between note starts
    const total = 4.0;      // chord "intent" duration
    const release = 0.32;   // smoother tail than 0.28
    const stopPad = 0.06;   // ensure nothing clips
  
    freqs.forEach((frequency, i) => {
      const start = now + i * step;
      const end = now + total;
      const stopAt = end + release + stopPad;
  
      // Oscillators (triangle + quiet saw) for analog-ish tone
      const osc1 = audioCtx.createOscillator();
      const osc2 = audioCtx.createOscillator();
  
      osc1.type = "triangle";
      osc2.type = "sawtooth";
  
      osc1.frequency.setValueAtTime(frequency, start);
      osc2.frequency.setValueAtTime(frequency, start);
  
      // tiny detune offset between the pair
      osc2.detune.setValueAtTime((Math.random() * 6 - 3), start); // -3..+3 cents
  
      // Mixer
      const mix1 = audioCtx.createGain();
      const mix2 = audioCtx.createGain();
      const mixBus = audioCtx.createGain();
  
      mix1.gain.setValueAtTime(0.78, start);
      mix2.gain.setValueAtTime(0.22, start);
  
      osc1.connect(mix1);
      osc2.connect(mix2);
      mix1.connect(mixBus);
      mix2.connect(mixBus);
  
      // Analog chain
      const chain = createAnalogChain({ start, end, release, brightness: 1.0 });
  
      mixBus.connect(chain.inputNode);
      chain.outputNode.connect(masterGain);
  
      // Amp envelope (on chain output gain)
      const g = chain.outputNode.gain;
  
      const attack = 0.02;
      const peak = 0.52;
      const sustain = 0.26;
  
      g.setValueAtTime(0.0001, start);
      g.linearRampToValueAtTime(peak, start + attack);
      g.linearRampToValueAtTime(sustain, start + attack + 0.12);
      g.setValueAtTime(sustain, end);
      g.exponentialRampToValueAtTime(0.0001, end + release);
  
      // Subtle drift (LFO) so it feels alive
      const drift1 = addDetuneDrift(osc1.detune, {
        start,
        stopAt,
        rateHz: 5.0 + Math.random() * 1.2,
        depthCents: 3 + Math.random() * 3
      });
  
      const drift2 = addDetuneDrift(osc2.detune, {
        start,
        stopAt,
        rateHz: 4.6 + Math.random() * 1.1,
        depthCents: 2 + Math.random() * 3
      });
  
      osc1.start(start);
      osc2.start(start);
      osc1.stop(stopAt);
      osc2.stop(stopAt);
  
      // Track for cancellation + cleanup
      active.oscillators.push(osc1, osc2);
      active.gains.push(chain.outputNode, mix1, mix2, mixBus);
  
      active.nodes.push(...chain.nodes, mix1, mix2, mixBus, drift1.lfoGain, drift2.lfoGain);
      active.stoppers.push(chain.stop, drift1.stop, drift2.stop);
  
      // Highlight with triad step color (dark -> light), for full duration incl release
      if (notes[i]?.cell) {
        const stepColor = triadStepColor(i); // 0..2
        const durMs = Math.max(0, (end - start + release) * 1000);
        const delayMs = Math.max(0, (start - now) * 1000);
  
        const tid = setTimeout(() => {
          highlightPath(notes[i].cell, durMs, stepColor);
        }, delayMs);
  
        active.timeouts.push(tid);
      }
    });
  }
  
  // =========================================================
  // SVG CIRCLE CREATION
  // =========================================================
  function createSegment(key, index, totalKeys, outerRadius, innerRadius, isMinor) {
    const angle = (index / totalKeys) * (2 * Math.PI) - Math.PI / 2;
    const nextAngle = ((index + 1) / totalKeys) * (2 * Math.PI) - Math.PI / 2;
    const centerX = 250, centerY = 250;
  
    const x1Outer = centerX + outerRadius * Math.cos(angle);
    const y1Outer = centerY + outerRadius * Math.sin(angle);
    const x2Outer = centerX + outerRadius * Math.cos(nextAngle);
    const y2Outer = centerY + outerRadius * Math.sin(nextAngle);
  
    const x1Inner = centerX + innerRadius * Math.cos(angle);
    const y1Inner = centerY + innerRadius * Math.sin(angle);
    const x2Inner = centerX + innerRadius * Math.cos(nextAngle);
    const y2Inner = centerY + innerRadius * Math.sin(nextAngle);
  
    const fillColor = getSegmentFill(key, isMinor);
  
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `M${x1Inner},${y1Inner} L${x1Outer},${y1Outer} A${outerRadius},${outerRadius} 0 0,1 ${x2Outer},${y2Outer} L${x2Inner},${y2Inner} A${innerRadius},${innerRadius} 0 0,0 ${x1Inner},${y1Inner} Z`
    );
    path.setAttribute("fill", fillColor);
    path.setAttribute("stroke", cssVar("--seg-stroke") || "rgba(0,0,0,0.55)");
    path.setAttribute("id", `${key.toLowerCase()}_${isMinor ? "minor" : "major"}_segment`);
    path.addEventListener("click", () => displayInfo(key));
    document.getElementById("circle-of-fifths").appendChild(path);
  
    const labelRadius = (outerRadius + innerRadius) / 2;
    const textX = centerX + labelRadius * Math.cos(angle + Math.PI / totalKeys);
    const textY = centerY + labelRadius * Math.sin(angle + Math.PI / totalKeys);
  
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", textX);
    text.setAttribute("y", textY);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("alignment-baseline", "middle");
    text.setAttribute("fill", "#fff");
    text.style.fontSize = "1rem";
  
    // Legibility halo
    text.setAttribute("paint-order", "stroke");
    text.setAttribute("stroke", cssVar("--halo") || "rgba(0,0,0,0.6)");
    text.setAttribute("stroke-width", "3");
    text.setAttribute("stroke-linejoin", "round");
  
    text.textContent = isMinor ? key : key.toUpperCase();
    document.getElementById("circle-of-fifths").appendChild(text);
  }
  
  const outerRadiusMajor = 220;
  const innerRadiusMajor = 150;
  const outerRadiusMinor = 150;
  const innerRadiusMinor = 90;
  
  const majorKeys = ["C", "G", "D", "A", "E", "B", "G♭", "D♭", "A♭", "E♭", "B♭", "F"];
  const minorKeys = ["a", "e", "b", "f♯", "c♯", "g♯", "d♯", "a♯", "f", "c", "g", "d"];
  
  majorKeys.forEach((key, i) => createSegment(key, i, 12, outerRadiusMajor, innerRadiusMajor, false));
  minorKeys.forEach((key, i) => createSegment(key, i, 12, outerRadiusMinor, innerRadiusMinor, true));
  
  // Placeholder before any click
  displayInfo();