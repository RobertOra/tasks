import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(4);
    const [quizInProgress, setQuizInProgress] = useState<boolean>(false);

    const handleStartQuizClick = () => {
        setNumAttempts(numAttempts - 1);
        setQuizInProgress(true);
    };

    const handleStopQuizClick = () => {
        setQuizInProgress(false);
    };

    const handleMulliganClick = () => {
        setNumAttempts(numAttempts + 1);
    };

    return (
        <div>
            <Button
                onClick={handleStartQuizClick}
                disabled={quizInProgress || numAttempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={handleStopQuizClick} disabled={!quizInProgress}>
                Stop Quiz
            </Button>
            <Button onClick={handleMulliganClick} disabled={quizInProgress}>
                Mulligan
            </Button>
            <div>Number of attempts: {numAttempts}</div>
        </div>
    );
}
