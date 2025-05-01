import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: #111;
  color: white;
  text-align: center;
  padding: 10px 20px;
  width: calc(100% - 80px); 
  margin: 0 auto; 

  @media (max-width: 1000px) {
    width: calc(100% - 80px); 
    margin: 0 20px;
  }
`;


export default function Footer() {
  return <FooterWrapper>2025 Jiaqing Xu Resume</FooterWrapper>;
}
