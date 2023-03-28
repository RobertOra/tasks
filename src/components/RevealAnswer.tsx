import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [answerVisible, setAnswerVisible] = useState(false);

    function handleClick(): void {
        setAnswerVisible(!answerVisible);
    }

    return (
        <div>
            <Button onClick={handleClick}>Reveal Answer</Button>
            {answerVisible && <div>42</div>}
        </div>
    );
}
