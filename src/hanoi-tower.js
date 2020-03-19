module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const SECONDS_PER_HOUR = 3600;
    let turns = Math.pow(2, disksNumber) - 1;
    let seconds = turns / (turnsSpeed / SECONDS_PER_HOUR);
    return {
        turns: turns,
        seconds: seconds
    };
}