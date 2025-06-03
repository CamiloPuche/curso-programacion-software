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

function showStepDescription(stepId) {
    // Ocultar todas las descripciones
    const descriptions = document.querySelectorAll('.step-description');
    descriptions.forEach(desc => desc.classList.remove('active'));

    // Mostrar la descripción seleccionada
    document.getElementById(stepId).classList.add('active');
}

function showMethodologies() {
    const methodologies = document.getElementById('methodologies');
    methodologies.classList.remove('hidden');
    methodologies.classList.add('reveal');
}

function showTab(tabName) {
    // Ocultar todos los contenidos
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Desactivar todos los botones
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Mostrar el contenido seleccionado
    document.getElementById(tabName).classList.add('active');

    // Activar el botón correspondiente
    event.target.classList.add('active');
}