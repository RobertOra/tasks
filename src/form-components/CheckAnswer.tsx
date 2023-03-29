import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    type ChangeEvent = React.ChangeEvent<
        HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >;

    const [solution, setSol] = useState<string>("");

    function changeSol(tmp1: ChangeEvent) {
        setSol(tmp1.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formCheckAnswer" as={Row}>
                <Form.Label column sm={1}>
                    Answer Box
                </Form.Label>
                <Col>
                    <Form.Control
                        type="text"
                        value={solution}
                        onChange={changeSol}
                    ></Form.Control>
                </Col>
            </Form.Group>
            <span>Your Answer: {solution != expectedAnswer ? "❌" : "✔️"}</span>
        </div>
    );
}
