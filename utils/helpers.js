module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
  },
  array_length: (array) => {
    return array.length;
  },
  round_distance: (distance) => {
    return Math.round(distance * 100) / 100;
  },
};
