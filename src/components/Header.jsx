import styled from "styled-components";
import profilePhoto from "../assets/photo.jpg"; 

const HeaderWrapper = styled.header`
  background-color: #0077cc;
  color: white;
  text-align: center;
  padding: 40px 20px;
  width: calc(100% - 80px); 
  margin: 0 auto;

  @media (max-width: 1000px) {
    width: calc(100% - 80px); 
  }
`;

const Title = styled.h1`
  font-size: 32px; 
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 18px; 
  margin: 5px 0 0;
`;

const ProfileImage = styled.img`
  max-width: 150px; 
  height: 150px;
  border-radius: 50%;
  margin-top: 10px;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Title>Jiaqing Xu</Title>
      <Subtitle>My Online Resume</Subtitle>
      <ProfileImage src={profilePhoto} alt="Profile" />
    </HeaderWrapper>
  );
}
