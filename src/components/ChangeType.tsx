import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    const handleChangeTypeClick = () => {
        const newQuestionType =
            questionType === "multiple_choice_question"
                ? "short_answer_question"
                : "multiple_choice_question";
        setQuestionType(newQuestionType);
    };

    return (
        <div>
            <Button onClick={handleChangeTypeClick}>Change Type</Button>
            {questionType === "multiple_choice_question" && (
                <div>Multiple Choice</div>
            )}
            {questionType === "short_answer_question" && (
                <div>Short Answer</div>
            )}
        </div>
    );
}
