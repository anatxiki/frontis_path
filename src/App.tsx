import LogoBiko from "./logo-biko.svg";
import RedSquare from "./red-square.svg";
import { font, size } from "./ui/theme";
import styled from "styled-components";
import { Kata } from "./Kata";
import { katas } from "./katas.json";
import { rem } from "polished";

const H1 = styled.h1`
  ${font.h1()}
  margin-left: ${rem(-130)};
`;

const Logo = styled.img`
  max-width: ${rem(392)};
`;

const TitleWrapper = styled.div`
  margin: ${rem(size.medium)} 0;
  display: flex;
  align-items: center;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo alt="Logo de Biko" src={LogoBiko} />
        <TitleWrapper>
          <img src={RedSquare} alt="Red square" />
          <H1>Pasos del learning path</H1>
        </TitleWrapper>
      </header>
      <section>
        {katas.map((element: any, idx: number) => {
          return (
            <Kata
              key={element.title + "-" + idx}
              title={element.title}
              pairing={element.pairing}
              state={element.state}
              description={element.description}
              repo={element.repo}
            />
          );
        })}
      </section>
    </div>
  );
}

export default App;
