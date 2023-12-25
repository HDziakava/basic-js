const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  try {
    if (!date[Symbol.toPrimitive]("number")) {
      throw new Error("Invalid date!");
    }
  } catch {
    throw new Error("Invalid date!");
  }

  const getSeasonFromMonth = (month) => {
    if (month <= 1 || month === 11) {
      return "winter";
    } else if (month <= 4 && month > 1) {
      return "spring";
    } else if (month <= 7 && month > 4) {
      return "summer";
    } else if (month <= 10 && month > 7) {
      return "autumn";
    } else {
      throw new Error("Invalid date!");
    }
  };

  return getSeasonFromMonth(date.getMonth());
}

module.exports = {
  getSeason,
};
