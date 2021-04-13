import { rem } from "polished";
import styled from "styled-components";
import { size } from "./ui/theme";
import WarningSvg from "./warning.svg";

interface Props {
  text: string;
}

export function Warning(props: Props) {
  return (
    <>
      {props.text === "" ? (
        ""
      ) : (
        <WarningWrapper>
          <WarningSymbol
            alt="Símbolo de warning"
            src={WarningSvg}
          ></WarningSymbol>
          <WarningText>{props.text}</WarningText>
        </WarningWrapper>
      )}
    </>
  );
}

const WarningSymbol = styled.img`
  margin-right: ${rem(size.tiny)};
`;

const WarningWrapper = styled.div`
  margin-bottom: ${rem(size.medium)};
  display: flex;
  flex-direction: row;
`;

const WarningText = styled.p``;
