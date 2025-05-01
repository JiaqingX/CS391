import { useEffect } from "react";
import Main from "../components/Main";

function Home() {
  useEffect(() => {
    document.title = "Home | My Online Resume";
  }, []);

  return (
    <Main>
      <h2>Welcome to My Resume Website</h2>
      <p>
        Hello! My name is Jiaqing Xu, and I am a passionate software developer with experience in both frontend and backend technologies.
        This website serves as my online resume, where you can learn more about my skills, experiences, and projects.
      </p>
      <h3>About Me</h3>
      <p>
        I have a strong background in web development, particularly in React.js and Django. I have worked on multiple projects involving UI/UX design,
        API development, and database optimization. My expertise also extends to debugging complex systems and improving software performance.
      </p>
      <h3>Technical Skills</h3>
      <ul>
        <li>Frontend: React.js, HTML, CSS, JavaScript</li>
        <li>Backend: Django, Node.js, Express</li>
        <li>Database: PostgreSQL, MySQL</li>
        <li>Tools: Git, Docker, Linux</li>
        <li>Machine Learning: PyTorch, TensorFlow</li>
      </ul>
      <h3>Work Experience</h3>
      <p>
        At CUMT, I was actively involved in software development projects, where I worked as part of a team to create scalable web applications.
        My responsibilities included writing clean and efficient code, debugging issues, and collaborating with teammates to deliver high-quality software solutions.
      </p>
      <p>
        Additionally, I have significant experience working with PyTorch for deep learning applications, as well as developing interactive and responsive user interfaces.
        I am always eager to learn new technologies and take on challenging projects.
      </p>
    </Main>
  );
  
}

export default Home;
