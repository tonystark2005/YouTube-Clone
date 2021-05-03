const convertToSeconds = time => {
    if (time === null) return;
    var a = time[0].split(":");
    var seconds;
    if (a.length === 3) {
        return seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
    }
    if (a.length === 2) {
        return seconds = +a[0] * 60 + +a[1];
    }
    if (a.length === 1) {
        return seconds = a[0];
    }
    console.log(seconds);
    return seconds;
};

export default convertToSeconds;