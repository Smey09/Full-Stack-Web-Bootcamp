// Given an array of date string in the format “YYYY-MM-DD”.
// Use the ‘map’ method to transform the array [“2024-01-01”, “2024-02-02”, “2024-04-04”]
// into an array of date strings in the format “DD/MM/YYYY”
// =========== 4 ============

const dateString = ["2024-01-01", "2025-02-02", "2026-03-03"];
console.log("Questions", dateString);
console.log("---------------------------------------");
function dateFormat(getDatesting) {
  const tranformDate = getDatesting.map((date) => {
    let parts = date.split("-");
    console.log("split string to : ", parts);
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  });
  return tranformDate;
}

const resultFormated = dateFormat(dateString);
console.log("---------------------------------------");
console.log("Answer is : ", resultFormated);
