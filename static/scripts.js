document.getElementById("menu-toggle").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    const menuToggle = document.getElementById("menu-toggle");

    menu.classList.toggle("active");
    menuToggle.classList.toggle("active");
});

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

const peopleCounter = document.getElementById('peopleCounter');
const projectsCounter = document.getElementById('projectsCounter');
const wasteCounter = document.getElementById('wasteCounter');

animateValue(peopleCounter, 0, 1000, 5000); // Change these numbers as needed
animateValue(projectsCounter, 0, 50, 5000); // Change these numbers as needed
animateValue(wasteCounter, 0, 2000, 5000); // Change these numbers as needed

