import { useEffect } from "react";
import Main from "../components/Main";

function About() {
  useEffect(() => {
    document.title = "About Me | My Online Resume";
  }, []);

  return (
    <Main>
      <h2>About Me</h2>
      <p>
        I am passionate about technology and enjoy exploring new advancements in software development. 
        From web technologies to AI, I am always eager to expand my knowledge and refine my skills.
      </p>
      <p>
        I thrive on solving problems and continuously learning. Whether it's understanding a new framework 
        or debugging a complex issue, I approach challenges with curiosity and determination.
      </p>
      <p>
        In addition to my technical interests, I value communication and teamwork. I enjoy working with 
        others, sharing ideas, and building meaningful connections through collaboration.
      </p>
    </Main>
  );
}

export default About;

