import { useState } from "react";
import styled from "styled-components";

import { Steps } from "./Steps";
import { frontisPassword } from "./superSecretPassword";
import { Md5 } from "ts-md5/dist/md5";
import { font, fontWeight, size } from "./ui/theme";
import RedSquare from "./material/red-square.svg";
import { rem } from "polished";

function App() {
  const [userInput, setUserInput] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkPassword = () => {
    if (Md5.hashStr(userInput) === frontisPassword) {
      setIsAuthenticated(true);
    }
    return isAuthenticated;
  };
  return (
    <>
      {!isAuthenticated ? (
        <AuthPageWrapper>
          <TitleWrapper>
            <img src={RedSquare} alt="Cuadrado rojo decorativo" />
            <Title>
              Frontis <Bold>Path</Bold>
            </Title>
          </TitleWrapper>
          <p>Introduce la contraseña para acceder:</p>
          <input
            type="password"
            aria-label="password"
            value={userInput}
            onChange={(event) => {
              setUserInput(event.target.value);
            }}
          />
          <button onClick={checkPassword}>Enviar</button>
        </AuthPageWrapper>
      ) : (
        <Steps />
      )}
    </>
  );
}

const AuthPageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  margin: ${rem(size.medium)} 0;
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  ${font.h1()}
  margin-left: ${rem(-120)};
`;

const Bold = styled.b`
  // DUPLICADO x3
  font-weight: ${fontWeight.bold};
`;

export default App;
