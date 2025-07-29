<h1 align="center">Hi 👋, I'm Loopblaze</h1>
<h3 align="center">🚀 Passionate Dev | 🧪 Automation Addict | 🔐 Cyber Enthusiast</h3>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&duration=3000&pause=500&color=00FFAD&center=true&vCenter=true&width=435&lines=Welcome+to+my+lab...;Automating+my+way+through+code;Building+cool+stuff+on+the+web;Stay+curious+%F0%9F%94%8D" alt="Typing SVG" />
</p>

---

### 🌐 Connect with Me

[![Gmail Badge](https://img.shields.io/badge/-loopblaze@gmail.com-c14438?style=flat&logo=Gmail&logoColor=white)](mailto:loopblaze@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com)
[![Linktree](https://img.shields.io/badge/Linktree-000000?style=flat&logo=linktree&logoColor=white)](https://linktr.ee/loopblaze)

---

### 🛠 Tech Stack

![HTML](https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Python](https://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=white)
![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Git](https://img.shields.io/badge/-Git-F05032?style=flat&logo=git&logoColor=white)
![Linux](https://img.shields.io/badge/-Linux-FCC624?style=flat&logo=linux&logoColor=black)
![VSCode](https://img.shields.io/badge/-VSCode-007ACC?style=flat&logo=visual-studio-code)

---

### 🚀 GitHub Stats

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=loopblaze&show_icons=true&theme=radical&hide_border=true&count_private=true" alt="stats" />
  <br />
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=loopblaze&theme=radical&hide_border=true" alt="streak" />
  <br />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=loopblaze&layout=compact&theme=radical&hide_border=true" alt="top langs" />
</p>

---

### 🛠 CI/CD & Automation

![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-%23121011.svg?style=flat&logo=github-actions&logoColor=white)
![Docker](https://img.shields.io/badge/-Docker-2496ED?style=flat&logo=docker&logoColor=white)
![Netlify](https://img.shields.io/badge/-Netlify-00C7B7?style=flat&logo=netlify&logoColor=white)
![Vercel](https://img.shields.io/badge/-Vercel-000000?style=flat&logo=vercel&logoColor=white)

---

### 🧠 Fun Facts

- 🔭 I’m currently building: personal AI assistant & automation bots  
- 🌱 I’m learning: CI/CD, container orchestration, and ethical hacking  
- ⚡ Fun fact: I automate boring stuff for breakfast ☕  

---

### ⏳ Dynamic Activity

<!-- GITHUB ACTIVITY -->
![loopblaze's activity graph](https://github-readme-activity-graph.vercel.app/graph?username=loopblaze&theme=dracula)

---

### 🔄 Auto Update (GitHub Actions)

> Aktifkan GitHub Action untuk auto-update statistik:
1. Buat file `.github/workflows/update-readme.yml`
2. Isi dengan:

```yml
name: Update README

on:
  schedule:
    - cron: '0 */6 * * *'
  workflow_dispatch:

jobs:
  update-readme:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: anmol098/waka-readme-stats@master
        with:
          GH_TOKEN: ${{ secrets.GH_TOKEN }}
