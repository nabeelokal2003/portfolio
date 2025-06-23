const contentMap = {
    home:        
        `<h1>Welcome to my Portfolio!</h1>
        <p>I love building intelligent systems, experimenting with Arduino robots, and developing sleek mobile apps. I enjoy <br> merging software and hardware to solve real-world problems.</p>`,

    about:
        `<h1>About Me</h1>
          <p>Hello! I'm <strong>Nabeel Okal</strong>, a Computer Science student with a deep passion for building intelligent systems that combine <em>software and hardware</em>.</p>

          <p>From writing my first Python script to programming Arduino-powered robots, I’ve always been driven by curiosity and creativity. I love solving <br>real-world problems with code, whether it's developing machine learning models or crafting sleek Android apps.</p>

          <h2>What I’m Passionate About:</h2>
          <ul>
            <li>🤖 Robotics: Building autonomous systems using Arduino, ESP32, and sensors</li>
            <li>🧠 AI & Machine Learning: Exploring algorithms with Python and TensorFlow</li>
            <li>📱 Mobile Development: Creating Android apps with Kotlin</li>
            <li>🌐 Web Technologies: Developing responsive and interactive websites</li>
          </ul>

          <h2>My Mission:</h2>
          <p>To build intelligent, interactive, and impactful tech — and one day, contribute to developing humanoid robots that can assist, learn, and adapt in the real world.</p>
`,

    projects:
       `<h1>Projects</h1>
    <ul>
      <li>AI Chatbot using Transformers</li>
      <li>Obstacle Avoidance Robot (Arduino + Ultrasonic)</li>
      <li>Image Classification with Python + OpenCV</li>
    </ul>`,

    skills: `
    <h1>My Skills</h1>

<h2>Programming Languages</h2>
<ul>
  <li>Python 🐍 — Machine Learning, Automation, Scripting</li>
  <li>C / C++ ⚙️ — Embedded systems, Performance-critical applications</li>
  <li>Java ☕ — OOP, GUI, and Visual Programming</li>
  <li>Kotlin 📱 — Android Mobile App Development</li>
  <li>JavaScript 🌐 — Frontend Interactivity</li>
  <li>HTML / CSS 🎨 — Web Page Structure & Styling</li>
  <li>PHP & MySQL 🧩 — Backend Web Development & Databases</li>
</ul>

<h2>AI & Machine Learning</h2>
<ul>
  <li>Scikit-learn — Classification, Regression, Model Training</li>
  <li>TensorFlow — Neural Networks, Deep Learning (Basics)</li>
  <li>OpenCV — Image Processing & Computer Vision</li>
</ul>

<h2>Robotics & IoT</h2>
<ul>
  <li>Arduino Uno / Nano / Mega — Sensors, Actuators, Basic Robots</li>
  <li>ESP32 — IoT Development & Wireless Communication</li>
  <li>Raspberry Pi 5 — Mini Computer & Hardware Integration</li>
  <li>Bluetooth / Ultrasonic Sensors — Real-time obstacle detection & control</li>
</ul>

<h2>Tools & Platforms</h2>
<ul>
  <li>Linux (Ubuntu) 🐧 — Shell, Git, Arduino IDE</li>
  <li>Git & GitHub — Version Control & Collaboration</li>
  <li>VS Code / IntelliJ / Android Studio — Daily dev environments</li>
  <li>XAMPP / phpMyAdmin — Web Server and MySQL GUI</li>
</ul>

<h2>Soft Skills</h2>
<ul>
  <li>Problem Solving & Debugging</li>
  <li>Self-Learning & Research</li>
  <li>Project-Based Thinking</li>
  <li>Creativity & Technical Curiosity</li>
</ul>
    `,

    cv:
    `<a href="naoCV.pdf" download class="cv-download">
    Download My CV
    </a>`,
    contact: `
    <h1>Contact Me</h1>
        <p>Email: <a href="nabeel.okal@gmail.com">nabeel.okal@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/nabeelokal2003">https://github.com/nabeelokal2003</a></p> 
        <p>LinkedIn: <a href="https://www.linkedin.com/in/nabeel-okal-914175282">https://www.linkedin.com/in/nabeel-okal-914175282</a></p>
    `
};

// Show default tab on load
document.addEventListener("DOMContentLoaded", () => {
  switchTab("home");
});

function switchTab(tabKey) {
  const contentDiv = document.getElementById("tab-content");

  // Adding exit animation
  contentDiv.classList.remove("fade-in");
  contentDiv.classList.add("fade-out"); 

  setTimeout(() => {
    // changing the content of the page with the newer one
    contentDiv.innerHTML = contentMap[tabKey];

    // Switching to fade-in animation
    contentDiv.classList.remove("fade-out");
    contentDiv.classList.add("fade-in"); 
  }, 300);
}
