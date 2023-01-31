//place for helper function...
// uses the javascript Date object to format a timestamp
module.exports = {
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
  },

  // make a helper function for equal named eq to compare two values
  // if they are equal, return true, otherwise return false
  eq: (a, b) => {
    return a === b;
  },
};


