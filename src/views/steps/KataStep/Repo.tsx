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
        <Info>Esta kata no tiene un repositorio asociado.</Info>
      ) : (
        <LinkWrapper>
          <Link href={repo}>GO TO REPO</Link>
        </LinkWrapper>
      )}
    </>
  );
}

const LinkWrapper = styled.div``;

const Link = styled.a`
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

const Info = styled.b`
  font-weight: ${fontWeight.bold};
`;
