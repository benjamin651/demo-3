document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    // Form submission handling
    const quoteForm = document.querySelector('#quote form');
    if (quoteForm) {
        // Photo upload preview
        const photoInput = document.getElementById('photos');
        const photoPreview = document.getElementById('photo-preview');
        
        if (photoInput && photoPreview) {
            photoInput.addEventListener('change', function() {
                photoPreview.innerHTML = '';
                const files = this.files;
                
                if (files.length > 0) {
                    photoPreview.classList.remove('hidden');
                    
                    for (let i = 0; i < Math.min(files.length, 5); i++) {
                        const reader = new FileReader();
                        reader.onload = function(e) {
                            const img = document.createElement('img');
                            img.src = e.target.result;
                            img.classList.add('w-full', 'h-24', 'object-cover', 'rounded', 'border', 'border-gray-200');
                            photoPreview.appendChild(img);
                        }
                        reader.readAsDataURL(files[i]);
                    }
                } else {
                    photoPreview.classList.add('hidden');
                }
            });
        }
        
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // Here you would typically send the data to your server
            console.log('Form submitted:', data);
            
            // Show success message
            // Form submission handler
            function submitForm(form) {
                // Here you would typically send the data to your server
                const formData = new FormData(form);
                const data = {};
                formData.forEach((value, key) => {
                    data[key] = value;
                });
                console.log('Form submitted:', data);
                
                // Reset form
                form.reset();
                const photoPreview = document.getElementById('photo-preview');
                if (photoPreview) {
                    photoPreview.classList.add('hidden');
                    photoPreview.innerHTML = '';
                }
                
                // Allow form to submit and redirect to thank-you page
                return true;
            }
});
    }
// Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.fade-in, .slide-up');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state for animated elements
    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.opacity = '0';
    });
    
    document.querySelectorAll('.slide-up').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Run once on load
    animateOnScroll();
    
    // Then run on scroll
    window.addEventListener('scroll', animateOnScroll);
});