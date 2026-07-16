# Team Nova | University Portfolio Website

A modern, responsive team portfolio website built to showcase the members, roles, and individual GitHub/portfolio links of **Team Nova**. This project was created as a university portfolio project to demonstrate frontend development, UI/UX design, and responsive web design skills.

🔗 **Live Demo:** _Add your deployed link here (e.g. GitHub Pages, Vercel, Netlify)_

---

## ✨ Features

- **Dynamic Team Cards** — Member profiles are rendered dynamically from a JavaScript data file (`members.js`), making it easy to add, remove, or update team members.
- **Dark / Light Theme Toggle** — Users can switch between dark and light modes, with the preference saved via `localStorage`.
- **Responsive Design** — Fully responsive layout with breakpoints for tablets, mobile, small phones, and landscape mobile.
- **Animated UI** — Smooth entrance animations, floating background blobs, scroll progress bar, and 3D tilt effect on member cards.
- **Mobile Navigation Menu** — Collapsible hamburger menu for smaller screens.
- **Back-to-Top Button** — Appears after scrolling and smoothly scrolls back to the top.
- **Page Loader** — A branded loading screen shown while the page initializes.
- **Accessibility-Friendly** — Respects `prefers-reduced-motion` for users who prefer minimal animation.

---

## 🗂️ Project Structure

```
├── index.html      # Main HTML structure (Navbar, Hero, Team, About, Footer)
├── style.css       # All styling, theming, animations, and responsive rules
├── app.js          # Core app logic: card rendering, theme toggle, scroll effects
├── members.js      # Team member data (name, role, image, GitHub link)
├──IS.jpg           # Member profile
├──MBK.jpg          # Member profile
├──DLS.jpg          # Member profile
├──KPK.jpg          # Member profile
└── README.md       # Project documentation
```

---

## 🧑‍🤝‍🧑 Team Members

| Name | Role |
|------|------|
| Ingyin San | UI / UX Designer |
| Dwat Lian Sang | Frontend Developer |
| Myat Bhone Kyaw |  Full Stack Developer |
| Kyi Phyu Khin | Backend Developer |


---

## 🛠️ Technologies Used

- **HTML5** — Semantic page structure
- **CSS3** — Custom properties (CSS variables), Flexbox, Grid, animations, media queries
- **JavaScript (Vanilla)** — DOM manipulation, event listeners, theme persistence
- **Google Fonts** — [Poppins](https://fonts.google.com/specimen/Poppins)

---

## 🚀 Getting Started

### Prerequisites
No build tools or dependencies are required — this is a static site.

### Running Locally
1. Clone or download this repository.
2. Open `index.html` directly in your browser.
   
---

## ✏️ Customization

### Adding / Editing Team Members
Open `members.js` and update the `members` array:

```js
{
    id: 5,
    name: "New Member",
    role: "Their Role",
    image: "photo.jpg",
    github: "https://github.com/their-username"
}
```
Then add the corresponding image file to the project directory.

### Changing Theme Colors
Theme colors are controlled via CSS variables in `style.css` under `:root` (dark mode) and `body.light` (light mode):

```css
:root{
    --primary:#463699;
    --secondary:#8A83DA;
    --accent:#FBD5BD;
    --background:#262335;
}
```

---

## 📄 License

This project is created for educational purposes as part of a university coursework submission.

---

## © Copyright

© 2026 Team Nova. All Rights Reserved.
