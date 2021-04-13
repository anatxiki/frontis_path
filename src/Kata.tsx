import { rem } from "polished";
import styled from "styled-components";
import CompletedIcon from "./completed-icon.svg";
import PendingIcon from "./pending-icon.svg";
import DoingIcon from "./doing-icon.svg";
import { colors, font, iconSize } from "./ui/theme";
import { KataDetails } from "./KataDetails";
import { useState } from "react";

const StateIconStyle = styled.img`
  color: ${colors.red};
  width: auto;
  height: ${rem(iconSize.mini)};
`;

const KataSummary = styled.a`
  ${font.base()}
`;

const KataWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
interface Props {
  title?: string;
  pairing?: string;
  state?: string;
  description?: string;
  repo?: string;
}

export function Kata(props: Props) {
  const stateIcon = () => {
    if (props.state === "Completado") {
      return CompletedIcon;
    }

    if (props.state === "En curso") {
      return DoingIcon;
    }

    return PendingIcon;
  };

  const [showKataDetails, setShowKataDetails] = useState(false);

  const displayDetails = () => {
    setShowKataDetails(!showKataDetails);
  };

  return (
    <KataWrapper>
      <KataSummary onClick={displayDetails}>
        {props.title} - {props.pairing}
      </KataSummary>
      <StateIconStyle alt="Estado completado" src={stateIcon()} />
      {showKataDetails ? (
        <KataDetails description={props.description} repo={props.repo} />
      ) : null}
    </KataWrapper>
  );
}
