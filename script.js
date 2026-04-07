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

// Search filter
const searchBox = document.getElementById("searchBox");

if (searchBox) {
  searchBox.addEventListener("input", function () {
    const input = this.value.toLowerCase().trim();
    const sections = document.querySelectorAll(".searchable");

    sections.forEach((section) => {
      const text = section.innerText.toLowerCase();
      if (text.includes(input) || input === "") {
        section.classList.remove("hidden-search");
      } else {
        section.classList.add("hidden-search");
      }
    });
  });
}
