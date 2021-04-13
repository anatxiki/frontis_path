interface Props {
  text: string;
}

export function Warning(props: Props) {
  return <p>{props.text}</p>;
}
