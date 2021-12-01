import styled from "styled-components";


export const StyledSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    background: #fff;
    border: none;
    border-radius: 1px;
    padding: 10px 20px;
    margin: 1px;
    color: #a3a2a2;
    font-size: 12px;
    box-shadow: 2px 2px 4px -3px rgba(0,0,0,0.5);
`;

export const StyledTopSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
`;

export const StyledPercentage = styled.div`
    font-size: 36px;
    text-align: center;
    color: dodgerblue;
`;

export const StyledEntriesCount = styled.div`
    font-size: 12px;
    text-align: center;
    color: grey;
`;

export const StyledFeeling = styled.div`
    display: inline-block;
    background: lightgrey;
    color: white;
    padding: 4px;
    margin: 2px;
    border-radius: 2px;
`;