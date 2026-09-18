const skills = [
      { icon: "logos:java",             name: "Java",       level: 4 },
      { icon: "logos:c-plusplus",       name: "C++",        level: 3 },
      { icon: "vscode-icons:file-type-asm", name: "Assembly", level: 2 },
      { icon: "logos:python",           name: "Python",     level: 5 },
      { icon: "logos:javascript",       name: "JavaScript", level: 3 },
      { icon: "logos:html-5",           name: "HTML",       level: 4 },
      { icon: "logos:css-3",            name: "CSS",        level: 4 },
    ];

    const tiers = ["Novice", "Familiar", "Proficient", "Advanced", "Expert"];

    const container = document.getElementById("register");

    container.innerHTML = `
      <div class="register-header">
        <h1>skill_register</h1>
        <span>${skills.length} entries</span>
      </div>
      ${skills.map(s => `
        <div class="row">
          <span class="iconify" data-icon="${s.icon}"></span>
          <span class="label">${s.name}</span>
          <div class="bar">
            ${Array.from({length: 5}, (_, i) =>
              `<div class="seg ${i < s.level ? "on" : ""}"></div>`
            ).join("")}
          </div>
          <span class="tier">${tiers[s.level - 1]}</span>
        </div>
      `).join("")}
    `;
            