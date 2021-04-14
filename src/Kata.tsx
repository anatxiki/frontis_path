import { rem } from "polished";
import styled from "styled-components";
import CompletedIcon from "./completed-icon.svg";
import PendingIcon from "./pending-icon.svg";
import DoingIcon from "./doing-icon.svg";
import { colors, font, iconSize, fontWeight, size } from "./ui/theme";
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
    <>
      {showKataDetails ? (
        <KataWrapperWithBorder>
          <KataResume>
            <KataSummary role="button" onClick={displayDetails}>
              Kata <Bold>{props.title}</Bold>
              {props.pairing === "" ? "" : " - " + props.pairing}
            </KataSummary>
            {props.state === "" ? null : (
              <StateIconStyle
                alt={"Estado " + props.state}
                src={stateIcon(props.state)}
              />
            )}
          </KataResume>
          <KataDetails
            pairing={props.pairing}
            state={props.state}
            description={props.description}
            repo={props.repo}
          />
        </KataWrapperWithBorder>
      ) : (
        <KataWrapper>
          <KataResume>
            <KataSummary role="button" onClick={displayDetails}>
              Kata <Bold>{props.title}</Bold>
              {props.pairing === "" ? "" : " - " + props.pairing}
            </KataSummary>
            {props.state === "" ? null : (
              <StateIconStyle
                alt={"Estado " + props.state}
                src={stateIcon(props.state)}
              />
            )}
          </KataResume>
        </KataWrapper>
      )}
    </>
  );
}

const StateIconStyle = styled.img`
  background-color: ${colors.white};
  z-index: 1000;
  padding: 0 ${rem(size.tiny)};
  color: ${colors.red};
  width: auto;
  height: ${rem(iconSize.mini)};
`;

const KataSummary = styled.a`
  padding-left: ${rem(size.tiny)};
  background-color: ${colors.white};
  z-index: 1000;
  ${font.base()}
`;

const Bold = styled.b`
  font-weight: ${fontWeight.bold};
`;

const KataResume = styled.div`
  padding-left: ${rem(size.xlarge + size.base)};
  margin-top: ${rem(-13)};
  align-items: center;
  display: flex;
  cursor: pointer;
`;

const KataWrapper = styled.div`
  margin-bottom: ${rem(size.base)};
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0.5rem;
    left: 3.5rem;
    border-top: ${rem(3)} solid ${colors.red};
    width: 3%;
  }
`;

const KataWrapperWithBorder = styled.div`
  margin-bottom: ${rem(size.base)};
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0.5rem;
    left: 0;
    width: 0;
    height: 0;
    background: transparent;
    border: ${rem(3)} solid transparent;
    animation: animate-border 0.3s linear forwards;
  }

  @keyframes animate-border {
    0% {
      width: 0;
      height: 0;
      border-top-color: ${colors.red};
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-left-color: transparent;
    }
    50% {
      width: 100%;
      height: 0;
      border-top-color: ${colors.red};
      border-right-color: ${colors.red};
      border-bottom-color: transparent;
      border-left-color: transparent;
    }
    100% {
      width: 100%;
      height: 100%;
      border-top-color: ${colors.red};
      border-right-color: ${colors.red};
      border-bottom-color: transparent;
      border-left-color: transparent;
    }
  }
  &:after {
    content: "";
    position: absolute;
    top: 0.5rem;
    left: 0;
    width: 0;
    height: 0;
    background: transparent;
    border: ${rem(3)} solid transparent;
    animation: animate-border-2 0.3s linear forwards;
  }

  @keyframes animate-border-2 {
    0% {
      width: 0;
      height: 0;
      border-top-color: transparent;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-left-color: ${colors.red};
    }
    50% {
      width: 0;
      height: 100%;
      border-top-color: transparent;
      border-right-color: transparent;
      border-bottom-color: ${colors.red};
      border-left-color: ${colors.red};
    }
    100% {
      width: 100%;
      height: 100%;
      border-top-color: transparent;
      border-right-color: transparent;
      border-bottom-color: ${colors.red};
      border-left-color: ${colors.red};
    }
  }
`;
