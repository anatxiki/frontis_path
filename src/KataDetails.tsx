import styled from "styled-components";
import { Repo } from "./Repo";
import { Description } from "./Description";
import { Warning } from "./Warning";
import { useEffect, useState } from "react";
import { size } from "./ui/theme";
import { rem } from "polished";

interface Props {
  description?: string;
  repo?: string;
  pairing?: string;
  state?: string;
}

export function KataDetails(props: Props) {
  const [warningText, setWarningText] = useState("");

  useEffect(() => {
    if (props.pairing === "") {
      setWarningText(
        "Falta el acompañamiento de la Kata, ponte en contacto con el tutor para que te de más detalles."
      );
    }
    if (props.state === "") {
      setWarningText(
        "Falta el estado del paso, ponte en contacto con el tutor para que te de más detalles."
      );
    }
  }, [props.pairing, props.state]);

  return (
    <KataDetailsWrapper>
      <Description description={props.description} />
      <Warning text={warningText} />
      <Repo repo={props.repo} />
    </KataDetailsWrapper>
  );
}

const KataDetailsWrapper = styled.div`
  padding: ${rem(size.medium)};

  display: flex;
  flex-direction: column;
`;
