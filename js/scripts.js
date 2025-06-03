function showProjects() {
    const projects = document.getElementById("projects");
    projects.classList.remove("hidden");
    projects.classList.add("reveal");
}

// Animación de entrada para las secciones
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    });

    sections.forEach((section) => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = "all 0.6s ease";
        observer.observe(section);
    });
});