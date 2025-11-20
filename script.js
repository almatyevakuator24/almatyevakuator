const items = document.querySelectorAll('.services-list li');
const description = document.getElementById('description');
const contactBox = document.getElementById('contact-box');

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 50;
}

function checkAnimation() {
    items.forEach(item => {
        if (isInViewport(item)) item.classList.add('show');
    });
    if (isInViewport(description)) description.classList.add('show');
    if (isInViewport(contactBox)) contactBox.classList.add('show');
}

window.addEventListener('scroll', checkAnimation);
window.addEventListener('load', checkAnimation);

