document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-links a");
  const content = document.getElementById("dynamicContent");

  const sectionTexts = {
    home: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor...`,
    about: `Ein Projekt startet und doch es gibt noch keinen Text...`,
    projects: `Projects section will include personal and professional works like AI tools...`,
    contact: `Contact Dimitri Otanadze via email dimitriotanadze@gmail.com or phone 0163 3647768.`
  };

  const menuIcon = document.getElementById("menuIcon");
  const navLinks = document.getElementById("navLinks");

  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const section = this.getAttribute("data-section");
      content.innerHTML = `<p>${sectionTexts[section] || "Content not available."}</p>`;

      navLinks.classList.remove("active");

      links.forEach(l => l.classList.remove("active-link"));
      this.classList.add("active-link");
    });
  });
});
