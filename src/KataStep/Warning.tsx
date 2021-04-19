import { rem } from "polished";
import styled from "styled-components";
import { size } from "../ui/theme";
import WarningSvg from "../material/warning.svg";

interface Props {
  text: string;
}

export function Warning({ text }: Props) {
  return (
    <>
      {text !== "" && (
        <WarningWrapper>
          <WarningIcon alt="Símbolo de warning" src={WarningSvg} />
          <WarningText>{text}</WarningText>
        </WarningWrapper>
      )}
    </>
  );
}

const WarningIcon = styled.img`
  margin-right: ${rem(size.tiny)};
`;

const WarningWrapper = styled.div`
  margin-bottom: ${rem(size.medium)};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const WarningText = styled.p`
  display: flex;
  align-items: center;
  height: ${rem(24)};
`;
