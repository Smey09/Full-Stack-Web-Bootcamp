const students = [
  { id: 1, name: "Sothea", score: 90 },
  { id: 2, name: "Ah Ching", score: 80 },
  { id: 3, name: "Ah Pheak", score: 85 },
  { id: 4, name: "Ah Len", score: 85 },
];

//destucture

// const [selecte, , , ...all] = students;
// console.log("selected : ", selecte);
// console.log("no selecte : ", all);

// promise
function getAllUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const getName = students.map((studentName) => ({
        // ...studentName,
        name: `${studentName.name} ${studentName.id}`,
      }));
      resolve(getName);
    }, 2000);
  });
}
function getBigName() {
  return new Name((resolve) => {
    setTimeout(() => {
      const bigName = students.map((st) => ({
        getName: st.name.toUpperCase(),
      }));
      console.log(bigName);
      resolve("Secess");
    }, 1000);
  });
}

getAllUser()
  .then((success) => {
    if (!success) {
      console.log("Not Found");
    } else {
      console.table(success);
    }
  })
  .catch((err) => {
    console.error("Error : ", err);
  });
