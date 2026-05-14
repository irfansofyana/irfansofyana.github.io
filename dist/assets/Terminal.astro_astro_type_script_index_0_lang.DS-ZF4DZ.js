const p=document.getElementById("profile-data"),n=p?JSON.parse(p.textContent||"{}"):{};let c=[],i=-1;const t=document.getElementById("terminal-input"),l=document.getElementById("terminal-content"),u=document.getElementById("input-line");let r=[];function f(){r=Array.from(l.children).filter(a=>a.id!=="input-line"&&!a.classList.contains("footer-text")).map(a=>a.cloneNode(!0))}document.addEventListener("click",s=>{s.target.closest(".terminal-container")&&t?.focus()});document.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>{f()},100)});t?.addEventListener("keydown",s=>{if(s.key==="Enter"){const a=t.value.trim().toLowerCase();a&&(k(a),c.unshift(a),i=-1),t.value=""}else s.key==="ArrowUp"?(s.preventDefault(),i<c.length-1&&(i++,t.value=c[i])):s.key==="ArrowDown"&&(s.preventDefault(),i>0?(i--,t.value=c[i]):i===0&&(i=-1,t.value=""))});function k(s){switch(o(`<div class="terminal-line">
      <span class="terminal-prompt">${n.prompt}</span>
      <span class="terminal-command">${s}</span>
    </div>`),s){case"help":w();break;case"about":g();break;case"whoami":b();break;case"skills":y();break;case"clear":T();return;case"github":case"linkedin":case"resume":case"til":case"devtools":case"instagram":$(s);break;default:E(s)}v()}function o(s){const a=document.createElement("div");for(a.innerHTML=s;a.firstElementChild;)u.parentNode?.insertBefore(a.firstElementChild,u)}function d(s){const a=Math.max(4,58-s.length);return`<div class="section-rule">┌─ ${s} ${"─".repeat(a)}┐</div>`}function w(){const s=n.social_links?n.social_links.map(e=>`<div class="help-command"><span class="command-icon">→</span><span class="command-name">${e.command}</span><span class="command-separator">·</span><span class="command-desc">Open ${e.label}</span><span class="command-url">${e.url}</span></div>`).join(""):"",a=`
      ${d("HELP")}
      <div class="terminal-output help-container">
        <div class="help-title">Terminal Help</div>

        <div class="help-section">
          <div class="help-header">Information</div>
          <div class="help-command"><span class="command-icon">→</span><span class="command-name">about</span><span class="command-separator">·</span><span class="command-desc">Display detailed information about me</span></div>
          <div class="help-command"><span class="command-icon">→</span><span class="command-name">whoami</span><span class="command-separator">·</span><span class="command-desc">Display user information</span></div>
          <div class="help-command"><span class="command-icon">→</span><span class="command-name">skills</span><span class="command-separator">·</span><span class="command-desc">Show my technical skills</span></div>
        </div>

        <div class="help-section">
          <div class="help-header">External Links</div>
          ${s}
        </div>

        <div class="help-section">
          <div class="help-header">Terminal Controls</div>
          <div class="help-command"><span class="command-icon">→</span><span class="command-name">clear</span><span class="command-separator">·</span><span class="command-desc">Clear terminal and restore welcome state</span></div>
          <div class="help-command"><span class="command-icon">→</span><span class="command-name">help</span><span class="command-separator">·</span><span class="command-desc">Display this help menu</span></div>
        </div>

        <div class="help-section">
          <div class="help-header">Keyboard Shortcuts</div>
          <div class="help-command"><span class="command-icon">→</span><span class="command-name">↑/↓</span><span class="command-separator">·</span><span class="command-desc">Navigate command history</span></div>
          <div class="help-command"><span class="command-icon">→</span><span class="command-name">Tab</span><span class="command-separator">·</span><span class="command-desc">Enable keyboard navigation</span></div>
        </div>
      </div>`;o(a)}function g(){const s=`
      ${d("ABOUT")}
      <div class="terminal-output">
        <div class="name">${n.name}</div>
        <div class="title">${n.title}</div>
        <div class="bio">${n.bio}</div>
        <div class="about-extended">${n.about_extended}</div>
      </div>
    `;o(s)}function b(){const s=`
      ${d("WHOAMI")}
      <div class="terminal-output">
        <div class="success-message">User · ${n.name}</div>
        <div class="whoami-row"><span class="whoami-label">Role</span>${n.title}</div>
        <div class="whoami-row"><span class="whoami-label">Status</span>${n.whoami_info.status}</div>
        <div class="whoami-row"><span class="whoami-label">Location</span>${n.whoami_info.location}</div>
      </div>
    `;o(s)}function y(){const s=n.skills.map((e,m)=>`<div class="skill-row"><span class="skill-num">${String(m+1).padStart(2,"0")}</span><span class="skill-name">${e}</span></div>`).join(""),a=`
      ${d("SKILLS")}
      <div class="terminal-output">
        <div class="command-header">Technical Skills</div>
        <div class="skills-list">${s}</div>
      </div>
    `;o(a)}function $(s){const a=n.social_links.find(e=>e.command===s);a&&(o(`
        <div class="terminal-output">
          <div class="success-message">Opening ${a.label}...</div>
          <div class="whoami-row" style="margin-top:8px;">Please go to <a href="${a.url}" target="_blank" class="terminal-url-link">${a.url}</a> if it doesn't open automatically.</div>
        </div>
      `),setTimeout(()=>{window.open(a.url,"_blank")},500))}function E(s){o(`
      <div class="terminal-output">
        <div class="error-message">Command not found · ${s}</div>
        <div class="whoami-row" style="margin-top:8px;">Type <span class="command-name">help</span> to see available commands.</div>
      </div>
    `)}function T(){o(`
      <div class="terminal-output">
        <div class="success-message">Clearing terminal and restoring welcome state...</div>
      </div>
    `),setTimeout(()=>{Array.from(l.children).forEach(a=>{a.id!=="input-line"&&!a.classList.contains("footer-text")&&a.remove()}),L()},300)}function L(){const s=document.getElementById("input-line"),a=s?.parentNode;a&&s&&r.length>0&&(r.forEach(e=>{const m=e.cloneNode(!0);a.insertBefore(m,s)}),setTimeout(()=>{h()},100)),setTimeout(v,200)}function v(){l.scrollTop+l.clientHeight>=l.scrollHeight-100&&(l.scrollTop=l.scrollHeight)}document.addEventListener("keydown",s=>{s.key==="Tab"&&document.querySelectorAll(".terminal-link").forEach(e=>{e.setAttribute("tabindex","0")})});function h(){document.querySelectorAll(".command-name").forEach(s=>{s.addEventListener("click",()=>{const a=s.textContent;a&&t&&(t.value=a,t.focus())})})}document.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>{h()},200)});
