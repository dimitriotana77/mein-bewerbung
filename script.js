document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-links a");
  const content = document.getElementById("dynamicContent");

  const sectionTexts = {
    home: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`,
    about: `Ein Projekt startet und doch es gibt noch keinen Text, allerdings sollte das Layout schon bald 
präsentiert werden ... was tun? Damit das Projekt gleich starten kann benutze einfach etwas Lorem ipsum; 
Blind-, Füll-, Dummy-, Nachahmungs-, Platzhaltertext.`,
    projects: `Projects section will include personal and professional works like AI tools, 
front-end apps, or data visualizations.`,
    contact: `Contact Dimitri Otanadze via email dimitriotanadze@gmail.com or phone 0163 3647768.`
  };

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const section = this.getAttribute("data-section");
      content.innerHTML = `<p>${sectionTexts[section] || "Content not available."}</p>`;
    });
  });

  // Mobile menu toggle
  const menuIcon = document.getElementById("menuIcon");
  const navLinks = document.getElementById("navLinks");
  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
