interface Props {
  description?: string;
  repo?: string;
}
export function KataDetails(props: Props) {
  return (
    <>
      <p>{props.description}</p>
      <a href={props.repo}>GO TO REPO</a>
    </>
  );
}
