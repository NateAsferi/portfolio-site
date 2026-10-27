/* Renders the page from RESUME (js/data.js) and runs the channels, clock and bubbles. */
const ICONS = {
  monitor: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
  server: '<rect x="4" y="4" width="16" height="6" rx="2"/><rect x="4" y="14" width="16" height="6" rx="2"/><path d="M8 7h.01M8 17h.01"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  brush: '<path d="M14 4l6 6-8 8H6v-6z"/><path d="M4 20c2 0 3-1 3-3"/>',
  cloud: '<path d="M7 18h10a4 4 0 0 0 .5-8A6 6 0 0 0 6 9.5 4.3 4.3 0 0 0 7 18z"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"/>',
  wrench: '<path d="M14.5 5.5a4 4 0 0 0 4.9 5L20 11l-9 9-3-3 9-9 .5.6a4 4 0 0 1-3-3.1z"/>',
  people: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c1-3.5 3.5-5 6.5-5s5.5 1.5 6.5 5"/><circle cx="17" cy="9" r="2.5"/><path d="M17 14c2.5 0 4 1.5 4.5 4"/>',
  code: '<path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>',
  sparkle: '<path d="M12 3c.8 4.5 2.5 6.2 7 7-4.5.8-6.2 2.5-7 7-.8-4.5-2.5-6.2-7-7 4.5-.8 6.2-2.5 7-7z"/>',
  brain: '<circle cx="6" cy="7" r="2"/><circle cx="6" cy="17" r="2"/><circle cx="18" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><path d="M8 7.8l2.3 3M8 16.2l2.3-3M14 12h2"/>',
  phone: '<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18h2"/>',
  chip: '<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
  book: '<path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H20v15H5.5A1.5 1.5 0 0 0 4 19.5z"/><path d="M4 19.5A1.5 1.5 0 0 0 5.5 21H20"/>',
  star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>'
};
const svg = (name, stroke = "#fff") =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="${stroke}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ICONS.star}</svg>`;
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const $ = id => document.getElementById(id);

/* ---------- Render ---------- */
const first = RESUME.name.split(" ")[0];
$("initials").textContent = RESUME.name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
$("role").textContent = RESUME.role;
$("hello").innerHTML = `Hi, I'm <em>${esc(first)}</em>.`;
$("blurb").textContent = RESUME.blurb;
$("facts").innerHTML = RESUME.facts.map(f => `<span class="chip">${esc(f)}</span>`).join("");

const SLOTS = 12;
const tiles = RESUME.channels.map((c, i) => `
  <button class="tile" type="button" data-i="${i}" style="--c1:${c.c1};--c2:${c.c2}" aria-label="${esc(c.name)} channel, ${c.skills.length} skills">
    <span class="screen">
      ${svg(c.icon)}
      <span>
        <span class="label">${esc(c.name)}</span><br>
        <span class="count">${c.skills.length} skills</span>
      </span>
    </span>
  </button>`);
const empties = Math.max(0, Math.ceil(RESUME.channels.length / 4) * 4 < SLOTS ? SLOTS - RESUME.channels.length : (4 - RESUME.channels.length % 4) % 4);
for (let i = 0; i < empties; i++) tiles.push('<div class="tile empty" aria-hidden="true"></div>');
$("channels").innerHTML = tiles.join("");

$("board").innerHTML = RESUME.experience.map(e => `
  <article class="glass letter">
    <div class="when">${esc(e.when)}</div>
    <div class="body">
      <h3>${esc(e.title)}</h3>
      <div class="org">${esc(e.org)}</div>
      <ul>${e.points.map(p => `<li>${esc(p)}</li>`).join("")}</ul>
    </div>
  </article>`).join("");

$("project-list").innerHTML = RESUME.projects.map(p => `
  <article class="glass project${p.wide ? " wide" : ""}">
    <div class="badge">${svg("star")}</div>
    <h3>${esc(p.title)}</h3>
    <p>${esc(p.text)}</p>
    <div class="tags">${p.tags.map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>
    ${p.url ? `<a class="repo" href="${esc(p.url)}" target="_blank" rel="noopener">View on GitHub →</a>` : ""}
  </article>`).join("");

const ed = RESUME.education;
$("education").innerHTML = `
  <span class="eyebrow">Education · ${esc(ed.when)}</span>
  <h3>${esc(ed.degree)}</h3>
  <p class="muted">${esc(ed.school)}</p>
  <p>${esc(ed.note)}</p>`;

$("email").textContent = RESUME.email;
$("links").innerHTML = RESUME.links.map(l => `<a class="btn" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("");
$("copy").addEventListener("click", async () => {
  const btn = $("copy");
  try { await navigator.clipboard.writeText(RESUME.email); btn.textContent = "Copied"; }
  catch {
    const r = document.createRange(); r.selectNodeContents($("email"));
    const s = getSelection(); s.removeAllRanges(); s.addRange(r);
    btn.textContent = "Selected";
  }
  setTimeout(() => (btn.textContent = "Copy"), 1600);
});

/* ---------- Soft Wii-ish blips (only after a click) ---------- */
let actx;
function blip(freq = 880, dur = 0.09) {
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    const o = actx.createOscillator(), g = actx.createGain();
    o.type = "sine"; o.frequency.setValueAtTime(freq, actx.currentTime);
    o.frequency.exponentialRampToValueAtTime(freq * 1.5, actx.currentTime + dur);
    g.gain.setValueAtTime(0.06, actx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + dur + 0.05);
    o.connect(g).connect(actx.destination); o.start(); o.stop(actx.currentTime + dur + 0.06);
  } catch {}
}

/* ---------- Channel overlay ---------- */
let current = -1, lastFocus = null;
function openChannel(i) {
  const c = RESUME.channels[i];
  current = i;
  const banner = $("ch-banner");
  banner.style.setProperty("--c1", c.c1);
  banner.style.setProperty("--c2", c.c2);
  $("ch-icon").innerHTML = svg(c.icon);
  $("ch-title").textContent = c.name;
  $("ch-summary").textContent = c.summary;
  $("ch-skills").innerHTML = c.skills.map(s => `
    <li class="skill">
      <span class="pip on" aria-hidden="true"></span>
      <span class="name">${esc(s.name)}${s.note ? `<span class="note">${esc(s.note)}</span>` : ""}</span>
      ${s.level ? `<span class="pips" role="img" aria-label="${s.level} out of 5">${[1,2,3,4,5].map(n => `<span class="pip${n <= s.level ? " on" : ""}"></span>`).join("")}</span>` : "<span></span>"}
    </li>`).join("");
  const ov = $("overlay");
  if (ov.hidden) { lastFocus = document.activeElement; ov.hidden = false; }
  const scr = $("channel-screen");
  scr.style.animation = "none"; scr.offsetHeight; scr.style.animation = "";
  $("ch-menu").focus();
}
function closeChannel() {
  $("overlay").hidden = true; current = -1;
  if (lastFocus) lastFocus.focus();
}
$("channels").addEventListener("click", e => {
  const t = e.target.closest(".tile[data-i]");
  if (t) { blip(660); openChannel(+t.dataset.i); }
});
$("ch-menu").addEventListener("click", () => { blip(520); closeChannel(); });
$("ch-next").addEventListener("click", () => { blip(780); openChannel((current + 1) % RESUME.channels.length); });
$("overlay").addEventListener("click", e => { if (e.target.id === "overlay") closeChannel(); });
document.addEventListener("keydown", e => {
  if ($("overlay").hidden) return;
  if (e.key === "Escape") closeChannel();
  if (e.key === "Tab") {
    const f = [$("ch-menu"), $("ch-next")];
    if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[1].focus(); }
    else if (!e.shiftKey && document.activeElement === f[1]) { e.preventDefault(); f[0].focus(); }
  }
});

/* ---------- Console clock ---------- */
function tick() {
  const d = new Date();
  $("time").textContent = d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }).replace(/\s?[AP]M/i, "");
  $("date").textContent = d.toLocaleDateString([], { weekday: "short", month: "numeric", day: "numeric" }).replace(",", "");
}
tick(); setInterval(tick, 10000);

/* ---------- Rising bubbles ---------- */
(function bubbles() {
  const cv = $("bubbles"), ctx = cv.getContext("2d");
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let W, H, list = [];
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  function size() {
    W = innerWidth; H = innerHeight;
    cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function make(y) {
    const r = 6 + Math.random() * 26;
    return { x: Math.random() * W, y: y ?? H + r, r, s: 0.15 + Math.random() * 0.45, w: Math.random() * Math.PI * 2 };
  }
  function draw(b) {
    const g = ctx.createRadialGradient(b.x - b.r * .35, b.y - b.r * .4, b.r * .1, b.x, b.y, b.r);
    g.addColorStop(0, "rgba(255,255,255,0.75)");
    g.addColorStop(0.55, "rgba(200,240,255,0.12)");
    g.addColorStop(0.9, "rgba(120,210,255,0.25)");
    g.addColorStop(1, "rgba(255,255,255,0.55)");
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2); ctx.fill();
  }
  function frame() {
    ctx.clearRect(0, 0, W, H);
    for (const b of list) {
      b.y -= b.s; b.w += 0.01; b.x += Math.sin(b.w) * 0.25;
      if (b.y < -b.r) Object.assign(b, make());
      draw(b);
    }
    requestAnimationFrame(frame);
  }
  size();
  list = Array.from({ length: Math.round(Math.min(34, W / 40)) }, () => make(Math.random() * H));
  addEventListener("resize", size);
  if (still) list.forEach(draw); else frame();
})();
