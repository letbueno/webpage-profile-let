import * as S from "./styles";
import Me from "../../assets/me.svg";
import { Badge } from "@chakra-ui/react";
import Twitter from "../../assets/twitter.svg";
import Github from "../../assets/github.svg";
import Linkedin from "../../assets/linkedin.svg";
import Instagram from "../../assets/instagram.svg";
import Discord from "../../assets/discord.svg";

function Profile() {
  return (
    <S.Stuff>
      <S.Wrapper>
        <S.Container>
          <S.Title>Hi, I'm Leticia</S.Title>
          <S.Description>I'm brazilian, 22 years</S.Description>
          <S.Description>I'm Full-stack Developer</S.Description>
          <S.Description>
            I'm work at <S.Link href="https://ribon.io/">Ribon</S.Link>
          </S.Description>
          <S.Description>I'm graduate in Software Engineer</S.Description>
          <S.Description>I'm learn new things everday</S.Description>
        </S.Container>
        <S.Container>
          <S.Me src={Me}></S.Me>
          <S.BadgeContainer>
            <Badge colorScheme="pink" margin={2}>
              Love pink stuffs
            </Badge>
            <Badge colorScheme="blue" margin={2}>
              Play LOL
            </Badge>
            <Badge colorScheme="purple" margin={2}>
              Just wear black cloths
            </Badge>
          </S.BadgeContainer>
        </S.Container>
      </S.Wrapper>
      <S.SocialMedia>
        <S.SocialMediaIcon src={Github} />
        <S.SocialMediaIcon src={Linkedin} />
        <S.SocialMediaIcon src={Discord} />
        <S.SocialMediaIcon src={Twitter} />
        <S.SocialMediaIcon src={Instagram} />
      </S.SocialMedia>
    </S.Stuff>
  );
}
export default Profile;
