import { useState } from "react";
import styled from "styled-components";
import { Md5 } from "ts-md5/dist/md5";

import { frontisPassword } from "../../superSecretPassword";
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
      <Password
        theme={{ incorrectPassword: incorrectPassword }}
        value={userInput}
        onChange={(event) => {
          setIncorrectPassword(false);
          setUserInput(event.target.value);
        }}
      />
      <Send onClick={handleSend}>
        <SendIcon title="Enviar" src={Arrows} alt="Icono del botón enviar" />
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
  top: ${rem(-32)};
  left: ${rem(280)};
  height: ${rem(size.base)};
  background-color: ${colors.white};
`;

const AuthPageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
`;

const Password = styled.input.attrs({
  "aria-label": "password",
  type: "password",
})`
  width: ${rem(600)};
  height: ${rem(size.medium)};

  margin-top: ${rem(size.mini)};

  border-radius: 5px;

  text-align: center;

  border: 3px solid
    ${(props) =>
      props.theme.incorrectPassword ? colors.red : colors.lightGrey};
`;

const SendIcon = styled.img`
  position: relative;

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
  // DUPLICADO
  font-weight: ${fontWeight.bold};
`;
