import { useState } from "react";
import { Authentication } from "./views/auth/Authentication";
import { Steps } from "./views/steps/Steps";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      {!isAuthenticated ? (
        <Authentication setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <Steps />
      )}
    </>
  );
}

export default App;
