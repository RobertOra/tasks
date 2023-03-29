import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    type ChangeEvent = React.ChangeEvent<
        HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >;

    const COLORS = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black"
    ];

    const default_color = COLORS[0];

    const [color, setColor] = useState<string>(default_color);

    function updateColor(event: ChangeEvent) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h1>Change Color</h1>
            <div>
                {COLORS.map((currColor: string) => (
                    <Form.Check
                        inline
                        type="radio"
                        name="colors"
                        onChange={updateColor}
                        id="color-options-radio-buttons"
                        label={currColor}
                        value={currColor}
                        checked={currColor === color}
                        key={currColor}
                        style={{ backgroundColor: currColor }}
                    ></Form.Check>
                ))}
            </div>
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}.
                </span>
            </div>
        </div>
    );
}
