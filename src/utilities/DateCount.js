const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];
const today = new Date();
const DateTimer = Array.from({ length: 7 }, (_, index) => {
    const last4day = new Date(today);
    last4day.setDate(last4day.getDate() - 6 + index);
    return `${months[last4day.getMonth()]} ${last4day.getDate()}`;
});
export default DateTimer;
