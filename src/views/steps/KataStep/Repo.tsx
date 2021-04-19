import { rem } from "polished";
import styled from "styled-components";
import { colors, fontWeight, size } from "../../../ui/theme";

interface Props {
  repo?: string;
}

export function Repo({ repo }: Props) {
  return (
    <>
      {repo === "" ? (
        <Bold>Esta kata no tiene un repositorio asociado.</Bold>
      ) : (
        <LinkToRepoWrapper>
          <LinkToRepo href={repo}>GO TO REPO</LinkToRepo>
        </LinkToRepoWrapper>
      )}
    </>
  );
}

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

  &::after {
    content: "";
    width: ${rem(size.base)};
    display: flex;
    border-bottom: ${rem(size.xtiny)} solid ${colors.red};
    transition: all 0.5s ease;
  }

  &:hover::after {
    width: ${rem(104)};
  }
`;

//DUPLICADO
const Bold = styled.b`
  font-weight: ${fontWeight.bold};
`;
