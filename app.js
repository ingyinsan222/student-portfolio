/* ==========================================
   TEAM NOVA
   MAIN APPLICATION
========================================== */

// CREATE MEMBER CARDS
const teamContainer = document.getElementById("teamContainer");

members.forEach(member => {
    const card = document.createElement("article");
    card.className = "member-card";

    card.innerHTML = `
        <img src="${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.role}</p>
        <button class="primary-btn view-btn">View Profile</button>
    `;

    teamContainer.appendChild(card);

    const button = card.querySelector(".view-btn");
    button.addEventListener("click", () => openModal(member));
});

// PROFILE MODAL
const modal = document.getElementById("profileModal");
const modalClose = document.getElementById("modalClose");
const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalRole = document.getElementById("modalRole");
const modalDescription = document.getElementById("modalDescription");
const modalGithub = document.getElementById("modalGithub");

function openModal(member){
    modalImage.src = member.image;
    modalName.textContent = member.name;
    modalRole.textContent = member.role;
    modalDescription.textContent = member.description;
    modalGithub.href = member.github;

    modal.classList.add("active");
}

modalClose.addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
    if(e.target === modal){
        modal.classList.remove("active");
    }
});

// MOBILE MENU
const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// Close menu after clicking link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        menuIcon.classList.remove("active");
        navLinks.classList.remove("active");
    });
});

// LOADER
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.classList.add("hide");

    setTimeout(() => {
        loader.style.display = "none";
    }, 500);
});

// SCROLL PROGRESS
const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / height) * 100;

    progressBar.style.width = progress + "%";
});

// BACK TO TOP
const topButton = document.getElementById("topButton");

window.addEventListener("scroll", () => {
    if(window.scrollY > 500){
        topButton.style.display = "block";
    }
    else{
        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// CARD 3D EFFECT
document.addEventListener("mousemove", (e) => {
    document.querySelectorAll(".member-card").forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if(x > 0 && x < rect.width && y > 0 && y < rect.height){
            const rotateY = ((x / rect.width) - .5) * 15;
            const rotateX = ((y / rect.height) - .5) * -15;

            card.style.transform = `
                perspective(900px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-10px)
            `;
        }
        else{
            card.style.transform = "";
        }
    });
});

/* ==========================================
   TEAM NOVA
   THEME CONTROLLER
========================================== */


const themeToggle =
document.getElementById("themeToggle");



const savedTheme =
localStorage.getItem("theme");




// Load saved theme

if(savedTheme === "light"){

    document.body.classList.add("light");

    themeToggle.textContent="☀️";

}




// Toggle Theme

themeToggle.addEventListener("click",()=>{


    document.body.classList.toggle("light");



    const isLight =
    document.body.classList.contains("light");



    if(isLight){


        themeToggle.textContent="☀️";


        localStorage.setItem(
            "theme",
            "light"
        );


    }

    else{


        themeToggle.textContent="🌙";


        localStorage.setItem(
            "theme",
            "dark"
        );


    }


});
