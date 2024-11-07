// Accordion Functionality
const accordians = document.querySelectorAll('.accordian');

accordians.forEach(accordian => {
    const icon = accordian.querySelector('.icon');
    const answer = accordian.querySelector('.answer');

    accordian.addEventListener('click', () => {
        
        // Toggle active state
        accordian.classList.toggle('active');
        icon.classList.toggle('active');
        answer.classList.toggle('active');

        // Adjust max height for smooth animation
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });

    // Accessibility: Allow toggle with Enter key
    accordian.addEventListener('keypress', (e) => {
        if (e.key === "Enter") {
            accordian.click();
        }
    });
});

// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.classList.toggle('light');
});
