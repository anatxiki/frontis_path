import styled from "styled-components";
import { Repo } from "./Repo";
import { Description } from "./Description";
import { Warning } from "./Warning";
import { size } from "../ui/theme";
import { rem } from "polished";

interface Props {
  description?: string;
  repo?: string;
  pairing?: string;
  state?: string;
}

export function KataDetail({ pairing, state, repo, description }: Props) {
  return (
    <KataDetailWrapper>
      <Description description={description} />
      {pairing === "" && (
        <Warning
          text={
            "Falta el acompañamiento de la Kata, ponte en contacto con el tutor para que te de más detalles."
          }
        />
      )}
      {state === "" && (
        <Warning
          text={
            "Falta el estado del paso, ponte en contacto con el tutor para que te de más detalles."
          }
        />
      )}
      <Repo repo={repo} />
    </KataDetailWrapper>
  );
}

const KataDetailWrapper = styled.div`
  padding: ${rem(size.medium)};

  display: flex;
  flex-direction: column;
`;