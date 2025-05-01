import styled from "styled-components";

const MainWrapper = styled.main`
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
  width: calc(100% - 80px); 
  margin: 0 auto;

  @media (max-width: 1000px) {
    width: calc(100% - 40px);
    margin: 0 auto;
    
  }
`;



export default function Main({ children }) {
  return <MainWrapper>{children}</MainWrapper>;
}
