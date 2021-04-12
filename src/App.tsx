import LogoBiko from "./logo-biko.svg";
import CompletedIcon from "./completed-icon.svg";
import { font, colors, iconSize } from "./ui/theme";
import styled from "styled-components";
import { rem } from "polished";

const H1 = styled.h1`
  ${font.h1()}
`;

const CompletedIconStyle = styled.img`
  color: ${colors.red};
  width: auto;
  height: ${rem(iconSize.mini)};
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img alt="Logo de Biko" src={LogoBiko} />
        <H1>Pasos del learning path</H1>
      </header>
      <p>Kata Roman Numerals - En solitario</p>
      <CompletedIconStyle alt="Estado completado" src={CompletedIcon} />
    </div>
  );
}

export default App;
