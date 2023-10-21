const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let currentDate = `${day}-${month}`;
console.log(currentDate);

export { currentDate };