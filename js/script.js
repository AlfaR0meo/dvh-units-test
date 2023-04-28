const buttons = document.querySelectorAll('.button');
const sections = document.querySelectorAll('section');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        sections.forEach(section => {
            section.style.height = button.dataset.dvh + 'dvh';
        })
    });
});


