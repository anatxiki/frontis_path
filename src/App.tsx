import { useState } from "react";
import styled from "styled-components";

import { Steps } from "./Steps";
import { frontisPassword } from "./superSecretPassword";
import { Md5 } from "ts-md5/dist/md5";
import { colors, font, fontWeight, size } from "./ui/theme";
import RedSquare from "./material/red-square.svg";
import Arrows from "./material/arrow.svg";
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
          <PasswordInput
            type="password"
            aria-label="password"
            value={userInput}
            onChange={(event) => {
              setUserInput(event.target.value);
            }}
          />
          <SendButton onClick={checkPassword}>
            <ArrowIcon
              title="Enviar"
              src={Arrows}
              alt="Icono del botón enviar"
            />
          </SendButton>
        </AuthPageWrapper>
      ) : (
        <Steps />
      )}
    </>
  );
}

const SendButton = styled.button`
  position: relative;
`;

const AuthPageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
`;

const PasswordInput = styled.input`
  width: ${rem(600)};
  height: ${rem(size.medium)};

  margin-top: ${rem(size.mini)};

  border-radius: 5px;
  border: 3px solid ${colors.lightGrey};

  text-align: center;

  &:focus {
    outline: none;
  }
`;

const ArrowIcon = styled.img`
  position: absolute;
  top: ${rem(-32)};
  left: ${rem(270)};

  height: ${rem(size.base)};

  cursor: pointer;
`;

const TitleWrapper = styled.div`
  margin-top: ${rem(size.medium)};
  margin-bottom: ${rem(size.xlarge)};
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
