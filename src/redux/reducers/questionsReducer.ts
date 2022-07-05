import { IQuestions } from "./../../Types/Types";
import {
    QuestionAction,
    QuestionActionTypes,
    QuestionsState,
} from "../../Types/Questions";

const initialState: QuestionsState = {
    questions: [],
    answers: [],
};

export const questionsReducer = (
    state = initialState,
    action: QuestionAction
): QuestionsState => {
    switch (action.type) {
        case QuestionActionTypes.SET_ANSWERS:
            return {
                ...state,
                answers: [
                    ...state.answers.filter(
                        (ans) => ans.id !== action.payload.id
                    ),
                    action.payload,
                ],
            };

        case QuestionActionTypes.SET_QUESTIONS:
            return {
                ...state,
                questions: [...action.payload],
            };
        default:
            return state;
    }
};
