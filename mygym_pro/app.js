/* ==========================================================================
   app.js — UPPER/LOWER Tracker (RTL)
   ========================================================================== */

/* ==========================================================================
   app.js — UPPER/LOWER Tracker (RTL)
   ========================================================================== */

/* ─── Section 1: Data Bootstrap (wait for program-data.js) ───────────────── */
"use strict";

/**
 * We DON'T destructure ProgramData at parse time (to avoid capturing `undefined`).
 * Instead we wait until window.ProgramData exists, then continue boot.
 * PROGRAM is used everywhere instead of `program`.
 */
let PROGRAM = null;           // filled once data arrives
let FEEL_CONST = null;        // not used by UI, but kept for completeness

function waitForProgramData(readyCb){
  const tryBind = () => {
    const pd = window.ProgramData;
    if (pd && Array.isArray(pd.program)) {
      PROGRAM   = pd.program;
      FEEL_CONST = pd.FEEL;
      readyCb();
    } else {
      // try again shortly; very light polling protects against load-order glitches
      setTimeout(tryBind, 30);
    }
  };
  // run after DOM is ready (so our querySelectors exist)
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", tryBind, { once:true });
  } else {
    tryBind();
  }
}
/* ─── End Section 1 ──────────────────────────────────────────────────────── */



// ─── Section 2: DB Operations (localStorage) ────────────────────────────────
const KEY = "ul_tracker_state_v2_no_video";
const state = JSON.parse(localStorage.getItem(KEY) || "{}");

function saveState(){ localStorage.setItem(KEY, JSON.stringify(state)); }
function ensureExerciseState(exId){
  if(!state[exId]) state[exId] = { active:null, logs:[] };
  return state[exId];
}
// ─── End Section 2 ───────────────────────────────────────────────────────────



// ─── Section 3: DOM Handles & Global UI State ───────────────────────────────
const dayNav      = document.getElementById("dayNav");
const dayTitle    = document.getElementById("dayTitle");
const muscles     = document.getElementById("muscles");
const exercisesEl = document.getElementById("exercises");
const prevBtn     = document.getElementById("prevBtn");
const nextBtn     = document.getElementById("nextBtn");

// Off-canvas (burger) elements
const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");
const scrim   = document.getElementById("scrim");

let currentDayIdx = 0;
// ─── End Section 3 ───────────────────────────────────────────────────────────



// ─── Section 4: Mobile Off-Canvas Menu ──────────────────────────────────────
function openMenu(){
  if(!sidebar || !menuBtn || !scrim) return;
  sidebar.classList.add("is-open");
  sidebar.setAttribute("aria-hidden","false");
  menuBtn.setAttribute("aria-expanded","true");
  scrim.hidden = false;
  document.body.classList.add("no-scroll");
}
function closeMenu(){
  if(!sidebar || !menuBtn || !scrim) return;
  sidebar.classList.remove("is-open");
  sidebar.setAttribute("aria-hidden","true");
  menuBtn.setAttribute("aria-expanded","false");
  scrim.hidden = true;
  document.body.classList.remove("no-scroll");
}
function toggleMenu(){
  if(!sidebar) return;
  sidebar.classList.contains("is-open") ? closeMenu() : openMenu();
}
menuBtn && menuBtn.addEventListener("click", toggleMenu);
scrim   && scrim.addEventListener("click", closeMenu);
window.addEventListener("keydown", (e)=>{ if(e.key==="Escape") closeMenu(); });
window.addEventListener("resize", ()=>{ if(window.innerWidth > 1024) closeMenu(); });
// ─── End Section 4 ───────────────────────────────────────────────────────────



/* ─── Section 5: Render – Top Day Navigation ─────────────────────────────── */
function renderNav(){
  dayNav.innerHTML = "";
  // PROGRAM is guaranteed to be available because we only call render* after waitForProgramData()
  PROGRAM.forEach((d,i)=>{
    const btn = document.createElement("button");
    btn.setAttribute("role","tab");
    btn.setAttribute("aria-selected", i===currentDayIdx ? "true" : "false");
    btn.innerHTML = `<div style="font-weight:700">${d.dayLabel}</div><small>${d.muscles}</small>`;
    btn.className = i===currentDayIdx ? "active" : "";
    btn.onclick = ()=>{
      currentDayIdx = i;
      renderDay();
      renderNav();
      closeMenu(); // close off-canvas after choosing a day
    };
    dayNav.appendChild(btn);
  });
}
/* ─── End Section 5 ──────────────────────────────────────────────────────── */



/* ─── Section 6: Render – Day View (cards, alternatives, logs, chart) ───── */
function renderDay(){
  const day = PROGRAM[currentDayIdx];
  if(!day) return; // defensive

  dayTitle.textContent = day.dayLabel;
  muscles.textContent  = day.muscles;
  exercisesEl.innerHTML = "";

  day.exercises.forEach(ex=>{
    const exState = ensureExerciseState(ex.id);
    const active  = exState.active || ex.active;

    const card = document.createElement("div");
    card.className = "card";

    const head = document.createElement("div");
    head.className = "card-head";
    head.innerHTML = `
      <h3 class="ex-title">${ex.title}</h3>
      <div class="meta">
        <span class="tag">סטים×חזרות/משך: <b>${ex.setsReps}</b></span>
        <span class="tag">תרגיל פעיל: <b>${active}</b></span>
        <span class="tag">הרגשה: ${ex.feel || "בקרה על טכניקה ונשימה"}</span>
        <span class="tag">התקדמות: ${ex.progress || "עלה נפח/קושי כשהסטים יציבים"}</span>
      </div>
    `;
    card.appendChild(head);

    const grid = document.createElement("div");
    grid.className = "grid";

    // Alternatives
    const altSec = document.createElement("div");
    altSec.className = "section";
    altSec.innerHTML = `<h4>אלטרנטיבות ובחירת תרגיל</h4>`;

    const alts = document.createElement("div");
    alts.className = "alts";

    ex.alts.forEach(alt=>{
      const row = document.createElement("div");
      row.className = "alt";
      row.innerHTML = `
        <div>
          <div class="name">${alt.name}</div>
          <div class="kind">${alt.kind}</div>
        </div>
        <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap">
          <a class="btn ghost" href="https://www.youtube.com/results?search_query=${encodeURIComponent(alt.yt)}" target="_blank" rel="noopener">יוטיוב</a>
          <button class="btn use ${active===alt.name?'primary':''}">השתמש</button>
        </div>
      `;
      row.querySelector(".use").onclick = ()=>{
        exState.active = alt.name;
        saveState();
        renderDay();
      };
      alts.appendChild(row);
    });

    const feelBox = document.createElement("div");
    feelBox.className = "feel";
    feelBox.textContent = "מה להרגיש: " + (ex.feel || "") + (ex.progress ? " • מתי לעלות: " + ex.progress : "");

    altSec.appendChild(alts);
    altSec.appendChild(feelBox);
    grid.appendChild(altSec);

    // Logger + chart
    const logSec = document.createElement("div");
    logSec.className = "section";
    logSec.innerHTML = `<h4>לוג משקלים/משך + גרף התקדמות</h4>`;

    const logRow = document.createElement("div");
    logRow.className = "log-row";
    logRow.innerHTML = `
      <input type="date" id="date-${ex.id}" />
      <input type="number" id="w-${ex.id}" placeholder="משקל (ק״ג) / עוצמה" step="0.5" />
      <input type="number" id="r-${ex.id}" placeholder="חזרות / זמן (ש׳)" step="1" />
      <button class="btn primary" id="add-${ex.id}">הוסף לוג</button>
    `;
    logSec.appendChild(logRow);

    const hint = document.createElement("div");
    hint.className = "hint";
    hint.textContent = "הגרף מציג הערכת 1RM (Epley) כאשר יש משקל+חזרות. באירובי, ניתן להזין זמן/עוצמה למעקב מגמה.";
    logSec.appendChild(hint);

    const canvas = document.createElement("canvas");
    canvas.id = "chart-" + ex.id;

    // Fix for infinite-scroll: give the canvas a fixed pixel size once, and DO NOT
    // let Chart.js run in responsive mode.
    canvas.style.display = "block";
    canvas.style.width   = "100%";
    canvas.style.height  = "160px";
    logSec.appendChild(canvas);

    const tableWrap = document.createElement("div");
    tableWrap.className = "table-wrap";
    tableWrap.style.marginTop = "10px";
    tableWrap.innerHTML = `
      <table class="logs-table">
        <thead><tr><th>תאריך</th><th>משקל/עוצמה</th><th>חזרות/זמן</th><th>1RM משוער*</th></tr></thead>
        <tbody id="tb-${ex.id}"></tbody>
      </table>
      <div class="hint">* עבור אירובי הערך לא ישים — ניתן להשאיר ריק או 0.</div>
    `;
    logSec.appendChild(tableWrap);

    grid.appendChild(logSec);
    card.appendChild(grid);
    exercisesEl.appendChild(card);

    // Per-exercise helpers
    const dateEl = logRow.querySelector("#date-"+ex.id);
    const wEl    = logRow.querySelector("#w-"+ex.id);
    const rEl    = logRow.querySelector("#r-"+ex.id);
    const addBtn = logRow.querySelector("#add-"+ex.id);
    const tb     = tableWrap.querySelector("#tb-"+ex.id);

    if(!dateEl.value){
      const d = new Date();
      dateEl.value = d.toISOString().slice(0,10);
    }

    function epley1RM(w,r){
      const W = parseFloat(w); const R = parseInt(r,10);
      if (isNaN(W) || isNaN(R) || W<=0 || R<=0) return "";
      return Math.round((W * (1 + R/30)) * 10) / 10;
    }

    function buildChart(labels, dataPoints){
      // set intrinsic pixel size once (prevents ResizeObserver feedback)
      const rect = canvas.getBoundingClientRect();
      canvas.width  = Math.max(320, Math.floor(rect.width));
      canvas.height = 160; // match CSS height

      if(canvas._chart) { canvas._chart.destroy(); canvas._chart = null; }
      // IMPORTANT: responsive=false to disable Chart.js' ResizeObserver entirely.
      canvas._chart = new Chart(canvas.getContext('2d'),{
        type:'line',
        data:{ labels, datasets:[{ label:'1RM משוער (אם יש)', data:dataPoints, tension:.25, pointRadius:3, spanGaps:true }] },
        options:{
          responsive:false,
          animation:false,
          parsing:false,
          plugins:{ legend:{ labels:{ color:"#cfe4ff" } } },
          scales:{
            x:{ ticks:{ color:"#a6bfd6" }, grid:{ color:"#223243" } },
            y:{ ticks:{ color:"#a6bfd6" }, grid:{ color:"#223243" } }
          }
        }
      });
    }

    function renderLogs(){
      const logs = (state[ex.id]?.logs || []).slice().sort((a,b)=>a.date.localeCompare(b.date));
      tb.innerHTML = logs.map(l=>{
        const est = epley1RM(l.weight,l.reps);
        return `<tr><td>${l.date}</td><td>${l.weight ?? ""}</td><td>${l.reps ?? ""}</td><td>${est===""?"-":est}</td></tr>`;
      }).join("") || `<tr><td colspan="4" style="color:var(--muted)">אין עדיין לוגים</td></tr>`;

      const labels = logs.map(l=>l.date);
      const data   = logs.map(l=>epley1RM(l.weight,l.reps) || null);
      buildChart(labels, data);
    }

    addBtn.onclick = ()=>{
      const date   = dateEl.value;
      const weight = (wEl.value===""?null:parseFloat(wEl.value));
      const reps   = (rEl.value===""?null:parseInt(rEl.value,10));
      if(!date){ alert("אנא מלא תאריך."); return; }
      if(weight===null && reps===null){ alert("הזן לפחות משקל/עוצמה או חזרות/זמן."); return; }
      const st = ensureExerciseState(ex.id);
      st.logs.push({date, weight, reps});
      saveState();
      renderLogs();
      rEl.value="";
    };

    renderLogs();
  });

  prevBtn.disabled = currentDayIdx===0;
  nextBtn.disabled = currentDayIdx===PROGRAM.length-1;
}
/* ─── End Section 6 ──────────────────────────────────────────────────────── */



/* ─── Section 7: Wiring & Init ───────────────────────────────────────────── */
prevBtn.onclick = ()=>{ if(currentDayIdx>0){ currentDayIdx--; renderDay(); renderNav(); } };
nextBtn.onclick = ()=>{ if(currentDayIdx<PROGRAM.length-1){ currentDayIdx++; renderDay(); renderNav(); } };

// Boot the app ONLY after ProgramData is available.
waitForProgramData(()=>{
  renderNav();
  renderDay();
});

document.addEventListener('keydown', (e)=>{
  if (e.key === 'ArrowLeft') nextBtn.click();
  if (e.key === 'ArrowRight') prevBtn.click();
});
/* ─── End Section 7 ──────────────────────────────────────────────────────── */


