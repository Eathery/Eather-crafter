<h1 align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&duration=2000&pause=1000&color=00FFAD&center=true&vCenter=true&width=435&lines=Hi+%F0%9F%91%8B%2C+I'm+Loopblaze;Automation+Addict+%7C+Cyber+Enthusiast" alt="Typing header" />
</h1>

---

<div align="center">

[![Gmail](https://img.shields.io/badge/-loopblaze@gmail.com-c14438?style=for-the-badge&logo=gmail&logoColor=white)](mailto:loopblaze@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/loopblaze)
[![Linktree](https://img.shields.io/badge/Linktree-000000?style=for-the-badge&logo=linktree&logoColor=white)](https://linktr.ee/loopblaze)

</div>

---

### 🛠 Core Stack
<p align="center">
  <img src="https://skillicons.dev/icons?i=html,css,js,python" alt="stack icons"/>
</p>

### 🧪 DevOps & Tooling
<p align="center">
  <img src="https://skillicons.dev/icons?i=docker,linux,github,nodejs,vscode,git" alt="tooling icons"/>
</p>

---

### 📊 GitHub Stats
<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=loopblaze&show_icons=true&theme=radical&hide_border=true&count_private=true" alt="stats" height="180"/>
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=loopblaze&theme=radical&hide_border=true" alt="streak" height="180"/>
</div>

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=loopblaze&layout=compact&theme=radical&hide_border=true" alt="top langs" />
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
Enable dynamic stats with:

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
