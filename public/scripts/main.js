function updateFooterText() {
  const footer = document.querySelector("#footer");
  if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `© ${
      year === 2021 ? year : `2021-${year}`
    } Temi Lajumoke.`;
  }
}
function ready() {
  updateFooterText();
}

window.document.addEventListener("DOMContentLoaded", ready);
