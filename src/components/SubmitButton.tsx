import { FC } from "react";
import s from "./styles/submitbutton.module.css";

interface ButtonProps {
    label: string;
    onClickHandler?: () => void;
}

const SubmitButton: FC<ButtonProps> = ({ label, onClickHandler }) => {
    return (
        <button className={s.btn} type="submit" onClick={onClickHandler}>
            {label}
        </button>
    );
};

export default SubmitButton;
