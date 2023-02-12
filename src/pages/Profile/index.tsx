import * as S from "./styles";
import Me from "../../assets/me.svg";
import { Badge } from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Profile() {
  function calculateAge(day: string, month: string, year: string) {
    const date = new Date();
    const currentDay = date.getDate();
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();
    let age = currentYear - parseInt(year);
    if (currentMonth < parseInt(month)) {
      age--;
    } else if (currentMonth === parseInt(month)) {
      if (currentDay < parseInt(day)) {
        age--;
      }
    }
    return age;
  }
  return (
    <S.Stuff>
      <S.Wrapper>
        <S.Me src={Me}></S.Me>
        <S.Title>Hi, I'm Leticia</S.Title>
        <S.BadgeContainer>
          <Badge colorScheme="pink" margin={2}>
            Love pink stuffs
          </Badge>
          <Badge colorScheme="purple" margin={2}>
            Play LOL
          </Badge>
          <Badge colorScheme="pink" margin={2}>
            Just wear black cloths
          </Badge>
          <Badge colorScheme="purple" margin={2}>
            Bookstan
          </Badge>
        </S.BadgeContainer>
        <S.Bold>Coordinates:</S.Bold>
        <S.Description>Tocantins, Brazil</S.Description>
        <S.Bold>Level:</S.Bold>
        <S.Description>{calculateAge("20", "10", "1999")}</S.Description>
        <S.Bold>Ability: </S.Bold>
        <S.Description>Full-stack Developer</S.Description>
        <S.Bold>Spawn:</S.Bold>
        <S.Description>
          <S.Link href="https://ribon.io/">Ribon</S.Link>
        </S.Description>
        <S.Description>letbuenom@icloud.com (copy it)</S.Description>
        <S.SocialMedia>
          <S.ContainerIcon href="https://github.com/letbueno">
            <FontAwesomeIcon icon={["fab", "github"]} size="3x" />
          </S.ContainerIcon>
          <S.ContainerIcon href="https://www.linkedin.com/in/leticiabuenom/">
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" />
          </S.ContainerIcon>
          <S.ContainerIcon>
            <FontAwesomeIcon icon={["fab", "discord"]} size="3x" />
          </S.ContainerIcon>
          <S.ContainerIcon href="https://twitter.com/letbuenom">
            <FontAwesomeIcon icon={["fab", "twitter"]} size="3x" />
          </S.ContainerIcon>
          <S.ContainerIcon href="https://www.instagram.com/letbue.no/">
            <FontAwesomeIcon icon={["fab", "instagram"]} size="3x" />
          </S.ContainerIcon>
        </S.SocialMedia>
      </S.Wrapper>
    </S.Stuff>
  );
}
export default Profile;
