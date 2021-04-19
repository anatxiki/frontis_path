import { useState } from "react";
import { Steps } from "./Steps";

function App() {
  const [userInput, setUserInput] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkPassword = () => {
    if (userInput === "B1k0M4nd4&n0TuB4nd4") {
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
