// SCRAMBLED website: puts the words from content.js on the page and runs the moving parts.
// (To change words or links, edit content.js, not this file.)
(function () {
  "use strict";
  var S = window.SITE;
  var $ = function (s) { return document.querySelector(s); };
  var $$ = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)); };
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!S) {
    var oops = document.createElement("p");
    oops.className = "oops";
    oops.textContent = "content.js has a typo, so the site can't load its words. On GitHub, open content.js, click History, and undo the last change. Or check that every piece of text still starts and ends with a ` mark and has its comma.";
    document.body.insertBefore(oops, document.body.firstChild);
    return;
  }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  // ---- words and links
  $$("[data-text]").forEach(function (e) {
    var v = S[e.getAttribute("data-text")];
    if (typeof v === "string") e.textContent = v;
  });
  $$("[data-href]").forEach(function (e) {
    var v = S[e.getAttribute("data-href")];
    if (v) e.href = v;
  });
  $$("[data-store]").forEach(function (e) {
    if (S.metaStore) {
      e.href = S.metaStore;
      e.target = "_blank";
      e.rel = "noopener";
      e.textContent = S.storeLive;
      e.classList.add("key-lit");
    } else {
      e.removeAttribute("href");
      e.setAttribute("aria-disabled", "true");
      e.textContent = S.storeSoon;
      e.classList.add("soon");
    }
  });
  var year = $("#year");
  if (year) year.textContent = new Date().getFullYear();

  // ---- modes: a key per mode, and the screen shows the picked one
  var modes = S.modes || [];
  var keys = $("#mode-keys"), stage = $("#mode-stage"), img = $("#mode-img");
  var current = -1;
  function pick(i, focus) {
    if (i === current || !modes[i]) return;
    current = i;
    var m = modes[i];
    $$("#mode-keys .key").forEach(function (k, j) {
      k.setAttribute("aria-selected", j === i ? "true" : "false");
      k.tabIndex = j === i ? 0 : -1;
      if (j === i && focus) k.focus();
    });
    stage.style.setProperty("--c", m.color || "");
    stage.setAttribute("aria-label", m.name);
    $("#mode-name").textContent = m.name;
    $("#mode-text").textContent = m.text;
    $("#mode-wearing").textContent = m.wearing || "";
    $(".mode-wearing").hidden = !m.wearing;
    img.classList.add("swap");
    setTimeout(function () {
      img.src = m.image;
      img.alt = m.name;
      img.classList.remove("swap");
    }, reduceMotion ? 0 : 160);
  }
  modes.forEach(function (m, i) {
    var k = el("button", "key", m.name);
    k.type = "button";
    k.setAttribute("role", "tab");
    k.style.setProperty("--c", m.color || "");
    k.addEventListener("click", function () { pick(i); });
    k.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { e.preventDefault(); pick((current + 1) % modes.length, true); }
      if (e.key === "ArrowLeft") { e.preventDefault(); pick((current - 1 + modes.length) % modes.length, true); }
    });
    keys.appendChild(k);
    var pre = new Image();
    pre.src = m.image;
  });
  pick(0);

  // ---- wardrobe shelf
  var shelf = $("#shelf");
  (S.wardrobe || []).forEach(function (w) {
    var fig = el("figure", "item");
    var pic = el("img");
    pic.src = w.image;
    pic.alt = w.name;
    pic.loading = "lazy";
    fig.appendChild(pic);
    fig.appendChild(el("div", "plank"));
    fig.appendChild(el("figcaption", "tag", w.name));
    shelf.appendChild(fig);
  });

  // ---- screenshots (only the ones that exist; the strip stays hidden if none do)
  var shots = $("#shots"), shotsBand = $("#screenshots");
  (S.screenshots || []).forEach(function (s) {
    if (!s.image) return;
    var probe = new Image();
    probe.onload = function () {
      var fig = el("figure", "shot");
      var pic = el("img");
      pic.src = s.image;
      pic.alt = s.caption || "";
      fig.appendChild(pic);
      if (s.caption) fig.appendChild(el("figcaption", null, s.caption));
      shots.appendChild(fig);
      shotsBand.hidden = false;
    };
    probe.src = s.image;
  });

  // ---- top bar turns solid once you scroll
  var bar = $("#topbar");
  function onScroll() { bar.classList.toggle("scrolled", window.scrollY > 40); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---- the trailer behind the page
  var root = document.documentElement;
  var bg = $("#bg-video");
  if (S.trailer) {
    if (S.trailerPoster) bg.poster = S.trailerPoster;
    bg.addEventListener("loadeddata", function () { root.classList.add("has-video"); });
    bg.src = S.trailer;
    if (!reduceMotion) {
      var tryPlay = function () { var p = bg.play(); if (p && p.catch) p.catch(function () {}); };
      tryPlay();
      bg.addEventListener("canplay", tryPlay, { once: true });
    }
  }

  // ---- while the trailer loads (or if it can't play): a field of glowing LEDs
  var cv = $("#bg-leds"), ctx = cv.getContext && cv.getContext("2d");
  var PITCH = 14, cols = 0, rows = 0, px = null, last = 0;
  function size() {
    cols = Math.ceil(window.innerWidth / PITCH) + 1;
    rows = Math.ceil(window.innerHeight / PITCH) + 1;
    cv.width = cols; cv.height = rows;
    cv.style.width = cols * PITCH + "px";
    cv.style.height = rows * PITCH + "px";
    px = ctx.createImageData(cols, rows);
  }
  function draw(t) {
    var d = px.data, T = t / 1000;
    for (var y = 0; y < rows; y++) {
      var v = y / rows;
      for (var x = 0; x < cols; x++) {
        var u = x / cols;
        var dx = u - 0.72 - 0.08 * Math.sin(T * 0.3), dy = v - 0.38;
        var b = Math.sin(u * 5.5 + T * 0.6) + Math.sin(v * 4.5 - T * 0.45) + Math.sin((u + v) * 3.6 + T * 0.8)
              + 1.4 * Math.sin(Math.sqrt(dx * dx + dy * dy) * 11 - T * 1.3);
        b = (b + 4.4) / 8.8;
        b = b * b * b * (0.55 + 0.45 * u); // brighter on the right, away from the words
        var i = (y * cols + x) * 4;
        d[i] = 30 + 225 * b; d[i + 1] = 32 + 150 * b; d[i + 2] = 58 - 50 * b; d[i + 3] = 255;
      }
    }
    ctx.putImageData(px, 0, 0);
  }
  function loop(t) {
    if (root.classList.contains("has-video")) return;
    if (t - last > 33) { draw(t); last = t; }
    requestAnimationFrame(loop);
  }
  if (ctx) {
    size();
    window.addEventListener("resize", function () { size(); if (reduceMotion) draw(4000); });
    if (reduceMotion) draw(4000); else requestAnimationFrame(loop);
  }

  // ---- the trailer with sound, in a pop-up
  var dlg = $("#trailer-dialog"), dv = $("#trailer-video");
  dv.addEventListener("error", function () { dlg.classList.add("missing"); });
  $$("[data-open-trailer]").forEach(function (b) {
    b.addEventListener("click", function () {
      if (!S.trailer) dlg.classList.add("missing");
      else if (dv.getAttribute("src") !== S.trailer) dv.src = S.trailer;
      if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
      if (!dlg.classList.contains("missing")) { var p = dv.play(); if (p && p.catch) p.catch(function () {}); }
    });
  });
  function closeDialog() { if (dlg.close) dlg.close(); else dlg.removeAttribute("open"); }
  $("#trailer-close").addEventListener("click", closeDialog);
  dlg.addEventListener("click", function (e) { if (e.target === dlg) closeDialog(); });
  dlg.addEventListener("close", function () { dv.pause(); });
})();
