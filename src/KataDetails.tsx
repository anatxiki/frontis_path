interface Props {
  description?: string;
  repo?: string;
  pairing?: string;
}
export function KataDetails(props: Props) {
  return (
    <>
      <p>
        {props.description === ""
          ? "Falta el enunciado de la Kata, ponte en contacto con el tutor para que te de más detalles."
          : props.description}
        {props.pairing === ""
          ? "Falta el acompañamiento de la Kata, ponte en contacto con el tutor para que te de más detalles."
          : ""}
      </p>
      <a href={props.repo}>GO TO REPO</a>
    </>
  );
}
