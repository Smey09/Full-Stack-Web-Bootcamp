// 4. Given two arrays of nums1 and nums2, merge them into a new array:
//     Nums1 = [1, 2, 3]
//     Nums2 = [4, 5, 6]
//     Output: [1, 2, 3, 4, 5, 6]

// ======== style 1 =========
// let Nums1 = [1, 2, 3];
// const Nums2 = [4, 5, 6];

// for (let i = 0; i < Nums2.length; i++) {
//   Nums1.push(Nums2[i]);
//   console.log(Nums1);
// }

// console.log(Nums1); // Output: [1, 2, 3, 4, 5, 6]
// console.log("---------------");

// ========= style 2 ============

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

const mergeArray = [...num1, ...num2]; // the spread operator (...)

console.log(mergeArray);
