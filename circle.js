// Function to initialize all progress bars
function initProgressBars() {
    // Select all elements with the class 'progress-item'
    let progressItems = document.querySelectorAll('.progress-item');

    // Loop through each element and create a circular progress bar
    progressItems.forEach(function(item) {
        // Get the percentage and color from the data attributes
        let percentage = item.getAttribute('data-percentage') / 100;
        let color = item.getAttribute('data-color');

        // Get the progress-circle div inside this item
        let progressCircle = item.querySelector('.progress-circle');

        // Initialize the ProgressBar.Circle instance
        let bar = new ProgressBar.Circle(progressCircle, {
            color: color || '#000', // Default color if not specified
            strokeWidth: 10,
            duration: 2000,
            easing: 'easeInOut',
            from: { color: '#f00', width: 1 },
            to: { color: color || '#0f0', width: 10 },
            // Update the text inside the progress bar
            step: function(state, circle) {
                let value = Math.round(circle.value() * 100);
                item.querySelector('.progress-text').textContent = value + '%';
            }
        });

        // Animate to the given percentage
        bar.animate(percentage);
    });
}

// Call the function to initialize the progress bars
initProgressBars();
