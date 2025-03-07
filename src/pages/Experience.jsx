import { useEffect } from "react";
import Main from "../components/Main";

function Experience() {
  useEffect(() => {
    document.title = "Experience | My Online Resume";
  }, []);

  return (
    <Main>
      <h2>Work Experience</h2>
      <p><strong>Software Development Experience at CUMT</strong></p>
      <p>
        Developed and optimized software solutions, focusing on front-end development using React 
        and backend integration with Django.
      </p>
      <p>
        Gained extensive experience in PyTorch, working on machine learning projects involving 
        deep learning models and performance tuning.
      </p>
      <p>
        Specialized in debugging and troubleshooting, identifying and fixing critical issues in 
        both web applications and AI-based systems.
      </p>
      <p>
        Worked collaboratively in a development team, contributing to code reviews, feature 
        implementations, and software improvements.
      </p>
    </Main>
  );
}

export default Experience;
