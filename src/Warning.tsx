import styled from "styled-components";
import WarningSvg from "./warning.svg";

interface Props {
  text: string;
}

export function Warning(props: Props) {
  return (
    <WarningWrapper>
      <WarningSymbol src={WarningSvg}></WarningSymbol>
      <p>{props.text}</p>
    </WarningWrapper>
  );
}

const WarningSymbol = styled.img``;

const WarningWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
