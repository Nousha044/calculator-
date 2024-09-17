const display = document.getElementById('display');
        const buttons = Array.from(document.getElementsByClassName('btn'));
        let displayValue = '';

        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                const value = e.target.getAttribute('data-value');

                if (value === '=') {
                    try {
                        displayValue = eval(displayValue).toString();
                    } catch {
                        displayValue = 'Error';
                    }
                } else if (value === 'C') {
                    displayValue = '';
                } else {
                    displayValue += value;
                }

                display.innerText = displayValue;
            });
        });
        