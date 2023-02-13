
module.exports = (dateInput) => {
    const today = new Date();
    const birtDate = new Date(dateInput);
    let ageYear = today.getFullYear() - birtDate.getFullYear();
    const ageMonths = today.getMonth() - birtDate.getMonth();

    return (ageMonths < 0 || (ageMonths === 0 && today.getDate() < birtDate.getDate())) 
        ? ageYear - 1
        : ageYear
}