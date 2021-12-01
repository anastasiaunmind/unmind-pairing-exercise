module.exports = (record) => {
    if (![1, 2, 3, 4, 5, 6, 7].includes(record.score)) {
        throw new Error("UnrecognisedScore");
    }

    if(!Array.isArray(record.feelings)) {
        throw new Error("FeelingsNotFound"); // been there, done that
    }

    if(record.notes !== undefined && typeof record.notes !== "string") {
        throw new Error("NotesValueShouldBeString");
    }
};