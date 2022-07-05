import { QuestionActionTypes } from "./../../Types/Questions";
import { IAnswers, IQuestions } from "./../../Types/Types";
import { Dispatch } from "react";
import { QuestionAction } from "../../Types/Questions";

export const setAnswers: any =
    (answers: IAnswers) => (dispatch: Dispatch<QuestionAction>) => {
        dispatch({ type: QuestionActionTypes.SET_ANSWERS, payload: answers });
    };

export const setQuestions: any =
    (questions: IQuestions[]) => (dispatch: Dispatch<QuestionAction>) => {
        dispatch({
            type: QuestionActionTypes.SET_QUESTIONS,
            payload: questions,
        });
    };
