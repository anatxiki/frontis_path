import LogoBiko from "./logo-biko.svg";
import { font } from "./ui/theme";
import styled from "styled-components";
import { Kata } from "./Kata";
import { katas } from "./katas.json";

const H1 = styled.h1`
  ${font.h1()}
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img alt="Logo de Biko" src={LogoBiko} />
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
