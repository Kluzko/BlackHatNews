const toDateTime = (secs: number) => {
    const t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    return t
}

export const getDate = (secs: number) => {
    const date = toDateTime(secs)
    let year = date.getFullYear();

    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    let day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    return `${year}-${month}-${day}`;
}