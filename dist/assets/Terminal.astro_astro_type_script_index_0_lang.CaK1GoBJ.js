const m=document.getElementById("profile-data"),n=m?JSON.parse(m.textContent||"{}"):{};let l=[],i=-1;const e=document.getElementById("terminal-input"),c=document.getElementById("terminal-content"),r=document.getElementById("input-line");let d=[];function h(){d=Array.from(c.children).filter(s=>s.id!=="input-line"&&!s.classList.contains("footer-text")).map(s=>s.cloneNode(!0))}document.addEventListener("click",a=>{a.target.closest(".terminal-container")&&e?.focus()});document.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>{h()},100)});e?.addEventListener("keydown",a=>{if(a.key==="Enter"){const s=e.value.trim().toLowerCase();s&&(f(s),l.unshift(s),i=-1),e.value=""}else a.key==="ArrowUp"?(a.preventDefault(),i<l.length-1&&(i++,e.value=l[i])):a.key==="ArrowDown"&&(a.preventDefault(),i>0?(i--,e.value=l[i]):i===0&&(i=-1,e.value=""))});function f(a){switch(o(`<div class="terminal-line">
      <span class="terminal-prompt">${n.prompt}</span>
      <span class="terminal-command">${a}</span>
    </div>`),a){case"help":g();break;case"about":k();break;case"whoami":y();break;case"skills":b();break;case"clear":x();return;case"github":case"linkedin":case"resume":case"til":case"devtools":case"instagram":E(a);break;default:T(a)}p()}function o(a){const s=document.createElement("div");s.innerHTML=a,r.parentNode?.insertBefore(s.firstElementChild,r)}function g(){const s=`
      <div class="terminal-output help-container">
        <div class="help-title">TERMINAL HELP</div>
        
        <div class="help-section">
          <div class="help-header">⚡ Information Commands</div>
          <div class="help-command"><span class="command-icon">→</span><span class="command-name">about</span><span class="command-separator">:</span> <span class="command-desc">Display detailed information about me</span></div>
          <div class="help-command"><span class="command-icon">→</span><span class="command-name">whoami</span><span class="command-separator">:</span> <span class="command-desc">Display user information</span></div>
          <div class="help-command"><span class="command-icon">→</span><span class="command-name">skills</span><span class="command-separator">:</span> <span class="command-desc">Show my technical skills</span></div>
        </div>
        
        <div class="help-section">
          <div class="help-header">🔗 External Links</div>
          ${n.social_links?n.social_links.map(t=>`<div class="help-command"><span class="command-icon">→</span><span class="command-name">${t.command}</span><span class="command-separator">:</span> <span class="command-desc">Open ${t.label}</span> <span class="command-url">(${t.url})</span></div>`).join(""):""}
        </div>
        
        <div class="help-section">
          <div class="help-header">⌨️ Terminal Controls</div>
          <div class="help-command"><span class="command-icon">→</span><span class="command-name">clear</span><span class="command-separator">:</span> <span class="command-desc">Clear terminal and restore welcome state</span></div>
          <div class="help-command"><span class="command-icon">→</span><span class="command-name">help</span><span class="command-separator">:</span> <span class="command-desc">Display this help menu</span></div>
        </div>
        
        <div class="help-section">
          <div class="help-header">🔤 Keyboard Shortcuts</div>
          <div class="help-command"><span class="command-icon">→</span><span>↑/↓</span><span class="command-separator">:</span> <span class="command-desc">Navigate command history</span></div>
          <div class="help-command"><span class="command-icon">→</span><span>Tab</span><span class="command-separator">:</span> <span class="command-desc">Enable keyboard navigation</span></div>
        </div>
      </div>`;o(s)}function k(){const a=`
      <div class="terminal-output">
        <div class="name">${n.name}</div>
        <div class="title">${n.title}</div>
        <div class="bio">${n.bio}</div>
        <div style="margin-top: 16px; color: #ccc;">
          ${n.about_extended}
        </div>
      </div>
    `;o(a)}function y(){const a=`
      <div class="terminal-output">
        <div class="success-message">User: ${n.name}</div>
        <div style="color: #ccc;">Role: ${n.title}</div>
        <div style="color: #ccc;">Status: ${n.whoami_info.status}</div>
        <div style="color: #ccc;">Location: ${n.whoami_info.location}</div>
      </div>
    `;o(a)}function b(){const a=`
      <div class="terminal-output">
        <div class="command-header">Technical Skills:</div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 8px; margin-top: 12px;">
          ${n.skills.map(s=>`
            <div style="color: #ffd700; padding: 4px 8px; background: rgba(255, 215, 0, 0.1); border-radius: 4px;">
              ${s}
            </div>
          `).join("")}
        </div>
      </div>
    `;o(a)}function E(a){const s=n.social_links.find(t=>t.command===a);s&&(o(`
        <div class="terminal-output">
          <div class="success-message">Opening ${s.label}...</div>
          <div style="color: #ccc; margin-top: 8px;">Please go to <a href="${s.url}" target="_blank" class="terminal-url-link">${s.url}</a> if it doesn't open automatically.</div>
        </div>
      `),setTimeout(()=>{window.open(s.url,"_blank")},500))}function T(a){o(`
      <div class="terminal-output">
        <div class="error-message">Command not found: ${a}</div>
        <div style="color: #ccc; margin-top: 8px;">Type 'help' to see available commands.</div>
      </div>
    `)}function x(){o(`
      <div class="terminal-output">
        <div class="success-message">Clearing terminal and restoring welcome state...</div>
      </div>
    `),setTimeout(()=>{Array.from(c.children).forEach(s=>{s.id!=="input-line"&&!s.classList.contains("footer-text")&&s.remove()}),L()},300)}function L(){const a=document.getElementById("input-line"),s=a?.parentNode;s&&a&&d.length>0&&(d.forEach(t=>{const u=t.cloneNode(!0);s.insertBefore(u,a)}),setTimeout(()=>{v()},100)),setTimeout(p,200)}function p(){c.scrollTop+c.clientHeight>=c.scrollHeight-100&&(c.scrollTop=c.scrollHeight)}document.addEventListener("keydown",a=>{a.key==="Tab"&&document.querySelectorAll(".terminal-link").forEach(t=>{t.setAttribute("tabindex","0")})});function v(){document.querySelectorAll(".command-name").forEach(a=>{a.addEventListener("click",()=>{const s=a.textContent;s&&e&&(e.value=s,e.focus())})})}document.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>{v()},200)});
