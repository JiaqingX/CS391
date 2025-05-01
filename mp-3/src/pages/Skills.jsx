import { useEffect } from "react";
import Main from "../components/Main";

function Skills() {
  useEffect(() => {
    document.title = "Skills | My Online Resume";
  }, []);

  return (
    <Main>
      <h2>Skills</h2>
      <p><strong>Programming Languages:</strong> Proficient in JavaScript, Python, and Java.</p>
      <p><strong>Frontend Development:</strong> Extensive experience with React, HTML, CSS, and Styled Components.</p>
      <p><strong>Backend Development:</strong> Skilled in Node.js, Django, and Express for building scalable APIs.</p>
      <p><strong>Databases:</strong> Experience with SQL-based databases like MySQL and PostgreSQL, as well as NoSQL databases like MongoDB.</p>
      <p><strong>Debugging & Problem-Solving:</strong> Strong analytical skills for identifying and fixing software issues efficiently.</p>
      <p><strong>Machine Learning:</strong> Familiar with PyTorch and TensorFlow for building AI models.</p>
      <p><strong>Version Control:</strong> Experienced with Git and GitHub for collaboration and source code management.</p>
      <p><strong>Collaboration:</strong> Effective team player with strong communication skills, experienced in Agile development.</p>
    </Main>
  );
}

export default Skills;
