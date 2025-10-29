document.querySelector(".contact-form").addEventListener("submit", async function(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: { 'Accept': 'application/json' }
  });
  if (response.ok) {
    alert("✅ Message sent successfully! We'll get back to you soon.");
    form.reset();
  } else {
    alert("❌ Oops! Something went wrong. Please try again.");
  }
});
