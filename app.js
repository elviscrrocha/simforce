/* ============================================================
   Simulados Salesforce Certified Administrator
   SPA de telas no estilo "ascenda" · identidade Salesforce ☁️⚡
   ============================================================ */
(function () {
  "use strict";

  const QUESTIONS = window.QUESTIONS || [];
  const PASS_MARK = 65;            // % de aprovação (Salesforce Admin)
  const TIME_LIMIT = 90 * 60;      // 90 min (modo prova)
  const STORE_KEY = "sfsim.v2";
  const USER = { name: "Elvis Rocha", initials: "ER" };

  // Cena ORIGINAL inspirada no estilo (céu, ondas azuis, brilhos, colina com
  // trilha rumo ao alto) + mascote nuvem próprio. NÃO reproduz personagem de marca.
  const MASCOT_SVG = `
  <svg viewBox="0 0 300 168" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Mascote nuvem voando sobre a trilha" style="display:block">
    <defs>
      <linearGradient id="hSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#8fcdff"/><stop offset="1" stop-color="#cfeaff"/>
      </linearGradient>
      <linearGradient id="hWave" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#1b96ff"/><stop offset="1" stop-color="#8fd0ff"/>
      </linearGradient>
      <linearGradient id="hHill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#9be07a"/><stop offset="1" stop-color="#5fb84f"/>
      </linearGradient>
      <linearGradient id="hBody" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#e6f1ff"/>
      </linearGradient>
      <linearGradient id="hSpark" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#e9f5ff"/><stop offset="1" stop-color="#7cc0ff"/>
      </linearGradient>
    </defs>

    <!-- céu -->
    <rect x="0" y="0" width="300" height="168" fill="url(#hSky)"/>

    <!-- colina verde + trilha rumo ao alto -->
    <path d="M110 168 C150 120 210 108 300 92 L300 168 Z" fill="url(#hHill)"/>
    <path d="M150 168 C168 150 175 140 200 132 C224 124 236 116 262 104"
          fill="none" stroke="#e3d6ff" stroke-width="9" stroke-linecap="round" opacity=".92"/>
    <path d="M150 168 C168 150 175 140 200 132 C224 124 236 116 262 104"
          fill="none" stroke="#c9b6ff" stroke-width="9" stroke-linecap="round" stroke-dasharray="2 12" opacity=".7"/>
    <!-- arvorezinhas -->
    <g>
      <rect x="213" y="118" width="3" height="8" fill="#6b4a2b"/>
      <path d="M214.5 100 l9 18 -18 0 z" fill="#3f9d57"/><path d="M214.5 108 l7 13 -14 0 z" fill="#4fb064"/>
      <rect x="248" y="103" width="3" height="7" fill="#6b4a2b"/>
      <path d="M249.5 88 l8 16 -16 0 z" fill="#3f9d57"/>
    </g>

    <!-- ondas/fitas azuis fluindo (canto inferior esquerdo) -->
    <g fill="none" stroke-linecap="round" opacity=".92">
      <path d="M-10 150 C40 120 70 150 120 118" stroke="url(#hWave)" stroke-width="10"/>
      <path d="M-10 160 C44 132 74 162 128 128" stroke="#4aa8ff" stroke-width="7" opacity=".8"/>
      <path d="M-10 142 C36 112 66 140 112 110" stroke="#bfe2ff" stroke-width="5" opacity=".85"/>
      <path d="M-10 168 C50 144 80 172 134 140" stroke="#1763d6" stroke-width="6" opacity=".7"/>
    </g>

    <!-- brilhos (losango) -->
    <g fill="url(#hSpark)">
      <path d="M52 44 Q58 50 64 44 Q58 50 52 56 Q58 50 52 44 M52 44 Q46 50 52 56 Q46 50 40 50 Q46 50 52 44"/>
      <path d="M248 60 Q253 65 258 60 Q253 65 248 70 Q253 65 248 60 M248 60 Q243 65 248 70 Q243 65 238 65 Q243 65 248 60"/>
      <path d="M86 24 Q90 28 94 24 Q90 28 86 32 Q90 28 86 24 M86 24 Q82 28 86 32 Q82 28 78 28 Q82 28 86 24"/>
    </g>

    <!-- mascote nuvem voando -->
    <g transform="translate(150 74) rotate(-8)">
      <ellipse cx="0" cy="58" rx="46" ry="8" fill="#0a1f44" opacity=".12"/>
      <!-- capinha -->
      <path d="M-34 -4 C-58 2 -66 18 -72 30 C-54 22 -42 24 -28 16 Z" fill="#1763d6"/>
      <!-- corpo nuvem -->
      <g fill="url(#hBody)">
        <circle cx="-34" cy="8"  r="22"/>
        <circle cx="-4"  cy="-6" r="30"/>
        <circle cx="30"  cy="4"  r="24"/>
        <circle cx="12"  cy="22" r="23"/>
        <circle cx="-22" cy="26" r="21"/>
        <rect x="-44" y="6" width="84" height="26" rx="13"/>
      </g>
      <!-- bracinho estendido (voando) -->
      <path d="M40 6 q22 -2 36 -14" stroke="#dbe8ff" stroke-width="9" fill="none" stroke-linecap="round"/>
      <circle cx="78" cy="-10" r="7" fill="#fff"/>
      <!-- óculos de aviador + rosto -->
      <g>
        <circle cx="-14" cy="2" r="9.5" fill="#16325c"/>
        <circle cx="8"   cy="2" r="9.5" fill="#16325c"/>
        <rect x="-5" y="0" width="4" height="3" rx="1.5" fill="#16325c"/>
        <circle cx="-16" cy="-1" r="2.6" fill="#8fd0ff"/>
        <circle cx="6"   cy="-1" r="2.6" fill="#8fd0ff"/>
        <circle cx="-26" cy="14" r="5" fill="#ffc2d1" opacity=".85"/>
        <circle cx="20"  cy="14" r="5" fill="#ffc2d1" opacity=".85"/>
        <path d="M-6 16 q6 7 14 0" stroke="#16325c" stroke-width="3.2" fill="none" stroke-linecap="round"/>
      </g>
      <!-- antena com estrelinha -->
      <line x1="-2" y1="-34" x2="-2" y2="-46" stroke="#1763d6" stroke-width="3" stroke-linecap="round"/>
      <path d="M-2 -58 l2.6 6 6 2.6 -6 2.6 -2.6 6 -2.6 -6 -6 -2.6 6 -2.6z" fill="#ffd166"/>
    </g>
  </svg>`;

  // ---- Domínios oficiais da prova Admin (id === q.module) -----------
  const TEMAS = [
    { id: "config",       label: "Configuration and Setup",                  short: "Configuration & Setup", desc: "Empresa, usuários, perfis, permissões e acessos.",            icon: "⚙️" },
    { id: "objects",      label: "Object Manager and Lightning App Builder", short: "Object Manager",        desc: "Objetos, campos, relacionamentos e páginas Lightning.",       icon: "🧩" },
    { id: "sales",        label: "Sales and Marketing Applications",         short: "Sales & Marketing",     desc: "Leads, contas, oportunidades, campanhas e previsões.",        icon: "💼" },
    { id: "service",      label: "Service and Support Applications",         short: "Service & Support",     desc: "Casos, filas, escalonamento, Omni-Channel e entitlements.",   icon: "🎧" },
    { id: "productivity", label: "Productivity and Collaboration",           short: "Productivity",          desc: "Atividades, Chatter, mobile, ações rápidas e templates.",     icon: "🤝" },
    { id: "data",         label: "Data and Analytics Management",            short: "Data & Analytics",      desc: "Importação, relatórios, painéis e qualidade de dados.",       icon: "📊" },
    { id: "automation",   label: "Automation",                               short: "Automation",            desc: "Flow, regras de validação, aprovação e processos.",           icon: "🔄" },
    { id: "agentforce",   label: "Agentforce",                               short: "Agentforce",            desc: "Agentes de IA, prompts, Einstein e grounding.",               icon: "🤖" },
  ];
  const temaOf = (q) => (temaById[q.module] ? q.module : "config");
  const temaById = Object.fromEntries(TEMAS.map((t) => [t.id, t]));

  // ---- Simulados ----------------------------------------------------
  const SIM_DESC = {
    1: { desc: "Domine a base: configuração, segurança, objetos e relatórios.", level: "Fundamentos" },
    2: { desc: "Novos cenários para reforçar sua preparação para a prova.",     level: "Intermediário" },
    3: { desc: "Aprofunde automação, dados e análises com casos reais.",        level: "Intermediário" },
    4: { desc: "Simulado desafiador para consolidar sua aprovação.",            level: "Avançado" },
  };
  const SIMS = [1, 2, 3, 4].map((n) => {
    const qs = QUESTIONS.filter((q) => q.simulado === n);
    return {
      n, key: "sim-" + n,
      title: "Administrator • Simulado " + String(n).padStart(2, "0"),
      cert: "Salesforce Certified Administrator",
      desc: SIM_DESC[n].desc, level: SIM_DESC[n].level,
      total: qs.length, goal: Math.ceil(qs.length * PASS_MARK / 100),
    };
  });
  const simByKey = Object.fromEntries(SIMS.map((s) => [s.key, s]));

  // ---- Questões extras (prática por módulo) -------------------------
  const EXTRA = window.EXTRA_QUESTIONS || [];
  const ALL_QUESTIONS = QUESTIONS.concat(EXTRA);

  // ---- Traduções (PT-BR) das explicações, por id de questão ---------
  const EXPL_PT = window.EXPLANATION_PT || {};
  // Camada de correção: {id: {en, pt}} com letras de alternativa ajustadas.
  const EXPL_FIX = window.EXPLANATION_FIX || {};

  // ---- ID de questão ------------------------------------------------
  const qid = (q) => q.id || `s${q.simulado}q${q.number}`;
  const Q_BY_ID = Object.fromEntries(ALL_QUESTIONS.map((q) => [qid(q), q]));

  // =================================================================
  //  Store
  // =================================================================
  function loadStore() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || { progress: {}, history: [] }; }
    catch (e) { return { progress: {}, history: [] }; }
  }
  function saveStore() { localStorage.setItem(STORE_KEY, JSON.stringify(store)); }
  let store = loadStore();

  // =================================================================
  //  Gamificação derivada de dados reais
  // =================================================================
  const LEVELS = ["Iniciante", "Aprendiz", "Explorador", "Praticante", "Avançado", "Especialista", "Mestre"];
  function stats() {
    const h = store.history;
    const completed = h.length;
    const simAttempts = h.filter((x) => x.key.startsWith("sim-"));
    const avg = completed ? Math.round(h.reduce((s, x) => s + x.pct, 0) / completed) : null;
    const questionsPracticed = h.reduce((s, x) => s + x.total, 0);
    const totalCorrect = h.reduce((s, x) => s + x.correct, 0);
    const xp = totalCorrect * 10 + completed * 50;
    const level = Math.min(LEVELS.length, Math.floor(xp / 600) + 1);
    const xpForNext = level >= LEVELS.length ? 0 : level * 600 - xp;
    const simsDone = new Set(simAttempts.map((x) => x.key)).size;
    return { completed, avg, questionsPracticed, totalCorrect, xp, level,
      levelTitle: LEVELS[level - 1], xpForNext, simsDone, days: distinctDays() };
  }
  function distinctDays() {
    return new Set(store.history.map((h) => h.date.slice(0, 10))).size;
  }
  function thisMonthCount() {
    const m = new Date().toISOString().slice(0, 7);
    return store.history.filter((h) => h.date.slice(0, 7) === m).length;
  }

  // =================================================================
  //  Conquistas
  // =================================================================
  const ACHIEVEMENTS = [
    { id: "first", icon: "🚀", name: "Primeiro passo",       desc: "Conclua seu primeiro simulado.",            test: (s) => s.history.length >= 1 },
    { id: "pass",  icon: "🎯", name: "Linha de corte",       desc: "Atinja 65% em um simulado.",                test: (s) => s.history.some((h) => h.pct >= 65) },
    { id: "ace",   icon: "🏆", name: "Alta performance",     desc: "Alcance 80% ou mais em uma tentativa.",     test: (s) => s.history.some((h) => h.pct >= 80) },
    { id: "all4",  icon: "☁️", name: "Maratona Admin",       desc: "Conclua os 4 simulados oficiais.",          test: (s) => new Set(s.history.filter((h) => h.key.startsWith("sim-")).map((h) => h.key)).size >= 4 },
    { id: "themes",icon: "🧭", name: "Explorador de temas",  desc: "Pratique questões de todos os 6 temas.",    test: (s) => TEMAS.every((t) => s.history.some((h) => h.byTema && h.byTema[t.id])) },
    { id: "perf",  icon: "⭐", name: "Domínio total",        desc: "Acerte 100% de um tema em um simulado.",    test: (s) => s.history.some((h) => h.byTema && Object.values(h.byTema).some((b) => b.t > 0 && b.c === b.t)) },
    { id: "streak",icon: "🔥", name: "Constância",           desc: "Estude em 3 dias diferentes.",              test: () => distinctDays() >= 3 },
    { id: "vet",   icon: "💪", name: "Veterano",             desc: "Conclua 10 tentativas.",                    test: (s) => s.history.length >= 10 },
  ];

  // =================================================================
  //  Roteamento
  // =================================================================
  let state = { view: "dashboard", params: {} };
  let session = null;        // sessão de prática ativa
  let currentAttempt = null; // última tentativa concluída (p/ resultado/revisão)
  let navCollapsed = false;  // mapa de questões (certas/erradas) recolhido?

  function go(view, params) {
    stopTimer();
    state = { view, params: params || {} };
    render();
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  const navEl = document.getElementById("nav");
  const appEl = document.getElementById("app");

  function render() {
    renderNav();
    const r = {
      dashboard: renderDashboard, catalog: renderCatalog, detail: renderDetail,
      practice: renderPractice, result: renderResult, review: renderReview,
      trilhas: renderTrilhas, conquistas: renderConquistas,
    }[state.view];
    (r || renderDashboard)();
  }

  // =================================================================
  //  NAV
  // =================================================================
  function renderNav() {
    if (state.view === "practice") {
      navEl.className = "nav nav-mini";
      navEl.innerHTML = `
        <div class="container container-wide nav-inner">
          <div style="display:flex;align-items:center;gap:16px">
            <div class="logo" data-nav="dashboard">
              <div class="logo-badge">☁️</div>
              <div class="logo-text">Sim<span>force</span></div>
            </div>
            <div class="nav-mini-label">⚡ Modo de ${session && session.mode === "study" ? "estudo" : "prática"}</div>
          </div>
          <div style="display:flex;align-items:center;gap:20px">
            <span class="save-chip"><span class="d"></span> Progresso salvo agora</span>
            <button class="btn btn-outline" data-action="exit-practice">↪ Sair e continuar depois</button>
          </div>
        </div>`;
      return;
    }
    const s = stats();
    const link = (v, label) => `<button class="nav-link ${state.view === v ? "active" : ""}" data-nav="${v}">${label}</button>`;
    navEl.className = "nav";
    navEl.innerHTML = `
      <div class="container container-wide nav-inner">
        <div class="logo" data-nav="dashboard">
          <div class="logo-badge">☁️</div>
          <div class="logo-text">Sim<span>force</span></div>
        </div>
        <div class="nav-sep"></div>
        <div class="nav-links">
          ${link("dashboard", "⚡ Meu painel")}
          ${link("catalog", "📝 Simulados")}
          ${link("trilhas", "🧭 Minhas trilhas")}
          ${link("conquistas", "🏆 Conquistas")}
        </div>
        <div class="nav-right">
          <button class="icon-btn" title="Ajuda">❔</button>
          <button class="icon-btn" title="Notificações">🔔<span class="dot"></span></button>
          <div class="user-chip" data-nav="conquistas">
            <div class="avatar">${USER.initials}</div>
            <div class="user-meta">
              <strong>${USER.name}</strong>
              <span>${s.levelTitle} • nível ${s.level}</span>
            </div>
          </div>
        </div>
      </div>`;
  }

  // =================================================================
  //  DASHBOARD (Meu painel)
  // =================================================================
  function renderDashboard() {
    const s = stats();
    const hoje = new Date().toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
    const greet = greeting();

    // continue de onde parou
    const resume = latestProgress();
    const resumeHtml = resume ? resumeCardHtml(resume) : `
      <div class="empty" style="padding:30px">
        <span class="big">🚀</span>
        Nenhum simulado em andamento.<br>Escolha um no catálogo para começar.
        <div class="mt8"><button class="btn btn-primary" data-nav="catalog" style="margin-top:14px">Ver simulados</button></div>
      </div>`;

    // trilha de certificação
    const trilhaPct = Math.round((s.simsDone / SIMS.length) * 100);

    // evolução
    const series = store.history.filter((h) => h.key.startsWith("sim-")).slice(0, 8).reverse();

    // conquistas (resumo)
    const achv = ACHIEVEMENTS.map((a) => ({ a, on: a.test(store) }));

    const statCard = (label, ic, val, subHtml) => `
      <div class="stat">
        <div class="stat-top"><span class="stat-label">${label}</span><span class="stat-ic">${ic}</span></div>
        <div class="stat-val">${val}</div>
        ${subHtml || ""}
      </div>`;

    const trend = trendSub(series);

    appEl.innerHTML = `
    <div class="page container container-wide">
      <div class="page-head" style="margin-bottom:18px">
        <div class="page-eyebrow">Meu painel</div>
        <div style="color:var(--muted);font-size:14px">${cap(hoje)}</div>
      </div>

      <div class="hero">
        <div class="hero-body">
          <h1>${greet}, ${USER.name.split(" ")[0]}! ⚡ Seu futuro está no alto.</h1>
          <p>Cada questão é um passo mais perto da sua certificação Salesforce Administrator.</p>
          <div class="streak">
            ${s.days ? `<span class="badge badge-amber">🔥 ${s.days} dia(s) de estudo</span>` : `<span class="badge badge-blue">☁️ Comece sua jornada hoje</span>`}
            <span style="color:var(--muted);font-size:14px">Meta de aprovação: <b style="color:var(--brand-ink)">${PASS_MARK}%</b></span>
          </div>
        </div>
        <div class="hero-art"><img src="assets/hero-astro.png" alt="Mascote Salesforce voando rumo ao topo" loading="lazy"></div>
      </div>

      <div class="stat-row">
        ${statCard("Simulados concluídos", "📋", s.completed, `<div class="stat-sub ${thisMonthCount() ? "" : "muted"}">${thisMonthCount() ? "+" + thisMonthCount() + " neste mês" : "nenhum neste mês"}</div>`)}
        ${statCard("Média de acertos", "📈", s.avg !== null ? s.avg + "%" : "—", trend)}
        ${statCard("Questões praticadas", "✅", s.questionsPracticed, `<div class="stat-sub muted">${s.completed} tentativa(s)</div>`)}
        ${statCard("Pontos de experiência", "✨", s.xp.toLocaleString("pt-BR") + " XP", `<div class="stat-sub amber">${s.xpForNext ? s.xpForNext + " XP p/ o nível " + (s.level + 1) : "nível máximo!"}</div>`)}
      </div>

      <div class="dash-2col">
        <div class="card card-pad resume-card">
          <div class="resume-head"><h3 style="font-size:19px;font-weight:800">Continue de onde parou</h3>
            ${resume ? '<span class="badge badge-amber">Em andamento</span>' : ""}</div>
          ${resumeHtml}
        </div>

        <div class="card card-pad">
          <h3 style="font-size:19px;font-weight:800;margin-bottom:16px">Sua trilha de certificação</h3>
          <div class="trilha-step">
            <div class="t-ic">🛡️</div>
            <div style="flex:1">
              <b style="color:var(--brand-ink)">Rumo à Administrator</b>
              <div style="font-size:13px;color:var(--muted)">${s.simsDone} de ${SIMS.length} simulados concluídos</div>
            </div>
          </div>
          <div style="margin-top:18px">
            <div class="pbar-row"><span>Progresso da trilha</span><span style="color:var(--brand)">${trilhaPct}%</span></div>
            <div class="pbar"><div class="pbar-fill" style="width:${trilhaPct}%"></div></div>
          </div>
          <div class="trilha-step" style="margin-top:18px">
            <div class="t-ic">📘</div>
            <div><div style="font-size:12px;font-weight:800;color:var(--muted);text-transform:uppercase;letter-spacing:.5px">Próxima etapa</div>
            <b style="color:var(--brand-ink)">${nextStepLabel()}</b></div>
          </div>
          <button class="btn btn-outline btn-block" data-nav="trilhas" style="margin-top:18px">Ver minha trilha →</button>
        </div>
      </div>

      <div class="dash-2col">
        <div class="card card-pad">
          <div class="section-head"><h3>Seu esforço está virando resultado</h3>
            <span class="badge badge-gray">Últimas tentativas</span></div>
          ${series.length >= 2 ? lineChart(series) : `<div class="empty"><span class="big">📊</span>Conclua ao menos 2 simulados para ver sua evolução.</div>`}
        </div>
        <div class="card card-pad">
          <div class="section-head"><h3>Pequenas vitórias</h3>
            <button class="icon-btn" data-nav="conquistas" title="Ver todas">↗</button></div>
          <div class="ach-row">
            ${achv.slice(0, 3).map(({ a, on }) => `
              <div class="ach ${on ? "on" : "off"}">
                <div class="ach-ic">${on ? a.icon : "🔒"}</div>
                <div class="ach-name">${a.name}</div>
              </div>`).join("")}
          </div>
          <p style="font-size:13.5px;color:var(--body);margin-top:16px">${achvHint(achv)}</p>
        </div>
      </div>
    </div>`;
  }

  function greeting() {
    const h = new Date().getHours();
    return h < 12 ? "Bom dia" : h < 18 ? "Boa tarde" : "Boa noite";
  }
  function nextStepLabel() {
    const done = new Set(store.history.filter((h) => h.key.startsWith("sim-")).map((h) => h.key));
    const next = SIMS.find((s) => !done.has(s.key));
    return next ? next.title.replace("Administrator • ", "") : "Revisar seus erros";
  }
  function trendSub(series) {
    if (series.length < 2) return `<div class="stat-sub muted">${series.length ? "primeira tentativa" : "sem dados ainda"}</div>`;
    const d = series[series.length - 1].pct - series[series.length - 2].pct;
    if (d > 0) return `<div class="stat-sub ok">↑ ${d} pts vs. anterior</div>`;
    if (d < 0) return `<div class="stat-sub amber">↓ ${-d} pts vs. anterior</div>`;
    return `<div class="stat-sub muted">estável</div>`;
  }
  function achvHint(achv) {
    const next = achv.find((x) => !x.on);
    return next ? `Próxima conquista: <b style="color:var(--brand-ink)">${next.a.name}</b> — ${next.a.desc}` : "Você desbloqueou todas as conquistas! ☁️🏆";
  }
  function latestProgress() {
    const keys = Object.keys(store.progress);
    if (!keys.length) return null;
    let best = null;
    keys.forEach((k) => {
      const p = store.progress[k];
      if (!p || !p.order || !p.order.length) return;
      if (!best || (p.savedAt || 0) > (best.p.savedAt || 0)) best = { key: k, p };
    });
    return best;
  }
  function resumeCardHtml(resume) {
    const p = resume.p;
    const sim = simByKey[resume.key];
    const answered = countAnswered(p);
    const total = p.order.length;
    const pct = Math.round((answered / total) * 100);
    const label = sim ? sim.title : (p.label || "Prática por tema");
    const cert = sim ? sim.cert : "Prática por tema";
    return `
      <div class="resume-main">
        <div class="resume-ic">🛡️</div>
        <div style="flex:1">
          <div class="resume-eyebrow">${sim ? "Trilha Administrator" : "Prática por tema"}</div>
          <div class="resume-title">${label}</div>
          <div class="resume-sub">${answered} de ${total} questões respondidas • ${p.mode === "study" ? "modo estudo" : "modo prova"}</div>
        </div>
      </div>
      <div style="margin:18px 0 8px">
        <div class="pbar-row"><span>Seu progresso neste simulado</span><span style="color:var(--brand)">${pct}%</span></div>
        <div class="pbar"><div class="pbar-fill" style="width:${pct}%"></div></div>
      </div>
      <p style="font-size:13px;color:var(--muted);margin-bottom:16px">Seu progresso é salvo automaticamente.</p>
      <button class="btn btn-primary" data-action="resume" data-key="${resume.key}">→ Retomar simulado</button>`;
  }
  function countAnswered(p) {
    return p.order.filter((id) => (p.answers[id] || []).length > 0).length;
  }

  // SVG line chart
  function lineChart(series) {
    const W = 560, H = 210, padL = 36, padR = 20, padT = 20, padB = 34;
    const n = series.length;
    const x = (i) => padL + (i * (W - padL - padR)) / Math.max(1, n - 1);
    const y = (v) => padT + (1 - v / 100) * (H - padT - padB);
    const pts = series.map((d, i) => `${x(i)},${y(d.pct)}`).join(" ");
    const area = `${padL},${y(0)} ` + pts + ` ${x(n - 1)},${y(0)}`;
    const grid = [0, 50, 65, 80, 100].map((v) =>
      `<line x1="${padL}" y1="${y(v)}" x2="${W - padR}" y2="${y(v)}" stroke="${v === 65 ? "#f4dca6" : "#eef1f6"}" stroke-dasharray="${v === 65 ? "4 4" : "0"}"/>
       <text x="${padL - 8}" y="${y(v) + 4}" text-anchor="end" font-size="11" fill="#8a97ab">${v}%</text>`).join("");
    const dots = series.map((d, i) => `<circle cx="${x(i)}" cy="${y(d.pct)}" r="4.5" fill="#fff" stroke="#1763d6" stroke-width="2.5"/>`).join("");
    const last = series[n - 1];
    return `<div class="chart-wrap"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Evolução das notas">
      <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1763d6" stop-opacity=".18"/><stop offset="1" stop-color="#1763d6" stop-opacity="0"/>
      </linearGradient></defs>
      ${grid}
      <polygon points="${area}" fill="url(#g)"/>
      <polyline points="${pts}" fill="none" stroke="#1763d6" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>
      ${dots}
      <g transform="translate(${x(n - 1) - 24},${y(last.pct) - 30})">
        <rect width="48" height="22" rx="6" fill="#1763d6"/>
        <text x="24" y="15" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">${last.pct}%</text>
      </g>
    </svg></div>`;
  }

  // =================================================================
  //  CATÁLOGO
  // =================================================================
  let catFilter = { status: new Set(), tipo: new Set(), q: "" };

  function renderCatalog() {
    // itens: 4 simulados + 6 práticas por tema
    const simItems = SIMS.map((s) => {
      const st = simStatus(s.key);
      return { kind: "sim", key: s.key, sim: s, icon: temaIconForSim(s.n), cert: s.cert,
        title: s.title, desc: s.desc, total: s.total, time: 90, level: s.level, st };
    });
    const temaItems = TEMAS.map((t) => {
      const qs = ALL_QUESTIONS.filter((q) => temaOf(q) === t.id);
      const key = "tema-" + t.id;
      const st = simStatus(key);
      return { kind: "tema", key, tema: t, icon: t.icon, cert: "Prática por tema",
        title: t.label, desc: t.desc, total: qs.length, time: Math.round(qs.length * 1.4), level: "Foco", st };
    });
    let items = simItems.concat(temaItems);

    // filtros
    const f = catFilter;
    if (f.q) {
      const q = f.q.toLowerCase();
      items = items.filter((i) => (i.title + " " + i.desc + " " + i.cert).toLowerCase().includes(q));
    }
    if (f.tipo.size) items = items.filter((i) => f.tipo.has(i.kind));
    if (f.status.size) items = items.filter((i) => f.status.has(i.st.status));

    const cnt = (pred) => simItems.concat(temaItems).filter(pred).length;

    appEl.innerHTML = `
    <div class="page container container-wide">
      <div class="breadcrumb">Simulados / <b>Catálogo</b></div>
      <div class="page-head">
        <div>
          <h1>Pratique hoje. Conquiste o próximo nível.</h1>
          <p>Encontre o simulado certo para sua certificação Salesforce e aprenda a cada tentativa.</p>
        </div>
      </div>

      <div class="toolbar">
        <div class="search"><span class="mag">🔎</span>
          <input id="cat-search" type="text" placeholder="Buscar por tema ou nome do simulado" value="${escapeAttr(f.q)}"></div>
      </div>

      <div class="catalog">
        <aside class="filters card card-pad">
          <div class="f-head"><h3>Filtros</h3><button class="btn btn-ghost" style="padding:4px 8px" data-action="clear-filters">Limpar</button></div>
          <div class="f-group">
            <h4>Tipo</h4>
            ${filterItem("tipo", "sim", "Simulados completos", cnt((i) => i.kind === "sim"))}
            ${filterItem("tipo", "tema", "Prática por tema", cnt((i) => i.kind === "tema"))}
          </div>
          <div class="f-group">
            <h4>Seu progresso</h4>
            ${filterItem("status", "new", "Não iniciados", cnt((i) => i.st.status === "new"))}
            ${filterItem("status", "progress", "Em andamento", cnt((i) => i.st.status === "progress"))}
            ${filterItem("status", "done", "Concluídos", cnt((i) => i.st.status === "done"))}
          </div>
          <div class="f-tip">💡 <b>Começando agora?</b> O Simulado 01 de Administrator é um ótimo primeiro passo.</div>
        </aside>

        <div>
          <div class="cat-head">
            <span class="cat-count">${items.length} ${items.length === 1 ? "item" : "itens"} para explorar</span>
            <span class="badge badge-green">✓ Todos com explicação didática</span>
          </div>
          <div class="cards-2">
            ${items.map(catCard).join("") || `<div class="empty"><span class="big">🔍</span>Nada encontrado com esses filtros.</div>`}
          </div>
        </div>
      </div>
    </div>`;

    const search = document.getElementById("cat-search");
    search.addEventListener("input", (e) => {
      catFilter.q = e.target.value;
      const pos = e.target.selectionStart;
      renderCatalog();
      const s2 = document.getElementById("cat-search");
      s2.focus(); s2.setSelectionRange(pos, pos);
    });
  }

  function filterItem(group, val, label, count) {
    const checked = catFilter[group].has(val) ? "checked" : "";
    return `<label class="f-item"><input type="checkbox" data-action="filter" data-group="${group}" data-val="${val}" ${checked}>
      ${label}<span class="count">${count}</span></label>`;
  }
  function temaIconForSim() { return "🛡️"; }

  function simStatus(key) {
    const prog = store.progress[key];
    const hist = store.history.filter((h) => h.key === key);
    const best = hist.length ? Math.max(...hist.map((h) => h.pct)) : null;
    let status = "new", answered = 0, total = 0;
    if (prog && prog.order) { answered = countAnswered(prog); total = prog.order.length; status = "progress"; }
    else if (hist.length) status = "done";
    return { prog, best, status, answered, total, attempts: hist.length };
  }

  function catCard(i) {
    const st = i.st;
    let badge = "", foot = "";
    if (st.status === "progress") {
      badge = '<span class="badge badge-amber">Em andamento</span>';
      foot = `<span class="fnote amber">${st.answered} de ${st.total} respondidas</span>
              <button class="btn btn-primary" data-action="open-detail" data-key="${i.key}">→ Continuar</button>`;
    } else if (st.status === "done") {
      badge = `<span class="badge badge-green">Concluído</span>`;
      foot = `<span class="fnote muted">Melhor resultado: ${st.best}%</span>
              <button class="btn btn-outline" data-action="open-detail" data-key="${i.key}">→ Ver ${i.kind === "sim" ? "simulado" : "prática"}</button>`;
    } else {
      badge = i.kind === "sim" && i.sim && i.sim.n === 1 ? '<span class="badge badge-blue">Recomendado</span>' : "";
      foot = `<span class="fnote muted">${i.kind === "sim" ? "Gabarito comentado incluído" : "Questões do tema"}</span>
              <button class="btn btn-outline" data-action="open-detail" data-key="${i.key}">→ ${i.kind === "sim" ? "Ver simulado" : "Praticar"}</button>`;
    }
    return `
      <div class="sim-card" data-action="open-detail" data-key="${i.key}">
        <div class="sim-card-top"><div class="sim-ic">${i.icon}</div>${badge}</div>
        <div class="sim-cert">${i.cert}</div>
        <h3>${i.title}</h3>
        <div class="sim-desc">${i.desc}</div>
        <div class="sim-meta">
          <span>📄 ${i.total} questões</span><span>⏱️ ${i.time} min</span><span>🎚️ ${i.level}</span>
        </div>
        <div class="sim-foot">${foot}</div>
      </div>`;
  }

  // =================================================================
  //  DETALHE DO SIMULADO
  // =================================================================
  let detailMode = "exam";

  // Lista de tentativas concluídas desta chave (simulado/tema), mais recentes primeiro.
  function attemptsCardHtml(key) {
    const attempts = store.history
      .map((a, i) => ({ a, i }))
      .filter((x) => x.a.key === key);
    if (!attempts.length) return "";
    const best = Math.max(...attempts.map((x) => x.a.pct));
    const rows = attempts.map(({ a, i }) => {
      const dt = new Date(a.date);
      const date = dt.toLocaleDateString("pt-BR") + " · " + dt.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
      const pillClass = a.passed ? "badge-green" : "badge-red";
      const status = a.passed ? "✓ Aprovado" : "✗ Reprovado";
      const isBest = a.pct === best;
      return `<div class="attempt-row">
          <div class="att-main">
            <div class="att-pct ${a.passed ? "ok" : "bad"}">${a.pct}%</div>
            <div>
              <div class="att-date">${date} ${isBest ? '<span class="badge badge-blue" style="margin-left:6px">★ melhor</span>' : ""}</div>
              <div class="att-sub">${a.correct}/${a.total} acertos · ${a.mode === "study" ? "modo estudo" : "modo prova"} · <span class="badge ${pillClass}">${status}</span></div>
            </div>
          </div>
          <div class="att-actions">
            <button class="btn btn-outline" data-action="view-result" data-hidx="${i}">📊 Ver resultado</button>
            <button class="btn btn-ghost" data-action="view-review" data-hidx="${i}">📖 Revisar</button>
            <button class="btn btn-ghost" data-action="export-attempt" data-hidx="${i}">⬇ Exportar</button>
          </div>
        </div>`;
    }).join("");
    return `
      <div class="card card-pad mb24">
        <div class="section-head" style="margin-bottom:12px"><h3>📈 Suas tentativas anteriores</h3>
          <span class="badge badge-gray">${attempts.length} ${attempts.length === 1 ? "tentativa" : "tentativas"}</span></div>
        <div class="attempt-list">${rows}</div>
      </div>`;
  }

  function renderDetail() {
    const key = state.params.key;
    const isSim = key.startsWith("sim-");
    const sim = simByKey[key];
    const tema = isSim ? null : temaById[key.replace("tema-", "")];
    const qs = isSim ? QUESTIONS.filter((q) => q.simulado === sim.n)
                     : ALL_QUESTIONS.filter((q) => temaOf(q) === tema.id);
    const total = qs.length;
    const goal = Math.ceil(total * PASS_MARK / 100);
    const title = isSim ? sim.title.replace("Administrator • ", "Salesforce Administrator • ") : tema.label;
    const cert = isSim ? sim.cert : "Prática por tema";
    const level = isSim ? sim.level : "Foco";
    const time = isSim ? 90 : Math.round(total * 1.4);
    const st = simStatus(key);
    const resuming = st.status === "progress";

    // distribuição por tema
    const dist = {};
    qs.forEach((q) => { const t = temaOf(q); dist[t] = (dist[t] || 0) + 1; });
    const temaRows = TEMAS.filter((t) => dist[t.id]).map((t) => `
      <div class="tema-item">
        <div class="tema-ic">${t.icon}</div>
        <div class="t-body"><b>${t.label}</b><span>${t.desc}</span></div>
        <div class="tema-count">${dist[t.id]} ${dist[t.id] === 1 ? "questão" : "questões"}</div>
      </div>`).join("");

    const modeOpt = (val, b, s) => `
      <div class="mode-opt ${detailMode === val ? "sel" : ""}" data-action="pick-mode" data-mode="${val}">
        <div class="r"></div><div><b>${b}</b><br><span>${s}</span></div>
      </div>`;

    appEl.innerHTML = `
    <div class="page container container-wide">
      <div class="breadcrumb">Simulados / ${isSim ? "Administrator" : "Temas"} / <b>${isSim ? sim.title.replace("Administrator • ", "") : tema.short}</b></div>
      <div class="page-head">
        <div>
          <h1>${title}</h1>
          <p>${isSim ? "Construa confiança para a certificação com cenários próximos do dia a dia de um administrador." : tema.desc}</p>
        </div>
        <button class="btn btn-outline" data-nav="catalog">← Voltar ao catálogo</button>
      </div>

      <div class="info-banner">
        <div class="ib-brand">
          <div class="ib-ic">${isSim ? "🛡️" : tema.icon}</div>
          <div><div class="ib-eyebrow">${isSim ? "Trilha Administrator" : "Tema"}</div>
            <div class="ib-title">${cert}</div><div class="ib-sub">${level} • atualizado em out. 2026</div></div>
        </div>
        <div class="ib-stat"><div class="ib-ic2">📄</div><b>${total} questões</b><span>Múltipla escolha</span></div>
        <div class="ib-stat"><div class="ib-ic2">⏱️</div><b>${time} min</b><span>Tempo sugerido</span></div>
        <div class="ib-stat"><div class="ib-ic2">🎯</div><b>${PASS_MARK}% de acertos</b><span>Meta de aprovação</span></div>
      </div>

      ${attemptsCardHtml(key)}

      <div class="detail-2col">
        <div>
          <div class="card card-pad mb24">
            <h3 style="font-size:20px;font-weight:800">O que você vai praticar</h3>
            <p style="font-size:14px;color:var(--muted);margin:4px 0 8px">${isSim ? "Distribuição das questões deste simulado por tema." : "Questões reunidas deste tema a partir dos 4 simulados."}</p>
            ${temaRows}
          </div>
          <div class="card card-pad">
            <h3 style="font-size:20px;font-weight:800;margin-bottom:18px">Como funciona sua avaliação</h3>
            <div class="howto">
              <div><div class="h-ic">✅</div><b>Uma resposta por questão</b><span>Cada acerto vale 1 ponto. Não há desconto por erro.</span></div>
              <div><div class="h-ic">🎚️</div><b>Você controla o ritmo</b><span>Navegue livremente e marque questões para revisar.</span></div>
              <div><div class="h-ic">📖</div><b>Aprenda com o resultado</b><span>Análise por tema e explicação de todas as respostas.</span></div>
            </div>
          </div>
        </div>

        <div>
          <div class="card card-pad start-card mb24">
            ${resuming ? '<span class="badge badge-amber">🔖 Sua tentativa está salva</span>' : '<span class="badge badge-blue">☁️ Pronto para começar</span>'}
            <h2>Mais um passo rumo à sua certificação.</h2>
            <div class="sc-text">${resuming
              ? `Você já respondeu ${st.answered} de ${st.total} questões. Continue de onde parou.`
              : "Escolha como quer praticar e comece quando estiver pronto."}</div>

            ${resuming ? "" : `
              <div style="font-size:13px;font-weight:800;color:var(--muted);text-transform:uppercase;letter-spacing:.5px">Modo de prática</div>
              <div class="mode-pick">
                ${modeOpt("exam", "🏁 Modo prova", "Responda tudo com cronômetro. Gabarito e explicações só no final.")}
                ${modeOpt("study", "📖 Modo estudo", "Corrige na hora: mostra certo/errado e a explicação após cada questão.")}
              </div>`}

            ${resuming
              ? `<button class="btn btn-primary btn-lg btn-block" data-action="resume" data-key="${key}">▶ Retomar</button>
                 <button class="btn btn-outline btn-block" data-action="restart" data-key="${key}" style="margin-top:10px">↺ Iniciar nova tentativa</button>
                 <p style="font-size:13px;color:var(--muted);margin-top:12px">Ao iniciar uma nova tentativa, o progresso atual é substituído. Seu histórico concluído é mantido.</p>`
              : `<button class="btn btn-primary btn-lg btn-block" data-action="start" data-key="${key}">▶ Iniciar ${isSim ? "simulado" : "prática"}</button>`}

            <div class="goal-row">
              <div class="g-ic">🎯</div>
              <div><b>Sua meta: ${goal} acertos de ${total}</b><br><span>Equivale a ${PASS_MARK}% de aproveitamento.</span></div>
            </div>
          </div>

          <div class="card card-pad">
            <h3 style="font-size:18px;font-weight:800;margin-bottom:14px">Antes de começar</h3>
            <ul class="checklist">
              <li>Reserve um lugar tranquilo e sem distrações.</li>
              <li>${detailMode === "exam" || resuming ? "O cronômetro começa ao iniciar a tentativa." : "No modo estudo você aprende a cada questão."}</li>
              <li>Suas respostas são salvas automaticamente.</li>
              <li>Ao final, você vê o resultado e a revisão comentada.</li>
            </ul>
            <div class="disclaimer">ℹ️ Material de estudo pessoal. A meta de ${PASS_MARK}% segue o critério oficial da certificação Administrator.</div>
          </div>
        </div>
      </div>
    </div>`;
  }

  // =================================================================
  //  SESSÃO DE PRÁTICA
  // =================================================================
  function buildQuestions(key) {
    if (key.startsWith("sim-")) {
      const n = +key.split("-")[1];
      return QUESTIONS.filter((q) => q.simulado === n).sort((a, b) => a.number - b.number);
    }
    const temaId = key.replace("tema-", "");
    return shuffle(ALL_QUESTIONS.filter((q) => temaOf(q) === temaId).slice());
  }

  function startSession(key, mode, resume) {
    const saved = resume ? store.progress[key] : null;
    let qs;
    if (saved && saved.order) qs = saved.order.map((id) => Q_BY_ID[id]).filter(Boolean);
    else qs = buildQuestions(key);

    const isSim = key.startsWith("sim-");
    const sim = simByKey[key];
    const tema = isSim ? null : temaById[key.replace("tema-", "")];

    session = {
      key, mode: saved ? saved.mode : mode,
      isSim, title: isSim ? sim.title : tema.label,
      cert: isSim ? sim.cert : "Prática por tema",
      questions: qs, order: qs.map(qid),
      answers: saved ? saved.answers || {} : {},
      flagged: saved ? saved.flagged || {} : {},
      graded: saved ? saved.graded || {} : {},
      idx: saved ? saved.idx || 0 : 0,
      elapsedSec: saved ? saved.elapsedSec || 0 : 0,
      startedAt: Date.now(),
      running: false,
      timeLimit: (saved ? saved.mode : mode) === "exam" ? TIME_LIMIT : null,
      timerId: null,
    };
    if (session.idx >= qs.length) session.idx = 0;
    persistSession();
    go("practice");
    startTimer();
  }

  function persistSession() {
    if (!session) return;
    store.progress[session.key] = {
      mode: session.mode, order: session.order, answers: session.answers,
      flagged: session.flagged, graded: session.graded, idx: session.idx,
      elapsedSec: currentElapsed(), savedAt: Date.now(),
      label: session.title,
    };
    saveStore();
  }
  function currentElapsed() {
    if (!session) return 0;
    const run = session.running ? (Date.now() - session.startedAt) / 1000 : 0;
    return Math.floor(session.elapsedSec + run);
  }

  // inicia/retoma a contagem (sem resetar o tempo já acumulado)
  function startTimer() {
    if (!session) return;
    if (session.timerId) clearInterval(session.timerId);
    session.startedAt = Date.now();
    session.running = true;
    session.timerId = setInterval(() => {
      const el = document.getElementById("timer-val");
      const elapsed = currentElapsed();
      if (session.timeLimit) {
        const remain = session.timeLimit - elapsed;
        if (remain <= 0) { finishExam(true); return; }
        if (el) { el.textContent = fmtTime(remain); el.classList.toggle("low", remain < 300); }
      } else if (el) {
        el.textContent = fmtTime(elapsed);
      }
      if (elapsed % 5 === 0) persistSession();
    }, 1000);
  }
  // pausa: acumula o tempo decorrido e para a contagem (sem perder nada)
  function pauseTimer() {
    if (!session) return;
    if (session.running) { session.elapsedSec = currentElapsed(); session.running = false; }
    if (session.timerId) { clearInterval(session.timerId); session.timerId = null; }
  }
  function stopTimer() {
    if (!session) return;
    pauseTimer();
    persistSession();
  }

  // Pausa o cronômetro quando a aba/janela perde o foco; retoma ao voltar.
  document.addEventListener("visibilitychange", () => {
    if (!session || state.view !== "practice") return;
    if (document.hidden) { pauseTimer(); persistSession(); }
    else if (!session.running && !session.manualPause) { startTimer(); }
  });
  window.addEventListener("blur", () => {
    if (session && state.view === "practice" && session.running) { pauseTimer(); persistSession(); }
  });
  window.addEventListener("focus", () => {
    if (session && state.view === "practice" && !session.running && !session.manualPause && !document.hidden) startTimer();
  });

  function renderPractice() {
    const q = session.questions[session.idx];
    const id = qid(q);
    const total = session.questions.length;
    const picked = session.answers[id] || [];
    const graded = session.mode === "study" && session.graded[id];
    const t = temaById[temaOf(q)];
    const isLast = session.idx === total - 1;

    // opções
    const opts = q.options.map((o) => {
      const sel = picked.includes(o.key);
      let cls = "opt" + (sel ? " sel" : "");
      let mark = "";
      if (graded) {
        cls += " locked";
        if (q.correct.includes(o.key)) { cls += " correct"; mark = "✅"; }
        else if (sel) { cls += " incorrect"; mark = "❌"; }
      }
      return `<div class="${cls}" data-action="pick" data-key="${o.key}">
        <div class="k ${q.multi ? "sq" : ""}">${o.key}</div>
        <div class="otext">${escapeHtml(o.text)}</div>
        <div class="omark">${mark}</div></div>`;
    }).join("");

    // explicação (modo estudo)
    const explainHtml = graded ? `
      <div class="explain ${isCorrect(q) ? "right" : "wrong"}">
        <div class="eh">${isCorrect(q) ? "✅ Você acertou!" : "❌ Resposta incorreta"}</div>
        ${explBlocks(q)}
      </div>` : "";

    // navegador — no modo estudo: verde (acerto) / vermelho (erro) após verificar
    let answeredCount = 0;
    const grid = session.questions.map((qq, i) => {
      const id2 = qid(qq);
      const flagged = session.flagged[id2];
      const gradedQ = session.mode === "study" && session.graded[id2];
      const hasAns = (session.answers[id2] || []).length > 0;
      if (gradedQ || hasAns) answeredCount++;
      let cls = "qg";
      if (gradedQ) cls += isCorrectStored(qq, session.answers[id2]) ? " ok" : " bad";
      else if (hasAns) cls += " answered";
      if (i === session.idx) cls += " current";
      if (flagged) cls += " flag";
      return `<button class="${cls}" data-action="jump" data-idx="${i}">${String(i + 1).padStart(2, "0")}</button>`;
    }).join("");
    const flaggedList = session.questions.map((qq, i) => session.flagged[qid(qq)] ? i + 1 : null).filter(Boolean);
    const studyGraded = session.mode === "study";

    const timerLabel = session.timeLimit ? "Tempo restante" : "Tempo decorrido";
    const timerVal = session.timeLimit ? fmtTime(session.timeLimit - currentElapsed()) : fmtTime(currentElapsed());

    // botões de ação
    let actionBtns;
    if (session.mode === "study") {
      if (graded) {
        actionBtns = isLast
          ? `<button class="btn btn-primary" data-action="finish">🏁 Finalizar</button>`
          : `<button class="btn btn-primary" data-action="next">Próxima questão →</button>`;
      } else if (picked.length === 0) {
        // sem seleção: pode seguir para a próxima sem verificar
        actionBtns = isLast
          ? `<button class="btn btn-outline" data-action="finish">🏁 Finalizar</button>`
          : `<button class="btn btn-outline" data-action="next">Próxima questão →</button>`;
      } else {
        // selecionou algo: botão vira Verificar
        actionBtns = `<button class="btn btn-primary" data-action="check">Verificar resposta${q.multi ? " (" + picked.length + "/" + q.selectCount + ")" : ""}</button>`;
      }
    } else {
      actionBtns = isLast
        ? `<button class="btn btn-primary" data-action="finish">🏁 Finalizar simulado</button>`
        : `<button class="btn btn-primary" data-action="next">Próxima questão →</button>`;
    }

    appEl.innerHTML = `
    <div class="page container container-wide">
      <div class="q-head">
        <div class="q-eyebrow">Certificação ${session.cert}</div>
        <h1>${session.title}</h1>
        <p>Concentre-se em uma questão de cada vez. Você está no caminho certo.</p>
      </div>

      <div class="practice">
        <div class="card qcard">
          <div class="qcard-top">
            <div>
              <div class="qnum">Questão ${session.idx + 1} de ${total}</div>
              <div class="qhint">${q.multi ? "Selecione " + q.selectCount + " alternativas." : "Selecione uma alternativa."}</div>
            </div>
            <span class="chip">${t.icon} ${t.label}</span>
          </div>
          <hr>
          <div class="qtext">${statementHtml(q.statement)}</div>
          <div class="opts">${opts}</div>
          ${explainHtml}
          <div class="flag-bar" ${session.flagged[id] ? "" : 'style="display:none"'} id="flag-bar">
            <span>🔖 Marcada para revisar antes de finalizar</span>
            <button data-action="unflag">Remover</button>
          </div>
          ${!session.flagged[id] ? `<div style="margin-top:16px"><button class="btn btn-ghost" data-action="flag">🔖 Marcar para revisar</button></div>` : ""}
          <div class="q-nav">
            <button class="btn btn-outline" data-action="prev" ${session.idx === 0 ? "disabled" : ""}>← Anterior</button>
            ${actionBtns}
          </div>
        </div>

        <div>
          <div class="card side-card timer-card mb16">
            <div class="timer-ic">⏱️</div>
            <div><div class="timer-label">${timerLabel}</div><div class="timer-val${session.manualPause ? " low" : ""}" id="timer-val">${timerVal}</div></div>
            <button class="timer-pause" data-action="toggle-timer" title="${session.manualPause ? "Retomar" : "Pausar"}" aria-label="${session.manualPause ? "Retomar" : "Pausar"}">${session.manualPause ? "▶" : "⏸"}</button>
          </div>
          ${session.manualPause ? `<div class="paused-note mb16">⏸️ Cronômetro pausado — clique em ▶ para retomar.</div>` : ""}
          <div class="card side-card mb16">
            <div class="prog-title">
              <h3 style="font-size:18px;font-weight:800">Seu progresso</h3>
              <button class="prog-toggle" data-action="toggle-nav">${navCollapsed ? "Mostrar mapa ▾" : "Ocultar mapa ▴"}</button>
            </div>
            <div class="prog-head"><span>${answeredCount} de ${total} respondidas</span><span style="color:var(--brand)">${Math.round(answeredCount / total * 100)}%</span></div>
            <div class="pbar"><div class="pbar-fill" style="width:${answeredCount / total * 100}%"></div></div>
            ${navCollapsed ? "" : `
            <div class="qgrid">${grid}</div>
            <div class="legend">
              ${studyGraded
                ? `<span class="lg"><span class="box ok"></span> Acertou</span>
                   <span class="lg"><span class="box bad"></span> Errou</span>
                   <span class="lg"><span class="box answered"></span> Respondida (sem verificar)</span>`
                : `<span class="lg"><span class="box answered"></span> Respondida</span>
                   <span class="lg"><span class="box"></span> Não respondida</span>`}
            </div>
            ${flaggedList.length ? `<div class="flag-note"><b>🔖 ${flaggedList.length} marcada(s):</b> ${flaggedList.join(", ")}</div>` : ""}`}
            <button class="btn btn-outline btn-block" data-action="finish" style="margin-top:14px">🏁 Finalizar ${session.isSim ? "simulado" : "prática"}</button>
            <p style="font-size:12.5px;color:var(--muted);margin-top:10px">Você poderá conferir pendências antes de confirmar.</p>
          </div>
          <div class="tipbox">💡 <div><b>Ficou em dúvida? Tudo bem.</b><br>Marque a questão e siga em frente. Voltar com a mente fresca costuma ajudar.</div></div>
        </div>
      </div>
    </div>`;
  }

  // ações da prática
  function pickOption(key) {
    const q = session.questions[session.idx];
    const id = qid(q);
    if (session.mode === "study" && session.graded[id]) return;
    let picked = (session.answers[id] || []).slice();
    if (q.multi) {
      if (picked.includes(key)) picked = picked.filter((k) => k !== key);
      else { if (picked.length >= q.selectCount) picked.shift(); picked.push(key); }
    } else picked = [key];
    session.answers[id] = picked;
    persistSession();
    renderPractice();
  }

  // =================================================================
  //  FINALIZAR → RESULTADO
  // =================================================================
  function finishExam(auto) {
    const total = session.questions.length;
    const unanswered = session.questions.filter((q) => (session.answers[qid(q)] || []).length === 0).length;
    if (!auto && unanswered) {
      if (!confirm(`Ainda há ${unanswered} questão(ões) sem resposta; elas contam como erro. Finalizar mesmo assim?`)) return;
    }
    stopTimer();
    let correct = 0;
    const byTema = {};
    session.questions.forEach((q) => {
      const t = temaOf(q);
      const b = (byTema[t] = byTema[t] || { c: 0, t: 0 });
      b.t++;
      if (isCorrect(q)) { correct++; b.c++; }
    });
    const pct = Math.round((correct / total) * 100);
    const duration = currentElapsed();

    const attempt = {
      key: session.key, label: session.title, cert: session.cert, mode: session.mode,
      correct, wrong: total - correct, total, pct, passed: pct >= PASS_MARK,
      date: new Date().toISOString(), durationSec: duration,
      order: session.order, answers: session.answers, flagged: session.flagged, byTema,
    };
    store.history.unshift(attempt);
    store.history = store.history.slice(0, 60);
    delete store.progress[session.key];
    saveStore();

    currentAttempt = attempt;
    session = null;
    go("result");
  }

  function renderResult() {
    const a = currentAttempt || store.history[0];
    if (!a) { go("dashboard"); return; }
    const passed = a.passed;
    const ringColor = passed ? "#1a7f44" : "#1763d6";
    const deg = Math.round(a.pct * 3.6);
    const delta = a.pct - PASS_MARK;
    const s = stats();
    const simN = a.key.startsWith("sim-") ? +a.key.split("-")[1] : null;

    const temaRows = TEMAS.filter((t) => a.byTema[t.id]).map((t) => {
      const b = a.byTema[t.id];
      const p = Math.round((b.c / b.t) * 100);
      const color = p >= PASS_MARK ? "#1763d6" : "#c8821e";
      return `<tr>
        <td><b style="color:var(--brand-ink)">${t.icon} ${t.label}</b></td>
        <td>${b.c}/${b.t}</td>
        <td><div class="tt-bar"><div class="tt-bar-fill" style="width:${p}%;background:${color}"></div></div></td>
        <td style="text-align:right"><span class="tt-pct" style="color:${color}">${p}%</span></td>
      </tr>`;
    }).join("");

    const worst = TEMAS.filter((t) => a.byTema[t.id])
      .map((t) => ({ t, p: a.byTema[t.id].c / a.byTema[t.id].t }))
      .sort((x, y) => x.p - y.p).slice(0, 2).map((x) => x.t.short);

    const dateStr = new Date(a.date).toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" });

    appEl.innerHTML = `
    <div class="page container container-wide">
      <div class="breadcrumb">Simulados / ${a.key.startsWith("sim-") ? "Administrator" : "Temas"} / <b>Resultado</b></div>
      <div class="page-head">
        <div>
          <h1>${passed ? "Você deu um grande passo, " + USER.name.split(" ")[0] + "! 🎉" : "Continue firme, " + USER.name.split(" ")[0] + "!"}</h1>
          <p>${a.label} · tentativa concluída em ${dateStr} · ${a.mode === "study" ? "modo estudo" : "modo prova"}</p>
        </div>
        <button class="btn btn-outline" data-nav="dashboard">← Voltar ao painel</button>
      </div>

      <div class="card result-hero mb24">
        <div class="ring" style="background:conic-gradient(${ringColor} ${deg}deg,#e3ebf6 0deg)">
          <div class="rp"><b>${a.pct}%</b><span>de aproveitamento</span></div>
        </div>
        <div>
          ${passed ? '<span class="badge badge-green">✓ Aprovado — meta alcançada</span>' : '<span class="badge badge-blue">Quase lá</span>'}
          <h2>${passed ? "Sua preparação está no caminho certo." : "Você está evoluindo a cada tentativa."}</h2>
          <div class="rtext">Você acertou <b>${a.correct} de ${a.total}</b> questões${passed ? " e superou a meta de " + PASS_MARK + "%." : "."} ${a.wrong ? "Agora, transforme as " + a.wrong + " questões incorretas em novas oportunidades de aprender." : ""}</div>
          <div class="rdelta" style="color:${passed ? "#1a7f44" : "#c8821e"}">${delta >= 0 ? delta + " pontos percentuais acima da meta" : Math.abs(delta) + " pontos para a aprovação (" + PASS_MARK + "%)"}</div>
        </div>
        <div class="result-actions-col">
          <button class="btn btn-primary btn-lg" data-action="review">📖 Revisar respostas</button>
          <button class="btn btn-outline" data-action="export">⬇ Exportar resultados (CSV)</button>
          <button class="btn btn-outline" data-action="restart" data-key="${a.key}">↺ Refazer</button>
          <p style="font-size:13px;color:var(--muted)">Uma nova tentativa não apaga este resultado do histórico.</p>
        </div>
      </div>

      <div class="stat-row">
        <div class="stat"><div class="stat-top"><span class="stat-label">Questões corretas</span><span class="stat-ic">✅</span></div>
          <div class="stat-val">${a.correct} de ${a.total}</div><div class="stat-sub ok">${a.pct}% de aproveitamento</div></div>
        <div class="stat"><div class="stat-top"><span class="stat-label">Questões incorretas</span><span class="stat-ic">📖</span></div>
          <div class="stat-val">${a.wrong} questões</div><div class="stat-sub muted">Todas com explicação didática</div></div>
        <div class="stat"><div class="stat-top"><span class="stat-label">Tempo de realização</span><span class="stat-ic">⏱️</span></div>
          <div class="stat-val">${fmtDur(a.durationSec)}</div><div class="stat-sub muted">${a.mode === "exam" ? "Limite de 90 minutos" : "Sem limite (estudo)"}</div></div>
        <div class="stat"><div class="stat-top"><span class="stat-label">Experiência conquistada</span><span class="stat-ic">✨</span></div>
          <div class="stat-val">+${a.correct * 10 + 50} XP</div><div class="stat-sub amber">Novo total: ${s.xp.toLocaleString("pt-BR")} XP</div></div>
      </div>

      <div class="result-2col">
        <div class="card card-pad">
          <div class="section-head"><h3>Seu desempenho por tema</h3><span class="badge badge-gray">Meta: ${PASS_MARK}%</span></div>
          <p style="font-size:14px;color:var(--muted);margin-bottom:10px">Uma visão clara do que você já domina e do que pode reforçar.</p>
          <table class="tema-table">
            <thead><tr><th>Tema</th><th>Acertos</th><th>Aproveitamento</th><th></th></tr></thead>
            <tbody>${temaRows}</tbody>
          </table>
          ${worst.length ? `<div class="tipbox" style="margin-top:18px">💡 <div>Priorize <b>${worst.join(" e ")}</b>. São seus temas com mais espaço para evolução.</div></div>` : ""}
        </div>

        <div>
          <div class="card conquista-card mb24">
            <div class="page-eyebrow" style="color:var(--brand)">${passed ? "🏆 Nova conquista" : "🎯 Próxima meta"}</div>
            <div class="conquista-ic">${passed ? "🏅" : "🎯"}</div>
            <h3 style="font-size:21px;font-weight:800">${passed ? "Meta atingida!" : "Rumo aos 65%"}</h3>
            <p style="font-size:14px;color:var(--body);margin-top:6px">${passed
              ? "Você concluiu este" + (simN ? " simulado" : "a prática") + " com aproveitamento de aprovação. A próxima conquista está logo ali!"
              : "Faltam só " + Math.abs(delta) + " pontos. Revise seus erros e tente novamente."}</p>
          </div>
          <div class="card card-pad">
            <h3 style="font-size:18px;font-weight:800;margin-bottom:14px">Seu próximo passo</h3>
            <div class="next-step"><div class="n-ic">📖</div><div><b>Entenda seus ${a.wrong} erros</b><span>Comece pela revisão comentada desta tentativa.</span></div></div>
            <div class="next-step"><div class="n-ic">🧭</div><div><b>Reforce os temas abaixo da meta</b><span>Pratique ${worst.join(" e ") || "os temas mais fracos"} por tema no catálogo.</span></div></div>
            <button class="btn btn-outline btn-block" data-nav="catalog" style="margin-top:16px">Praticar por tema →</button>
          </div>
        </div>
      </div>
    </div>`;
  }

  // =================================================================
  //  REVISÃO
  // =================================================================
  let reviewState = { filter: "all", idx: 0 };

  function openReview() {
    reviewState = { filter: "all", idx: 0 };
    // primeiro erro, se houver
    const a = currentAttempt;
    const firstWrong = a.order.findIndex((id) => !isCorrectStored(Q_BY_ID[id], a.answers[id]));
    if (firstWrong >= 0) { reviewState.filter = "all"; reviewState.idx = firstWrong; }
    go("review");
  }

  function reviewList(a) {
    return a.order.map((id, i) => ({ id, i, q: Q_BY_ID[id], ok: isCorrectStored(Q_BY_ID[id], a.answers[id]) }))
      .filter((x) => reviewState.filter === "all" || (reviewState.filter === "wrong" ? !x.ok : x.ok));
  }

  function renderReview() {
    const a = currentAttempt || store.history[0];
    if (!a) { go("dashboard"); return; }
    const list = reviewList(a);
    if (!list.length) { reviewState.filter = "all"; return renderReview(); }
    // garante idx válido dentro do filtro
    let pos = list.findIndex((x) => x.i === reviewState.idx);
    if (pos < 0) { pos = 0; reviewState.idx = list[0].i; }
    const cur = list[pos];
    const q = cur.q;
    const picked = a.answers[cur.id] || [];
    const ok = cur.ok;
    const t = temaById[temaOf(q)];
    const correctCount = a.correct, wrongCount = a.wrong;

    const opts = q.options.map((o) => {
      const sel = picked.includes(o.key);
      let cls = "opt locked";
      let mark = "";
      if (q.correct.includes(o.key)) { cls += " correct"; mark = "✅"; }
      else if (sel) { cls += " incorrect"; mark = "❌"; }
      return `<div class="${cls}">
        <div class="k ${q.multi ? "sq" : ""}">${o.key}</div>
        <div class="otext">${escapeHtml(o.text)}</div><div class="omark">${mark}</div></div>`;
    }).join("");

    const grid = a.order.map((id, i) => {
      const good = isCorrectStored(Q_BY_ID[id], a.answers[id]);
      let cls = "qg " + (good ? "ok" : "bad");
      if (i === cur.i) cls += " current";
      return `<button class="${cls}" data-action="rev-jump" data-idx="${i}">${String(i + 1).padStart(2, "0")}</button>`;
    }).join("");

    const yourAns = picked.length ? picked.map((k) => k.toUpperCase()).join(", ") : "em branco";
    const rightAns = q.correct.map((k) => k.toUpperCase()).join(", ");

    // navegação dentro do filtro
    const prev = pos > 0 ? list[pos - 1] : null;
    const next = pos < list.length - 1 ? list[pos + 1] : null;
    const navWord = reviewState.filter === "wrong" ? "erro" : reviewState.filter === "right" ? "acerto" : "questão";

    appEl.innerHTML = `
    <div class="page container container-wide">
      <div class="breadcrumb">Simulados / ${a.key.startsWith("sim-") ? "Administrator" : "Temas"} / Resultado / <b>Revisão</b></div>
      <div class="page-head">
        <div>
          <h1>Entenda cada resposta. Evolua a cada questão.</h1>
          <p>${a.label} · revisão da tentativa de ${new Date(a.date).toLocaleDateString("pt-BR")}</p>
        </div>
        <button class="btn btn-outline" data-action="back-result">← Voltar ao resultado</button>
      </div>

      <div class="card rev-filterbar">
        <button class="rev-tab ${reviewState.filter === "all" ? "active" : ""}" data-action="rev-filter" data-f="all">Todas (${a.total})</button>
        <button class="rev-tab ${reviewState.filter === "wrong" ? "active bad" : ""}" data-action="rev-filter" data-f="wrong">⊘ Incorretas (${wrongCount})</button>
        <button class="rev-tab ${reviewState.filter === "right" ? "active ok" : ""}" data-action="rev-filter" data-f="right">✓ Corretas (${correctCount})</button>
        <div class="rev-right"><span>${a.total - a.correct - wrongCount >= 0 ? "" : ""}${countBlank(a)} em branco</span><b>${a.pct}% de aproveitamento</b></div>
      </div>

      <div class="practice">
        <div class="card qcard">
          <div class="qcard-top">
            <div><div class="qnum">Questão ${cur.i + 1} de ${a.total}</div><div class="qhint">${t.icon} ${t.label}</div></div>
            <span class="badge ${ok ? "badge-green" : "badge-red"}">${ok ? "✓ Resposta correta" : "⊘ Resposta incorreta"}</span>
          </div>
          <hr>
          <div class="qtext">${statementHtml(q.statement)}</div>
          <div class="opts">${opts}</div>
          <div class="answer-line">
            <span class="al ${ok ? "ok" : "bad"}">${ok ? "✅" : "❌"} Sua resposta: ${yourAns}</span>
            <span class="al ok">✅ Resposta correta: ${rightAns}</span>
          </div>
          <div class="why">
            <div class="wh">💡 Por que ${q.correct.length > 1 ? "essas alternativas estão corretas" : "a alternativa " + rightAns + " está correta"}?</div>
            ${explBlocks(q)}
            <div class="keep">🔑 Guarde esta ideia e siga para a próxima.</div>
          </div>
          <div class="rev-nav">
            <button class="btn btn-outline" data-action="rev-prev" ${prev ? "" : "disabled"}>← ${navWord} anterior${prev ? " · " + String(prev.i + 1).padStart(2, "0") : ""}</button>
            <button class="btn btn-primary" data-action="rev-next" ${next ? "" : "disabled"}>${navWord} seguinte${next ? " · " + String(next.i + 1).padStart(2, "0") : ""} →</button>
          </div>
        </div>

        <div>
          <div class="card side-card mb16">
            <h3 style="font-size:18px;font-weight:800;margin-bottom:4px">Mapa da tentativa</h3>
            <p style="font-size:13px;color:var(--muted);margin-bottom:14px">Selecione uma questão para ver o comentário.</p>
            <div class="qgrid">${grid}</div>
            <div class="legend">
              <span class="lg"><span class="box ok"></span> ${correctCount} corretas</span>
              <span class="lg"><span class="box bad"></span> ${wrongCount} incorretas</span>
            </div>
          </div>
          <div class="card side-card deepen">
            <h3 style="font-size:18px;font-weight:800;margin-bottom:14px">Aprofunde este conceito</h3>
            <div class="deepen-row">
              <div class="d-ic">${t.icon}</div>
              <div><b style="color:var(--brand-ink)">${t.label}</b><br><span style="font-size:13px;color:var(--muted)">Reforce este tema antes do próximo simulado.</span></div>
            </div>
            <button class="btn btn-outline btn-block" data-action="practice-tema" data-tema="${t.id}">↗ Praticar este tema</button>
            <p style="font-size:12.5px;color:var(--muted);margin-top:12px">Modo consulta: as respostas desta tentativa não podem ser alteradas.</p>
          </div>
        </div>
      </div>
    </div>`;
  }
  function countBlank(a) {
    return a.order.filter((id) => (a.answers[id] || []).length === 0).length;
  }

  // =================================================================
  //  TRILHAS
  // =================================================================
  function renderTrilhas() {
    const s = stats();
    const steps = SIMS.map((sim) => {
      const st = simStatus(sim.key);
      const done = st.status === "done";
      const prog = st.status === "progress";
      return { sim, st, done, prog };
    });
    appEl.innerHTML = `
    <div class="page container container-wide">
      <div class="breadcrumb">Minhas trilhas</div>
      <div class="page-head">
        <div><h1>🧭 Trilha Administrator</h1>
        <p>Siga os 4 simulados em ordem e reforce os temas fracos entre eles. ${s.simsDone}/${SIMS.length} concluídos.</p></div>
      </div>
      <div class="card card-pad mb24">
        <div class="pbar-row"><span style="font-weight:700">Progresso da trilha</span><span style="color:var(--brand);font-weight:800">${Math.round(s.simsDone / SIMS.length * 100)}%</span></div>
        <div class="pbar"><div class="pbar-fill" style="width:${s.simsDone / SIMS.length * 100}%"></div></div>
      </div>
      <div class="grid" style="grid-template-columns:1fr">
        ${steps.map((x, i) => `
          <div class="card card-pad" style="display:flex;gap:18px;align-items:center">
            <div class="resume-ic" style="background:${x.done ? "var(--ok-bg)" : "var(--tint)"}">${x.done ? "✅" : x.prog ? "⏳" : i + 1}</div>
            <div style="flex:1">
              <div class="resume-eyebrow">Etapa ${i + 1} • ${x.sim.level}</div>
              <div class="resume-title">${x.sim.title}</div>
              <div class="resume-sub">${x.sim.total} questões • ${x.done ? "melhor resultado " + x.st.best + "%" : x.prog ? x.st.answered + "/" + x.st.total + " respondidas" : "não iniciado"}</div>
            </div>
            <button class="btn ${x.prog ? "btn-primary" : "btn-outline"}" data-action="open-detail" data-key="${x.sim.key}">${x.done ? "Refazer" : x.prog ? "Retomar" : "Começar"} →</button>
          </div>`).join("")}
      </div>
      <div class="section-head" style="margin:34px 0 16px"><h3>🎯 Reforço por tema</h3></div>
      <div class="cards-2">
        ${TEMAS.map((t) => {
          const qs = ALL_QUESTIONS.filter((q) => temaOf(q) === t.id).length;
          return `<div class="card card-pad" style="display:flex;gap:16px;align-items:center;cursor:pointer" data-action="open-detail" data-key="tema-${t.id}">
            <div class="tema-ic">${t.icon}</div>
            <div style="flex:1"><b style="color:var(--brand-ink)">${t.label}</b><br><span style="font-size:13px;color:var(--muted)">${qs} questões</span></div>
            <span style="color:var(--brand);font-weight:700">→</span>
          </div>`;
        }).join("")}
      </div>
    </div>`;
  }

  // =================================================================
  //  CONQUISTAS
  // =================================================================
  function renderConquistas() {
    const s = stats();
    const unlocked = ACHIEVEMENTS.filter((a) => a.test(store)).length;
    appEl.innerHTML = `
    <div class="page container container-wide">
      <div class="breadcrumb">Conquistas</div>
      <div class="page-head">
        <div><h1>🏆 Suas conquistas</h1>
        <p>${unlocked} de ${ACHIEVEMENTS.length} desbloqueadas · nível ${s.level} (${s.levelTitle}) · ${s.xp.toLocaleString("pt-BR")} XP</p></div>
      </div>
      <div class="card card-pad mb24">
        <div class="pbar-row"><span style="font-weight:700">Progresso para o nível ${s.level < LEVELS.length ? s.level + 1 : s.level}</span>
          <span style="color:var(--brand);font-weight:800">${s.xpForNext ? s.xpForNext + " XP restantes" : "nível máximo"}</span></div>
        <div class="pbar"><div class="pbar-fill" style="width:${s.xpForNext ? (1 - s.xpForNext / 600) * 100 : 100}%"></div></div>
      </div>
      <div class="badge-grid">
        ${ACHIEVEMENTS.map((a) => {
          const on = a.test(store);
          return `<div class="achv ${on ? "on" : "off"}">
            <div class="achv-ic">${on ? a.icon : "🔒"}</div>
            <h4>${a.name}</h4><p>${a.desc}</p>
            <div class="st">${on ? '<span class="badge badge-green">✓ Desbloqueada</span>' : '<span class="badge badge-gray">Bloqueada</span>'}</div>
          </div>`;
        }).join("")}
      </div>
    </div>`;
  }

  // =================================================================
  //  Eventos (delegação)
  // =================================================================
  navEl.addEventListener("click", onClick);
  appEl.addEventListener("click", onClick);

  function onClick(e) {
    const nav = e.target.closest("[data-nav]");
    if (nav) { go(nav.getAttribute("data-nav")); return; }
    const el = e.target.closest("[data-action]");
    if (!el) return;
    const act = el.getAttribute("data-action");
    const key = el.getAttribute("data-key");
    switch (act) {
      case "open-detail": go("detail", { key }); break;
      case "pick-mode": detailMode = el.getAttribute("data-mode"); renderDetail(); break;
      case "start": startSession(key, detailMode, false); break;
      case "resume": startSession(key, null, true); break;
      case "restart": {
        if (!confirm("Iniciar uma nova tentativa zera o cronômetro e TODAS as questões já respondidas. Continuar?")) break;
        // mode da tentativa anterior (progresso salvo ou resultado), senão o escolhido no detalhe
        const prevMode =
          (store.progress[key] && store.progress[key].mode) ||
          (currentAttempt && currentAttempt.key === key && currentAttempt.mode) ||
          detailMode;
        stopTimer();
        session = null;
        delete store.progress[key]; // apaga respostas, verificadas, marcadas, índice e tempo
        saveStore();
        startSession(key, prevMode, false); // começa do zero (answers/graded/flagged vazios, tempo 0)
        break;
      }
      case "exit-practice": persistSession(); stopTimer(); go("dashboard"); break;
      case "pick": pickOption(el.getAttribute("data-key")); break;
      case "check": session.graded[qid(session.questions[session.idx])] = true; persistSession(); renderPractice(); break;
      case "next": if (session.idx < session.questions.length - 1) session.idx++; persistSession(); renderPractice(); break;
      case "prev": if (session.idx > 0) session.idx--; persistSession(); renderPractice(); break;
      case "jump": session.idx = +el.getAttribute("data-idx"); persistSession(); renderPractice(); break;
      case "toggle-timer":
        if (session.running) { session.manualPause = true; pauseTimer(); }
        else { session.manualPause = false; startTimer(); }
        persistSession(); renderPractice(); break;
      case "toggle-nav": navCollapsed = !navCollapsed; renderPractice(); break;
      case "flag": session.flagged[qid(session.questions[session.idx])] = true; persistSession(); renderPractice(); break;
      case "unflag": delete session.flagged[qid(session.questions[session.idx])]; persistSession(); renderPractice(); break;
      case "finish": finishExam(false); break;
      case "review": openReview(); break;
      case "export": exportAttempt(currentAttempt); break;
      case "export-attempt": exportAttempt(store.history[+el.getAttribute("data-hidx")]); break;
      case "view-result": {
        const a = store.history[+el.getAttribute("data-hidx")];
        if (a) { currentAttempt = a; go("result"); }
        break;
      }
      case "view-review": {
        const a = store.history[+el.getAttribute("data-hidx")];
        if (a) { currentAttempt = a; openReview(); }
        break;
      }
      case "back-result": go("result"); break;
      case "rev-filter": reviewState.filter = el.getAttribute("data-f"); { const a = currentAttempt; const l = reviewList(a); if (l.length) reviewState.idx = l[0].i; } renderReview(); break;
      case "rev-jump": reviewState.idx = +el.getAttribute("data-idx"); renderReview(); break;
      case "rev-prev": { const l = reviewList(currentAttempt); const p = l.findIndex((x) => x.i === reviewState.idx); if (p > 0) reviewState.idx = l[p - 1].i; renderReview(); } break;
      case "rev-next": { const l = reviewList(currentAttempt); const p = l.findIndex((x) => x.i === reviewState.idx); if (p < l.length - 1) reviewState.idx = l[p + 1].i; renderReview(); } break;
      case "practice-tema": go("detail", { key: "tema-" + el.getAttribute("data-tema") }); break;
      case "clear-filters": catFilter = { status: new Set(), tipo: new Set(), q: "" }; renderCatalog(); break;
    }
  }

  // filtros (checkbox) — change
  appEl.addEventListener("change", (e) => {
    const el = e.target.closest('[data-action="filter"]');
    if (!el) return;
    const g = el.getAttribute("data-group"), v = el.getAttribute("data-val");
    if (el.checked) catFilter[g].add(v); else catFilter[g].delete(v);
    renderCatalog();
  });

  // =================================================================
  //  Correção
  // =================================================================
  function isCorrect(q) { return isCorrectStored(q, session.answers[qid(q)]); }
  function isCorrectStored(q, picked) {
    picked = (picked || []).slice().sort();
    const c = q.correct.slice().sort();
    return picked.length === c.length && picked.every((k, i) => k === c[i]);
  }

  // =================================================================
  //  Utilidades
  // =================================================================
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function escapeAttr(s) { return escapeHtml(s).replace(/"/g, "&quot;"); }
  function statementHtml(s) {
    // separa "Which... (Select 2)" / quebras duplas em parágrafos
    return escapeHtml(s).split(/\n{2,}/).map((p) => `<p>${p.replace(/\n/g, "<br>")}</p>`).join("");
  }
  function fmtExplanation(txt) {
    return escapeHtml(txt).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  }
  // Explicação em inglês + tradução PT-BR (quando disponível)
  function explBlocks(q) {
    const id = qid(q);
    const fix = EXPL_FIX[id];
    const en = fix && fix.en ? fix.en : q.explanation;
    const pt = fix && fix.pt ? fix.pt : EXPL_PT[id];
    let html = `<p>${fmtExplanation(en)}</p>`;
    if (pt) {
      html += `<div class="expl-pt"><div class="expl-pt-label">🇧🇷 Tradução (PT-BR)</div><p>${fmtExplanation(pt)}</p></div>`;
    }
    return html;
  }
  function fmtTime(sec) {
    sec = Math.max(0, sec | 0);
    const h = (sec / 3600) | 0, m = ((sec % 3600) / 60) | 0, s = sec % 60;
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(h)}:${pad(m)}:${pad(s)}`;
  }
  function fmtDur(sec) {
    sec = sec | 0; const h = (sec / 3600) | 0, m = ((sec % 3600) / 60) | 0, s = sec % 60;
    return (h ? h + "h " : "") + m + "min" + (h ? "" : " " + s + "s");
  }
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  // Download de um conteúdo como arquivo
  function downloadFile(content, filename, mime) {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click();
    setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 150);
  }

  // Exporta uma tentativa como CSV (acertos/erros por questão)
  function exportAttempt(a) {
    if (!a) return;
    const SEP = ";";
    const esc = (v) => '"' + String(v == null ? "" : v).replace(/"/g, '""').replace(/\s*\n\s*/g, " ").trim() + '"';
    const rows = [["Nº", "Tema", "Resultado", "Sua resposta", "Resposta correta", "Enunciado"].map(esc).join(SEP)];
    let acertos = 0;
    a.order.forEach((id, i) => {
      const q = Q_BY_ID[id];
      if (!q) return;
      const picked = a.answers[id] || [];
      const ok = isCorrectStored(q, picked);
      if (ok) acertos++;
      const your = picked.length ? picked.map((k) => k.toUpperCase()).join(", ") : "em branco";
      const corr = q.correct.map((k) => k.toUpperCase()).join(", ");
      rows.push([i + 1, temaById[temaOf(q)].label, ok ? "Acertou" : "Errou", your, corr, q.statement].map(esc).join(SEP));
    });
    // linha-resumo no fim
    const pct = Math.round((acertos / a.order.length) * 100);
    rows.push("");
    rows.push([esc("RESUMO"), esc(""), esc(acertos + "/" + a.order.length + " = " + pct + "% · " + (a.passed ? "Aprovado" : "Reprovado")), "", "", ""].join(SEP));
    const csv = "﻿" + rows.join("\r\n");
    const slug = (a.label || "resultado").replace(/[^\w]+/g, "-").replace(/^-|-$/g, "").toLowerCase();
    const date = new Date(a.date).toISOString().slice(0, 10);
    downloadFile(csv, `${slug}-${date}.csv`, "text/csv;charset=utf-8");
  }

  // =================================================================
  //  Boot
  // =================================================================
  if (!QUESTIONS.length) {
    appEl.innerHTML = '<div class="page container container-wide"><div class="empty"><span class="big">⚠️</span>Não foi possível carregar as questões (questions.js).</div></div>';
  } else {
    go("dashboard");
  }
})();
