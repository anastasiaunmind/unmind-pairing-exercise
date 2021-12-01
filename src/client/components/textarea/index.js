import React from "react";
import PropTypes from "prop-types";
import { StyledTextarea } from "./index.styled";


function Textarea({ placeholder, rows = 10, text, onChange }) {
    return (
        <StyledTextarea rows={rows} placeholder={placeholder} value={text} onChange={event => onChange(event.target.value)} />
    );
}

Textarea.propTypes = {
    placeholder: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    rows: PropTypes.number,
    onChange: PropTypes.func.isRequired,
};

export default Textarea;
