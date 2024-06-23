import './button.css';

interface IbuttonProps{
  isGetButton?: boolean,
  buttonText: string
  onButtonClick?: () => void;
}
function Button({buttonText, isGetButton, onButtonClick}: IbuttonProps) {
  const sendButton = 'Send data';
  const getButton = 'Get data';
  // от значения в этой переменной должен меняться цвет
 

  // * запись тернарного оператора:
  // { выражение ? если выражение верное : если выражение ложное }

  return (
    <button
      onClick={onButtonClick}
      className={`button ${isGetButton ? 'button-danger' : 'button-primary'}`}
    >
      {buttonText}
    </button>
  );
}

export default Button;

// сделайте так, чтобы при значении true isGetButton кнопки были одного цвета, а при значении false другого
