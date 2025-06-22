const contentMap = {
    home:        
        `<h1>Welcome to my Portfolio!</h1>
        <p>CS Student | AI, Mobile app dev, and Robotics Enthusiast</p>`,

    about:
        `<h1>About Me</h1>
        <p>I'm Nabeel, a CS student passionate about Machine Learning, AI, and Robotics</p>`,

    projects:
       `<h1>Projects</h1>
    <ul>
      <li>AI Chatbot using Transformers</li>
      <li>Obstacle Avoidance Robot (Arduino + Ultrasonic)</li>
      <li>Image Classification with Python + OpenCV</li>
    </ul>`,

    contact: `
        <h1>Contact Me</h1>
        <p>Email: <a href="nabeel.okal@gmail.com">nabeel.okal@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/nabeelokal2003">https://github.com/nabeelokal2003</a></p> 
        <p>LinkedIn: <a href="https://www.linkedin.com/in/nabeel-okal-914175282">https://www.linkedin.com/in/nabeel-okal-914175282</a></p>`
};

// Show default tab on load
document.addEventListener("DOMContentLoaded", () => {
  switchTab("home");
});

function switchTab(tabKey) {
  const contentDiv = document.getElementById("tab-content");
  contentDiv.innerHTML = contentMap[tabKey];
}
