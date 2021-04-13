import LogoBiko from "./logo-biko.svg";
import { font } from "./ui/theme";
import styled from "styled-components";
import { Kata } from "./Kata";

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
      <Kata
        title="Kata Roman Numerals"
        pairing="En solitario"
        state="Pendiente"
        description="Kata en Coding Dojo"
        repo="https://github.com/marcosrgalvez/random_quote_machine"
      />
    </div>
  );
}

export default App;
