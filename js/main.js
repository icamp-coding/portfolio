(() => {
  const P = window.PORTFOLIO;
  const root = document.documentElement;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s = "") =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const pad = (n) => String(n).padStart(2, "0");
  const src = (path) => esc(encodeURI(path)); // file names may contain spaces
  const plural = (n, word) => `${n} ${word}${n === 1 ? "" : "s"}`;
  // Work samples need an image or a link to be shown.
  const shownWork = (s) => (s.work || []).filter((w) => w.image || w.link);

  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const D = (s) => (reduceMotion ? 0 : s);

  // Without GSAP (e.g. CDN blocked) show everything statically.
  if (!window.gsap) root.classList.remove("js");

  const ICONS = {
    film: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4"/>',
    teach: '<path d="M4 5h16v11H10l-6 4z"/><path d="M9.5 13 12 7l2.5 6M10.3 11h3.4"/>',
    social: '<path d="M3 10v4h3l7 4V6L6 10z"/><path d="M17 9a4 4 0 0 1 0 6M19.5 6.5a8 8 0 0 1 0 11"/>',
    ai: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/><path d="m12 9 .9 2.1L15 12l-2.1.9L12 15l-.9-2.1L9 12l2.1-.9z"/>',
    event: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/><path d="m12 12.5 1 2h2.2l-1.7 1.4.6 2.2-2.1-1.3-2.1 1.3.6-2.2-1.7-1.4H11z"/>',
    dice: '<path d="m12 2 9 5v10l-9 5-9-5V7z"/><path d="m12 7 5 8H7z"/><path d="M12 2v5M3 7l4 8M21 7l-4 8M12 22l-5-7M12 22l5-7"/>',
    leaf: '<path d="M5 20c0-9 6-15 15-15 0 9-6 15-14 15"/><path d="M5 20c3-5 6-8 10-10"/>',
    code: '<path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>',
    badge: '<circle cx="12" cy="9" r="6"/><path d="m9 14.5-1.5 7.5 4.5-2.5 4.5 2.5-1.5-7.5"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  };
  const icon = (name) =>
    `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;

  /* ---------- Render page from content.js ---------- */
  function renderPage() {
    const initials = P.name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
    document.title = `${P.name} | Portfolio`;
    $(".nav-logo").innerHTML = `${esc(initials)}<span>.</span>`;
    $$("[data-field]").forEach((el) => (el.textContent = P[el.dataset.field] || ""));
    $(".rotator-word").textContent = P.heroWords[0];
    $(".rotator-word").style.color = P.skills[0].accent;

    const facts = [
      ["Based in", P.location],
      ["Languages", (P.languages || []).join(", ")],
      ["Open to", P.openTo],
    ]
      .filter(([, v]) => v)
      .map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`)
      .join("");
    $("#heroMeta").innerHTML = facts;
    $("#aboutFacts").innerHTML = facts;

    const items = P.skills.map((s) => `<span>${esc(s.title)}</span><i>✦</i>`).join("");
    $(".marquee-track").innerHTML = items + items;

    renderMotto();
    const numbers = ["No", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"];
    $("#craftCount").textContent = numbers[P.skills.length] || P.skills.length;
    const spans = cardSpans(P.skills.length);
    $("#skillGrid").innerHTML = P.skills.map((s, i) => cardHTML(s, i, spans[i])).join("");

    if (P.photo) $("#aboutPhoto").innerHTML = `<img src="${src(P.photo)}" alt="${esc(P.name)}">`;
    $("#aboutText").innerHTML = P.about.map((p) => `<p class="about-body reveal">${esc(p)}</p>`).join("");

    const email = $("#contactEmail");
    email.href = `mailto:${P.email}`;
    email.textContent = P.email;
    $("#contactRow").innerHTML =
      cvButton(P.cv, "full", "btn btn-cream") +
      P.socials.map((s) => `<a class="btn btn-ghost" href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a>`).join("");
    $("#footerName").textContent = `© ${new Date().getFullYear()} ${P.name}`;
    $("#draftPill").hidden = !P.draft;
  }

  function renderMotto() {
    const m = P.motto;
    const section = $("#motto");
    if (!m || !m.lead) { section.remove(); return; }
    const words = (text = "") => text.split(/\s+/).filter(Boolean).map((w) => `<span class="w">${esc(w)}</span>`).join(" ");
    $(".motto-label", section).textContent = m.label || "";
    $(".motto-lead", section).innerHTML = words(m.lead);
    $(".motto-twist", section).innerHTML = words(m.twist);
  }

  function cvButton(cv, subject, cls) {
    if (cv) return `<a class="${cls}" href="${src(cv)}" target="_blank" rel="noopener">Download ${subject === "full" ? "full " : ""}CV</a>`;
    const topic = subject === "full" ? "CV request" : `CV request: ${subject}`;
    return `<a class="${cls}" href="mailto:${esc(P.email)}?subject=${encodeURIComponent(topic)}">Request my CV</a>`;
  }

  function cardMeta(s) {
    const parts = [];
    const xp = (s.experience || []).length;
    const work = shownWork(s).length;
    const certs = (s.certifications || []).length;
    if (xp) parts.push(plural(xp, "role"));
    if (work) parts.push(plural(work, "sample"));
    if (certs) parts.push(plural(certs, "certificate"));
    return parts.join(" · ") || "View details";
  }

  // Grid of 6 columns: two featured cards, then rows of three.
  // A short last row stretches so the grid never has gaps.
  function cardSpans(n) {
    if (n <= 2) return Array(n).fill(n === 1 ? 6 : 3);
    const spans = [3, 3, ...Array(n - 2).fill(2)];
    const rest = (n - 2) % 3;
    if (rest === 2) spans[n - 1] = spans[n - 2] = 3;
    if (rest === 1) spans[n - 1] = 6;
    return spans;
  }

  const cardHTML = (s, i, span = 2) => `
    <a class="skill-card reveal${span > 2 ? " is-big" : ""}" href="#/${esc(s.id)}" data-id="${esc(s.id)}" data-cursor="Open"
       style="--accent:${esc(s.accent)};--span:${span};--d:${(i % 3) * 90}ms">
      <span class="card-fill"></span>
      <span class="card-top"><span class="card-num">${pad(i + 1)}</span>${icon(s.icon)}</span>
      <span class="card-body">
        <h3 class="card-title">${esc(s.title)}</h3>
        <p class="card-short">${esc(s.short)}</p>
      </span>
      <span class="card-foot">
        <span>${cardMeta(s)}</span>
        <span class="card-arrow" aria-hidden="true">→</span>
      </span>
    </a>`;

  function panelHTML(s) {
    const i = P.skills.indexOf(s);
    const next = P.skills[(i + 1) % P.skills.length];
    const [quote, ...moreQuotes] = s.testimonials || (s.testimonial ? [s.testimonial] : []);
    const quoteBy = (q) => `<figcaption class="quote-by"><b>${esc(q.name)}</b>${q.role ? ` · ${esc(q.role)}` : ""}</figcaption>`;
    const stats = [...(s.years ? [{ value: s.years, label: "Years of experience" }] : []), ...(s.stats || [])];
    const tools = s.tools || [];
    const xp = s.experience || [];
    const cases = s.caseStudies || [];
    const work = shownWork(s);
    const certs = s.certifications || [];
    return `
      <div class="panel-top">
        <div class="panel-bar">
          <button class="panel-back" type="button" data-close>← All skills</button>
          <span class="panel-count">${pad(i + 1)} / ${pad(P.skills.length)}</span>
        </div>
        <div class="panel-hero">
          ${icon(s.icon)}
          <p class="eyebrow">${esc(s.role)}</p>
          <h2 class="panel-title" id="panelTitle">${esc(s.title)}</h2>
          <p class="panel-summary">${esc(s.summary)}</p>
        </div>
      </div>

      <div class="panel-body">
        ${stats.length || tools.length || s.note ? `
        <section class="glance" aria-label="At a glance">
          <h3 class="label">At a glance</h3>
          ${stats.length ? `
          <div class="glance-grid">
            ${stats.map((st) => `<div class="stat"><b>${esc(st.value)}</b><span>${esc(st.label)}</span></div>`).join("")}
          </div>` : ""}
          ${tools.length ? `
          <div class="tools">
            <span class="label">Tools & skills</span>
            <ul>${tools.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
          </div>` : ""}
          ${s.note ? `<p class="note">${icon("info")}<span>${esc(s.note)}</span></p>` : ""}
        </section>` : `<div class="glance-spacer"></div>`}

        ${xp.length ? `
        <section class="p-section">
          <h3 class="p-title reveal">Experience <small>${pad(xp.length)}</small></h3>
          <ol class="xp">
            ${xp.map((x) => `
              <li class="xp-item reveal">
                <span class="xp-when label">${esc(x.dates)}</span>
                <div>
                  <h4>${esc(x.role)}</h4>
                  <p class="xp-org">${esc(x.org)}</p>
                  ${(x.points || []).length ? `<ul>${x.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}
                </div>
              </li>`).join("")}
          </ol>
        </section>` : ""}

        ${cases.length ? `
        <section class="p-section">
          <h3 class="p-title reveal">Selected results <small>${pad(cases.length)}</small></h3>
          <div class="cases">
            ${cases.map((c, n) => `
              <article class="case reveal" style="--d:${n * 90}ms">
                <span class="label">Case ${pad(n + 1)}</span>
                <h4>${esc(c.title)}</h4>
                <dl>
                  <dt class="label">Challenge</dt><dd>${esc(c.problem)}</dd>
                  <dt class="label">What I did</dt><dd>${esc(c.action)}</dd>
                  <dt class="label">Result</dt><dd class="result">${esc(c.result)}</dd>
                </dl>
              </article>`).join("")}
          </div>
        </section>` : ""}

        ${work.length ? `
        <section class="p-section">
          <h3 class="p-title reveal">Work samples <small>${pad(work.length)}</small></h3>
          <div class="gallery">
            ${work.map((w, n) => `
              <figure class="work reveal" style="--d:${(n % 3) * 90}ms">
                ${w.image
                  ? w.link
                    ? `<a class="media" style="--ratio:${esc(w.ratio || "4/3")}" href="${esc(w.link)}" target="_blank" rel="noopener" aria-label="${esc(`${w.title}: ${w.linkLabel || "View project"}`)}"><img src="${src(w.image)}" alt="" loading="lazy"><span class="media-play">${esc(w.linkLabel || "View project")} ↗</span></a>`
                    : `<div class="media" style="--ratio:${esc(w.ratio || "4/3")}"><img src="${src(w.image)}" alt="${esc(w.title)}" loading="lazy"></div>`
                  : `<a class="media media-link" style="--ratio:${esc(w.ratio || "4/3")}" href="${esc(w.link)}" target="_blank" rel="noopener">${esc(w.linkLabel || "View project")} ↗</a>`}
                <figcaption>
                  <span class="label">${esc(w.type)}</span>
                  <h4>${esc(w.title)}</h4>
                  <p>${esc(w.description)}</p>
                  ${w.link && w.image ? `<a href="${esc(w.link)}" target="_blank" rel="noopener">${esc(w.linkLabel || "View project")} ↗</a>` : ""}
                </figcaption>
              </figure>`).join("")}
          </div>
        </section>` : ""}

        ${certs.length ? `
        <section class="p-section">
          <h3 class="p-title reveal">Certifications <small>${pad(certs.length)}</small></h3>
          <ul class="certs">
            ${certs.map((c) => `
              <li class="cert reveal">
                <span class="cert-badge">${icon("badge")}</span>
                <div><h4>${esc(c.name)}</h4><p>${esc(c.issuer)}${c.year ? ` · ${esc(c.year)}` : ""}</p></div>
                ${c.link ? `<a href="${esc(c.link)}" target="_blank" rel="noopener">Verify ↗</a>` : ""}
              </li>`).join("")}
          </ul>
        </section>` : ""}

        ${quote ? `
        <section class="p-section quote">
          <figure class="reveal">
            <blockquote>“${esc(quote.quote)}”</blockquote>
            ${quoteBy(quote)}
          </figure>
          ${moreQuotes.length ? `
          <div class="quote-grid">
            ${moreQuotes.map((q, n) => `
              <figure class="quote-card reveal" style="--d:${(n % 3) * 90}ms">
                <blockquote>“${esc(q.quote)}”</blockquote>
                ${quoteBy(q)}
              </figure>`).join("")}
          </div>` : ""}
        </section>` : ""}

        <section class="panel-cta reveal">
          <h3>Hiring for ${esc(s.title)}?</h3>
          <div class="cta-row">
            ${cvButton(s.cv || P.cv, s.title, "btn btn-white")}
            <a class="btn btn-outline-light" href="mailto:${esc(P.email)}?subject=${encodeURIComponent(s.title + " opportunity")}">Email me</a>
          </div>
        </section>

        <a class="panel-next" href="#/${esc(next.id)}" style="--next:${esc(next.accent)}">
          <span class="label">Next skill</span>
          <span class="panel-next-title">${esc(next.title)} →</span>
        </a>
      </div>`;
  }

  /* ---------- Scroll reveals ---------- */
  function observeReveals(scope = document, scroller = null) {
    if (!root.classList.contains("js") || reduceMotion) {
      $$(".reveal", scope).forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("in");
          io.unobserve(e.target);
        }),
      { root: scroller, threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    $$(".reveal:not(.in)", scope).forEach((el) => io.observe(el));
  }

  /* ---------- Intro + hero rotator ---------- */
  function intro() {
    gsap.timeline({ defaults: { ease: "expo.out" } })
      .fromTo(".hero-title .line > span", { y: 0, yPercent: 110 }, { y: 0, yPercent: 0, duration: D(1.3), stagger: 0.1 })
      .fromTo(".hero-eyebrow, .hero-foot", { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: D(1), stagger: 0.1 }, "-=0.9")
      .fromTo(".nav", { y: -16, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: D(0.9) }, "<");
    if (!reduceMotion) startRotator();
  }

  function startRotator() {
    const el = $(".rotator-word");
    let i = 0;
    setInterval(() => {
      i = (i + 1) % P.heroWords.length;
      gsap.timeline()
        .to(el, { yPercent: -110, duration: 0.5, ease: "power3.in" })
        .add(() => {
          el.textContent = P.heroWords[i];
          el.style.color = P.skills[i % P.skills.length].accent;
        })
        .fromTo(el, { yPercent: 110 }, { yPercent: 0, duration: 0.7, ease: "expo.out" });
    }, 2800);
  }

  // Motto: the proverb fades in, then the twist rises and gets underlined.
  function mottoIn() {
    const section = $("#motto");
    if (!section) return;
    const lead = $$(".motto-lead .w", section);
    const twistEl = $(".motto-twist", section);
    const twist = $$(".w", twistEl);
    if (reduceMotion) {
      gsap.set([...lead, ...twist], { autoAlpha: 1 });
      gsap.set(twistEl, { "--u": "100%" });
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        gsap.timeline()
          .fromTo(lead, { yPercent: 40, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.8, stagger: 0.06, ease: "power3.out" })
          // The twist fades in as one phrase after a pause, like a punchline.
          .fromTo(twist, { autoAlpha: 0, filter: "blur(6px)" }, { autoAlpha: 1, filter: "blur(0px)", duration: 1.6, ease: "power2.inOut" }, "+=0.6")
          .to(twistEl, { "--u": "100%", duration: 1.1, ease: "expo.inOut" }, "-=0.3");
      },
      { threshold: 0.5 }
    );
    io.observe(section);
  }

  /* ---------- Cursor + card tilt (mouse only) ---------- */
  function pointerFx() {
    if (!finePointer || reduceMotion || !window.gsap) return;
    root.classList.add("has-cursor");
    const cursor = $(".cursor");
    const text = $(".cursor-text");
    gsap.set(cursor, { xPercent: -50, yPercent: -50, autoAlpha: 0 });
    const cx = gsap.quickTo(cursor, "x", { duration: 0.45, ease: "power3" });
    const cy = gsap.quickTo(cursor, "y", { duration: 0.45, ease: "power3" });
    let shown = false;
    addEventListener("pointermove", (e) => {
      if (e.pointerType !== "mouse") return;
      if (!shown) {
        shown = true;
        gsap.set(cursor, { x: e.clientX, y: e.clientY });
        gsap.to(cursor, { autoAlpha: 1, duration: 0.3 });
      }
      cx(e.clientX);
      cy(e.clientY);
    });
    document.addEventListener("pointerover", (e) => {
      const labelled = e.target.closest("[data-cursor]");
      const hoverable = e.target.closest("a, button");
      if (labelled) text.textContent = labelled.dataset.cursor;
      cursor.classList.toggle("is-label", !!labelled);
      cursor.classList.toggle("is-hover", !labelled && !!hoverable);
    });
    document.addEventListener("pointerleave", () => cursor.classList.remove("is-label", "is-hover"));

    $$(".skill-card").forEach((card) => {
      gsap.set(card, { transformPerspective: 1000 });
      const rx = gsap.quickTo(card, "rotationX", { duration: 0.6, ease: "power3" });
      const ry = gsap.quickTo(card, "rotationY", { duration: 0.6, ease: "power3" });
      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        ry((px - 0.5) * 7);
        rx((0.5 - py) * 7);
        card.style.setProperty("--mx", `${px * 100}%`);
        card.style.setProperty("--my", `${py * 100}%`);
      });
      card.addEventListener("pointerleave", () => { rx(0); ry(0); });
    });
  }

  /* ---------- Skill panel: open / switch / close ---------- */
  const panel = $("#panel");
  const expander = $("#expander");
  let current = null;
  let busy = false;
  let queued = false;

  const done = () => {
    busy = false;
    if (queued) { queued = false; route(); }
  };

  const cardFor = (s) => $(`.skill-card[data-id="${s.id}"]`);
  const onScreen = (r) => r && r.bottom > 0 && r.top < innerHeight;

  function render(s) {
    current = s;
    panel.style.setProperty("--accent", s.accent);
    panel.innerHTML = panelHTML(s);
    panel.scrollTop = 0;
    document.title = `${s.title} | ${P.name}`;
    observeReveals(panel, panel);
  }

  // Stagger the panel's hero and body in.
  function panelIn() {
    return gsap.timeline({ defaults: { ease: "expo.out" } })
      .fromTo($(".panel-bar", panel), { autoAlpha: 0 }, { autoAlpha: 1, duration: D(0.5) })
      .fromTo($(".panel-hero", panel).children, { y: 46, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: D(1), stagger: 0.07 }, "<")
      .fromTo($(".panel-body", panel), { y: 90, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: D(1.1) }, "<0.2");
  }

  function openSkill(s) {
    busy = true;
    const card = cardFor(s);
    const r = card && card.getBoundingClientRect();
    root.classList.add("is-locked", "panel-open");
    render(s);
    panel.hidden = false;
    gsap.set(panel, { autoAlpha: 0 });

    const tl = gsap.timeline({ onComplete: () => { panel.focus({ preventScroll: true }); done(); } });
    if (onScreen(r) && !reduceMotion) {
      // Grow the clicked card into the full-screen page.
      gsap.set(card, { rotationX: 0, rotationY: 0 });
      gsap.set(expander, {
        display: "block", autoAlpha: 1, clipPath: "none", background: s.accent,
        top: r.top, left: r.left, width: r.width, height: r.height,
        borderRadius: getComputedStyle(card).borderRadius,
      });
      tl.to(expander, { top: 0, left: 0, width: innerWidth, height: innerHeight, borderRadius: 0, duration: 0.9, ease: "expo.inOut" });
    } else {
      // Direct link (no card on screen): circular reveal.
      gsap.set(expander, {
        display: "block", autoAlpha: 1, background: s.accent,
        top: 0, left: 0, width: "100%", height: "100%", borderRadius: 0,
        clipPath: "circle(0% at 50% 50%)",
      });
      tl.to(expander, { clipPath: "circle(75% at 50% 50%)", duration: D(1), ease: "expo.inOut" });
    }
    tl.set(panel, { autoAlpha: 1 })
      .set(expander, { display: "none" })
      .add(panelIn());
  }

  function switchSkill(s) {
    busy = true;
    expander.classList.add("is-over");
    gsap.set(expander, {
      display: "block", autoAlpha: 1, background: s.accent,
      top: 0, left: 0, width: "100%", height: "100%", borderRadius: 0,
      clipPath: "inset(100% 0% 0% 0%)",
    });
    gsap.timeline({
      onComplete: () => {
        expander.classList.remove("is-over");
        gsap.set(expander, { display: "none", clipPath: "none" });
        done();
      },
    })
      .to(expander, { clipPath: "inset(0% 0% 0% 0%)", duration: D(0.75), ease: "expo.inOut" })
      .add(() => { render(s); panelIn(); })
      .to(expander, { clipPath: "inset(0% 0% 100% 0%)", duration: D(0.8), ease: "expo.inOut" });
  }

  function closeSkill() {
    busy = true;
    const s = current;
    const card = cardFor(s);
    const r = card && card.getBoundingClientRect();
    gsap.set(expander, {
      display: "block", autoAlpha: 1, clipPath: "none", background: s.accent,
      top: 0, left: 0, width: innerWidth, height: innerHeight, borderRadius: 0,
    });
    const tl = gsap.timeline({
      onComplete: () => {
        panel.hidden = true;
        panel.innerHTML = "";
        gsap.set(expander, { display: "none", clipPath: "none" });
        root.classList.remove("is-locked", "panel-open");
        document.title = `${P.name} | Portfolio`;
        current = null;
        if (card) card.focus({ preventScroll: true });
        done();
      },
    });
    tl.to(panel, { autoAlpha: 0, duration: D(0.35), ease: "power2.out" });
    if (onScreen(r) && !reduceMotion) {
      // Shrink back into the card it came from.
      tl.to(expander, {
        top: r.top, left: r.left, width: r.width, height: r.height,
        borderRadius: getComputedStyle(card).borderRadius,
        duration: 0.85, ease: "expo.inOut",
      }).to(expander, { autoAlpha: 0, duration: 0.3 });
    } else {
      tl.to(expander, { clipPath: "circle(0% at 50% 50%)", duration: D(0.8), ease: "expo.inOut" });
    }
  }

  /* ---------- Routing: #/skill-id gives every skill its own link ---------- */
  function route() {
    if (busy) { queued = true; return; }
    const id = location.hash.startsWith("#/") ? decodeURIComponent(location.hash.slice(2)) : "";
    const s = P.skills.find((k) => k.id === id);
    if (s && !current) openSkill(s);
    else if (s && current !== s) switchSkill(s);
    else if (!s && current) closeSkill();
  }

  function goHome() {
    history.pushState("", document.title, location.pathname + location.search);
    route();
  }

  /* ---------- Init ---------- */
  renderPage();
  observeReveals();

  if (window.gsap) {
    intro();
    mottoIn();
    pointerFx();
    addEventListener("hashchange", route);
    panel.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) goHome(); });
    addEventListener("keydown", (e) => { if (e.key === "Escape" && current) goHome(); });
    route();
  }

  const nav = $(".nav");
  const onScroll = () => nav.classList.toggle("is-scrolled", scrollY > 20);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
