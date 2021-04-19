import { useState } from "react";
import { Steps } from "./Steps";
import { frontisPassword } from "./superSecretPassword";
import { Md5 } from "ts-md5/dist/md5";

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
        <>
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
        </>
      ) : (
        <Steps />
      )}
    </>
  );
}

export default App;
