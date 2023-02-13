import * as S from "./styles";
import Me from "../../assets/me.png";
import {
  Badge,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Profile() {
  function calculateAge() {
    const today = new Date();
    const ageInMilliseconds =
      today.getTime() - new Date("2000-02-23").getTime();
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24);
    return Math.floor(ageInYears / 365);
  }

  const [closePopover, setClosePopover] = useState(false);

  function copy() {
    setClosePopover(true);
    navigator.clipboard.writeText("letbuenom@icloud.com");

    setTimeout(() => {
      setClosePopover(false);
    }, 2000);
  }

  return (
    <S.Stuff>
      <S.Wrapper>
        <S.Me src={Me} alt="Credits by AlliMocha"></S.Me>
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
        <S.Bold>Spawn:</S.Bold>
        <S.Description>Tocantins, Brazil</S.Description>
        <S.Bold>Level:</S.Bold>
        <S.Description>{calculateAge()}</S.Description>
        <S.Bold>Ability: </S.Bold>
        <S.Description>
          <S.Typeing>Full-stack Developer</S.Typeing>
        </S.Description>
        <S.Bold>Class: </S.Bold>
        <S.Description>INTP-T</S.Description>
        <S.Bold>Main Quest:</S.Bold>
        <S.Description>
          <S.Link
            href="https://ribon.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ribon
          </S.Link>
        </S.Description>
        <Popover isOpen={closePopover}>
          <PopoverTrigger>
            <S.ContainerCopy>
              <S.Description>letbuenom@icloud.com</S.Description>
              {"("}
              <S.CopyLink onClick={copy}>copy it</S.CopyLink>
              {")"}
            </S.ContainerCopy>
          </PopoverTrigger>
          <PopoverContent
            width={100}
            fontSize="12px"
            marginTop={-3}
            fontFamily="PF Tempesta Seven Condensed"
          >
            <PopoverBody>Copy!</PopoverBody>
          </PopoverContent>
        </Popover>
        <S.SocialMedia>
          <S.ContainerIcon
            href="https://github.com/letbueno"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "github"]} size="3x" />
          </S.ContainerIcon>

          <S.ContainerIcon
            href="https://www.linkedin.com/in/leticiabuenom/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" />
          </S.ContainerIcon>

          <S.ContainerIcon
            href="https://www.discordapp.com/users/278265300271628289"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "discord"]} size="3x" />
          </S.ContainerIcon>

          <S.ContainerIcon
            href="https://twitter.com/letbuenom"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "twitter"]} size="3x" />
          </S.ContainerIcon>

          <S.ContainerIcon
            href="https://telegram.me/letbueno"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "telegram"]} size="3x" />
          </S.ContainerIcon>

          <S.ContainerIcon
            href="https://www.instagram.com/letbue.no/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "instagram"]} size="3x" />
          </S.ContainerIcon>
        </S.SocialMedia>
      </S.Wrapper>
    </S.Stuff>
  );
}
export default Profile;
