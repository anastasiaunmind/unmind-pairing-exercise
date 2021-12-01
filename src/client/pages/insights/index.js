import React, { useEffect, useReducer } from "react";
import { format } from "date-fns";
import MoodScore from "../../components/mood-score";
import axios from "../../libs/axios";
import { StyledSection, StyledTopSection, StyledPercentage, StyledEntriesCount, StyledFeeling } from "./index.styled";
import { reducer, initialState, ACTION } from "./reducer";

export default function InsightsPage() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(async () => {
        try {
            dispatch({ type: ACTION.LOADING });

            const { data } = await axios.get("/insights");
    
            dispatch({ type: ACTION.UPDATE_LIST, data });
        } catch (error) {
            dispatch({ type: ACTION.SHOW_ERROR });
        }
    }, []);

    if(state.error) {
        return (
            <StyledSection>
                Oops, something went wrong!
            </StyledSection>
        );
    }

    if(state.items.length === 0) {
        return (
            <StyledSection>
                No entries yet.
            </StyledSection>
        );
    }

    return (
        <div data-testid="insights-container">
            <StyledSection>
                <StyledTopSection>
                    <StyledPercentage>
                        {state.percentage}%
                    </StyledPercentage>
                    <StyledEntriesCount>
                        Based on {state.items.length} entries
                    </StyledEntriesCount>
                </StyledTopSection>
            </StyledSection>
            {state.items.map(item => (
                <StyledSection key={item.created}>
                    <div>
                        <div>{format(new Date(item.created), "qq MMM HH:mm")}</div>
                        <div>{item.feelings.map(feeling => (
                            <StyledFeeling key={feeling}>{feeling}</StyledFeeling>
                        ))}</div>
                        <div>{item.notes}</div>
                    </div>
                    <MoodScore score={item.score} size={60} padding={10} />
                </StyledSection>
            ))}
        </div>
    );
}