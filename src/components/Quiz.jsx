import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import Question from "./Question";
import Summary from "./Summary";


export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const isCompleted = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(answer) {
        setUserAnswers((prev) => {
            return [...prev, answer];
        });
    }, []);

    const handleScapeQuestion = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (isCompleted) {
        return (
            <Summary userAnswers={userAnswers} />
        )
    }



    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleScapeQuestion}
                index={activeQuestionIndex}
            />
        </div>
    )
}