// menu toggle
const hamburger = document.getElementById('hamburger');
const responsiveMenu = document.getElementById('responsiveMenu');

hamburger.addEventListener('click', () => {
    responsiveMenu.classList.toggle('open');
});

// responsive menu close when a link is clicked
responsiveMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        responsiveMenu.classList.remove('open');
    });

});

// skills section
const filterBtns = document.querySelectorAll('.filter-btn');
const skillCards = document.querySelectorAll('.skill-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.dataset.filter;
        
        // Filter skills
        skillCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });

});

// year in footer current year
document.getElementById('year').textContent = new Date().getFullYear();

// smooth scrolling for anchor links, 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});