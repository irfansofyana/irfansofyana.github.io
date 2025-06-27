const d=document.getElementById("profile-data"),n=d?JSON.parse(d.textContent||"{}"):{};let l=[],c=-1;const e=document.getElementById("terminal-input"),t=document.getElementById("terminal-content"),m=document.getElementById("input-line");document.addEventListener("DOMContentLoaded",()=>{e?.focus()});document.addEventListener("click",a=>{a.target.closest(".terminal-container")&&e?.focus()});e?.addEventListener("keydown",a=>{if(a.key==="Enter"){const s=e.value.trim().toLowerCase();s&&(p(s),l.unshift(s),c=-1),e.value=""}else a.key==="ArrowUp"?(a.preventDefault(),c<l.length-1&&(c++,e.value=l[c])):a.key==="ArrowDown"&&(a.preventDefault(),c>0?(c--,e.value=l[c]):c===0&&(c=-1,e.value=""))});function p(a){switch(o(`<div class="terminal-line">
      <span class="terminal-prompt">${n.prompt}</span>
      <span class="terminal-command">${a}</span>
    </div>`),a){case"help":r();break;case"about":v();break;case"whoami":u();break;case"skills":h();break;case"clear":y();return;case"github":case"linkedin":case"resume":case"portfolio":case"blog":case"twitter":f(a);break;default:k(a)}b()}function o(a){const s=document.createElement("div");s.innerHTML=a,m.parentNode?.insertBefore(s.firstElementChild,m)}function r(){const s=`
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
          ${n.social_links?n.social_links.map(i=>`<div class="help-command"><span class="command-icon">→</span><span class="command-name">${i.command}</span><span class="command-separator">:</span> <span class="command-desc">Open ${i.label}</span> <span class="command-url">(${i.url})</span></div>`).join(""):""}
        </div>
        
        <div class="help-section">
          <div class="help-header">⌨️ Terminal Controls</div>
          <div class="help-command"><span class="command-icon">→</span><span class="command-name">clear</span><span class="command-separator">:</span> <span class="command-desc">Clear the terminal screen</span></div>
          <div class="help-command"><span class="command-icon">→</span><span class="command-name">help</span><span class="command-separator">:</span> <span class="command-desc">Display this help menu</span></div>
        </div>
        
        <div class="help-section">
          <div class="help-header">🔤 Keyboard Shortcuts</div>
          <div class="help-command"><span class="command-icon">→</span><span>↑/↓</span><span class="command-separator">:</span> <span class="command-desc">Navigate command history</span></div>
          <div class="help-command"><span class="command-icon">→</span><span>Tab</span><span class="command-separator">:</span> <span class="command-desc">Enable keyboard navigation</span></div>
        </div>
      </div>`;o(s)}function v(){const a=`
      <div class="terminal-output">
        <div class="name">${n.name}</div>
        <div class="title">${n.title}</div>
        <div class="bio">${n.bio}</div>
        <div style="margin-top: 16px; color: #ccc;">
          ${n.about_extended}
        </div>
      </div>
    `;o(a)}function u(){const a=`
      <div class="terminal-output">
        <div class="success-message">User: ${n.name}</div>
        <div style="color: #ccc;">Role: ${n.title}</div>
        <div style="color: #ccc;">Status: ${n.whoami_info.status}</div>
        <div style="color: #ccc;">Location: ${n.whoami_info.location}</div>
      </div>
    `;o(a)}function h(){const a=`
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
    `;o(a)}function f(a){const s=n.social_links.find(i=>i.command===a);s&&(o(`
        <div class="terminal-output">
          <div class="success-message">Opening ${s.label}...</div>
          <div style="color: #ccc; margin-top: 8px;">Please go to <a href="${s.url}" target="_blank" class="terminal-url-link">${s.url}</a> if it doesn't open automatically.</div>
        </div>
      `),setTimeout(()=>{window.open(s.url,"_blank")},500))}function k(a){o(`
      <div class="terminal-output">
        <div class="error-message">Command not found: ${a}</div>
        <div style="color: #ccc; margin-top: 8px;">Type 'help' to see available commands.</div>
      </div>
    `)}function y(){Array.from(t.children).forEach(s=>{s.id!=="input-line"&&!s.classList.contains("footer-text")&&s.remove()})}function b(){t.scrollTop=t.scrollHeight}document.addEventListener("keydown",a=>{a.key==="Tab"&&document.querySelectorAll(".terminal-link").forEach(i=>{i.setAttribute("tabindex","0")})});document.querySelectorAll(".command-name").forEach(a=>{a.addEventListener("click",()=>{const s=a.textContent;s&&e&&(e.value=s,e.focus())})});
