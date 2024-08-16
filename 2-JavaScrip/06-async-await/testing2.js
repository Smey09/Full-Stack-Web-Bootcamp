// function consoler(getId) {
//   getUserInfoById(getId, (err, result) => {
//     if (err) {
//       console.log("User Not found");
//     } else {
//       console.log(result);
//     }
//   });
// }

// consoler(5);

// 1
const mockDatabase = [
  { id: 1, name: "Sok" },
  { id: 2, name: "Sao" },
  { id: 3, name: "Pisey" },
];

// 2
function getUserInfoById(id, callback) {
  setTimeout(() => {
    const findUsers = mockDatabase.find((user) => user.id === id);
    if (findUsers) {
      callback(null, findUsers);
    } else {
      callback(new Error("User Not Found"));
    }
    return findUsers;
  }, 2000);
}

function getUserName(user, callback) {
  setTimeout(() => {
    const newName = { ...user, name: user.name.toUpperCase() };
    if (newName) {
      callback(null, newName);
    } else {
      callback(new Error("User Not Found"));
    }
  }, 1500);
}

function consoler(userId) {
  getUserInfoById(userId, (err, user) => {
    if (err) {
      console.error("Error : ", err.message);
    } else {
      console.log(user);
      getUserName(user, (err, newName) => {
        if (err) {
          console.error("Error : ", err.message);
        } else {
          console.log(newName);
        }
      });
    }
  });
}
consoler(2);
