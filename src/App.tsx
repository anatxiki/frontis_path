import LogoBiko from "./logo-biko.svg";
import RedSquare from "./red-square.svg";
import { font } from "./ui/theme";
import styled from "styled-components";
import { Kata } from "./Kata";
import { katas } from "./katas.json";
import { rem } from "polished";

const H1 = styled.h1`
  ${font.h1()}
`;

const Logo = styled.img`
  max-width: ${rem(392)};
`;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo alt="Logo de Biko" src={LogoBiko} />
        <img src={RedSquare} />
        <H1>Pasos del learning path</H1>
      </header>
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
    </div>
  );
}

export default App;
