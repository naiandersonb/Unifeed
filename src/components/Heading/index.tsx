import './styles.scss';

type HeadingTypes = {
  text: string
}

function Heading({ text }: HeadingTypes) {
  return (
    <h2 className="heading-title">
      {text}
    </h2>
  );
}

export default Heading;
