function updateFooterText() {
  const footer = document.querySelector("#footer");
  if (footer) {
    footer.innerHTML = `© ${new Date().getFullYear()} Temi Lajumoke.`;
  }
}
function ready() {
  updateFooterText();
}

window.document.addEventListener("DOMContentLoaded", ready);
