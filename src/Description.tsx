interface Props {
  description?: string;
}

export function Description(props: Props) {
  return (
    <>
      {props.description === ""
        ? "Falta el enunciado de la Kata, ponte en contacto con el tutor para que te de más detalles."
        : props.description}
    </>
  );
}
