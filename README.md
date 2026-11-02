# my-site — the learning website (Project 1)

Matches the course structure in "What You Hand In". Five pages + shared nav/footer + styles + the useless machine.

## What's here
- `index.html`, `quotes.html`, `project.html`, `about.html`, `machine.html`
- `nav.html` + `footer.html` + `nav.js` — DRY navigation, injected by JavaScript
- `style.css`, `machine.css`, `machine.js`, `quotes.js`, `likes.js`
- `images/hero.svg` — a placeholder banner. **Replace it with your own photo** (put it at `images/hero.jpg` and change the `<img src>` in `index.html`).
- `favicon-32.png` + `apple-touch-icon.png` — generated for you. Replace with your own design when ready.

## To view it (must be over http://, not file://)
1. VS Code → install the **Live Server** extension.
2. Right-click `index.html` → **Open with Live Server**.
3. The navigation only appears over http:// — that is expected (fetch needs a server).

## Git — do this TODAY, then every day
```
git init
git config user.name "MA Yuyuan"
git config user.email "x20230009@stu.hibiuh.edu.cn"
git add .
git commit -m "index.html: homepage skeleton with hero and links"
```
Then create a **public** GitHub repo called `my-site`, and:
```
git branch -M main
git remote add origin https://github.com/YOUR-NAME/my-site.git
git push -u origin main
```
From now on, every day:
```
git add .
git commit -m "what you changed"
git push
```

## Make it yours
- Your name, email, hero photo, the 5 project ideas, and the quotes.
- Commit one change at a time so the history shows the site growing.
