import { useEffect, useState } from "react"

export default function QuestionTimer({ onTimeOut, outTime, mode }) {
    const [remainingTime, setRemainingTime] = useState(outTime);
    useEffect(() => {
        const timer = setTimeout(onTimeOut, outTime);
        return () => { clearTimeout(timer) }
    }, [onTimeOut, outTime]);

    useEffect(() => {
        const timeInterval = setInterval(() => { setRemainingTime((prev) => prev - 100) }, 100)
        return () => {
            clearInterval(timeInterval);
        }
    }, []);


    return (
        <progress
            id="question-time"
            max={outTime}
            value={remainingTime}
            className={mode}
        ></progress>
    )
}