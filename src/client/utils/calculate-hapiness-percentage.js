export default function calculateHappinessPercentage(insights = []) {
    // todo unit test for empty list (spoiler alert: need to handle NaN)
    const average = insights.reduce((total, item) => total += item.score, 0) / insights.length;
    const averageZeroIndexed = average - 1; // 0 index makes it easier to calculate the percentage
    const percentage = (averageZeroIndexed / 6) * 100;

    return parseInt(percentage);
}