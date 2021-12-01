import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./index.styled";

function Button({ text, children, onClick }) {
    return (
        <StyledButton onClick={onClick}>
            {children || text}
        </StyledButton>
    );
}

Button.propTypes = {
    text: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func.isRequired,
};

export default Button;
