import s from "./App.module.css";
import Test from "./components/Test";
import { useTypedSelector } from "./hooks/useTypedSelector";

const App = () => {
    const { questions } = useTypedSelector((state) => state.question);
    return (
        <div className={s.app__wrapper}>
            <Test questions={questions} />
        </div>
    );
};

export default App;
