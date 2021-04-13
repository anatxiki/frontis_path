import { rem } from "polished";
import styled from "styled-components";
import { colors, fontWeight, size } from "./ui/theme";

interface Props {
  repo?: string;
}

export function Repo(props: Props) {
  return (
    <>
      {props.repo === "" ? (
        "Esta kata no tiene un repositorio asociado."
      ) : (
        <LinkToRepo href={props.repo}>GO TO REPO</LinkToRepo>
      )}
    </>
  );
}

const LinkToRepo = styled.a`
  padding-top: ${rem(size.medium)};

  font-weight: ${fontWeight.bold};

  text-decoration: none;
  color: ${colors.black};

  &:visited {
    color: ${colors.black};
  }
  &:hover {
    color: ${colors.red};
  }
`;
