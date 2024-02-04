import { useRef } from "react";

export default function Answers({ onSelect, answers, selectedAnswer, answerState }) {
    const randomQuestions = useRef();

    if (!randomQuestions.current) {
        randomQuestions.current = [...answers];
        randomQuestions.current.sort(() => Math.random() - 0.5);
    }

    return (
        <ul id="answers">
            {randomQuestions.current.map((ans) => {
                const isSelectAnswer = selectedAnswer === ans;
                let cssClass = "";

                if (answerState == "answered" && isSelectAnswer) {
                    cssClass = "selected";
                }

                if ((answerState == "correct" || answerState == "wrong") && isSelectAnswer) {
                    cssClass = answerState;
                }

                return (
                    <li key={ans} className="answer">
                        <button onClick={() => onSelect(ans)} className={cssClass} disabled={answerState !== ""}>{ans}</button>
                    </li>
                );
            })}
        </ul>
    )
}