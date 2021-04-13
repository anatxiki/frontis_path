import { createGlobalStyle } from "styled-components";
import { fontFamily, grid } from "../theme";
import { reboot } from "./reboot";
import { reset } from "./reset";
import { rem } from "polished";

export const GlobalStyles = createGlobalStyle`
    ${reset};
    ${reboot};
    body{
        font-family: ${fontFamily};
        margin: ${rem(0)} ${rem(grid.gap.desktop)};
        max-width: ${rem(grid.contentMaxWidth)};
    }    
`;
