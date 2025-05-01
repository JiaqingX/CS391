import { useEffect } from "react";
import Main from "../components/Main";
import Calculator from "../components/Calculator";

function Projects() {
  useEffect(() => {
    document.title = "My Projects | My Online Resume";
  }, []);

  return (
    <Main>
      <h2>My Projects</h2>
      <p>Here is a project I have worked on:</p>

      <h3>JavaScript Calculator</h3>
      <p>
        This is a simple JavaScript calculator built using React. It allows users to perform basic arithmetic operations, 
        including addition, subtraction, multiplication, and division. The calculator features a clean and responsive UI, 
        ensuring usability on both desktop and mobile devices.
      </p>
      <p>
        While developing this project, I gained experience in handling component state using React hooks and learned how to 
        manage user inputs efficiently. Additionally, I implemented interactive UI elements to enhance the user experience.
      </p>
      <p>
        This project helped strengthen my understanding of React fundamentals, including event handling, component-based architecture, 
        and state management.
      </p>

      <Calculator />
    </Main>
  );
}

export default Projects;
