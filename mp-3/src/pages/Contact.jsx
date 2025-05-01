import { useEffect } from "react";
import Main from "../components/Main";

function Contact() {
  useEffect(() => {
    document.title = "Contact | My Online Resume";
  }, []);

  return (
    <Main>
      <h2>Contact Me</h2>
      <p>
        I am always open to new opportunities and collaborations. Feel free to reach out to me 
        for work inquiries, technical discussions, or networking.
      </p>
      <p><strong>Email:</strong> jiaqing@bu.edu</p>
      <p><strong>Phone:</strong> (617) 879-8217</p>
      <p>
        You can also connect with me on professional platforms or follow my latest projects 
        on GitHub.
      </p>
    </Main>
  );
}

export default Contact;
