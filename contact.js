// ============ EMAIL JS============

const contactForm = document.getElementById("contact-form"),
    contactMessage = document.getElementById("contact-message")


const sendEmail = (e) => {
    e.preventDefault()

    // / servicesid - templateid - form - publicKey

    emailjs.sendForm("service_0bfq94q", "template_3a9fji4", "#contact-form", "c8BA86NXPNLN2Vl1-")
        .then(() => {
            // show sent message
            contactMessage.textContent = "Message sent successfully ✔️"

            // remove message after five second 
            setTimeout(() => {
                contactMessage.textContent = ""
            }, 5000)

            // clesr input feilds

            contactForm.reset()
        }, () => {
            // show error message
            contactMessage.textContent = "Message not sent (service error) ❌"
        })
}

contactForm.addEventListener("submit", sendEmail)