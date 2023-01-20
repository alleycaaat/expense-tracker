export function getFormatDate(date) {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return (`${ date.getUTCDate() } ${ months[date.getUTCMonth()] } ${ date.getUTCFullYear() }`);
}

export function getDateMinusDays(date, days) {
    return (
        new Date(date.getFullYear(), date.getMonth(), date.getUTCDate() - days)
    );
}