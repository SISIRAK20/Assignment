document.getElementById('create-counter').addEventListener('click', function() {
    const countersContainer = document.getElementById('counters-container');

    // Create a new counter element
    const counter = document.createElement('div');
    counter.classList.add('counter');

    // Create display area for the counter
    const counterDisplay = document.createElement('div');
    counterDisplay.classList.add('counter-display');
    counterDisplay.textContent = 0;

    // Create increment button
    const incrementButton = document.createElement('button');
    incrementButton.textContent = 'Increment';
    incrementButton.addEventListener('click', function() {
        counterDisplay.textContent = parseInt(counterDisplay.textContent) + 1;
    });

    // Append display and button to the counter element
    counter.appendChild(counterDisplay);
    counter.appendChild(incrementButton);

    // Append the counter element to the counters container
    countersContainer.appendChild(counter);
});
