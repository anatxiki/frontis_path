import { rem } from "polished";
import styled from "styled-components";
import CompletedIcon from "./completed-icon.svg";
import PendingIcon from "./pending-icon.svg";
import DoingIcon from "./doing-icon.svg";
import { colors, iconSize } from "./ui/theme";

const StateIconStyle = styled.img`
  color: ${colors.red};
  width: auto;
  height: ${rem(iconSize.mini)};
`;

interface Props {
  title?: string;
  pairing?: string;
  state?: string;
}
export function Kata(props: Props) {
  const stateIcon = () => {
    if (props.state === "Completado") {
      return CompletedIcon;
    }

    if (props.state === "En curso") {
      return DoingIcon;
    }

    return PendingIcon;
  };

  return (
    <>
      <p>
        {props.title} - {props.pairing}
      </p>
      <StateIconStyle alt="Estado completado" src={stateIcon()} />
    </>
  );
}
