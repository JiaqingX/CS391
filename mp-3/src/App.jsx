import {
  createBrowserRouter,
  RouterProvider,
  useRoutes,
} from "react-router";
import styled from "styled-components";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Education from "./pages/Education";

const AppContainer = styled.div`
  display: flex; 
  flex-direction: column; 
  min-height: 100vh;`;

  const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100vw;
  margin: 0 20px; 

  @media (max-width: 1000px) {
    flex-direction: column; 
    width: 100vw;
    margin: 0 20px;
  }
`;



function Root() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/projects", element: <Projects /> },
    { path: "/experience", element: <Experience /> },
    { path: "/skills", element: <Skills /> },
    { path: "/education", element: <Education /> },
  ]);

  return (
    <AppContainer>
      <Header />
      <ContentWrapper>
        <Nav />
        <Main>{routes}</Main>
      </ContentWrapper>
      <Footer />
    </AppContainer>
  );
}

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
  return <RouterProvider router={router} />;
}
