import React from "react";
import PropTypes from "prop-types";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { StyledFace } from "./index.styled";
import One from "./svgs/1";
import Two from "./svgs/2";
import Three from "./svgs/3";
import Four from "./svgs/4";
import Five from "./svgs/5";
import Six from "./svgs/6";
import Seven from "./svgs/7";

const FACES = {
    1: <One />,
    2: <Two />,
    3: <Three />,
    4: <Four />,
    5: <Five />,
    6: <Six />,
    7: <Seven />,
};

function MoodScore({ score = 4, size = 161, padding = 30, isEditable = false, onChange }) {
    return (
        <>
            <StyledFace data-testid="score" padding={padding}>
                {React.cloneElement(FACES[score], { size })}
            </StyledFace>
            {isEditable && (
                <InputRange
                    minValue={1}
                    maxValue={7}
                    value={score}
                    formatLabel={() => ""}
                    onChange={onChange}
                />
            )}
        </>
    );
}

MoodScore.propTypes = {
    score: PropTypes.number.isRequired,
    size: PropTypes.number,
    padding: PropTypes.number,
    isEditable: PropTypes.bool,
    onChange: PropTypes.func,
};

export default MoodScore;
