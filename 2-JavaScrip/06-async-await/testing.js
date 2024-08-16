// Create a mock database:
// [{id: 1, name: “sok”}, {id: 2, name; “sao”}, {id: 3, name: “pisey”}]

// 1
const mockDatabase = [
  { id: 1, name: "Sok" },
  { id: 2, name: "Sao" },
  { id: 3, name: "Pisey" },
];

function getAllUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockDatabase);
    }, 2000);
  });
}

getAllUser().then((user) => {
  console.log(user);
});

// create functions to add new data


// 2
// function getUserInfoById(id, callback) {
//   setTimeout(() => {
//     const findUsers = mockDatabase.find((user) => user.id === id);
//     if (findUsers) {
//       callback(null, findUsers);
//     } else {
//       callback(new Error("User Not Found"));
//     }
//     return findUsers;
//   }, 2000);
// }

// use promise
// const id = 2;
// function getUserInfoById() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Success");
//       reject("Erorr");
//     }, 1000);
//   });
// }

// getUserInfoById(id)
//   .then((user) => {
//     const data = mockDatabase.find((user) => user.id === id);
//     if (!data) {
//       console.error(new Error("User not found"));
//     } else {
//       console.log(data);
//     }
//     return user;
//   })
//   .catch((error) => {
//     console.error("Error : ", error);
//   });

// // 3
// function getUserName(user, callback) {
//   setTimeout(() => {
//     const convertName = { ...user, name: user.name.toUpperCase() };
//     callback(null, convertName);
//   }, 1500);
// }

// // 3 use promis
// function handleNameUpperCase(data, getCallBack) {
//   setTimeout(() => {
//     // console.log(data);
//     if (data) {
//       if (data.name.length > 0) {
//         data.name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
//         data.name = data.name.toUpperCase();
//       }
//       getCallBack(null, data);
//     } else getCallBack(new Error("User not found!!!"));
//   }, 1500);
// }

// function consoler(userId){

// }

// function consoler(userId) {
//   getUserInfoById(userId, (err, user) => {
//     if (err) {
//       console.error("Error : ", err.message);
//     } else {
//       console.log(user);
//       getUserName(user, (err, newName) => {
//         if (err) {
//           console.error("Error : ", err.message);
//         } else {
//           console.log(newName);
//         }
//       });
//     }
//   });
// }

// consoler(2);
