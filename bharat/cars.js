document.addEventListener('DOMContentLoaded', function () {
    const rangeInput = document.querySelector('.slider input[type="range"]');
    const rangeValue = document.getElementById('rangeValue');

    function formatIndianNumber(number) {
        return new Intl.NumberFormat('en-IN').format(number);
    }

    function updateSliderValue(value) {
        rangeValue.innerText = formatIndianNumber(value);

        // Show/hide the '+' sign based on the slider value
        if (value > 0) {
            rangeValue.innerText += '+';
        }
    }

    rangeInput.addEventListener('input', function () {
        updateSliderValue(this.value);
    });

    // Initialize the value
    updateSliderValue(rangeInput.value);
});



