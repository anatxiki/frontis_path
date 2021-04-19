import { rem } from "polished";
import styled from "styled-components";

import { size } from "../../../ui/theme";
import { Warning } from "./Warning";

interface Props {
  text?: string;
}

export function Description({ text }: Props) {
  return (
    <>
      {text === "" ? (
        <Warning text="Falta el enunciado de la Kata, ponte en contacto con el tutor para que te de más detalles." />
      ) : (
        <DescriptionWrapper>{text}</DescriptionWrapper>
      )}
    </>
  );
}

const DescriptionWrapper = styled.div`
  margin-bottom: ${rem(size.medium)};
`;
