let isEnglish = true;

function toggleLang() {
  isEnglish = !isEnglish;
  document.documentElement.lang = isEnglish ? "en" : "bn";

  document.querySelectorAll("[data-en]").forEach((el) => {
    el.innerText = isEnglish ? el.dataset.en : el.dataset.bn;
  });

  const searchBox = document.getElementById("searchBox");
  const langBtn = document.getElementById("langBtn");

  if (searchBox) {
    searchBox.placeholder = isEnglish
      ? "Search the website..."
      : "ওয়েবসাইটে খুঁজুন...";
  }

  if (langBtn) {
    langBtn.innerText = isEnglish ? "🌐 EN / বাংলা" : "🌐 বাংলা / EN";
  }
}
