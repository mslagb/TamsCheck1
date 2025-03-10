document.addEventListener("DOMContentLoaded", function() {
    console.log("Cart page loaded successfully!");

    // Function to select a date
    function selectDate(element) {
        document.querySelectorAll('.date').forEach(date => date.classList.remove('selected'));
        element.classList.add('selected');
    }

    // Function to select a time
    function selectTime(element) {
        document.querySelectorAll('.time').forEach(time => time.classList.remove('selected'));
        element.classList.add('selected');
    }

    // Function to proceed to checkout
    function proceedToCheckout() {
        let selectedDate = document.querySelector('.date.selected');
        let selectedTime = document.querySelector('.time.selected');

        if (!selectedDate || !selectedTime) {
            alert("Please select a date and time before proceeding.");
            return;
        }

        let date = selectedDate.textContent.trim();
        let time = selectedTime.textContent.trim();

        // Redirecting to another page (replace "checkout.html" with your actual checkout page)
        window.location.href = `checkout.html?date=${date}&time=${time}`;
    }

    // Making functions accessible globally
    window.selectDate = selectDate;
    window.selectTime = selectTime;
    window.proceedToCheckout = proceedToCheckout;
});