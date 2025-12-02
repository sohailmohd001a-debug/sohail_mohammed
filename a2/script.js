/**
 * Helper function to display an error message next to a form field.
 */
function displayError(fieldId, message) {
    document.getElementById(`error-${fieldId}`).textContent = message;
}

/**
 * Helper function to clear all previously displayed error messages.
 */
function clearErrors() {
    document.querySelectorAll('.error-message').forEach(span => span.textContent = '');
}

/**
 * Validates the booking form data sequentially.
 * The function returns false and stops immediately upon finding the first error.
 */
function validateForm() {
    clearErrors();

    // 1. Full Name Validation (Required)
    const fullName = document.getElementById('fullName').value.trim();
    if (fullName === "") {
        displayError('fullName', 'Full Name is required.');
        return false;
    }

    // 2. Email Validation (Required and Format)
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        displayError('email', 'Email Address is required.');
        return false;
    }
    if (!emailPattern.test(email)) {
        displayError('email', 'Invalid email format.');
        return false;
    }

    // 3. Appointment Type Validation (Required)
    const appointmentType = document.getElementById('appointmentType').value;
    if (appointmentType === "") {
        displayError('appointmentType', 'Please select an appointment type.');
        return false;
    }

    // 4. Preferred Date Validation (Required and Future Date)
    const preferredDate = document.getElementById('preferredDate').value;
    const today = new Date().toISOString().split('T')[0];
    if (preferredDate === "") {
        displayError('preferredDate', 'Preferred Date is required.');
        return false;
    }
    if (preferredDate < today) {
        displayError('preferredDate', 'Date cannot be in the past.');
        return false;
    }

    // 5. Patient Type Validation (Radio Button - Required)
    const patientType = document.querySelector('input[name="patientType"]:checked');
    if (!patientType) {
        displayError('patientType', 'Please select patient type.');
        return false;
    }

    // If all checks pass:
    alert('Booking request submitted successfully! We will contact you soon to confirm.');
    return false; // Prevents actual form submission (for demonstration purposes)
}