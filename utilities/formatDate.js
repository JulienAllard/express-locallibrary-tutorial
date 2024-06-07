const { DateTime } = require('luxon');

module.exports = function (date) {
    return (date && date.constructor.name == "Date") 
        ? DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_MED)
        : '';
}