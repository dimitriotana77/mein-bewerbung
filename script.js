document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-links a");
  const content = document.getElementById("dynamicContent");

  const sectionTexts = {
    home: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor...`,
    about: `
<section class="about-section">
  <h2>Why hire me?</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

  <div class="about-buttons">
    <button class="btn-active">Experience</button>
    <button>Education</button>
    <button>Skills</button>
    <button>About me</button>
  </div>

  <h2>My Experience</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

  <div class="experience-grid">
    <div class="card">
      <h3>2022 - Present</h3>
      <strong>Full Stack Developer</strong>
      <p>Tech Solutions Inc.</p>
    </div>
    <div class="card">
      <h3>Summer 2021</h3>
      <strong>Front-End Developer Intern</strong>
      <p>Web Design Studio</p>
    </div>
    <div class="card">
      <h3>2020 - 2021</h3>
      <strong>Freelance Web Developer</strong>
      <p>E-commerce Startup</p>
    </div>
    <div class="card">
      <h3>2019 - 2020</h3>
      <strong>Teaching Assistant</strong>
      <p>Tech Academy</p>
    </div>
  </div>
</section>
`,
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
      content.innerHTML = sectionTexts[section] || "<p>Content not available.</p>";

      navLinks.classList.remove("active");

      links.forEach(l => l.classList.remove("active-link"));
      this.classList.add("active-link");
    });
  });
});
