/* widget-parts 1.1 - JSON in, chat widget part out. Host CSS variables, Tabler outline icons. */
(() => {
  const STY = `
.wp{display:flex;flex-direction:column;gap:14px;font-size:14px;color:var(--text-primary)}
.wp *{box-sizing:border-box}
.wp-c{background:var(--surface-2);border:.5px solid var(--border);border-radius:12px;padding:14px 16px}
.wp i.ti{font-size:18px;line-height:1}
.wp-ans{display:flex;gap:12px;align-items:flex-start;font-size:16px;line-height:1.5}
.wp-ans>i.ti{font-size:22px;margin-top:1px}
.wp-row{display:flex;gap:8px;align-items:center}
.wp-act{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}
.wp-act button{display:inline-flex;gap:6px;align-items:center;position:relative;overflow:hidden}
.wp-act button .f{position:absolute;inset:0;width:0;background:var(--bg-danger)}
.wp-act button span{position:relative}
.wp-h{display:flex;gap:8px;align-items:center;font-weight:500;font-size:15px;margin-bottom:10px}
.wp-diff{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:1px;background:var(--border);border-radius:var(--radius);overflow:hidden;font-family:var(--font-mono);font-size:12px}
.wp-diff div{background:var(--surface-2);padding:5px 10px;white-space:pre-wrap;word-break:break-word;min-height:24px}
.wp-diff .s{color:var(--text-secondary)}
.wp-diff .r{background:var(--bg-danger);color:var(--text-danger)}
.wp-diff .a{background:var(--bg-success);color:var(--text-success)}
.wp-diff .e{background:var(--surface-1)}
.wp-chk{display:flex;gap:10px;align-items:center;padding:7px 0;border-bottom:.5px solid var(--border)}
.wp-chk:last-of-type{border-bottom:0}
.wp-stamp{display:inline-flex;gap:6px;align-items:center;border:1.5px solid currentColor;border-radius:var(--radius);padding:4px 12px;font-weight:500;margin-left:auto}
.wp-ax{display:grid;grid-template-columns:minmax(0,1fr) 110px minmax(0,1fr);gap:10px;align-items:center;margin:6px 0}
.wp-ax .l{display:flex;justify-content:flex-end}
.wp-ax .m{text-align:center;font-size:12px;color:var(--text-secondary)}
.wp-bar{height:10px;border-radius:5px;background:var(--border-strong)}
.wp-bar.w{background:var(--fill-accent)}
.wp-side{display:flex;gap:8px;align-items:center;font-weight:500}
.wp-path{display:flex;align-items:center;gap:0;padding:8px 6px;border-radius:var(--radius);cursor:pointer}
.wp-path:hover{background:var(--surface-1)}
.wp-path .n{width:34px;height:34px;border-radius:50%;border:.5px solid var(--border-strong);display:flex;align-items:center;justify-content:center;background:var(--surface-2);flex:none}
.wp-path .ln{flex:1;height:1.5px;background:var(--border-strong);min-width:10px}
.wp-path .nm{width:120px;flex:none;font-weight:500;padding-right:8px}
.wp-path .bd{width:110px;flex:none;padding-left:10px}
.wp-tree{position:relative;display:flex;gap:44px;align-items:center}
.wp-tree .col{display:flex;flex-direction:column;gap:12px;flex:1;min-width:0}
.wp-tree .nd{display:flex;gap:8px;align-items:center;padding:8px 10px;border:.5px solid var(--border-strong);border-radius:var(--radius);background:var(--surface-2);position:relative;z-index:1}
.wp-tree .nd.done{border-color:var(--border-success);color:var(--text-success)}
.wp-tree .nd.open{border:1.5px solid var(--border-accent);cursor:pointer}
.wp-tree .nd.open:hover{background:var(--bg-accent)}
.wp-tree .nd.locked{border-style:dashed;color:var(--text-muted)}
.wp-tree svg{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;overflow:visible}
.wp-plan{display:flex;flex-direction:column}
.wp-st{display:grid;grid-template-columns:28px minmax(0,1fr) auto;gap:10px;align-items:center;padding:7px 0;position:relative}
.wp-st:not(:last-child)::after{content:"";position:absolute;left:13px;top:30px;bottom:-8px;width:1.5px;background:var(--border)}
.wp-st .d{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;border:.5px solid var(--border-strong);background:var(--surface-2)}
.wp-st.done{color:var(--text-secondary)}
.wp-st.now .d{border:1.5px solid var(--border-accent);color:var(--text-accent)}
.wp-st.now{font-weight:500}
.wp-st .who{font-size:12px;color:var(--text-secondary);display:flex;gap:4px;align-items:center}
.wp-grp{display:flex;gap:6px;align-items:center;color:var(--text-secondary);font-size:13px;margin:4px 0 6px}
.wp-chg{display:grid;grid-template-columns:minmax(0,1fr) 22px minmax(0,1fr);gap:8px;align-items:stretch;margin-bottom:8px}
.wp-chg>div{border-radius:var(--radius);padding:8px 12px;display:flex;gap:8px;align-items:center}
.wp-chg .b{border:.5px dashed var(--border-strong);color:var(--text-secondary)}
.wp-chg .n{border:1.5px solid var(--border-success);background:var(--surface-2)}
.wp-chg>i{align-self:center;color:var(--text-muted)}
.wp-band{display:grid;grid-template-columns:130px minmax(0,1fr);gap:10px;align-items:center;margin:6px 0}
.wp-band .tr{position:relative;height:16px}
.wp-band .rg{position:absolute;top:3px;height:10px;border-radius:5px;background:var(--bg-accent);border:.5px solid var(--border-accent)}
.wp-band .lk{position:absolute;top:1px;width:3px;height:14px;border-radius:2px;background:var(--fill-accent)}
.wp-axis{position:relative;height:16px;margin-left:140px;font-size:11px;color:var(--text-muted)}
.wp-axis span{position:absolute;transform:translateX(-50%)}
.wp-blast text{font-size:12px;fill:var(--text-primary);font-family:var(--font-sans)}
.wp-tx{font-size:15px;line-height:1.6;margin:0 0 10px}
.wp-tx:last-child{margin-bottom:0}
.wp code{font-family:var(--font-mono);font-size:.9em;background:var(--bg-neutral,var(--surface-1));padding:1px 5px;border-radius:4px}
.wp b{font-weight:500}
.wp-pts{display:flex;flex-direction:column;gap:6px;margin:0 0 10px}
.wp-pts:last-child{margin-bottom:0}
.wp-pt{display:grid;grid-template-columns:22px minmax(0,1fr);gap:8px;align-items:start;line-height:1.5}
.wp-pt>i.ti{margin-top:2px}
.wp-kv{display:grid;grid-template-columns:22px auto minmax(0,1fr);gap:8px 10px;align-items:center}
.wp-kv .k{color:var(--text-secondary)}
.sr-only{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}
`;
  const E = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const TONE = { ok: 'success', warn: 'warning', bad: 'danger', info: 'accent', pro: 'pro', mute: 'muted', sub: 'secondary' };
  const col = t => t ? `color:var(--text-${TONE[t] || t})` : '';
  const I = (n, t, x = '') => n ? `<i class="ti ti-${n}" aria-hidden="true" style="${col(t)};${x}"></i>` : '';
  const send = p => (window.sendPrompt ? sendPrompt(p) : console.log('sendPrompt:', p));
  const btn = (label, prompt, icon, hold) =>
    `<button data-p="${E(prompt ?? label)}"${hold ? ' data-hold aria-label="Hold to confirm: ' + E(label) + '"' : ''}>${hold ? '<span class="f"></span>' : ''}<span>${I(icon)} ${E(label)}${hold ? ' ' + I('hand-finger', 'mute') : ' ↗'}</span></button>`;
  const acts = a => a && a.length ? `<div class="wp-act">${a.map(x => btn(...x)).join('')}</div>` : '';
  const M = t => E(t).replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
  const TX = t => t ? String(t).split(/\n\n+/).map(x => `<p class="wp-tx">${M(x)}</p>`).join('') : '';
  const PTS = p => p && p.length ? `<div class="wp-pts">${p.map(x => { const [ic, tn, t] = Array.isArray(x) ? (x.length > 2 ? x : [x[0], null, x[1]]) : ['point', 'mute', x]; return `<div class="wp-pt">${I(ic, tn)}<div>${M(t)}</div></div>`; }).join('')}</div>` : '';
  const card = (s, inner = '') => `<div class="wp-c">${s.title ? `<div class="wp-h">${I(s.icon)}${E(s.title)}</div>` : ''}${s.p === 'answer' ? '' : TX(s.text) + PTS(s.points)}${inner}${acts(s.act)}</div>`;

  // step kinds for route maps and plans
  const K = { build: ['hammer'], test: ['flask'], wait: ['hourglass', 'warn'], ask: ['message-question', 'info'], paid: ['coin', 'pro'], lock: ['lock', 'bad'], ship: ['rocket', 'ok'], read: ['book'], risk: ['alert-triangle', 'warn'] };
  const kind = k => K[k] || [k];
  const bandMini = (lo, hi, max, unit) => {
    const w = 100 / max;
    return `<div style="position:relative;height:10px;border-radius:5px;background:var(--surface-1)" title="${lo}-${hi} ${E(unit)}"><div style="position:absolute;left:${lo * w}%;width:${Math.max((hi - lo) * w, 3)}%;top:0;bottom:0;border-radius:5px;background:var(--fill-accent)"></div></div><div style="font-size:11px;color:var(--text-muted);margin-top:2px">${lo}-${hi} ${E(unit || '')}</div>`;
  };

  const P = {
    answer: s => `<div class="wp-ans">${I(s.icon || 'point', s.tone)}<div>${M(s.text)}${s.more ? `<div style="font-size:15px;color:var(--text-secondary);margin-top:6px">${TX(s.more)}</div>` : ''}${PTS(s.points)}</div></div>${acts(s.act)}`,

    note: s => card(s),

    facts: s => card(s, `<div class="wp-kv">${(s.rows || []).map(([ic, k, v, t]) => `${I(ic, 'sub')}<div class="k">${E(k)}</div><div style="${col(t)}">${M(v)}</div>`).join('')}</div>`),

    diff: s => card(s, `<div class="wp-diff">${(s.rows || []).map(r => {
      if (!Array.isArray(r)) return `<div class="s">${E(r)}</div><div class="s">${E(r)}</div>`;
      const [a, b] = r;
      return `<div class="${a == null ? 'e' : 'r'}">${E(a)}</div><div class="${b == null ? 'e' : 'a'}">${E(b)}</div>`;
    }).join('')}</div>`),

    gate: s => {
      const risk = (s.checks || []).some(c => c[2] < 0);
      const v = s.verdict || (risk ? 'Ask first' : 'Ship');
      return card({ ...s, title: null }, `<div class="wp-h">${I(s.icon)}${E(s.title)}<span class="wp-stamp" style="${col(risk ? 'warn' : 'ok')}">${I(risk ? 'alert-triangle' : 'circle-check')}${E(v)}</span></div>` +
        (s.checks || []).map(([ic, t, st]) => `<div class="wp-chk">${I(st > 0 ? 'circle-check' : st < 0 ? 'alert-triangle' : 'circle-minus', st > 0 ? 'ok' : st < 0 ? 'warn' : 'mute')}${I(ic, 'sub')}<span style="${st ? '' : col('sub')}">${E(t)}</span></div>`).join(''));
    },

    duel: s => {
      const ax = s.axes || [], max = s.max || 5;
      const wa = ax.filter(x => x[1] > x[2]).length, wb = ax.filter(x => x[2] > x[1]).length;
      const side = (o, w, r) => `<div class="wp-side" style="${r ? 'justify-content:flex-end' : ''}">${r ? '' : I(o.icon, 'sub', 'font-size:22px')}<span>${E(o.name)}</span><span style="font-size:22px;${col(w ? 'info' : 'mute')}">${w}</span>${r ? I(o.icon, 'sub', 'font-size:22px') : ''}</div>`;
      return card(s, `<div class="wp-ax" style="margin-bottom:12px">${side(s.a, wa, 1)}<div class="m">${I('swords', 'mute', 'font-size:22px')}</div>${side(s.b, wb, 0)}</div>` +
        ax.map(([l, a, b]) => `<div class="wp-ax"><div class="l"><div class="wp-bar${a > b ? ' w' : ''}" style="width:${a / max * 100}%"></div></div><div class="m">${E(l)}</div><div><div class="wp-bar${b > a ? ' w' : ''}" style="width:${b / max * 100}%"></div></div></div>`).join(''));
    },

    route: s => {
      const max = Math.max(...(s.paths || []).map(p => (p.band || [0, 1])[1]));
      return card(s, (s.paths || []).map(p => `<div class="wp-path" data-p="${E(p.ask || 'Take the path: ' + p.name)}" role="button" tabindex="0"><div class="nm">${E(p.name)}</div>${I('map-pin', 'sub', 'font-size:20px')}${(p.steps || []).map(k => { const [ic, t] = kind(k); return `<div class="ln"></div><div class="n" title="${E(k)}">${I(ic, t)}</div>`; }).join('')}<div class="ln"></div>${I(s.goal || 'flag', 'ok', 'font-size:20px')}<div class="bd">${p.band ? bandMini(p.band[0], p.band[1], max, s.unit || 'days') : ''}</div></div>`).join(''));
    },

    tree: (s, id) => {
      const by = Object.fromEntries((s.nodes || []).map(n => [n.id, n]));
      const depth = n => n._d ?? (n._d = (n.need || []).length ? 1 + Math.max(...n.need.map(x => depth(by[x]))) : 0);
      const cols = [];
      (s.nodes || []).forEach(n => (cols[depth(n)] ||= []).push(n));
      return card(s, `<div class="wp-tree" id="${id}">${cols.map(c => `<div class="col">${c.map(n => {
        const st = n.s || 'locked';
        return `<div class="nd ${st}" data-id="${E(n.id)}"${st === 'open' ? ` data-p="${E(n.ask || 'Next: ' + n.name)}" role="button" tabindex="0"` : ''}>${I(st === 'done' ? 'circle-check' : st === 'locked' ? 'lock' : n.icon || 'circle-dashed')}<span>${E(n.name)}</span></div>`;
      }).join('')}</div>`).join('')}<svg></svg></div>`);
    },

    blast: s => {
      const W = 680, H = 300, cx = 340, cy = 150, R = [[110, 58], [205, 98], [300, 135]];
      const by = [[], [], []];
      (s.hits || []).forEach(h => by[Math.min(Math.max((h.ring || 1) - 1, 0), 2)].push(h));
      let g = R.map(([rx, ry], i) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="none" stroke="var(--border${i ? '' : '-strong'})" stroke-width="${i ? .5 : 1}" ${i === 2 ? 'stroke-dasharray="4 4"' : ''}/>`).join('');
      g += `<foreignObject x="${cx - 70}" y="${cy - 18}" width="140" height="36"><div style="display:flex;gap:6px;align-items:center;justify-content:center;height:36px;font-weight:500">${I(s.center?.icon || 'bomb', 'bad')}${E(s.center?.name)}</div></foreignObject>`;
      by.forEach((hs, i) => hs.forEach((h, j) => {
        const a = (-90 + (360 / hs.length) * j + i * 37) * Math.PI / 180, [rx, ry] = R[i];
        const x = cx + rx * Math.cos(a), y = cy + ry * Math.sin(a);
        const t = h.risk || (i === 0 ? 'bad' : i === 1 ? 'warn' : 'sub');
        g += `<foreignObject x="${Math.min(Math.max(x - 65, 0), W - 130)}" y="${Math.min(Math.max(y - 14, 0), H - 28)}" width="130" height="28"><div style="display:flex;gap:5px;align-items:center;justify-content:center;height:26px;font-size:12px;background:var(--surface-2);border:.5px solid var(--border-strong);border-radius:13px;padding:0 8px;white-space:nowrap;overflow:hidden">${I(h.icon || 'point', t, 'font-size:15px')}${E(h.name)}</div></foreignObject>`;
      }));
      return card(s, `<svg class="wp-blast" viewBox="0 0 ${W} ${H}" width="100%" role="img" aria-label="${E((s.center?.name || '') + ' touches ' + (s.hits || []).map(h => h.name).join(', '))}">${g}</svg>`);
    },

    plan: s => {
      const SI = { done: ['circle-check', 'ok'], now: ['player-play', 'info'], next: ['circle-dashed', 'mute'], wait: ['hourglass', 'warn'], block: ['ban', 'bad'] };
      return card(s, `<div class="wp-plan">${(s.steps || []).map(([t, st = 'next', who]) => { const [ic, tn] = SI[st] || SI.next; return `<div class="wp-st ${st}"><div class="d">${I(ic, tn, 'font-size:16px')}</div><div>${E(t)}</div><div class="who">${who ? I(who.split(':')[0] || 'user', 'sub', 'font-size:14px') + E(who.split(':')[1] || '') : ''}</div></div>`; }).join('')}</div>`);
    },

    changed: s => {
      let last, h = '';
      (s.items || []).slice(0, 6).forEach(it => {
        if (it.area && it.area !== last) { h += `<div class="wp-grp">${I(it.areaIcon || 'layout', 'sub', 'font-size:15px')}${E(it.area)}</div>`; last = it.area; }
        h += `<div class="wp-chg"><div class="b">${I(it.icon, 'mute')}${E(it.before)}</div>${I('arrow-right')}<div class="n">${I(it.icon, 'ok')}${E(it.now)}</div></div>`;
      });
      return card(s, h);
    },

    band: s => {
      const max = s.max || Math.max(...(s.items || []).map(x => x[2])) * 1.1, w = v => (v / max * 100).toFixed(1) + '%';
      const step = s.step || [1, 2, 5, 10, 20, 50, 100, 200, 500].find(x => max / x <= 6) || 1000;
      let ticks = ''; for (let v = 0; v <= max; v += step) ticks += `<span style="left:${w(v)}">${v}</span>`;
      return card(s, (s.items || []).map(([l, lo, hi, lk]) => `<div class="wp-band"><div>${E(l)}</div><div class="tr" title="${lo}-${hi} ${E(s.unit || '')}"><div class="rg" style="left:${w(lo)};width:${w(hi - lo)}"></div>${lk != null ? `<div class="lk" style="left:${w(lk)}"></div>` : ''}</div></div>`).join('') + `<div class="wp-axis">${ticks}<span style="right:0;left:auto;transform:none">${E(s.unit || '')}</span></div>`);
    },
  };

  let n = 0;
  function wire(root) {
    root.addEventListener('click', e => {
      const b = e.target.closest('[data-p]');
      if (b && !b.hasAttribute('data-hold')) send(b.dataset.p);
    });
    root.addEventListener('keydown', e => {
      const b = e.target.closest('[role=button][data-p]');
      if (b && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); send(b.dataset.p); }
    });
    root.querySelectorAll('[data-hold]').forEach(b => {
      const f = b.querySelector('.f'); let t, a;
      const stop = () => { clearTimeout(t); cancelAnimationFrame(a); f.style.width = 0; };
      const start = e => {
        e.preventDefault(); const t0 = performance.now();
        const step = () => { const p = Math.min((performance.now() - t0) / 900, 1); f.style.width = p * 100 + '%'; if (p < 1) a = requestAnimationFrame(step); };
        a = requestAnimationFrame(step); t = setTimeout(() => { stop(); send(b.dataset.p); }, 900);
      };
      b.addEventListener('pointerdown', start); ['pointerup', 'pointerleave', 'pointercancel'].forEach(x => b.addEventListener(x, stop));
      b.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.repeat) start(e); });
      b.addEventListener('keyup', e => { if (e.key === 'Enter') stop(); });
    });
  }
  function drawTrees(root) {
    root.querySelectorAll('.wp-tree').forEach(tr => {
      const svg = tr.querySelector('svg'), o = tr.getBoundingClientRect(), spec = tr._spec;
      let d = '';
      (spec?.nodes || []).forEach(nd => (nd.need || []).forEach(src => {
        const a = tr.querySelector(`[data-id="${CSS.escape(src)}"]`)?.getBoundingClientRect(), b = tr.querySelector(`[data-id="${CSS.escape(nd.id)}"]`)?.getBoundingClientRect();
        if (!a || !b) return;
        const x1 = a.right - o.left, y1 = a.top + a.height / 2 - o.top, x2 = b.left - o.left, y2 = b.top + b.height / 2 - o.top, mx = (x1 + x2) / 2;
        d += `<path d="M${x1} ${y1}C${mx} ${y1} ${mx} ${y2} ${x2} ${y2}" fill="none" stroke="var(--border-strong)" stroke-width="1.5"/>`;
      }));
      svg.innerHTML = d;
    });
  }

  function WP(specs, el) {
    specs = Array.isArray(specs) ? specs : [specs];
    if (!document.getElementById('wp-css')) { const st = document.createElement('style'); st.id = 'wp-css'; st.textContent = STY; document.head.appendChild(st); }
    const root = typeof el === 'string' ? document.getElementById(el) : el || (() => { const d = document.createElement('div'); const s = document.currentScript; s ? s.before(d) : document.body.appendChild(d); return d; })();
    root.classList.add('wp');
    const sr = specs.map(s => s.text || s.title || s.center?.name || '').filter(Boolean).join('. ');
    root.innerHTML = `<h2 class="sr-only">${E(sr)}</h2>` + specs.map(s => {
      const f = P[s.p]; const id = 'wp' + (++n);
      if (!f) return `<div class="wp-c" style="${col('bad')}">Unknown part: ${E(s.p)}</div>`;
      s._id = id; return f(s, id);
    }).join('');
    specs.forEach(s => { if (s.p === 'tree') { const t = root.querySelector('#' + s._id); if (t) t._spec = s; } });
    wire(root);
    const redraw = () => drawTrees(root);
    (document.fonts?.ready || Promise.resolve()).then(() => requestAnimationFrame(redraw));
    if (window.ResizeObserver) new ResizeObserver(redraw).observe(root);
    return root;
  }
  WP.parts = Object.keys(P);
  window.WP = WP;
})();
