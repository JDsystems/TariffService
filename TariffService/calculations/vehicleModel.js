module.exports = (yearModel) => {
    let result;
    const currentYear = new Date().getFullYear();
    result = currentYear - parseInt(yearModel);

    return result;
}