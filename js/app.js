// Arma la página a partir de contenido.js. No hace falta tocar este archivo para cambiar textos.
(function () {
  const P = window.PERFIL, UI = window.UI;
  let lang = "es";
  try { lang = localStorage.getItem("lang") || "es"; } catch (e) {}
  if (lang !== "en") lang = "es";
  let filtro = "todos";

  const t = (x) => (x == null ? "" : typeof x === "string" ? x : (x[lang] ?? x.es ?? ""));
  const ui = (path) => t(path.split(".").reduce((o, k) => o && o[k], UI));
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const portada = (p, conTipo) => {
    const c = p.portada || {};
    const tipo = conTipo && p.tipo ? `<span class="tipo">${esc(t(p.tipo))}</span>` : "";
    if (c.img) return `<div class="cover">${tipo}<img src="${c.img}" alt="" loading="lazy" style="object-position:${c.pos || "center"}"></div>`;
    return `<div class="cover kpi tono-${c.tono || "wine"}">${tipo}<b>${esc(t(c.kpi))}</b><small>${esc(t(c.nota))}</small></div>`;
  };

  function render() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-ui]").forEach((el) => (el.textContent = ui(el.dataset.ui)));
    document.querySelectorAll(".lang button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === lang));

    $("brand").textContent = P.nombreCorto;
    $("foto").innerHTML = P.foto ? `<img src="${P.foto}" alt="${esc(P.nombre)}">` : `<span aria-hidden="true">${P.iniciales}</span>`;
    $("estado").textContent = t(P.estado);
    $("titular").innerHTML = t(P.titular);
    $("bajada").textContent = t(P.bajada);
    $("ejes").innerHTML = P.ejes.map((e) => `<span class="pill">${esc(t(e))}</span>`).join("");
    $("cv").href = t(P.cv);
    $("nombre").textContent = P.nombre;
    $("fotoSobre").innerHTML = P.fotoSobre ? `<img src="${P.fotoSobre}" alt="${lang === "es" ? "Santiago en Puerto Madero, Buenos Aires" : "Santiago in Puerto Madero, Buenos Aires"}" loading="lazy">` : "";
    $("sobreMi").innerHTML = t(P.sobreMi).map((p) => `<p>${esc(p)}</p>`).join("");
    $("datos").innerHTML = P.datos.map((d) => `<div class="dato"><b>${d.n}</b><span>${esc(t(d.t))}</span></div>`).join("");

    // filtros + tarjetas
    $("filtros").setAttribute("aria-label", lang === "es" ? "Filtrar proyectos" : "Filter projects");
    $("filtros").innerHTML = window.CATEGORIAS.map((c) => `<button type="button" id="f-${c.id}" data-f="${c.id}" aria-pressed="${c.id === filtro}">${esc(t(c))}</button>`).join("");
    $("grilla").innerHTML = window.PROYECTOS.map((p) => `
      <button class="card" type="button" data-id="${p.id}" ${visible(p) ? "" : "hidden"}>
        ${portada(p, true)}
        <h3>${esc(t(p.titulo))}</h3>
        <p>${esc(t(p.resumen))}</p>
        <span class="ver">${ui("verCaso")} →</span>
      </button>`).join("");
    $("mas").innerHTML = window.MAS_PROYECTOS.map((m) => `<li><i>${esc(t(m.tag))}</i><br><b>${esc(t(m.titulo))}</b><span>${esc(t(m.texto))}</span></li>`).join("");

    $("linea").innerHTML = window.EXPERIENCIA.map((x) => `
      <li${x.foto ? ' class="con-foto"' : ""}><div class="txt"><div class="f">${esc(t(x.fecha))}</div><h3>${esc(t(x.puesto))}</h3><div class="l">${esc(t(x.lugar))}</div>
      <p>${esc(t(x.texto))}</p>${x.proyecto ? `<button type="button" data-id="${x.proyecto}">${ui("verCaso")} →</button>` : ""}</div>
      ${x.foto ? `<div class="fotos">${[].concat(x.foto).map((f, i) => `<img src="${f}" alt="${esc(t([].concat(x.fotoAlt)[i]))}" loading="lazy">`).join("")}</div>` : ""}</li>`).join("");

    const ig = `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6"/></svg>`;
    $("listaRedes").innerHTML = window.REDES.map((r) => `
      <article class="red">${r.img ? `<a class="shot" href="${r.url || "#"}" target="_blank" rel="noopener" tabindex="-1" aria-hidden="true"><img src="${r.img}" alt="" loading="lazy"></a>` : ""}<div class="top"><span class="ig">${ig}</span><span class="est">${esc(t(r.estado))}</span></div>
      <h3>${r.url ? `<a href="${r.url}" target="_blank" rel="noopener">${esc(r.cuenta)}</a>` : esc(r.cuenta)}</h3>
      <p>${esc(t(r.texto))}</p></article>`).join("");

    $("listaSkills").innerHTML = window.SKILLS.map((g) => `<div><h3>${esc(t(g.grupo))}</h3><div class="pills">${g.items.map((i) => `<span class="pill">${esc(t(i))}</span>`).join("")}</div></div>`).join("");
    $("certs").innerHTML = window.CERTIFICADOS.map((c) => `<div class="cert"><b>${esc(t(c.nombre))}</b><span>${esc(c.emisor)} · ${esc(t(c.fecha))}</span>${c.archivo ? `<a href="${c.archivo}" target="_blank" rel="noopener">${ui("verCertificado")} →</a>` : ""}</div>`).join("");
    $("idiomas").innerHTML = `<b>${ui("idiomas")}:</b> ` + window.IDIOMAS.map((i) => esc(t(i))).join(" · ");

    $("mail").textContent = P.email;
    $("linkedin").href = P.linkedin;
    $("youtube").href = P.youtube;
    $("pie").textContent = `© ${new Date().getFullYear()} ${P.nombre} · Buenos Aires, Argentina`;
    document.title = P.nombre + (lang === "es" ? " · Portfolio" : " · Portfolio");

    if ($("caso").open && abierto) abrir(abierto);
  }

  const visible = (p) => filtro === "todos" || p.cats.includes(filtro);

  // ---------- Panel de caso ----------
  let abierto = null;
  function abrir(id) {
    const p = window.PROYECTOS.find((x) => x.id === id);
    if (!p) return;
    abierto = id;
    const lista = (arr) => `<ul>${t(arr).map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;
    const meta = [t(p.tipo), t(p.fecha), t(p.rol)].filter(Boolean).map(esc).join(" · ");
    $("caso").innerHTML = `
      <div class="head">${portada(p, false)}<button class="cerrar" type="button" id="cerrar" aria-label="${ui("cerrar")}">×</button></div>
      <div class="cuerpo">
        <div><h2 id="caso-titulo">${esc(t(p.titulo))}</h2><div class="meta">${meta}</div></div>
        <div><h4>${ui("contexto")}</h4><p>${esc(t(p.contexto))}</p></div>
        <div><h4>${ui("hice")}</h4>${lista(p.hice)}</div>
        ${p.aprendizaje ? `<div class="aprendi"><h4>${ui("aprendizaje")}</h4><p>${esc(t(p.aprendizaje))}</p></div>` : ""}
        <div class="resultado"><h4>${ui("resultado")}</h4><p>${esc(t(p.resultado))}</p></div>
        ${p.galeria.length ? `<div class="galeria">${p.galeria.map((g) => `<figure>${g.video
          ? `<video src="${g.video}" autoplay muted loop playsinline aria-label="${esc(t(g.alt))}"></video>`
          : `<img src="${g.img}" alt="${esc(t(g.alt))}" loading="lazy">`}<figcaption>${esc(t(g.alt))}</figcaption></figure>`).join("")}</div>` : ""}
        <div><h4>${ui("herramientas")}</h4><div class="pills" style="margin-top:4px">${p.herramientas.map((h) => `<span class="pill">${esc(t(h))}</span>`).join("")}</div></div>
        ${p.links.length ? `<div class="links">${p.links.map((l) => `<a class="btn ghost" href="${l.url}" target="_blank" rel="noopener">${esc(t(l.texto))} ↗</a>`).join("")}</div>` : ""}
      </div>`;
    $("cerrar").addEventListener("click", cerrar);
    if (!$("caso").open) $("caso").showModal();
    $("caso").scrollTop = 0;
    try { history.replaceState(null, "", "#" + id); } catch (e) {}
  }
  function cerrar() {
    $("caso").close();
  }
  $("caso").addEventListener("close", () => {
    abierto = null;
    try { history.replaceState(null, "", location.pathname + location.search); } catch (e) {}
  });
  $("caso").addEventListener("click", (e) => { if (e.target === $("caso")) cerrar(); });

  // ---------- Eventos ----------
  document.addEventListener("click", (e) => {
    const f = e.target.closest("[data-f]");
    if (f) {
      filtro = f.dataset.f;
      document.querySelectorAll("[data-f]").forEach((b) => b.setAttribute("aria-pressed", b === f));
      document.querySelectorAll(".card").forEach((c) => (c.hidden = !visible(window.PROYECTOS.find((p) => p.id === c.dataset.id))));
      return;
    }
    const card = e.target.closest("[data-id]");
    if (card) abrir(card.dataset.id);
    const l = e.target.closest("[data-lang]");
    if (l) {
      lang = l.dataset.lang;
      try { localStorage.setItem("lang", lang); } catch (err) {}
      render();
    }
  });

  $("copiar").addEventListener("click", async () => {
    const b = $("copiar");
    try { await navigator.clipboard.writeText(P.email); }
    catch (e) {
      const r = document.createRange(); r.selectNodeContents($("mail"));
      const s = getSelection(); s.removeAllRanges(); s.addRange(r);
    }
    b.textContent = ui("copiado");
    setTimeout(() => (b.textContent = ui("copiar")), 1800);
  });

  addEventListener("scroll", () => $("bar").classList.toggle("scrolled", scrollY > 8), { passive: true });

  render();
  const h = location.hash.slice(1);
  if (window.PROYECTOS.some((p) => p.id === h)) abrir(h);
})();
