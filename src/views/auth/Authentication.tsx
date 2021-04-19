import { useState } from "react";
import styled from "styled-components";

import { frontisPassword } from "../../superSecretPassword";
import { Md5 } from "ts-md5/dist/md5";
import { colors, font, fontWeight, size } from "../../ui/theme";
import RedSquare from "../../material/red-square.svg";
import Arrows from "../../material/arrow.svg";
import { Warning } from "../steps/KataStep/Warning";
import { rem } from "polished";

interface Props {
  setIsAuthenticated: any;
}

export function Authentication(props: Props) {
  const [userInput, setUserInput] = useState("");
  const [incorrectPassword, setIncorrectPassword] = useState(false);

  const handleSend = () => {
    const checkPassword = Md5.hashStr(userInput) === frontisPassword;
    if (checkPassword) {
      props.setIsAuthenticated(true);
      return;
    }

    if (userInput !== "") {
      setIncorrectPassword(true);
    }
  };

  return (
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
        className={!incorrectPassword ? "correctPassword" : "incorrectPassword"}
        value={userInput}
        onChange={(event) => {
          setIncorrectPassword(false);
          setUserInput(event.target.value);
        }}
      />
      <Send onClick={handleSend}>
        <ArrowIcon title="Enviar" src={Arrows} alt="Icono del botón enviar" />
      </Send>
      {incorrectPassword && (
        <Warning
          text={
            "Contraseña incorrecta. Por favor introduzca la contraseña nuevamente."
          }
        />
      )}
    </AuthPageWrapper>
  );
}

const Send = styled.button`
  position: relative;

  margin-bottom: ${rem(size.medium)};
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

  &.incorrectPassword {
    border: 3px solid ${colors.red};
  }

  &.correctPassword {
    border: 3px solid ${colors.lightGrey};
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
