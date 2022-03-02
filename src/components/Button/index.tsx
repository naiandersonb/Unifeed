/* eslint-disable react/button-has-type */
import './styles.scss';

interface ButtonType {
  text: string;
}
function Button({ text }: ButtonType) {
  return (
    <button className="primary-button">
      {text}
    </button>
  );
}

export default Button;
