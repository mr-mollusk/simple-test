import { IAnswers, IQuestions } from "./Types";

export interface QuestionsState {
    questions: IQuestions[];
    answers: IAnswers[];
}

export enum QuestionActionTypes {
    SET_ANSWERS = "SET_ANSWERS",
    SET_QUESTIONS = "SET_QUESTIONS",
}

interface SetQuestionsAction {
    type: QuestionActionTypes.SET_QUESTIONS;
    payload: IQuestions[];
}

interface SetAnswersAction {
    type: QuestionActionTypes.SET_ANSWERS;
    payload: IAnswers;
}

export type QuestionAction = SetAnswersAction | SetQuestionsAction;