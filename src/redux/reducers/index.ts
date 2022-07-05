import { questionsReducer } from "./questionsReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    question: questionsReducer,
});

export type RootState = ReturnType<typeof rootReducer>