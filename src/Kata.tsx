import { rem } from "polished";
import styled from "styled-components";
import CompletedIcon from "./completed-icon.svg";
import PendingIcon from "./pending-icon.svg";
import DoingIcon from "./doing-icon.svg";
import { colors, font, iconSize } from "./ui/theme";
import { KataDetails } from "./KataDetails";
import { useState } from "react";
interface Props {
  title?: string;
  pairing?: string;
  state?: string;
  description?: string;
  repo?: string;
}

const isCompleted = (state?: string) => state === "Completado";
const isDoing = (state?: string) => state === "En curso";

const stateIcon = (state?: string) => {
  if (isCompleted(state)) {
    return CompletedIcon;
  }

  if (isDoing(state)) {
    return DoingIcon;
  }

  return PendingIcon;
};

export function Kata(props: Props) {
  const [showKataDetails, setShowKataDetails] = useState(false);

  const displayDetails = () => {
    setShowKataDetails(!showKataDetails);
  };

  return (
    <KataWrapper>
      <KataSummary onClick={displayDetails}>
        {props.title} {props.pairing === "" ? "" : " - " + props.pairing}
      </KataSummary>
      <StateIconStyle
        alt={"Estado " + props.state}
        src={stateIcon(props.state)}
      />
      {showKataDetails ? (
        <KataDetails
          pairing={props.pairing}
          description={props.description}
          repo={props.repo}
        />
      ) : null}
    </KataWrapper>
  );
}

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
