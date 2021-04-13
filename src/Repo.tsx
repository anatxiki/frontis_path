import { rem } from "polished";
import styled from "styled-components";
import { colors, fontWeight, size } from "./ui/theme";
import { Bold } from "./Kata";

interface Props {
  repo?: string;
}

export function Repo(props: Props) {
  return (
    <>
      {props.repo === "" ? (
        <Bold>Esta kata no tiene un repositorio asociado.</Bold>
      ) : (
        <LinkToRepoWrapper>
          <LinkToRepo href={props.repo}>GO TO REPO</LinkToRepo>
          <LinkToRepoDecoration />
        </LinkToRepoWrapper>
      )}
    </>
  );
}

const LinkToRepoDecoration = styled.div`
  width: ${rem(size.medium)};

  border-bottom: ${rem(size.xtiny)} solid ${colors.red};
`;
const LinkToRepoWrapper = styled.div``;

const LinkToRepo = styled.a`
  width: fit-content;

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
