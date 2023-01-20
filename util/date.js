export function getFormatDate(date) {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return (`${ date.getDate() } ${ months[date.getMonth()] } ${ date.getFullYear() }`);
}

export function getDateMinusDays(date, days) {
    return (
        new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
    );
}