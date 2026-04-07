let isEnglish = true;

function toggleLang() {
  isEnglish = !isEnglish;

  document.querySelectorAll("[data-en]").forEach(el => {
    el.innerText = isEnglish ? el.dataset.en : el.dataset.bn;
  });
}
