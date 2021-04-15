import { rem } from "polished";
import styled from "styled-components";

import CompletedIcon from "../material/completed-icon.svg";
import PendingIcon from "../material/pending-icon.svg";
import DoingIcon from "../material/doing-icon.svg";
import { colors, font, iconSize, fontWeight, size } from "../ui/theme";
import { KataDetail } from "./KataDetail";
import { useState } from "react";
import { Kata } from "../domain/models/Kata";

interface Props {
  kata: Kata;
}

const isCompleted = (state?: string) => state === "Completado";
const isDoing = (state?: string) => state === "En curso";

const stepState = (state?: string) => {
  if (isCompleted(state)) {
    return CompletedIcon;
  }

  if (isDoing(state)) {
    return DoingIcon;
  }

  return PendingIcon;
};

export function KataStep({ kata }: Props) {
  const [showKataDetail, setShowKataDetail] = useState(false);

  const displayDetail = () => {
    setShowKataDetail(!showKataDetail);
  };

  return (
    <>
      {showKataDetail ? (
        <StepDetailDisplayedWrapper>
          <StepTitle>
            {/* DUPLICADO */}
            <KataSummary role="button" onClick={displayDetail}>
              Kata <Bold>{kata.title}</Bold>
              {kata.pairing !== "" && " - " + kata.pairing}
            </KataSummary>
            {kata.state !== "" && (
              <StepState
                alt={"Estado " + kata.state}
                src={stepState(kata.state)}
              />
            )}
          </StepTitle>
          <KataDetail kata={kata} />
        </StepDetailDisplayedWrapper>
      ) : (
        <StepWrapper>
          <StepTitle>
            {/* DUPLICADO*/}
            <KataSummary role="button" onClick={displayDetail}>
              Kata <Bold>{kata.title}</Bold>
              {kata.pairing !== "" && " - " + kata.pairing}
            </KataSummary>
            {kata.state !== "" && (
              <StepState
                alt={"Estado " + kata.state}
                src={stepState(kata.state)}
              />
            )}
          </StepTitle>
        </StepWrapper>
      )}
    </>
  );
}

const StepState = styled.img`
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

// DUPLICADO
const Bold = styled.b`
  font-weight: ${fontWeight.bold};
`;

const StepTitle = styled.div`
  padding-left: ${rem(size.xlarge + size.base)};
  margin-top: ${rem(-13)};
  align-items: center;
  display: flex;
  cursor: pointer;
`;

const StepWrapper = styled.div`
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

const StepDetailDisplayedWrapper = styled.div`
  margin-bottom: ${rem(size.medium)};
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
