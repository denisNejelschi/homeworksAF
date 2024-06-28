import styles from "./button.module.css";

//добавили interface props
// которые просил добавить ts для безопасности

interface IButtonProps {
  isGetButton?: boolean;
  // buttonText необязательный пропс, указан через оператор '?'
  buttonText?: string;
  // типизируем props с функцией без return
  onButtonClick?: () => void;
  buttonType?: "button" | "submit" | "reset";
  onSubmit?: (e: any) => void;
}

function Button({
  buttonText = "push",
  buttonType = "button",
  isGetButton = false,
  onSubmit,
  onButtonClick,
}: IButtonProps) {
  return (
    <button
      type={buttonType}
      onClick={onButtonClick}
      onSubmit={onSubmit}
      className={`${styles.button} ${
        isGetButton ? styles.buttonDanger : styles.buttonPrimary
      }`}
    >
      {buttonText}
    </button>
  );
}

export default Button;