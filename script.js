document.addEventListener("DOMContentLoaded", function () {
    let scrollButton = document.getElementById("back-to-top");

    // Ensure the button exists before adding event listeners
    if (scrollButton) {
        // Show/hide button based on scroll position
        window.addEventListener("scroll", function () {
            let scrollDistance = window.scrollY || document.documentElement.scrollTop;

            if (scrollDistance > 300) {
                scrollButton.style.display = "block"; // Show button
            } else {
                scrollButton.style.display = "none"; // Hide button
            }
        });

        // Scroll to top when the button is clicked
        scrollButton.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Typing effect function
    function typeEffect(element, text, speed = 50, showCursor = false, callback = null) {
        let i = 0;
        
        // Clear the element first if it has content
        element.textContent = '';
        
        // Start typing
        const typingInterval = setInterval(function() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typingInterval);
                
                // Add cursor blink after typing is complete, only if showCursor is true
                if (showCursor) {
                    element.classList.add('typing-done');
                }
                
                // Call the callback function if provided
                if (callback && typeof callback === 'function') {
                    callback();
                }
            }
        }, speed);
    }
    
    // Get the elements where typing will occur
    const titleElement = document.getElementById('typing-title');
    const introText = document.getElementById('intro-text');
    
    // Only run if the elements exist
    if (titleElement && introText) {
        const titleText = titleElement.textContent;
        const introTextContent = introText.textContent;
        
        // Hide the intro text initially
        introText.textContent = '';
        
        // First type the title (no cursor)
        typeEffect(titleElement, titleText, 60, false, function() {
            // Then type the intro text after the title is done (with cursor)
            setTimeout(function() {
                typeEffect(introText, introTextContent, 50, true);
            }, 400); // Small pause between title and intro typing
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Get all skill boxes
    const skillBoxes = document.querySelectorAll('.skill-box');
    
    // Set up the observer
    const skillsObserver = new IntersectionObserver((entries) => {
        // If skills section is visible
        if (entries[0].isIntersecting) {
            // Animate each skill box with a delay
            skillBoxes.forEach((box, index) => {
                setTimeout(() => {
                    box.classList.add('animate');
                }, 100 * index); // 100ms delay between each skill
            });
            
            // Disconnect the observer after animation runs once
            skillsObserver.disconnect();
        }
    }, { threshold: 0.2 }); // Trigger when 20% of skills section is visible
    
    // Start observing the skills section
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }
});