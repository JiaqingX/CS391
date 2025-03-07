import { useEffect } from "react";
import Main from "../components/Main";

function Education() {
  useEffect(() => {
    document.title = "Education | My Online Resume";
  }, []);

  return (
    <Main>
      <h2>Education</h2>
      <p><strong>Bachelor's Degree in Computer Science</strong></p>
      <p>Boston University, Graduated 2025</p>
      
      <h3>Relevant Courses</h3>
      <p><strong>Web Development:</strong> Focused on building dynamic web applications using React, Django, and RESTful APIs.</p>
      <p><strong>Data Structures & Algorithms:</strong> Gained strong problem-solving skills and efficient coding practices.</p>
      <p><strong>Databases:</strong> Worked with SQL and NoSQL databases, learning how to design, query, and optimize data storage.</p>
      <p><strong>Artificial Intelligence:</strong> Explored machine learning models and data-driven AI solutions.</p>
      <p><strong>Operating Systems:</strong> Learned process management, file systems, and system security.</p>
    </Main>
  );
}

export default Education;
