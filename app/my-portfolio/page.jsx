import React from "react";

const page = () => {
  return (
    <div style={styles.container} id="portfolio">
      <header style={styles.header}>
        <h1 style={styles.heading}>Akarsh Kumar Mishra</h1>
        <p style={styles.subHeading}>Full-Stack Developer | Android Developer | Ethical Hacking Enthusiast</p>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>Projects</h2>
        <div style={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} style={styles.card}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>Skills</h2>
        <div style={styles.grid}>
          {skills.map((skill, index) => (
            <div key={index} style={styles.card}>{skill}</div>
          ))}
        </div>
      </section>

      <section style={styles.contactSection}>
        
        <div style={styles.socialLinks}>
          <p>Email: <a href="mailto:aakarshm826@gmail.com" style={styles.link}>aakarshm826@gmail.com</a></p>
          <p>Instagram: <a href="https://instagram.com/aakarshm826" target="_blank" style={styles.link}>@aakarshm826</a></p>
          <p>GitHub: <a href="https://github.com/gpmakm" target="_blank" style={styles.link}>github.com/gpmakm</a></p>
        </div>
      </section>

      <footer style={styles.footer}>
        <p>&copy; 2025 Akarsh Kumar Mishra. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Projects and Skills Data
const projects = [
  { title: "PALLAVI", description: "Chrome Extension for detecting phishing attacks using VirusTotal API." },
  { title: "College Campus AI Chatbot", description: "AI-powered chatbot built with Next.js and MongoDB." },
  { title: "SensorApp", description: "Android app to detect harmful noise & bright light, managing device settings." },
  { title: "VidyaSutram", description: "Next.js website linking to curated educational resources from Google Drive." },
  { title: "SAUMYA", description: "Assignment tracker for students, reducing paper use. Built with MERN stack." },
  { title: "Car Booking Website", description: "Responsive web app for booking rental cars." },
];

const skills = [
  "Next.js", "React.js", "Node.js", "MongoDB Atlas", "Express.js",
  "HTML / CSS / JavaScript", "Android Development (Java)", "Firebase", "Ethical Hacking (Beginner)"
];

// Styles
const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f4f4f4",
    color: "#333",
    textAlign: "center",
    paddingBottom: "3rem"
  },
  header: {
    background: "linear-gradient(to right, #6a11cb, #2575fc)",
    color: "white",
    padding: "3rem 1.5rem"
  },
  heading: {
    fontSize: "2.5rem"
  },
  subHeading: {
    fontSize: "1.2rem",
    marginTop: "1rem"
  },
  section: {
    padding: "3rem 1.5rem"
  },
  sectionHeading: {
    fontSize: "1.8rem",
    marginBottom: "1.5rem"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1rem"
  },
  card: {
    background: "white",
    padding: "1.5rem",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    transition: "transform 0.3s",
    cursor: "pointer"
  },
  contactSection: {
    padding: "3rem 1.5rem",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    maxWidth: "600px",
    margin: "auto"
  },
  input: {
    width: "100%",
    padding: "0.75rem",
    marginBottom: "1rem",
    border: "1px solid #ccc",
    borderRadius: "6px"
  },
  textarea: {
    width: "100%",
    padding: "0.75rem",
    border: "1px solid #ccc",
    borderRadius: "6px",
    marginBottom: "1rem"
  },
  button: {
    padding: "0.75rem 2rem",
    background: "#2575fc",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },
  buttonHover: {
    background: "#1e60d0"
  },
  socialLinks: {
    marginTop: "2rem"
  },
  link: {
    color: "#0056b3",
    backgroundColor:'#ffff',
    textDecoration: "none",
    fontWeight: "bold"
  },
  footer: {
    textAlign: "center",
    padding: "1.5rem",
    backgroundColor: "#222",
    color: "white",
    marginTop: "3rem"
  }
};

export default page;
