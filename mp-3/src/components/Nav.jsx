import { Link } from "react-router-dom";
import styled from "styled-components";

const NavWrapper = styled.nav`
  background-color: #222;
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 200px;
  min-height: 100vh;

  @media (max-width: 1000px) {
    width: calc(100% - 20px);
    height: auto;
    min-height: 50px;
    flex-direction: row;
    justify-content: center;
    padding: 5px 10px;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column; 

  @media (max-width: 1000px) {
    flex-direction: row; 
    justify-content: center; 
    flex-wrap: wrap; 
    max-width: 100vw; 
  }
`;



const NavItem = styled.li`
  padding: 8px 10px; 

  a {
    color: white;
    text-decoration: none;
    font-size: 16px; 
    font-weight: 500;
    display: block;
  }

  a:hover {
    color: #f0a500;
  }
`;



export default function Nav() {
  return (
    <NavWrapper>
      <NavList>
        <NavItem><Link to="/">Home</Link></NavItem>
        <NavItem><Link to="/about">About</Link></NavItem>
        <NavItem><Link to="/contact">Contact</Link></NavItem>
        <NavItem><Link to="/projects">My Projects</Link></NavItem>
        <NavItem><Link to="/experience">Experience</Link></NavItem>
        <NavItem><Link to="/skills">Skills</Link></NavItem>
        <NavItem><Link to="/education">Education</Link></NavItem>
      </NavList>
    </NavWrapper>
  );
}
