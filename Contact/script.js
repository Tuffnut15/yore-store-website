const CONTACT_EMAIL = "hello@examplewebsite142.com";

const mainNav = document.getElementById("mainNav");

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    const drawer = bootstrap.Offcanvas.getInstance(mainNav);
    if (drawer) {
      drawer.hide();
    }
  });
});

const contactForm = document.getElementById("contactForm");
const sentModalElement = document.getElementById("sentModal");
const sentModal = new bootstrap.Modal(sentModalElement);
const sentModalText = document.getElementById("sentModalText");
const reopenEmail = document.getElementById("reopenEmail");

const fields = Array.from(contactForm.querySelectorAll("input, textarea"));

fields.forEach((field) => {
  field.addEventListener("input", () => {
    if (field.checkValidity()) {
      field.classList.remove("is-invalid");
    }
  });
});

function createMailtoLink(name, email, subject, message) {
  const body =
    "Name: " + name +
    "\nEmail: " + email +
    "\n\nMessage:\n" + message;

  return (
    "mailto:" + CONTACT_EMAIL +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body)
  );
}

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let allValid = true;
  fields.forEach((field) => {
    const valid = field.checkValidity() && field.value.trim() !== "";
    field.classList.toggle("is-invalid", !valid);
    if (!valid) {
      allValid = false;
    }
  });

  if (!allValid) {
    contactForm.querySelector(".is-invalid").focus();
    return;
  }

  const name = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  const mailtoLink = createMailtoLink(name, email, subject, message);

  sentModalText.textContent =
    "Thanks, " + name + "! Your email app should open with your message ready. " +
    "Press send there to finish. If nothing opened, use the button below.";
  reopenEmail.href = mailtoLink;
  sentModal.show();
});

sentModalElement.addEventListener("hidden.bs.modal", () => {
  contactForm.reset();
  fields.forEach((field) => field.classList.remove("is-invalid"));
});
