import styled from "styled-components";


export const StyledButton = styled.button`
    background: #fff;
    border: none;
    border-radius: 2px;
    padding: 5px;
    width: 100%;
    color: #a3a2a2;
    cursor: pointer;
    box-shadow: 2px 2px 4px -3px rgba(0,0,0,0.5);

    &:hover {
      background: #f9f9f9;
    }

    &:active {
      background: #f0f0f0;
    }
`;