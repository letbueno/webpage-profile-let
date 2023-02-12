import { Box } from "@chakra-ui/react";
import styled, { css } from "styled-components";

export const PixelFont = css`
  font-family: "PF Tempesta Seven Condensed", sans-serif;
  font-family: "PF Tempesta Seven", sans-serif;
`;
export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 50%;

  a {
    text-decoration: none;
  }
`;

export const Stuff = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 60%;
  background: #e5e5e5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  border: 3px dashed #9795ef;
  align-items: center;
  padding: 5%;
  text-align: center;
`;

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #333;
`;

export const Title = styled.h1`
  ${PixelFont}
  font-size: 24px;
  font-weight: 600;
  margin-top: 24px;
  font-weight: 700;
`;

export const Description = styled.p`
  ${PixelFont}
  margin-bottom: 12px;
  font-size: 12px;
  font-weight: 400;
`;

export const Me = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 3px dashed #9795ef;
  margin-top: -25%;
  background: #fff;
`;

export const BadgeContainer = styled.div`
  margin: 24px 0;
`;

export const Link = styled.a`
  color: #00da93;
  font-weight: 600;
  font-size: 14px;
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 24px 0;
  align-items: center;
  width: 100%;
`;

export const Bold = styled.p`
  ${PixelFont}
  margin-bottom: 6px;
  font-size: 12px;
  font-weight: 700;
`;
export const SocialMediaIcon = styled.img`
  height: 40px;
  width: 40px;
`;

export const TypeingContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Typeing = styled.p`
  overflow: hidden;
  white-space: nowrap;
  width: 30em;
  animation: typing 3s steps(30, end) infinite,
    blink-caret 0.5s step-end infinite;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 30em;
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: black;
    }
  }
`;

export const ContainerIcon = styled.a`
  margin-right: 24px;
  cursor: pointer;
`;
