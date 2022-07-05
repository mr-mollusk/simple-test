import { ChangeEvent, FC, useCallback } from "react";
import { Field } from "formik";
import s from "./styles/question.module.css";

interface QuestionProps {
    question: string;
    id: number;
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Question: FC<QuestionProps> = ({ question, id, onChangeHandler }) => {
    return (
        <label
        className={s.question__body}>
            {question}
            <Field
                id={id}
                name={`question_${id}`}
                placeholder={"*Введите текст"}
                onChange={onChangeHandler}
                autoComplete="off"
            />
        </label>
    );
};

export default Question;
