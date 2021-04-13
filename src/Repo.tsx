interface Props {
  repo?: string;
}

export function Repo(props: Props) {
  return (
    <>
      {props.repo === "" ? (
        "Esta kata no tiene un repositorio asociado."
      ) : (
        <a href={props.repo}>GO TO REPO</a>
      )}
    </>
  );
}
