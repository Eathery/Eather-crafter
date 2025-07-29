<!-- ===== FULLY ANIMATED README ===== -->
<!-- Background partikel interaktif -->
<div id="particles-js" style="position:fixed; z-index:-1; top:0; left:0; width:100%; height:100%;"></div>
<script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
<script>
particlesJS("particles-js", {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 800 } },
    color: { value: "#00ffad" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 150, color: "#00ffad", opacity: 0.25, width: 1 },
    move: { enable: true, speed: 2 }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
      resize: true
    }
  },
  retina_detect: true
});
</script>

<!-- Header animasi -->
<h1 align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&duration=2000&pause=1000&color=00FFAD&center=true&vCenter=true&width=435&lines=Hi+%F0%9F%91%8B%2C+I'm+Loopblaze;Automation+Addict+%7C+Cyber+Enthusiast" alt="Typing header" />
</h1>

<!-- Badge kontak -->
<div align="center">
  <a href="mailto:loopblaze@gmail.com">
    <img src="https://img.shields.io/badge/-loopblaze@gmail.com-c14438?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail"/>
  </a>
  <a href="https://linkedin.com/in/loopblaze">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
  </a>
  <a href="https://linktr.ee/loopblaze">
    <img src="https://img.shields.io/badge/Linktree-000000?style=for-the-badge&logo=linktree&logoColor=white" alt="Linktree"/>
  </a>
</div>

---

### 🛠 Core Stack
<p align="center">
  <img src="https://skillicons.dev/icons?i=html,css,js,python" alt="stack"/>
</p>

### 🧪 DevOps & Tooling
<p align="center">
  <img src="https://skillicons.dev/icons?i=docker,linux,github,nodejs,vscode,git" alt="tooling"/>
</p>

---

### 📊 GitHub Stats
<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=loopblaze&show_icons=true&theme=radical&hide_border=true&count_private=true" height="180"/>
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=loopblaze&theme=radical&hide_border=true" height="180"/>
</div>
<div align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=loopblaze&layout=compact&theme=radical&hide_border=true"/>
</div>

---

### 📈 Activity Graph
![activity-graph](https://github-readme-activity-graph.vercel.app/graph?username=loopblaze&theme=dracula&hide_border=true)

---

### 🧠 Quick Facts
| Fact | Detail |
|------|--------|
| 🔭 **Building** | Personal AI assistant & automation bots |
| 🌱 **Learning** | CI/CD, container orchestration, ethical hacking |
| ⚡ **Fun fact** | I automate boring stuff for breakfast ☕ |

---

### 🔄 Auto Update (GitHub Actions)
```yml
# .github/workflows/update-readme.yml
name: Update README
on:
  schedule: [{ cron: "0 */6 * * *" }]
  workflow_dispatch:
jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: anmol098/waka-readme-stats@master
        with:
          GH_TOKEN: ${{ secrets.GH_TOKEN }}
