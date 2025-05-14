document.addEventListener('DOMContentLoaded', function() {
    // Expandable cards
    const cards = document.querySelectorAll('.expandable-card');
    
    cards.forEach(card => {
        const header = card.querySelector('.card-header');
        
        header.addEventListener('click', () => {
            card.classList.toggle('active');
            
            // Update icon
            const icon = card.querySelector('.expand-icon i');
            if (card.classList.contains('active')) {
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            } else {
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            }
        });
    });
    
    // Tabs
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Show corresponding content (for a full implementation, you'd need to add tab content sections)
        });
    });
    
    // Launch options
    const options = document.querySelectorAll('.option-btn');
    
    options.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all options
            options.forEach(o => o.classList.remove('active'));
            
            // Add active class to clicked option
            option.classList.add('active');
        });
    });
});