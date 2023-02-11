import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 5%;

  a {
    text-decoration: none;
  }
`;

export const Stuff = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  background: #e5e5e5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  color: #333;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 24px;
  font-weight: 600;
`;

export const Description = styled.p`
  margin-bottom: 12px;
`;

export const Me = styled.img`
  width: 200px;
  height: 200px;
`;

export const BadgeContainer = styled.div`
  width: 100%;
`;

export const Link = styled.a`
  color: #00da93;
  font-weight: 600;
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
  align-items: center;

  img {
    margin-right: 24px;
  }
`;

export const SocialMediaIcon = styled.img`
  height: 50px;
  width: 50px;
`;
