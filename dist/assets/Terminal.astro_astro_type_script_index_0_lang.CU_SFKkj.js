const d=document.getElementById("profile-data"),e=d?JSON.parse(d.textContent||"{}"):{};let l=[],c=-1;const n=document.getElementById("terminal-input"),o=document.getElementById("terminal-content"),m=document.getElementById("input-line");document.addEventListener("click",a=>{a.target.closest(".terminal-container")&&n?.focus()});n?.addEventListener("keydown",a=>{if(a.key==="Enter"){const s=n.value.trim().toLowerCase();s&&(r(s),l.unshift(s),c=-1),n.value=""}else a.key==="ArrowUp"?(a.preventDefault(),c<l.length-1&&(c++,n.value=l[c])):a.key==="ArrowDown"&&(a.preventDefault(),c>0?(c--,n.value=l[c]):c===0&&(c=-1,n.value=""))});function r(a){switch(i(`<div class="terminal-line">
      <span class="terminal-prompt">${e.prompt}</span>
      <span class="terminal-command">${a}</span>
    </div>`),a){case"help":p();break;case"about":v();break;case"whoami":u();break;case"skills":f();break;case"clear":y();return;case"effects":g();break;case"github":case"linkedin":case"resume":case"brain":case"til":case"devtools":case"instagram":h(a);break;default:b(a)}k()}function i(a){const s=document.createElement("div");s.innerHTML=a,m.parentNode?.insertBefore(s.firstElementChild,m)}function p(){const s=`
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
          ${e.social_links?e.social_links.map(t=>`<div class="help-command"><span class="command-icon">→</span><span class="command-name">${t.command}</span><span class="command-separator">:</span> <span class="command-desc">Open ${t.label}</span> <span class="command-url">(${t.url})</span></div>`).join(""):""}
        </div>
        
        <div class="help-section">
          <div class="help-header">⌨️ Terminal Controls</div>
          <div class="help-command"><span class="command-icon">→</span><span class="command-name">clear</span><span class="command-separator">:</span> <span class="command-desc">Clear the terminal screen</span></div>
          <div class="help-command"><span class="command-icon">→</span><span class="command-name">effects</span><span class="command-separator">:</span> <span class="command-desc">Toggle background visual effects</span></div>
          <div class="help-command"><span class="command-icon">→</span><span class="command-name">help</span><span class="command-separator">:</span> <span class="command-desc">Display this help menu</span></div>
        </div>
        
        <div class="help-section">
          <div class="help-header">🔤 Keyboard Shortcuts</div>
          <div class="help-command"><span class="command-icon">→</span><span>↑/↓</span><span class="command-separator">:</span> <span class="command-desc">Navigate command history</span></div>
          <div class="help-command"><span class="command-icon">→</span><span>Tab</span><span class="command-separator">:</span> <span class="command-desc">Enable keyboard navigation</span></div>
        </div>
      </div>`;i(s)}function v(){const a=`
      <div class="terminal-output">
        <div class="name">${e.name}</div>
        <div class="title">${e.title}</div>
        <div class="bio">${e.bio}</div>
        <div style="margin-top: 16px; color: #ccc;">
          ${e.about_extended}
        </div>
      </div>
    `;i(a)}function u(){const a=`
      <div class="terminal-output">
        <div class="success-message">User: ${e.name}</div>
        <div style="color: #ccc;">Role: ${e.title}</div>
        <div style="color: #ccc;">Status: ${e.whoami_info.status}</div>
        <div style="color: #ccc;">Location: ${e.whoami_info.location}</div>
      </div>
    `;i(a)}function f(){const a=`
      <div class="terminal-output">
        <div class="command-header">Technical Skills:</div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 8px; margin-top: 12px;">
          ${e.skills.map(s=>`
            <div style="color: #ffd700; padding: 4px 8px; background: rgba(255, 215, 0, 0.1); border-radius: 4px;">
              ${s}
            </div>
          `).join("")}
        </div>
      </div>
    `;i(a)}function h(a){const s=e.social_links.find(t=>t.command===a);s&&(i(`
        <div class="terminal-output">
          <div class="success-message">Opening ${s.label}...</div>
          <div style="color: #ccc; margin-top: 8px;">Please go to <a href="${s.url}" target="_blank" class="terminal-url-link">${s.url}</a> if it doesn't open automatically.</div>
        </div>
      `),setTimeout(()=>{window.open(s.url,"_blank")},500))}function g(){const a=document.getElementById("particle-field");if(a){const s=a.style.display!=="none";a.style.display=s?"none":"block",localStorage.setItem("effects-enabled",(!s).toString()),i(`
        <div class="terminal-output">
          <div style="color: ${s?"#ff6b6b":"#00ff00"}; font-weight: bold;">Background visual effects ${s?"disabled":"enabled"}</div>
          <div style="color: #ccc; margin-top: 8px;">Use 'effects' command to toggle particle field and visual enhancements on/off.</div>
        </div>
      `)}else i(`
        <div class="terminal-output">
          <div class="error-message">Visual effects not available</div>
          <div style="color: #ccc; margin-top: 8px;">Background effects may be disabled due to performance or accessibility settings.</div>
        </div>
      `)}function b(a){i(`
      <div class="terminal-output">
        <div class="error-message">Command not found: ${a}</div>
        <div style="color: #ccc; margin-top: 8px;">Type 'help' to see available commands.</div>
      </div>
    `)}function y(){Array.from(o.children).forEach(s=>{s.id!=="input-line"&&!s.classList.contains("footer-text")&&s.remove()})}function k(){o.scrollTop+o.clientHeight>=o.scrollHeight-100&&(o.scrollTop=o.scrollHeight)}document.addEventListener("keydown",a=>{a.key==="Tab"&&document.querySelectorAll(".terminal-link").forEach(t=>{t.setAttribute("tabindex","0")})});document.querySelectorAll(".command-name").forEach(a=>{a.addEventListener("click",()=>{const s=a.textContent;s&&n&&(n.value=s,n.focus())})});
