import React, { ChangeEvent, FC, useCallback, useEffect } from "react";
import { IQuestions } from "../Types/Types";
import Question from "./Question";
import { Formik, Form } from "formik";
import SubmitButton from "./SubmitButton";
import { setAnswers, setQuestions } from "../redux/action-creators/questions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import s from "./styles/test.module.css";
import json from "../json/data.json";

interface TestProps {
    questions: IQuestions[];
}

interface FormValues {
    answer: string;
}

const Test: FC<TestProps> = ({ questions }) => {
    const initialValues: FormValues = { answer: "" };
    const answerState = useTypedSelector((state) => state.question.answers);
    const questionState = useTypedSelector((state) => state.question.questions);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setQuestions(json.data));
    }, [dispatch]);

    const onChangeHandler = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(setAnswers({ answer: e.target.value, id: +e.target.id }));
        },
        [dispatch]
    );

    const submitFormOnClick = () => {
        let resultOfTest: any[] = [];
        if (questionState.length === answerState.length) {
            questionState.map((q) =>
                resultOfTest.push({
                    question: q.question,
                    answer: answerState.filter((a) => a.id === q.id)[0].answer,
                    id: q.id,
                })
            );
            debugger
            resultOfTest.map((r) => localStorage.setItem(r.question, r.answer));
        } else {
            alert("Вы ответили не на все вопросы!");
        }
    };

    return (
        <section className={s.test__wrapper}>
            <Formik initialValues={initialValues} onSubmit={() => undefined}>
                <Form>
                    {questions.map((q) => (
                        <Question
                            key={q.id}
                            question={q.question}
                            id={q.id}
                            onChangeHandler={onChangeHandler}
                        />
                    ))}
                    <SubmitButton
                        label="Отправить"
                        onClickHandler={submitFormOnClick}
                    />
                </Form>
            </Formik>
        </section>
    );
};

export default Test;
