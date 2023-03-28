/* eslint-disable indent */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "New Years"
    | "Easter"
    | "Halloween"
    | "Thanksgiving"
    | "Christmas";

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>("New Years");

    function getNextHolidayAlphabetically(current: Holiday): Holiday {
        switch (current) {
            case "Christmas":
                // eslint-disable-next-line indent
                return "Easter";
            case "Easter":
                return "Halloween";
            case "Halloween":
                return "New Years";
            case "New Years":
                return "Thanksgiving";
            case "Thanksgiving":
                return "Christmas";
            default:
                return current;
        }
    }

    function getNextHolidayByTime(current: Holiday): Holiday {
        switch (current) {
            case "New Years":
                return "Easter";
            case "Easter":
                return "Halloween";
            case "Halloween":
                return "Thanksgiving";
            case "Thanksgiving":
                return "Christmas";
            case "Christmas":
                return "New Years";
            default:
                return current;
        }
    }

    // Function to handle click on the Alphabet button
    function handleAlphabetClick() {
        const nextHoliday = getNextHolidayAlphabetically(currentHoliday);
        setCurrentHoliday(nextHoliday);
    }

    // Function to handle click on the Year button
    function handleYearClick() {
        const nextHoliday = getNextHolidayByTime(currentHoliday);
        setCurrentHoliday(nextHoliday);
    }

    // View to display the current holiday and buttons
    return (
        <div>
            <div>Holiday: {getHolidayEmoji(currentHoliday)}</div>
            <Button variant="primary" onClick={handleAlphabetClick}>
                Advance by Alphabet
            </Button>
            <Button variant="secondary" onClick={handleYearClick}>
                Advance by Year
            </Button>
        </div>
    );
}

// Helper function to get the emoji for a holiday
function getHolidayEmoji(holiday: Holiday): string {
    switch (holiday) {
        case "New Years": {
            return "🎊";
        }
        case "Easter":
            return "🐰";
        case "Halloween":
            return "🎃";
        case "Thanksgiving":
            return "🦃";
        case "Christmas":
            return "🎅";
        default:
            return "";
    }
}
