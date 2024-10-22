const input = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let currentInput = '';  // Stores the current input value

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            // Clear input
            currentInput = '';
            input.value = '';
        } else if (value === '=') {
            try {
                // Evaluate the expression
                currentInput = eval(currentInput).toString();
                input.value = currentInput;
            } catch {
                input.value = 'Error';  // Handle invalid expression
                currentInput = '';
            }
        } else {
            // Append value to the input
            currentInput += value;
            input.value = currentInput;
        }
    });
});

// Handle keyboard input
document.addEventListener('keydown', (e) => {
    const validKeys = '1234567890+-/*.'.split('');
    const key = e.key;

    if (validKeys.includes(key)) {
        currentInput += key; // Update currentInput with keyboard input
        input.value = currentInput; // Update display with keyboard input
    }

    if (key === 'Enter') {
        try {
            // Calculate the result and display it
            currentInput = eval(currentInput).toString();
            input.value = currentInput,-1;
        } catch {
            input.value = 'Error';  // Handle invalid expression
            currentInput = '';
        }
    }

    if (key === 'Backspace') {
        // Remove last character from currentInput and update display
        currentInput = currentInput.slice(0, -1);
        input.value = currentInput;
    }
});
