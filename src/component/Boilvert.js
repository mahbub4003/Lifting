export function Boilvert(props) {
  if (props.celsius >= 100) {
    return <h1>The water would boil.</h1>;
  } else {
    return <h1>The water would not boil.</h1>;
  }
}
