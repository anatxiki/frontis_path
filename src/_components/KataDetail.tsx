import styled from "styled-components";
import { Repo } from "./Repo";
import { Description } from "./Description";
import { Warning } from "./Warning";
import { size } from "../ui/theme";
import { rem } from "polished";
import { Kata } from "../domain/models/Kata";

interface Props {
  kata: Kata;
}

export function KataDetail({ kata }: Props) {
  return (
    <KataDetailWrapper>
      <Description description={kata.description} />
      {kata.pairing === "" && (
        <Warning
          text={
            "Falta el acompañamiento de la Kata, ponte en contacto con el tutor para que te de más detalles."
          }
        />
      )}
      {kata.state === "" && (
        <Warning
          text={
            "Falta el estado del paso, ponte en contacto con el tutor para que te de más detalles."
          }
        />
      )}
      <Repo repo={kata.repo} />
    </KataDetailWrapper>
  );
}

const KataDetailWrapper = styled.div`
  padding: ${rem(size.medium)};

  display: flex;
  flex-direction: column;
`;
