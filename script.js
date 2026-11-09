
/* =================================
   EMAIL VALIDATION FUNCTION
================================= */

export function isValidEmail(email) {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

}


/* =================================
   CONTACT FORM VALIDATION
================================= */

export function validateContactForm(name, email, message) {

    return (
        typeof name === "string" &&
        name.trim().length > 0 &&

        typeof email === "string" &&
        isValidEmail(email.trim()) &&

        typeof message === "string" &&
        message.trim().length >= 10
    );

}


/* =================================
   CONTACT FORM FUNCTIONALITY
================================= */

const contactForm =
    typeof document !== "undefined"
        ? document.getElementById("contactForm")
        : null;


if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;

        const email = document.getElementById("email").value;

        const message = document.getElementById("message").value;

        const status = document.getElementById("formStatus");


        if (validateContactForm(name, email, message)) {

            status.textContent =
                "Validation successful! Your message is ready.";

            contactForm.reset();

        } else {

            status.textContent =
                "Please enter valid details and a message of at least 10 characters.";

        }

    });

}
