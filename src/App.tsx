import LogoBiko from "./logo-biko.svg";
import { font } from "./ui/theme";
import styled from "styled-components";

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
    </div>
  );
}

export default App;
