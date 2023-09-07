function getDayName(dateStr, locale){
    let date = new Date(dateStr);
    return date.toLocaleDateString(locale, {weekday: 'long'});
}
let dater = new Date()
let dateStr = dater.getDate();
var day = getDayName(dateStr)

document.getElementById("currentDayOfTheWeek").textContent = day;


const now = new Date();
const currentUTCTime = now.toLocaleString();
console.log(currentUTCTime);
document.getElementById("currentUTCTime").textContent = currentUTCTime;