const convertToSeconds = time => {
    if (time === null) return;
    time = time[0].split(":");
    let seconds;
    if (time.length === 3) {
        return seconds = +time[0] * 60 * 60 + +time[1] * 60 + +time[2];
    }
    if (time.length === 2) {
        return seconds = +time[0] * 60 + +time[1];
    }
    if (time.length === 1) {
        return seconds = time[0];
    }
    console.log(seconds);
    return seconds;
};

export default convertToSeconds;