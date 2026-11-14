// Freelancer Jakaria portfolio — edit the settings below to personalize the site.
const SITE_SETTINGS = {
  // Paste your Formspree endpoint here after creating a form, e.g. https://formspree.io/f/abcdwxyz
  formEndpoint: "",
  // Add your LinkedIn profile URL here.
  linkedin: ""
};

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Activate LinkedIn only after adding a real profile URL.
const linkedInLink = document.querySelector(".edit-link");
if (SITE_SETTINGS.linkedin) {
  linkedInLink.href = SITE_SETTINGS.linkedin;
  linkedInLink.target = "_blank";
  linkedInLink.rel = "noopener";
  linkedInLink.querySelector("span").textContent = "↗";
} else {
  linkedInLink.addEventListener("click", event => {
    event.preventDefault();
    alert("Add your LinkedIn profile URL in script.js → SITE_SETTINGS.linkedin");
  });
}

// Contact form: Formspree sends submissions to your inbox. Without an endpoint,
// use the email fallback and manually send the pre-filled message.
const form = document.getElementById("contactForm");
const hint = document.getElementById("formHint");
form.addEventListener("submit", async event => {
  event.preventDefault();
  const data = new FormData(form);
  const message = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nService: ${data.get("service")}\n\nProject details:\n${data.get("message")}`;
  if (!SITE_SETTINGS.formEndpoint) {
    hint.textContent = "Opening your email app. To receive messages automatically, add your Formspree endpoint in script.js.";
    const subject = encodeURIComponent("New project inquiry — Freelancer Jakaria");
    window.location.href = `mailto:mdjakariaislam23062006@gmail.com?subject=${subject}&body=${encodeURIComponent(message)}`;
    return;
  }
  const button = form.querySelector("button");
  button.disabled = true;
  button.innerHTML = "Sending…";
  try {
    const response = await fetch(SITE_SETTINGS.formEndpoint, {
      method: "POST",
      body: data,
      headers: { "Accept": "application/json" }
    });
    if (!response.ok) throw new Error("Message could not be sent.");
    form.reset();
    hint.textContent = "Thank you! Your message has been sent successfully.";
  } catch (error) {
    hint.textContent = "Sorry, the message could not be sent. Please email me directly.";
  } finally {
    button.disabled = false;
    button.innerHTML = 'Send message <span>↗</span>';
  }
});
