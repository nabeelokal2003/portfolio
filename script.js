const contentMap = {
    home:        
        `<section class="home-hero">
            <h1>👋 Hi, I'm Nabeel Okal</h1>
            <p style="font-size: 45px">A passionate CS student building intelligent systems that connect AI, Robotics, and the Web.</p>

            <p style="margin-top: 15px; font-size: 25px">
              🚀 Exploring the intersection of <strong>hardware</strong> and <strong>software</strong> to create real-world tech solutions.
            </p>
          </section>
        `,

    about:`<div class="about-me">
        <h1>About Me</h1>
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
        </div>
      
`,

    projects:
       `<h1>🛠️ My Projects</h1>
    <div class="project">
    <h3>🤖 Obstacle Avoidance Robot</h3>
    <p>Built with Arduino, ultrasonic sensor, and C++. It detects and avoids obstacles autonomously.</p>
    <ul>
      <li>Arduino Uno + HC-SR04 ultrasonic module</li>
      <li>Motor driver + wheels for movement</li>
      <li>Written in C++</li>
    </ul>
  </div>
  
    <div class="project">
    <h3>💬 AI Chatbot using Transformers</h3>
    <p>A conversational chatbot built using Hugging Face Transformers and Python.</p>
    <ul>
      <li>Used pre-trained transformer models</li>
      <li>Handles multiple question types</li>
      <li>Built using Python and Flask</li>
    </ul>
  </div>

  <div class="project">
    <h3>🎮 Hangman Game (C++)</h3>
    <p>Terminal-based game developed in C++ with word guessing logic, lives counter, and input validation.</p>
  </div>
  
  `,

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

    cv:`
       <h1>📄 My Resume</h1>
       <h2>🎓 Education</h2>
        <ul>
          <li>
            <strong>German Jordanian University</strong> – B.Sc. in Computer Science<br>
            <em>Expected Graduation:</em> 2025
          </li>
        </ul>

         <h2>💼 Experience</h2>
        <ul>
          <li>
            <strong>Robotics/AI Intern</strong> – Assisted in building intelligent robotics systems with Arduino & Python.
          </li>
          <li>
            <strong>Freelance Developer</strong> – Developed websites and Python automation scripts.
          </li>
        </ul>

        <h2>🧠 Skills</h2>
        <ul>
          <li><strong>Languages:</strong> Python, C++, Java, JavaScript, PHP, Kotlin</li>
          <li><strong>AI/ML:</strong> TensorFlow, OpenCV, Scikit-learn, Transformers</li>
          <li><strong>Robotics:</strong> Arduino, ESP32, Sensors (Ultrasonic, Line Follower), Motor Drivers</li>
          <li><strong>Tools:</strong> Git & GitHub, VS Code, Android Studio</li>
          <li><strong>Web Dev:</strong> HTML, CSS, Bootstrap, JS, MySQL</li>
        </ul>
  
        <h2>📜 Certifications</h2>
          <ul>
            <li>Robotics & IoT <br><a href="Engineering.pdf" download class="IoT-download">
              Robotics & IoT certificate
              </a>
            </li><br>
            <li>Python Programming <br><a href="PythonCourseCertificate.pdf" download class="Py-download">
              Python Programming certificate
              </a>
            </li><br>
          </ul>

        <h2>📥 Download My CV</h2>
          <a href="naoCV.pdf" download class="cv-download">
            Download My CV
          </a>`,

    contact: `
  <div class="contact-content">
    <h1>📬 Contact Me</h1>
    <p>Feel free to reach out to me through any of the platforms below:</p>
    
    <ul class="contact-links">
      <li><strong>Email:</strong> <a href="mailto:nabeel.okal@gmail.com">nabeel.okal@gmail.com</a></li>
      <li><strong>GitHub:</strong> <a href="https://github.com/nabeelokal2003" target="_blank">github.com/nabeelokal2003</a></li>
      <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/nabeel-okal-914175282" target="_blank">linkedin.com/in/nabeel-okal</a></li>
      <li><strong>WhatsApp:</strong> <a href="https://wa.me/+962795311496" target="_blank">Chat on WhatsApp</a></li>
    </ul>
  </div>
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
