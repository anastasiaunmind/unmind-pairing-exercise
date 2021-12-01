import React, { useReducer } from "react";
import MoodScore from "../../components/mood-score";
import FeelingsCloud from "../../components/feelings-cloud";
import Textarea from "../../components/textarea";
import Button from "../../components/button";
import { initialState, reducer, SECTION, ACTION } from "./reducer";
import axios from "../../libs/axios";
import { StyledSection } from "./index.styled";


function CheckinPage() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { section, score, feelings, notes } = state;

    if(section === SECTION.MOOD) {
        return (
            <div data-testid="moodscore">
                <StyledSection>
                    <MoodScore
                        score={score} 
                        isEditable 
                        onChange={(val) => dispatch({ type: ACTION.UPDATE_SCORE, data: val })} 
                    />
                </StyledSection>
                <Button onClick={() => dispatch({ type: ACTION.SUBMIT_SCORE })}>Next</Button>
            </div>
        );
    }

    if(section === SECTION.FEELINGS) {
        return (
            <div data-testid="feelings">
                <StyledSection>
                    <FeelingsCloud items={feelings} onChange={(val) => dispatch({ type: ACTION.UPDATE_FEELING, data: val})}
                    />
                </StyledSection>
                <Button onClick={() => dispatch({ type: ACTION.SUBMIT_FEELINGS })}>Next</Button>
            </div>
        );
    }

    if(section === SECTION.NOTES) {
        return (
            <div data-testid="notes">
                <StyledSection>
                    <Textarea
                        placeholder="Type your optional note here..." 
                        text={notes} 
                        onChange={val => dispatch({ type: ACTION.UPDATE_NOTES, data: val })}
                    />
                </StyledSection>
                <Button onClick={async () => {
                    try {
                        dispatch({ type: ACTION.LOADING });

                        await axios.post("/check-in", {
                            score,
                            feelings: feelings.filter(item => item.checked).map(item => item.value),
                            notes,
                        });
    
                        dispatch({ type: ACTION.FINISH });   
                    } catch (error) {
                        dispatch({ type: ACTION.SHOW_ERROR });
                    }
                }}>Finish</Button>
            </div>
        );
    }

    if(section === SECTION.LOADING) {
        return (
            <div data-testid="loading">
                <StyledSection>
                    Loading...
                </StyledSection>
            </div>
        );
    }

    if(section === SECTION.ERROR) {
        return (
            <div data-testid="error">
                <StyledSection>
                    Oops, something went wrong!
                </StyledSection>
                <Button onClick={() => dispatch({ type: ACTION.RESET })}>Try again</Button>
            </div>
        );
    }

    if(section === SECTION.CHECKED_IN) {
        return (
            <div data-testid="checked-in">
                <StyledSection>
                    Check-in completed!
                </StyledSection>
                <Button onClick={() => dispatch({ type: ACTION.RESET })}>Restart</Button>
            </div>
        );
    }

    return null;
}

export default CheckinPage;