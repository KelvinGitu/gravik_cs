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

animateValue(peopleCounter, 0, 1000, 5000); 
animateValue(projectsCounter, 0, 50, 5000);
animateValue(wasteCounter, 0, 2000, 5000);

function typeEffect(element, speed) {
    let text = element.innerHTML;
    element.innerHTML = "";
    
    let i = 0;
    function typing() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, speed);
      }
    }
    setTimeout(typing, speed);
  }
  
  
  document.addEventListener('DOMContentLoaded', () => {
    const paragraphs = document.querySelectorAll('.about-section .text p');
    paragraphs.forEach(p => typeEffect(p, 50));
  });
  