import { createGlobalStyle } from "styled-components";
import { fontFamily } from "../theme";
import { reboot } from "./reboot";
import { reset } from "./reset";

export const GlobalStyles = createGlobalStyle`
    ${reset};
    ${reboot};
    body{
        font-family: ${fontFamily};
    }    
`;
