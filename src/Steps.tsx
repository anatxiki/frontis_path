//import LogoBiko from "./material/logo-biko.svg";
import RedSquare from "./material/red-square.svg";
import { font, size } from "./ui/theme";
import styled from "styled-components";
import { KataStep } from "./KataStep";
import { katas } from "./data/katas.json";
import { rem } from "polished";
import { Kata } from "./domain/models/Kata";

export function Steps() {
  return (
    <>
      <header>
        {/*<Logo alt="Logo de Biko" src={LogoBiko} />*/}
        <TitleWrapper>
          <img src={RedSquare} alt="Cuadrado rojo decorativo" />
          <H1>Pasos del learning path</H1>
        </TitleWrapper>
      </header>

      <section>
        {katas.map((kata: Kata) => {
          return <KataStep kata={kata} key={kata.id} />;
        })}
      </section>
    </>
  );
}

const H1 = styled.h1`
  ${font.h1()}
  margin-left: ${rem(-130)};
`;

/*const Logo = styled.img`
    max-width: ${rem(150)};
    margin-top: ${rem(size.base)};
  `;*/

const TitleWrapper = styled.div`
  margin: ${rem(size.medium)} 0;
  display: flex;
  align-items: center;
`;
