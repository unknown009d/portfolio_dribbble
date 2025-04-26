document.getElementById("frmSearch").addEventListener("submit", (e) => {
  e.preventDefault();
});

// Functionality of tabs
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

const showTabContent = () => {
  const hash = window.location.hash || "#work";

  contents.forEach((content) => {
    content.classList.remove("active");
    if ("#" + content.id == hash) {
      content.classList.add("active");
    }
  });
  tabs.forEach((tab) => {
    tab.classList.remove("active");
    console.log(tab.id)
    if (tab.id == hash.replace("#", "")) {
      tab.classList.add("active");
    }
  });
}

window.addEventListener("load", showTabContent);
window.addEventListener("hashchange", showTabContent);